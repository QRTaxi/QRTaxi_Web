import { LogoSymbolWhite } from '@/assets/images';
import * as styles from './LandingStyle';

const Landing = () => {
  const handleCameraAppLaunch = () => {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      // iOS인 경우
      window.location.href = 'photos-redirect://'; // iOS 카메라 어플의 스킴을 사용
    } else if (navigator.userAgent.match(/Android/i)) {
      // Android인 경우
      window.location.href = 'intent://camera#Intent;scheme=package_name;end'; // Android 카메라 어플의 스킴을 사용
    } else {
      console.error('Unsupported platform'); // 지원하지 않는 플랫폼인 경우 에러 메시지 출력
    }
  };

  return (
    <styles.LandingWrapper>
      <styles.FirstSection>
        <styles.Contents>
          <h1>
            QR코드로 한 번에!
            <br />
            큐택
          </h1>
        </styles.Contents>
      </styles.FirstSection>
      <styles.CameraButton onClick={handleCameraAppLaunch}>
        <LogoSymbolWhite />
      </styles.CameraButton>
      <styles.CamBtnDescription>
        큐택을 이용하시려면
        <br />
        버튼을 클릭해 QR코드를 스캔해보세요!
      </styles.CamBtnDescription>
    </styles.LandingWrapper>
  );
};

export default Landing;
