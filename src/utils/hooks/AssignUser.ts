import { NavigateFunction } from 'react-router-dom';
import UserApi from '../api/user';
import { initWebSocket } from '../api/webSocket';
import { UserInfoPayload, UserStatus } from '@/utils/types/user';

interface AssignUserProps {
  payload: UserInfoPayload;
  navigate: NavigateFunction;
  setUserStatus: (arg: UserStatus) => void;
}

const AssignUser = async ({
  payload,
  navigate,
  setUserStatus,
}: AssignUserProps) => {
  const response = await UserApi.postUserInfo(payload);

  if ('status' in response) {
    const { hashed_assign_id, id, status } = response;
    const data: UserStatus = {
      hashed_assign_id,
      id,
      status: status as UserStatus['status'],
    };
    setUserStatus(data);
    initWebSocket(data.id as number, navigate);
    navigate('/waiting');
  }
};
export default AssignUser;
