import * as styles from './LandingStyle';

import { useNavigate } from 'react-router-dom';

import Lottie from 'lottie-react';
import {
  IcArrowDown,
  IcFingerClick,
  IcLandingTaxi1,
  IcReadingQR,
} from '@/assets/lottie';
import {
  LogoSymbolBlack,
  LogoWordmarkOrange,
  LogoLife,
} from '@/assets/images/logo';
import {
  CaptureBooking,
  CaptureIOSStep2,
  CaptureIOSStep4,
  CaptureAndroidStep2,
  CaptureAndroidStep4,
} from '@/assets/images/capture';

const Landing = () => {
  const navigate = useNavigate();

  const handleNewAssign = () => {
    navigate('/booking/WvVRJ45LkK');
  };

  return (
    <styles.LandingWrapper>
      <styles.FirstSection>
        <LogoWordmarkOrange />
        <styles.Subtitle>QR코드로 한 번에! 큐택</styles.Subtitle>
      </styles.FirstSection>

      <styles.SecondSection>
        <styles.CameraButton onClick={handleNewAssign}>
          <LogoSymbolBlack />
        </styles.CameraButton>
        <styles.CamBtnDescription>
          큐택 사용법을 알고싶으시다면
          <br />
          아래로 내려보세요!
        </styles.CamBtnDescription>

        <styles.GuideDescription>
          <styles.GuideTitle>🚨 테스트 가이드</styles.GuideTitle>
          <styles.GuideBody>
            1. 원활한 테스트를 위해서 손님(웹)과 기사(앱)은{' '}
            <span>꼭 다른 디바이스에서</span> 테스트 해주세요.
          </styles.GuideBody>
          <styles.GuideBody>
            2. <span>기사앱에서 로그인</span>을 한 뒤,{' '}
            <span>&apos;운행시작&apos;</span>을 눌러주세요.
          </styles.GuideBody>
          <styles.GuideBody>
            3. 원래는 지정된 장소의 QR을 카메라로 스캔해야 하나,{' '}
            <span>
              웹 브라우저 정책상 웹에서 바로 카메라로 이동할 수 없어요.
            </span>
          </styles.GuideBody>
          <styles.GuideBody>
            4. 따라서 모바일일 경우{' '}
            <span>카메라로 이동해서 발표자료의 QR을 스캔</span>하거나{' '}
            <span>위의 QR 버튼을 눌러주세요.</span>
          </styles.GuideBody>
          <styles.GuideBody>
            5. <span>데스크톱으로 테스트할 경우</span> 위의 QR을 눌러주세요.
          </styles.GuideBody>
          <styles.GuideBody>
            <div>
              6. 꼭 손님(웹)과 기사(앱)은 다른 디바이스에서 테스트해주세요!
            </div>
          </styles.GuideBody>
        </styles.GuideDescription>
        <Lottie animationData={IcArrowDown} />
      </styles.SecondSection>

      <styles.ThirdSection>
        <styles.StepBlock>
          <styles.LottieSection>
            <LogoLife />
          </styles.LottieSection>
          <styles.ThirdHeader>
            Part 1. 큐택으로
            <br />
            택시를 호출하는 방법
          </styles.ThirdHeader>
        </styles.StepBlock>

        <styles.StepBlock>
          <styles.StepDescription>
            <span>Step 1.</span>
            <br />
            <styles.bodyText>
              카메라를 켜 QR 코드를 인식해주세요!
            </styles.bodyText>
          </styles.StepDescription>
          <Lottie animationData={IcReadingQR} />
        </styles.StepBlock>
        <styles.StepBlock>
          <styles.StepDescription>
            <span>Step 2.</span>
            <br />
            <styles.bodyText>
              지금 어디인지 입력할 필요 없어요!
              <br />
              기사님과 연락할 전화번호만 입력하고
              <br />
              호출하기를 눌러주세요.
            </styles.bodyText>
          </styles.StepDescription>
          <styles.LottieSection>
            <img src={CaptureBooking} alt="booking-capture" />
            <Lottie animationData={IcFingerClick} />
          </styles.LottieSection>
        </styles.StepBlock>
        <styles.StepBlock>
          <styles.StepDescription>
            <span>Step 3.</span>
            <br />
            <styles.bodyText>
              조금만 기다리시면 기사님이 도착해요.
              <br />
              기사님께 직접 목적지를 말씀드리고,
              <br />
              하차 시에도 요금을 직접 지불하시면 됩니다. 😉
            </styles.bodyText>
          </styles.StepDescription>

          <styles.LottieTaxiSection>
            <Lottie animationData={IcLandingTaxi1} />
          </styles.LottieTaxiSection>

          <styles.StepDescription>
            <styles.bodyText>그럼 안전한 여행되세요!</styles.bodyText>
          </styles.StepDescription>
        </styles.StepBlock>
      </styles.ThirdSection>
      <styles.FourthSection>
        <styles.StepBlock>
          <styles.ThirdHeader>
            Part 2. 모바일 환경에서
            <br />
            큐택을 원활히 즐기는 방법
          </styles.ThirdHeader>
        </styles.StepBlock>
        <styles.StepBlock>
          <styles.StepDescription>
            <span>iOS(아이폰)</span>
          </styles.StepDescription>
          <styles.HelpImgSection>
            <styles.StepBlock>
              <styles.HelpDescription>
                1. 사파리의 &apos;공유하기&apos; 클릭 후,
                <br />
                &apos;홈 화면에 추가&apos;를 클릭해 큐택을 홈 화면에 추가하세요.
              </styles.HelpDescription>
              <styles.IOS1LottieSection>
                <img src={CaptureIOSStep2} alt="booking-capture" />
                <Lottie animationData={IcFingerClick} />
              </styles.IOS1LottieSection>
            </styles.StepBlock>
            <styles.StepBlock>
              <styles.HelpDescription>
                2. 홈 화면의 큐택 앱을 실행하고,
                <br />
                전화번호를 입력한 뒤 알림 허용 팝업에 허용을 눌러주세요!
              </styles.HelpDescription>
              <styles.IOS2LottieSection>
                <img src={CaptureIOSStep4} alt="booking-capture" />
                <Lottie animationData={IcFingerClick} />
              </styles.IOS2LottieSection>
            </styles.StepBlock>
          </styles.HelpImgSection>
        </styles.StepBlock>
        <styles.StepBlock>
          <styles.StepDescription>
            <span>안드로이드</span>
          </styles.StepDescription>
          <styles.HelpImgSection>
            <styles.StepBlock>
              <styles.HelpDescription>
                1. 브라우저의 옵션 버튼에서
                <br />
                &apos;앱 설치&apos;를 클릭해 큐택을 홈 화면에 추가하세요.
              </styles.HelpDescription>
              <styles.Android1LottieSection>
                <img src={CaptureAndroidStep2} alt="AndroidStep2-capture" />
                <Lottie animationData={IcFingerClick} />
              </styles.Android1LottieSection>
            </styles.StepBlock>
            <styles.StepBlock>
              <styles.HelpDescription>
                2. 홈 화면의 큐택 앱을 실행하고,
                <br />
                전화번호를 입력한 뒤 알림 허용 팝업에 허용을 눌러주세요!
              </styles.HelpDescription>
              <styles.Android2LottieSection>
                <img src={CaptureAndroidStep4} alt="AndroidStep4-capture" />
                <Lottie animationData={IcFingerClick} />
              </styles.Android2LottieSection>
            </styles.StepBlock>
          </styles.HelpImgSection>
        </styles.StepBlock>
      </styles.FourthSection>
    </styles.LandingWrapper>
  );
};

export default Landing;
