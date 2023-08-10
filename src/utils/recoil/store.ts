import { atom, selector } from 'recoil';
import {
  UserInfoPayload,
  UserLocationResponse as UserLocationInfo,
  UserQRID,
  UserStatus,
} from '../types/user';
import UserApi from '../api/user';

export const userQRIDState = atom<UserQRID>({
  key: 'userQRIDState',
  default: null,
});

export const userPayloadState = atom<UserInfoPayload>({
  key: 'userPayloadState',
  default: {
    hashed_qr_id: '',
    user_phone: '',
  },
});

export const userLocationInfoState = selector<UserLocationInfo | null>({
  key: 'userLocationInfoState',
  get: async ({ get }) => {
    const info = get(userQRIDState);
    if (info) {
      const response = await UserApi.getUserLocation(info);
      return response;
    }
    return null;
  },
});

export const userStatus = atom<UserStatus>({
  key: 'userState',
  default: {
    hashed_assign_id: '',
    id: 0,
    status: 'booking',
  },
});
