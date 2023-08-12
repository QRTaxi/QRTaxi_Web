import { UserStatus } from '@/utils/types/user';
import UserApi from '@/utils/api/user';
import { NavigateFunction } from 'react-router-dom';

let socket: WebSocket | null = null;

export function closeWebSocket() {
  if (socket !== null) {
    socket.close();
    socket = null;
  }
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

async function handleVisibilityChange(
  ws_url: string,
  id: UserStatus['id'],
  navigate: NavigateFunction,
) {
  if (document.hidden) {
    console.log('background');
    // 페이지가 백그라운드로 가려질 때 실행할 로직
  } else {
    console.log('now visible');
    // 기존 소켓이 연결 상태였다가 화면 꺼짐으로 인해 끊어진 상태.
    // id값이 변하지 않았고 다시 같은 url로 소켓 연결하면 됨
    if (!socket) {
      socket = new WebSocket(ws_url);
      console.log(
        `동일한 ws_url로 웹소켓이 재연결되었습니다. 연결이 끊어진 공백기간 동안 상태에 변화가 있는지 확인합니다. id=${id}, url=${ws_url}`,
      );

      const response = await UserApi.postCheckStatus({ assign_id: id });

      if ('status' in response) {
        const { status } = response;
        if (!window.location.pathname.includes(status)) {
          // 현재 라우트 pathname과 실제 상태가 일치하지 않으면 리다이렉션 발생
          console.log(
            `서버 상태와 클라이언트 상태 간 불일치가 감지되었습니다. ${status} 라우트로 이동합니다.`,
          );
          switchRoutesByStatus(status, navigate);
        }
      } else {
        throw new Error(response.detail);
      }
    } else console.log(`소켓 연결이 살아있는 상태입니다. ${socket.url}`);
  }
}

export const initWebSocket = (
  id: UserStatus['id'],
  navigate: NavigateFunction,
) => {
  const port_num = 443;
  const ws_url = `wss://${
    import.meta.env.VITE_BASE_URL
  }:${port_num}/ws/call/${id}/`;

  // 화면 꺼짐/켜짐 상태 감지
  document.addEventListener('visibilitychange', () => {
    handleVisibilityChange(ws_url, id, navigate).catch(error =>
      console.error(error),
    );
  });

  if (!socket) {
    console.log(ws_url);
    socket = new WebSocket(ws_url);
  } else {
    if (socket.url !== ws_url) {
      // 다시호출 시 새로운 id로 새 웹소켓 연결
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
    switchRoutesByStatus(type, navigate);
  };

  socket.onerror = (error: Event) => {
    console.log(error);
  };

  socket.onclose = (event: CloseEvent) => {
    if (!event.wasClean) {
      console.log(
        `웹소켓 서버가 죽었거나 네트워크 장애로 인해 연결이 종료되었습니다(code=${event.code}).`,
      );
    } else {
      console.log(`연결이 정상적으로 종료되었습니다(code=${event.code})`);
      document.removeEventListener('visibilitychange', () => {
        handleVisibilityChange(ws_url, id, navigate).catch(error =>
          console.error(error),
        );
      }); // 정상적으로 연결이 종료되었을 때만 화면 꺼짐/켜짐 상태 감지 이벤트리스너 제거
    }
  };
};
