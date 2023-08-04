import * as styles from './CancelStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Lottie from 'lottie-react';
import { Cancelled } from '@/assets/lottie';

const Cancel = () => {
  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <Header />
        <styles.LottieSection>
          <Lottie animationData={Cancelled} />
        </styles.LottieSection>
        <styles.IconDescription>
          호출이
          <br />
          취소되었어요
        </styles.IconDescription>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          다시 호출 하시려면
          <br />
          아래 버튼을 눌러주세요
        </styles.CallBtnDescription>
        <Button text="택시 다시 호출하기" />
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Cancel;
