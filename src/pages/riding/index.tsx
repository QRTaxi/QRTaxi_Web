import * as styles from './RidingStyle';
import { theme } from '@/styles/theme';
import Button from '@/components/common/Button';
// import Modal from '@/components/common/Modal';
import Error from '@/pages/error';
import Lottie from 'lottie-react';
import { IcDriver, IcRiding } from '@/assets/lottie';

import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { driverInfoState, userStatus } from '@/utils/recoil/store';

const Riding = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const driverInfo = useRecoilValue(driverInfoState);

  useEffect(() => {
    setUserStatus({ ...UserStatus, status: 'riding' });
  }, []);

  const toggleModal = (isModalOpen: boolean) => {
    setIsModalOpen(!isModalOpen);
  };

  return driverInfo ? (
    'id' in driverInfo ? (
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
              <h1>{driverInfo.driver_id.taxi_num}</h1>
              <p>
                {driverInfo.driver_id.name} 기사님{' '}
                {driverInfo.driver_id.car_type}
              </p>
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
    ) : (
      <Error error={driverInfo} />
    )
  ) : (
    <div>skeleton</div>
  );
};

export default Riding;
