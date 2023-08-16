import UserApi from '@/utils/api/user';
import { NavigateFunction } from 'react-router-dom';

let socket: WebSocket | null = null;

export function closeWebSocket() {
  if (socket !== null) {
    socket.close();
    socket = null;
  }
}

function openWebSocket(ws_url: string) {
  socket = new WebSocket(ws_url);
  return socket;
}

function switchRoutesByStatus(status: string, navigate: NavigateFunction) {
  switch (status) {
    case 'waiting':
      console.log(`택시기사 배정이 시작되었습니다: ${status}`);
      navigate('/waiting');
      break;

    case 'success':
      console.log(`택시기사 배정이 완료되었습니다: ${status}`);
      navigate('/success');
      break;

    case 'riding':
      console.log(`사용자가 택시에 탑승하였습니다: ${status}`);
      navigate('/riding');
      break;

    case 'failed':
      console.log(`택시 배정에 실패했습니다: ${status}`);
      navigate('/failed');
      closeWebSocket();
      break;

    case 'finish':
      console.log(`운행이 종료되었습니다: ${status}`);
      navigate('/finish');
      closeWebSocket();
      break;

    case 'cancel':
      console.log(`성공적으로 호출을 취소했습니다: ${status}`);
      navigate('/cancel');
      closeWebSocket();
      break;

    default:
      console.error(`Invalid message status : ${status}`);
      break;
  }
}

async function CheckStatusChange(id: number, navigate: NavigateFunction) {
  const response = await UserApi.postCheckStatus({ assign_id: id });

  if ('status' in response) {
    const { status } = response;
    if (
      !window.location.pathname.includes(status) &&
      !['failed', 'finish', 'cancel'].includes(status)
    ) {
      // 현재 라우트 pathname과 실제 상태가 일치하지 않고, 배정실패/하차/호출취소가 아닌 상태에서만 리다이렉션 발생
      console.log(
        `서버 상태와 클라이언트 상태 간 불일치가 감지되었습니다. ${status} 라우트로 이동합니다.`,
      );
      switchRoutesByStatus(status, navigate);
    } else
      console.log(
        '서버 상태와 클라이언트 상태 간 불일치가 없으므로 재연결을 시도하지 않습니다.',
      );
  } else {
    throw new Error(response.detail);
  }
}

const handleVisibilityChange = (
  ws_url: string,
  id: number,
  navigate: NavigateFunction,
) => {
  if (document.hidden) {
    console.log('background');
  } else {
    console.log('now visible');
    // 기존 소켓이 연결 상태였다가 화면 꺼짐으로 인해 끊어진 상태.
    // id값이 변하지 않았고 플로우가 끊긴 것이 아니니 3. 기존 id 연결 회복시켜야 함
    if (!socket) {
      openWebSocket(ws_url);
      CheckStatusChange(id, navigate).catch((error: Error) =>
        console.error(error),
      );
    } else console.log(`소켓 연결이 살아있는 상태입니다. ${socket.url}`);
  }
};

export const initWebSocket = (id: number, navigate: NavigateFunction) => {
  const port_num = 443;
  const ws_url = `wss://${
    import.meta.env.VITE_BASE_URL
  }:${port_num}/ws/call/${id}/`;

  const visibilityListener = () => {
    handleVisibilityChange(ws_url, id, navigate);
  };

  if (!socket) {
    // 1. 새로운 id로 맨 처음 연결하는 상태
    console.log(id);
    socket = openWebSocket(ws_url);
  }

  socket.onopen = () => {
    console.log('websocket connected');
    // 화면 꺼짐/켜짐 상태 감지
    document.addEventListener('visibilitychange', visibilityListener);
  };

  socket.onmessage = (event: MessageEvent) => {
    const { type } = JSON.parse(event.data as string) as { type: string };
    switchRoutesByStatus(type, navigate);
  };

  socket.onerror = (error: Event) => {
    console.log(error);
  };

  socket.onclose = (event: CloseEvent) => {
    let retry = 0;
    if (!event.wasClean) {
      console.log(
        `웹소켓 서버가 죽었거나 네트워크 장애로 인해 연결이 종료되었습니다(code=${event.code}).`,
      );
      if (retry < 3) {
        retry += 1;
        setTimeout(() => {
          openWebSocket(ws_url);
          console.log(`[${retry}] 접속 재시도 ...`);
        }, 1000 * retry);
      } else {
        console.log(
          '웹소켓 서버에 접속할 수 없습니다. 사이트 홈으로 이동합니다.',
        );
        navigate('/');
      }
    } else {
      console.log(`연결이 정상적으로 종료되었습니다(code=${event.code})`);
      document.removeEventListener('visibilitychange', visibilityListener); // 정상적으로 연결이 종료되었을 때만 화면 꺼짐/켜짐 상태 감지 이벤트리스너 제거
    }
  };
};
