import * as styles from './FailedStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Lottie from 'lottie-react';
import { IcSadFace } from '@/assets/lottie';

import { useRecoilState, useRecoilValue } from 'recoil';
import { userPayloadState, userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';
import AssignUser from '@/utils/hooks/AssignUser';

const Failed = () => {
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const payload = useRecoilValue(userPayloadState);
  const navigate = useNavigate();

  const handleReassign = () => {
    setUserStatus({ ...UserStatus, status: 'booking' });

    AssignUser({ payload, navigate, setUserStatus }).catch((error: Error) =>
      console.error('Failed to submit user info:', error),
    );
  };
  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <Header />
        <styles.LottieSection>
          <Lottie animationData={IcSadFace} />
        </styles.LottieSection>
        <styles.IconDescription>
          호출 가능한
          <br />
          택시가 없어요
        </styles.IconDescription>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          다시 호출 하시려면
          <br />
          아래 버튼을 눌러주세요
        </styles.CallBtnDescription>
        <Button
          fontSize="x-large"
          width="100%"
          text="택시 다시 호출하기"
          onClick={handleReassign}
        />
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Failed;
