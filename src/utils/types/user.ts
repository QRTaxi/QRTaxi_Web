/* getUserLocation */
export type UserQRID = string | null;

export interface UserLocationResponse {
  place: string;
  description: string;
}

/* postUserInfo */
export interface UserInfoPayload {
  hashed_qr_id: string;
  user_phone: string;
}

export interface UserInfoResponse {
  id: number;
  user_phone: string;
  status: string;
  board_at: string;
  qr_id: number;
  driver_id: string | null;
  hashed_assign_id: string;
}

export interface UserInfoFailedResponse {
  detail: string;
  error?: {
    user_phone: [string];
  };
}

/* getDriverInfo */
export type DriverInfoPayload = UserAssignID;

export interface DriverInfoResponse {
  id: number;
  driver_id: {
    id: number;
    name: string;
    taxi_num: string;
    car_type: string;
    driver_phone: string;
  };
  estimated_time: string;
}

export interface DriverInfoFailedResponse {
  detail: string;
  error?: [string];
}

/* postCancelBooking */
export interface CancelBookingPayload {
  assign_id: UserInfoResponse['id'];
}

export interface CancelBookingResponse {
  detail: string;
}

export type CancelBookingFailedResponse = DriverInfoFailedResponse;

/* postCheckStatus */
export type CheckStatusPayload = CancelBookingPayload;

export interface CheckStatusResponse {
  status: string;
}

export type CheckStatusFailedResponse = CancelBookingResponse;

/* Recoil Types */
export type UserAssignID = UserInfoResponse['hashed_assign_id'];

export interface UserStatus {
  hashed_assign_id: UserAssignID;
  id: UserInfoResponse['id'] | null;
  status:
    | 'booking'
    | 'waiting'
    | 'success'
    | 'riding'
    | 'failed'
    | 'finish'
    | 'cancel';
}

/* Firebase Token Types */
export interface FirebaseTokenPayload {
  assign_id: number;
  push_token: string;
}

export interface PushMessage {
  notification: {
    title: string;
    body: string;
  };
  data: {
    status: string;
  };
}
