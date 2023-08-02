import { LogoSymbolWhite } from '@/assets/images';
import * as styles from './FinishStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';

const Finish = () => {
  return (
    <styles.LandingWrapper>
      <styles.FirstSection>
        <styles.Contents>
          <Header />
        </styles.Contents>
      </styles.FirstSection>
      <styles.CameraButton>
        <LogoSymbolWhite />
      </styles.CameraButton>
      <styles.CallBtnDescription>
        새로 호출 하시려면
        <br />
        아래 버튼을 눌러주세요
      </styles.CallBtnDescription>
      <Button text="hi" />
    </styles.LandingWrapper>
  );
};

export default Finish;
