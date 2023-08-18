/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  LogoSymbolBlack,
  LogoWordmarkOrange,
  LogoLife,
  CaptureBooking,
  CaptureFinish,
  CaptureRiding,
  CaptureSuccess,
  CaptureWaiting,
} from '@/assets/images';
import * as styles from './LandingStyle';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import {
  IcLandingTaxi1,
  IcLandingTaxi2,
  IcArrowDown,
  IcFingerClick,
  IcReadingQR,
} from '@/assets/lottie';

const Landing = () => {
  const navigate = useNavigate();

  const handleNewAssign = () => {
    navigate('/booking/WvVRJ45LkK');
  };

  return (
    <styles.LandingWrapper>
      <styles.FirstSection style={{ justifyContent: 'center' }}>
        <LogoWordmarkOrange />
      </styles.FirstSection>
      <styles.FirstSection style={{ marginTop: '0.5rem' }}>
        <styles.CamBtnDescription
          style={{
            color: '#FF8A00',
            marginBottom: '3rem',
            marginLeft: '3.6rem',
          }}
        >
          QR코드로 한 번에 ! 큐택
        </styles.CamBtnDescription>
      </styles.FirstSection>
      <styles.SecondSection>
        <styles.CameraButton
          onClick={handleNewAssign}
          style={{ marginBottom: '5rem' }}
        >
          <LogoSymbolBlack />
        </styles.CameraButton>
        <styles.CamBtnDescription style={{ color: '#FF8A00' }}>
          큐택 사용법을 알고싶으시다면
          <br />
          아래로 내려보세요 !
        </styles.CamBtnDescription>
        <styles.LottieSection style={{ marginTop: '0.5rem' }}>
          <Lottie animationData={IcArrowDown} loop={false} />
        </styles.LottieSection>
      </styles.SecondSection>
      <styles.SecondSection style={{ gap: '5rem' }}>
        <LogoLife />
        <styles.Contents style={{ color: '#FF8A00' }}>
          <h1>Part 1 큐택으로 택시를 호출하는 방법</h1>
        </styles.Contents>
      </styles.SecondSection>
      <styles.SecondSection>
        <styles.CamBtnDescription style={{ color: '#FF8A00' }}>
          Step 1
          <br />
          카메라를 켜 QR 코드를 인식해주세요 !
        </styles.CamBtnDescription>
        <styles.LottieSection>
          <Lottie animationData={IcReadingQR} />
        </styles.LottieSection>
        <styles.CamBtnDescription style={{ color: '#FF8A00' }}>
          Step 2
          <br />
          지금 어디인지 입력할 필요 없어요 !
          <br />
          기사님과 연락할 전화번호만 입력하고 호출하기를 눌러주세요
        </styles.CamBtnDescription>
        <styles.LottieSection>
          <Lottie animationData={IcFingerClick} />
        </styles.LottieSection>
        <>
          <styles.CamBtnDescription style={{ color: '#FF8A00' }}>
            Step 3
            <br />
            그럼 편안한 여행 되세요 😉
          </styles.CamBtnDescription>
        </>
      </styles.SecondSection>
    </styles.LandingWrapper>
  );
};

export default Landing;
