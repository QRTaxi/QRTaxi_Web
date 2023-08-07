export type UserQRID = string | null;

export interface UserLocationResponse {
  place: string;
  description: string;
}

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

export type UserAssignID = UserInfoResponse['hashed_assign_id'];

export type DriverInfoPayload = UserAssignID;

export interface DriverInfoResponse {
  id: number;
  driver_id: {
    id: number;
    name: string;
    taxi_num: string;
    car_type: string;
  };
  estimated_time: string;
}

export type CancelBookingPayload = UserAssignID;

export interface CancelBookingResponse {
  detail: string;
}
export interface UserStatus {
  hashed_assign_id: UserAssignID;
  id: UserInfoResponse['id'];
  status:
    | 'booking'
    | 'waiting'
    | 'success'
    | 'riding'
    | 'failed'
    | 'finish'
    | 'cancel';
}