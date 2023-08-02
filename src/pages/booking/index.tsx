import * as styles from './BookingStyle';
import Lottie from 'lottie-react';
import { Taxi } from '@/assets/lottie';
import Button from '@/components/common/Button';

const Booking = () => {
  return (
    <styles.BookingWrapper>
      <styles.TextSection>
        <styles.TextContent>큐택 호출 중이에요.</styles.TextContent>
      </styles.TextSection>
      <styles.LottieSection>
        <Lottie animationData={Taxi} />
      </styles.LottieSection>
      <styles.ButtonSection>
        <Button text="취소하기" />
      </styles.ButtonSection>
    </styles.BookingWrapper>
  );
};

export default Booking;
