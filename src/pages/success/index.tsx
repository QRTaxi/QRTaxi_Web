import * as styles from './SuccessStyle';
import { theme } from '@/styles/theme';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Error from '@/pages/error';
import Lottie from 'lottie-react';
import { IcSuccess, IcDriver } from '@/assets/lottie';

import UserApi from '@/utils/api/user';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { driverInfoState, userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const driverInfo = useRecoilValue(driverInfoState);
  const navigate = useNavigate();

  useEffect(() => {
    setUserStatus({ ...UserStatus, status: 'success' });
  }, []);

  const toggleModal = (isModalOpen: boolean) => {
    setIsModalOpen(!isModalOpen);
  };

  const cancelModal = () => {
    console.log(UserStatus.id);
    UserApi.postCancelBooking({ assign_id: UserStatus.id }).catch(
      (error: Error) => console.error('Failed to cancel booking: ', error),
    );
    navigate('/cancel');
    setIsModalOpen(false);
  };
  //전화 연결

  const openCall = () => {
    setIsCallOpen(true);
  };

  const closeCall = () => {
    setIsCallOpen(false);
  };

  const makeCall = () => {
    window.location.href = 'tel:01066511539';
  };

  return driverInfo ? (
    'id' in driverInfo ? (
      <styles.FinishWrapper>
        <styles.FirstSection>
          <Button
            backgroundColor="transparent"
            color={theme.colors.QT_Color_Gray_3}
            text="호출 취소하기"
            padding="0"
            fontSize="1.2rem"
            onClick={() => toggleModal(isModalOpen)}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={() => toggleModal(isModalOpen)}
            title="호출 취소"
            text1="현재 기사님이 달려오고 있어요"
            text2="정말 호출을 취소하시겠어요?"
            action="호출 취소"
            onAction={cancelModal}
          />
        </styles.FirstSection>
        <styles.SecondSection>
          <styles.TextSection>
            <h1>호출 성공!</h1>
          </styles.TextSection>
          <styles.DriverInfoSection>
            <styles.DriverPic>
              <Lottie animationData={IcDriver} />
            </styles.DriverPic>
            <styles.DriverInfo>
              <h1>{driverInfo.driver_id.taxi_num}</h1>
              <p>
                {driverInfo.driver_id.name} 기사님 •{' '}
                {driverInfo.driver_id.car_type}
              </p>
            </styles.DriverInfo>
          </styles.DriverInfoSection>
          <styles.LottieSection>
            <Lottie animationData={IcSuccess} />
          </styles.LottieSection>
          <styles.ETASection>
            <p>출발지로 달려가는 중이에요 🚀</p>
            <p>예상 시간: {driverInfo.estimated_time}분</p>
          </styles.ETASection>
        </styles.SecondSection>
        <styles.ThirdSection>
          <Button
            text="기사님과 전화 연결"
            color={theme.colors.QT_Color_White}
            backgroundColor={theme.colors.QT_Color_Orange.primary}
            fontSize="1.6rem"
            padding="1rem"
            borderRadius="1rem"
            onClick={openCall}
          />
          <Modal
            isOpen={isCallOpen}
            onClose={closeCall}
            title="전화 연결"
            text1="기사님과 전화 연결을 원하시면"
            text2="아래 통화 버튼을 누르세요"
            action="통화"
            onAction={makeCall}
          />
        </styles.ThirdSection>
      </styles.FinishWrapper>
    ) : (
      <Error error={driverInfo} />
    )
  ) : (
    <div>skeleton</div>
  );
};

export default Success;
