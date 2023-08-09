import * as styles from './CancelStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Lottie from 'lottie-react';
import { IcCancelled } from '@/assets/lottie';

const Cancel = () => {
  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <Header />
        <styles.LottieSection>
          <Lottie animationData={IcCancelled} loop={false} />
        </styles.LottieSection>
        <styles.IconDescription>호출이 취소되었어요</styles.IconDescription>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          <p>다시 호출하시려면</p>
          <p>아래 버튼을 눌러주세요</p>
        </styles.CallBtnDescription>
        <Button fontSize="x-large" padding="1.6rem" text="택시 다시 호출하기" />
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Cancel;
