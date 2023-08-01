import { LogoSymbolWhite } from '@/assets/images';
import * as styles from './FinishStyle';

const Finish = () => {
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
      <styles.CameraButton>
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

export default Finish;
