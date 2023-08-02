import * as styles from './WaitingStyle';
import Lottie from 'lottie-react';
import { Taxi } from '@/assets/lottie';
import Button from '@/components/common/Button';

const Waiting = () => {
  return (
    <styles.WaitingWrapper>
      <styles.TextSection>
        <styles.TextContent>큐택 호출 중이에요.</styles.TextContent>
      </styles.TextSection>
      <styles.LottieSection>
        <Lottie animationData={Taxi} />
      </styles.LottieSection>
      <styles.ButtonSection>
        <Button text="취소하기" />
      </styles.ButtonSection>
    </styles.WaitingWrapper>
  );
};

export default Waiting;
