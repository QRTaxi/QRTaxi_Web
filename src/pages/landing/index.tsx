import { LogoSymbolWhite } from '@/assets/images';
import * as styles from './LandingStyle';
import { useNavigate } from 'react-router-dom';

//import Lottie from 'lottie-react';
//import { IcLandingTaxi1, IcLandingTaxi2 } from '@/assets/lottie';

const Landing = () => {
  const navigate = useNavigate();

  const handleNewAssign = () => {
    navigate('/booking/WvVRJ45LkK');
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
      <styles.SecondSection>
        <styles.CameraButton onClick={handleNewAssign}>
          <LogoSymbolWhite />
        </styles.CameraButton>
        <styles.CamBtnDescription>
          큐택을 이용하시려면
          <br />
          버튼을 클릭해 QR코드를 스캔해보세요!
        </styles.CamBtnDescription>
      </styles.SecondSection>
    </styles.LandingWrapper>
  );
};

export default Landing;
