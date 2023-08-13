import {
  CancelBookingPayload,
  UserLocationResponse,
  UserInfoPayload,
  UserInfoResponse,
  UserQRID,
  DriverInfoResponse,
  DriverInfoPayload,
  CancelBookingResponse,
  CheckStatusPayload,
  CheckStatusResponse,
  CheckStatusFailedResponse,
  UserInfoFailedResponse,
  DriverInfoFailedResponse,
  CancelBookingFailedResponse,
} from '@/utils/types/user';
import client from '../axios';
import { AxiosError, AxiosResponse } from 'axios';

class UserApi {
  static async getUserLocation(qrID: UserQRID) {
    try {
      const response: AxiosResponse<UserLocationResponse> = await client.get(
        `/call/main/${qrID}`,
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<UserLocationResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      }
    }
  }

  static async postUserInfo(payload: UserInfoPayload) {
    try {
      const response: AxiosResponse<UserInfoResponse> = await client.post(
        `/call/main/${payload.hashed_qr_id}`,
        payload,
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<UserInfoFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      }
    }
  }

  static async getDriverInfo(hashed_assign_id: DriverInfoPayload) {
    try {
      const response: AxiosResponse<DriverInfoResponse> = await client.get(
        `/call/success/${hashed_assign_id}`,
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<DriverInfoFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      }
    }
  }

  static async postCancelBooking(payload: CancelBookingPayload) {
    try {
      const response: AxiosResponse<CancelBookingResponse> = await client.post(
        `/call/cancel/`,
        payload,
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<CancelBookingFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      }
    }
  }

  static async postCheckStatus(payload: CheckStatusPayload) {
    try {
      const response: AxiosResponse<CheckStatusResponse> = await client.post(
        `/call/status/`,
        payload,
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<CheckStatusFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      }
    }
  }
}

export default UserApi;
