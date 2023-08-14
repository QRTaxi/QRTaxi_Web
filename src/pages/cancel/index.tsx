import * as styles from './CancelStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Lottie from 'lottie-react';
import { IcCancelled } from '@/assets/lottie';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userPayloadState, userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/styles/theme';

const Cancel = () => {
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const payload = useRecoilValue(userPayloadState);
  const navigate = useNavigate();

  const handleReassign = () => {
    setUserStatus({ ...UserStatus, status: 'booking' });
    navigate(`/booking/${payload.hashed_qr_id}`);
  };

  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <Header />
        <styles.LottieSection>
          <Lottie animationData={IcCancelled} loop={false} />
        </styles.LottieSection>
        <styles.IconDescription>호출이 취소되었어요</styles.IconDescription>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          다시 호출하시려면
          <br />
          아래 버튼을 눌러주세요
        </styles.CallBtnDescription>
        <Button
          text="택시 다시 호출하기"
          color={theme.colors.QT_Color_White}
          backgroundColor={theme.colors.QT_Color_Orange.primary}
          padding="1rem"
          fontSize="1.6rem"
          borderRadius="1rem"
          width="100%"
          onClick={handleReassign}
        />
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Cancel;
