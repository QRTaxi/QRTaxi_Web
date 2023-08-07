import * as styles from './FinishStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Lottie from 'lottie-react';
import { IcHighFive } from '@/assets/lottie';

const Finish = () => {
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
        <Button fontSize="x-large" text="다른 택시 호출하기" />
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Finish;
