import * as styles from './CancelStyle';
import { theme } from '@/styles/theme';
import Button from '@/components/common/Button';
import Lottie from 'lottie-react';
import { IcCancelled } from '@/assets/lottie';

import { useRecoilState, useRecoilValue } from 'recoil';
import { userPayloadState, userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const payload = useRecoilValue(userPayloadState);
  const navigate = useNavigate();

  const handleReassign = () => {
    setUserStatus({ ...UserStatus, status: 'booking' });
    navigate(`/booking/${payload.hashed_qr_id}`);
  };

  return (
    <styles.CancelWrapper>
      <styles.FirstSection>
        <styles.LottieSection>
          <Lottie animationData={IcCancelled} loop={false} />
        </styles.LottieSection>
        <styles.TextSection>
          <styles.TitleText>호출이 취소되었어요</styles.TitleText>
          <styles.BodyTextArea>
            <p>
              다시 호출하시려면
              <br />
              아래 버튼을 눌러주세요
            </p>
          </styles.BodyTextArea>
        </styles.TextSection>
      </styles.FirstSection>
      <styles.SecondSection>
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
      </styles.SecondSection>
    </styles.CancelWrapper>
  );
};

export default Cancel;
