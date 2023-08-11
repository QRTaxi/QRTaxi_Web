import { useState, useRef } from 'react';
import { LogoSymbolWhite } from '@/assets/images';
import * as styles from './LandingStyle';

const Landing = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCameraButtonClick = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then(userStream => {
        setStream(userStream);
        if (videoRef.current) {
          videoRef.current.srcObject = userStream;
        }
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
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
      <styles.CameraButton onClick={handleCameraButtonClick}>
        <LogoSymbolWhite />
      </styles.CameraButton>
      <styles.CamBtnDescription>
        큐택을 이용하시려면
        <br />
        버튼을 클릭해 QR코드를 스캔해보세요!
      </styles.CamBtnDescription>
      {stream && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ display: 'block' }}
        />
      )}
    </styles.LandingWrapper>
  );
};

export default Landing;
