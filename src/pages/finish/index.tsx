import * as styles from './FinishStyle';
import Button from '@/components/common/Button';
import Lottie from 'lottie-react';
import { IcHighFive } from '@/assets/lottie';

import { userPayloadState, userQRIDState } from '@/utils/recoil/store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/styles/theme';

const Finish = () => {
  const setUserQRIDState = useSetRecoilState(userQRIDState);
  const [userPayload, setUserPayload] = useRecoilState(userPayloadState);
  const navigate = useNavigate();

  const handleNewAssign = () => {
    setUserQRIDState(null);
    setUserPayload({ ...userPayload, hashed_qr_id: '' });
    navigate('/');
  };

  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <styles.LottieSection>
          <Lottie animationData={IcHighFive} loop={false} />
        </styles.LottieSection>
        <styles.TextSection>
          <styles.TitleText>운행이 종료되었어요</styles.TitleText>
          <styles.BodyTextArea>
            <p>
              새롭게 택시를 호출하시려면
              <br />
              아래 버튼을 눌러주세요
            </p>
          </styles.BodyTextArea>
        </styles.TextSection>
      </styles.FirstSection>
      <styles.SecondSection>
        <Button
          text="QR코드 스캔하기"
          color={theme.colors.QT_Color_White}
          backgroundColor={theme.colors.QT_Color_Orange.primary}
          padding="1rem"
          fontSize="1.6rem"
          borderRadius="1rem"
          width="100%"
          onClick={handleNewAssign}
        />
      </styles.SecondSection>
    </styles.FinishWrapper>
  );
};

export default Finish;
