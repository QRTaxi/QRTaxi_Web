import * as styles from './RidingStyle';
import { theme } from '@/styles/theme';
import Button from '@/components/common/Button';
// import Modal from '@/components/common/Modal';
import Lottie from 'lottie-react';
import { IcDriver, IcRiding } from '@/assets/lottie';

import { useState } from 'react';

const Riding = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = (isModalOpen: boolean) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <styles.RidingWrapper>
      <styles.FirstSection>
        <Button
          backgroundColor="transparent"
          color={theme.colors.QT_Color_Gray_3}
          text="신고하기"
          padding="0"
          fontSize="1.2rem"
          onClick={() => toggleModal(isModalOpen)}
        />
        {/* <Modal
          isOpen={isModalOpen}
          onClose={() => toggleModal(isModalOpen)}
          title="호출 취소"
          text1="현재 기사님이 달려오고 있어요"
          text2="정말 호출을 취소하시겠어요?"
          action="호출 취소"
          // onAction={cancelModal}
        /> */}
      </styles.FirstSection>
      <styles.SecondSection>
        <styles.TextSection>
          <h1>탑승 중</h1>
        </styles.TextSection>
        <styles.DriverInfoSection>
          <styles.DriverPic>
            <Lottie animationData={IcDriver} />
          </styles.DriverPic>
          <styles.DriverInfo>
            <h1>서울22다 5422</h1>
            <p>김멋사 기사님 •SM5</p>
          </styles.DriverInfo>
        </styles.DriverInfoSection>
        <styles.LottieSection>
          <Lottie animationData={IcRiding} />
        </styles.LottieSection>
        <styles.ETASection>
          <p>안전하게 목적지까지 모시고 있어요.</p>
        </styles.ETASection>
      </styles.SecondSection>
      <styles.ThirdSection></styles.ThirdSection>
    </styles.RidingWrapper>
  );
};

export default Riding;
