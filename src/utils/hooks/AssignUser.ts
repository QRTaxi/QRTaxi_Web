import UserApi from '../api/user';
import { initWebSocket } from '../api/webSocket';
import { UserInfoPayload, UserStatus } from '../types/user';

import { useSetRecoilState } from 'recoil';
import { userStatus } from '../recoil/store';

interface AssignUserProps {
  payload: UserInfoPayload;
  navigate: (path: string) => void;
}

const AssignUser = async ({ payload, navigate }: AssignUserProps) => {
  const setUserStatus = useSetRecoilState(userStatus);
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
