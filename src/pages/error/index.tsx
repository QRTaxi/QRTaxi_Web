import * as styles from './ErrorStyle';
import { theme } from '@/styles/theme';
import Button from '@/components/common/Button';
import Lottie from 'lottie-react';
import { IcCancelled } from '@/assets/lottie';

import { useRecoilState, useRecoilValue } from 'recoil';
import { userPayloadState, userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';

const Error = ({
  error,
}: {
  error: {
    detail: string;
    error?: [string];
  };
}) => {
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const payload = useRecoilValue(userPayloadState);
  const navigate = useNavigate();

  const handleReassign = () => {
    setUserStatus({ ...UserStatus, status: 'booking' });
    navigate(`/booking/${payload.hashed_qr_id}`);
  };

  return (
    <styles.ErrorWrapper>
      <styles.FirstSection>
        <styles.LottieSection>
          <Lottie animationData={IcCancelled} loop={false} />
        </styles.LottieSection>
        <styles.TextSection>
          <styles.TitleText>{error.detail}</styles.TitleText>
          <styles.BodyTextArea>
            <p>{error?.error}</p>
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
    </styles.ErrorWrapper>
  );
};

export default Error;
