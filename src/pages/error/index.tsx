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
  error?: {
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

  const handleDefaultError = () => {
    navigate('/');
  };

  return (
    <styles.ErrorWrapper>
      <styles.FirstSection>
        <styles.LottieSection>
          <Lottie animationData={IcCancelled} loop={false} />
        </styles.LottieSection>
        <styles.TextSection>
          <styles.TitleText>
            {error ? error.detail : '잘못된 접근입니다'}
          </styles.TitleText>
          <styles.BodyTextArea>
            <p>{error ? error?.error : '다시 시도해주세요.'}</p>
          </styles.BodyTextArea>
        </styles.TextSection>
      </styles.FirstSection>
      <styles.SecondSection>
        <Button
          text={error ? '택시 다시 호출하기' : '처음으로 돌아가기'}
          color={theme.colors.QT_Color_White}
          backgroundColor={theme.colors.QT_Color_Orange.primary}
          padding="1rem"
          fontSize="1.6rem"
          borderRadius="1rem"
          width="100%"
          onClick={error ? handleReassign : handleDefaultError}
        />
      </styles.SecondSection>
    </styles.ErrorWrapper>
  );
};

export default Error;
