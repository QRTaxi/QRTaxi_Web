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
} from '@/utils/types/user';
import client from '../axios';
import { AxiosError, AxiosResponse, isAxiosError } from 'axios';

class UserApi {
  static async getUserLocation(qrID: UserQRID) {
    try {
      const response = await client.get<UserLocationResponse>(
        `/call/main/${qrID}`,
      );
      return response.data;
    } catch (error) {
      if (isAxiosError<UserLocationResponse>(error)) {
        console.log(error.message);
        return null;
      }
      console.log('Unexpected error', error);
      return null;
    }
  }

  static async postUserInfo(payload: UserInfoPayload) {
    try {
      const response = await client.post<UserInfoResponse>(
        `/call/main/${payload.hashed_qr_id}`,
        payload,
      );
      return response.data;
    } catch (error) {
      if (isAxiosError<UserInfoResponse>(error)) {
        console.log(error.message);
        return null;
      }
      console.log('Unexpected error', error);
      return null;
    }
  }

  static async getDriverInfo(hashed_assign_id: DriverInfoPayload) {
    try {
      const response = await client.get<DriverInfoResponse>(
        `/call/success/${hashed_assign_id}`,
      );
      return response.data;
    } catch (error) {
      if (isAxiosError<DriverInfoResponse>(error)) {
        console.log(error.message);
        return null;
      }
      console.log('Unexpected error', error);
      return null;
    }
  }

  static async postCancelBooking(payload: CancelBookingPayload) {
    try {
      const response = await client.post<CancelBookingResponse>(
        `/call/cancel/`,
        payload,
      );
      return response.data;
    } catch (error) {
      if (isAxiosError<CancelBookingResponse>(error)) {
        console.log(error.message);
        return null;
      }
      console.log('Unexpected error', error);
      return null;
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
