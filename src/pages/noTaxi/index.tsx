import * as styles from './NoTaxiStyle';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Lottie from 'lottie-react';
import { Tears } from '@/assets/lottie';

const NoTaxi = () => {
  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <Header />
        <styles.LottieSection>
          <Lottie animationData={Tears} />
        </styles.LottieSection>
        <styles.IconDescription>
          호출 가능한
          <br />
          택시가 없어요
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

export default NoTaxi;
