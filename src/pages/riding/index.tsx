import * as styles from './RidingStyle';
import Button from '@/components/common/Button';
import Lottie from 'lottie-react';
import { IcDriver, IcRiding } from '@/assets/lottie';
import { theme } from '@/styles/theme';

const Riding = () => {
  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <styles.TextSection>
          <styles.TextContent>탑승 중이에요 🚘</styles.TextContent>
        </styles.TextSection>
        <styles.DriverSection>
          <styles.DriverPic>
            <Lottie animationData={IcDriver} />
          </styles.DriverPic>
          <styles.DriverDescriptionSection>
            <styles.CarNumDescription>
              서울22다
              <br />
              5422
            </styles.CarNumDescription>
            <styles.DriverDescription>
              김멋사 기사님 •SM5
            </styles.DriverDescription>
          </styles.DriverDescriptionSection>
        </styles.DriverSection>
        <styles.LottieSection>
          <Lottie animationData={IcRiding} />
        </styles.LottieSection>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          안전하게 목적지까지 모시고 있어요
        </styles.CallBtnDescription>
        <styles.TextButtonSection>
          <>
            <Button
              backgroundColor={theme.colors.QT_Color_White}
              color={theme.colors.QT_Color_Gray_3}
              text="신고하기🚨"
            />
          </>
        </styles.TextButtonSection>
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Riding;
