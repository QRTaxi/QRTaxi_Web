import * as styles from './WaitingStyle';

import Lottie from 'lottie-react';
import { IcTaxi } from '@/assets/lottie';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { theme } from '@/styles/theme';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatus } from '@/utils/recoil/store';
import UserApi from '@/utils/api/user';
import { initWebSocket } from '@/utils/api/webSocket';

const Waiting = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const UserStatus = useRecoilValue(userStatus);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (['/waiting', '/success', '/riding'].includes(location.pathname)) {
      console.log(UserStatus);
      initWebSocket(UserStatus.id, navigate);
    }
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

  return (
    <styles.WaitingWrapper>
      <styles.FirstSection>
        <h1>큐택 호출 중이에요.</h1>
      </styles.FirstSection>
      <styles.SecondSection>
        <Lottie animationData={IcTaxi} />
      </styles.SecondSection>
      <styles.ThirdSection>
        <Button
          text="취소하기"
          color={theme.colors.QT_Color_White}
          backgroundColor={theme.colors.QT_Color_Orange.primary}
          padding="1rem"
          fontSize="1.6rem"
          borderRadius="1rem"
          width="100%"
          onClick={() => toggleModal(isModalOpen)}
          disabled={isModalOpen}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => toggleModal(isModalOpen)}
          title="호출 취소"
          text1="현재 배차를 요청 중이에요"
          text2="정말 호출을 취소하시겠어요?"
          action="호출 취소"
          onAction={cancelModal}
        />
      </styles.ThirdSection>
    </styles.WaitingWrapper>
  );
};

export default Waiting;
