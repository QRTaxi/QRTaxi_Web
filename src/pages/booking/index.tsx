import { useLayoutEffect, useState, useEffect } from 'react';

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
  const [userPayload, setUserPayload] = useRecoilState(userPayloadState);
  const [phoneNum, setPhoneNum] = useState<string | undefined>(
    userPayload.user_phone,
  );
  const setUserStatus = useSetRecoilState(userStatus);
  const [isValidPhoneNum, setIsValidPhoneNum] = useState<boolean>(false);

  const navigate = useNavigate();
  useEffect(() => {
    // 페이지가 처음 로드될 때 실행될 코드 작성
    if (userPayload.user_phone) {
      let formattedNum = userPayload.user_phone;
      if (formattedNum.length === 10) {
        formattedNum = `${formattedNum.slice(0, 3)}-${formattedNum.slice(
          3,
          6,
        )}-${formattedNum.slice(6)}`;
      } else if (formattedNum.length === 11) {
        formattedNum = `${formattedNum.slice(0, 3)}-${formattedNum.slice(
          3,
          7,
        )}-${formattedNum.slice(7)}`;
      }
      setPhoneNum(formattedNum);
      setIsValidPhoneNum(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (qrID) {
      setUserQRID(qrID);
    }
  }, []);

  const Validation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value;

    let formattedNum = num.replace(/[^\d]/g, ''); // 숫자 이외의 문자 제거
    const hyphenedNum = formattedNum.replace(/-/g, ''); // 순수 숫자만

    if (hyphenedNum.length < 4) {
      formattedNum = hyphenedNum;
    } else if (hyphenedNum.length < 8) {
      formattedNum = `${hyphenedNum.slice(0, 3)}-${hyphenedNum.slice(3)}`;
    } else if (hyphenedNum.length < 11) {
      formattedNum = `${hyphenedNum.slice(0, 3)}-${hyphenedNum.slice(
        3,
        7,
      )}-${hyphenedNum.slice(7)}`;
    } else {
      formattedNum = `${hyphenedNum.slice(0, 3)}-${hyphenedNum.slice(
        3,
        7,
      )}-${hyphenedNum.slice(7, 11)}`;
    }

    setPhoneNum(formattedNum);

    const isValid = formattedNum.length === 13 && formattedNum.startsWith('01');
    setIsValidPhoneNum(isValid);
  };

  const handleSubmit = () => {
    // 서버로 전송하기 전에 '-'를 제거한 숫자만 포함된 전화번호로 변환
    const normalizedPhoneNum = phoneNum?.replace(/-/g, '');
    const payload = {
      hashed_qr_id: userQRID as string,
      user_phone: normalizedPhoneNum as string,
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
            type="text"
            onChange={Validation}
            value={phoneNum || ''} // 재호출이라 phoneNum이 있을 경우 해당 값을 표시
          />
          {phoneNum &&
            (isValidPhoneNum ? (
              <p style={{ color: 'green' }}>유효한 전화번호입니다 ✅</p>
            ) : (
              <p style={{ color: 'red' }}>유효하지 않은 전화번호입니다 ❌</p>
            ))}
        </styles.SecondContent>
      </styles.SecondSection>
      <styles.ButtonSection>
        <Button
          text="호출하기"
          onClick={() => {
            handleSubmit();
          }}
          disabled={!isValidPhoneNum}
        />
      </styles.ButtonSection>
    </styles.BookingWrapper>
  );
};

export default Booking;
