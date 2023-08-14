import * as styles from './FinishStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
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
        <Header />
        <styles.LottieSection>
          <Lottie animationData={IcHighFive} />
        </styles.LottieSection>
        <styles.IconDescription>
          운행이
          <br />
          종료되었습니다
        </styles.IconDescription>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          새로 호출 하시려면
          <br />
          아래 버튼을 눌러주세요
        </styles.CallBtnDescription>
        <Button
          text="다른 택시 호출하기"
          color={theme.colors.QT_Color_White}
          backgroundColor={theme.colors.QT_Color_Orange.primary}
          padding="1rem"
          fontSize="1.6rem"
          borderRadius="1rem"
          width="100%"
          onClick={handleNewAssign}
        />
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Finish;
