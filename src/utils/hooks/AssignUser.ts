import UserApi from '../api/user';
import { initWebSocket } from '../api/webSocket';
import { UserInfoPayload, UserStatus } from '@/utils/types/user';

interface AssignUserProps {
  payload: UserInfoPayload;
  navigate: (path: string) => void;
  setUserStatus: (arg: UserStatus) => void;
}

const AssignUser = async ({
  payload,
  navigate,
  setUserStatus,
}: AssignUserProps) => {
  const response = await UserApi.postUserInfo(payload);

  if (response) {
    const { hashed_assign_id, id, status } = response;
    const data: UserStatus = {
      hashed_assign_id,
      id,
      status: status as UserStatus['status'],
    };
    setUserStatus(data);
    console.log(data);
    initWebSocket(data.id, navigate);
    navigate('/waiting');
  }
};
export default AssignUser;
