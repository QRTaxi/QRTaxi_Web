import * as styles from './SuccessStyle';
import Button from '@/components/common/Button';
import Lottie from 'lottie-react';
import { IcSuccess, IcDriver } from '@/assets/lottie';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import Modal from '@/components/common/Modal';
import UserApi from '@/utils/api/user';
import { useRecoilValue } from 'recoil';
import { userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { id: assign_id } = useRecoilValue(userStatus);
  const navigate = useNavigate();

  const toggleModal = (isModalOpen: boolean) => {
    setIsModalOpen(!isModalOpen);
  };

  const cancelModal = () => {
    console.log(assign_id);
    UserApi.postCancelBooking({ assign_id }).catch((error: Error) =>
      console.error('Failed to cancel booking: ', error),
    );
    navigate('/cancel');
    setIsModalOpen(false);
  };
  //전화 연결
  const [isCallOpen, setIsCallOpen] = useState(false);

  const openCall = () => {
    setIsCallOpen(true);
  };

  const closeCall = () => {
    setIsCallOpen(false);
  };
  const makeCall = () => {
    window.location.href = 'tel:01025799716';
  };

  return (
    <styles.FinishWrapper>
      <styles.FirstSection>
        <styles.TextButtonSection>
          <>
            <Button
              backgroundColor={theme.colors.QT_Color_White}
              color={theme.colors.QT_Color_Gray_3}
              text="호출 취소하기"
              padding="0.8rem"
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
          </>
        </styles.TextButtonSection>
        <styles.TextSection>
          <styles.TextContent>호출 성공 !</styles.TextContent>
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
          <Lottie animationData={IcSuccess} />
        </styles.LottieSection>
      </styles.FirstSection>
      <styles.FirstSection>
        <styles.CallBtnDescription>
          출발지로 달려가는 중이에요 🚀
          <br />
          <br />
          예상 시간: 00분
          <br />
          <br />
        </styles.CallBtnDescription>
        <Button
          fontSize="x-large"
          text="기사님과 전화 연결"
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
      </styles.FirstSection>
    </styles.FinishWrapper>
  );
};

export default Success;
