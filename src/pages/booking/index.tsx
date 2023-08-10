import { useLayoutEffect, useState } from 'react';

import * as styles from './BookingStyle';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

import {
  Params,
  useLoaderData,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  userPayloadState,
  userQRIDState,
  userStatus,
} from '@/utils/recoil/store';
import { UserLocationResponse, UserQRID } from '@/utils/types/user';
import UserApi from '@/utils/api/user';
import AssignUser from '@/utils/hooks/AssignUser';

export async function Loader({ params }: { params: Params }) {
  return UserApi.getUserLocation(params.qrID as string);
}

const Booking = () => {
  const userLocationInfo = useLoaderData() as UserLocationResponse;
  const { qrID } = useParams();
  const [userQRID, setUserQRID] = useRecoilState<UserQRID>(userQRIDState);
  const [phoneNum, setPhoneNum] = useState<string>();
  const setUserStatus = useSetRecoilState(userStatus);
  const setUserPayload = useSetRecoilState(userPayloadState);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (qrID) {
      setUserQRID(qrID);
    }
  }, []);

  const Validation = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 유효성 검사에서 구현해야할 것들:
    // 1. 11자가 모두 입력됐는지
    // 2. 11자 이상 입력하면 막히게 해야 함
    // 3. 서버에서 제시한대로 정규화해서 보내줘야함(Post)
    const num = e.target.value;
    console.log(num);
    setPhoneNum(num);
    if (phoneNum && phoneNum.toString().length == 11) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    const payload = {
      hashed_qr_id: userQRID as string,
      user_phone: phoneNum as string,
    };
    setUserPayload(payload);

    AssignUser({ payload, navigate, setUserStatus }).catch((error: Error) => {
      console.error('Failed to submit user info:', error);
    });
  };

  return (
    <styles.BookingWrapper>
      <styles.FirstSection>
        <Header />
      </styles.FirstSection>
      <styles.SecondSection>
        <styles.SecondContent>
          <p>나의 현재 위치는</p>
          <h1>{userLocationInfo.description}</h1>
        </styles.SecondContent>
        <styles.SecondContent>
          <p>전화번호를 입력해주세요.</p>
          <input
            placeholder="010-1234-5678"
            type="number"
            onChange={Validation}
          />
        </styles.SecondContent>
      </styles.SecondSection>
      <styles.ButtonSection>
        <Button
          text="호출하기"
          onClick={() => {
            handleSubmit();
          }}
        />
      </styles.ButtonSection>
    </styles.BookingWrapper>
  );
};

export default Booking;
