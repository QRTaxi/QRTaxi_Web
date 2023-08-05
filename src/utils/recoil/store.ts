import { atom, selector } from 'recoil';
import {
  UserLocationResponse as UserLocationInfo,
  UserQRID,
  UserStatus,
} from '../types/user';
import UserApi from '../api/user';

export const userQRIDState = atom<UserQRID>({
  key: 'userQRIDState',
  default: null,
});

export const userLocationInfoState = selector<UserLocationInfo | null>({
  key: 'userLocationInfoState',
  get: async ({ get }) => {
    const info = get(userQRIDState);
    if (info) {
      const response = await UserApi.getUserLocation(info);
      return response ? response.data : response;
    }
    return null;
  },
});

export const userStatus = atom<UserStatus>({
  key: 'userState',
  default: 'booking',
});

// export const userStatusState = selector({
//   key: 'userStatusState',
//   get: ({ get }) => {
//     const status = get(userStatus);
//     // status 바뀌는 로직 = 웹소켓
//     if (status === 'waiting') {
//     }
//   },
// });
