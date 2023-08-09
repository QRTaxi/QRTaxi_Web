import { UserStatus } from '../types/user';

let socket: WebSocket | null = null;

export function closeWebSocket() {
  if (socket !== null) {
    socket.close();
    socket = null;
  }
}

export const initWebSocket = (
  id: UserStatus['id'],
  navigate: (path: string) => void,
) => {
  const port_num = 443;
  const ws_url = `wss://${
    import.meta.env.VITE_BASE_URL
  }:${port_num}/ws/call/${id}/`;

  if (!socket) {
    console.log(ws_url);
    socket = new WebSocket(ws_url);
  } else {
    if (socket.url !== ws_url) {
      console.log('기존 소켓과의 연결을 끊고 새로운 소켓을 연결합니다.');
      closeWebSocket();
      socket = new WebSocket(ws_url);
    }
  }
  socket.onopen = () => {
    console.log('websocket connected');
  };

  socket.onmessage = (event: MessageEvent) => {
    const { type } = JSON.parse(event.data as string) as { type: string };
    switch (type) {
      case 'call.assign.waiting':
        console.log(`택시기사 배정이 시작되었습니다: ${type}`);
        navigate('/waiting');
        break;

      case 'call.assign.success':
        console.log(`택시기사 배정이 완료되었습니다: ${type}`);
        navigate('/success');
        break;

      case 'call.assign.riding':
        console.log(`사용자가 택시에 탑승하였습니다: ${type}`);
        navigate('/riding');
        break;

      case 'call.assign.failed':
        console.log(`택시 배정에 실패했습니다: ${type}`);
        navigate('/failed');
        closeWebSocket();
        break;

      case 'call.assign.finish':
        console.log(`운행이 종료되었습니다: ${type}`);
        navigate('/finish');
        closeWebSocket();
        break;

      case 'call.assign.cancel':
        console.log(`성공적으로 호출을 취소했습니다: ${type}`);
        navigate('/cancel');
        closeWebSocket();
        break;

      default:
        console.error(`Invalid message type : ${type}`);
        break;
    }
  };

  socket.onerror = (error: Event) => {
    console.log(error);
  };

  socket.onclose = (event: CloseEvent) => {
    if (!event.wasClean) {
      console.log(
        '웹소켓 서버가 죽었거나 네트워크 장애로 인해 연결이 종료되었습니다.',
      );
    }
    console.log(
      `연결이 정상적으로 종료되었습니다(code=${event.code} reason=${event.reason})`,
    );
  };
};
