import * as styles from './WaitingStyle';

import Lottie from 'lottie-react';
import { IcTaxi } from '@/assets/lottie';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';

import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';
import UserApi from '@/utils/api/user';

const Waiting = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { id: assignID } = useRecoilValue(userStatus);
  const navigate = useNavigate();

  const toggleModal = (isModalOpen: boolean) => {
    setIsModalOpen(!isModalOpen);
  };

  const cancelModal = () => {
    console.log(assignID);
    UserApi.postCancelBooking(assignID).catch((error: Error) =>
      console.error('Failed to cancel booking: ', error),
    );
    navigate('/cancel');
    setIsModalOpen(false);
  };

  return (
    <styles.WaitingWrapper>
      <styles.TextSection>
        <styles.TextContent>큐택 호출 중이에요.</styles.TextContent>
      </styles.TextSection>
      <styles.LottieSection>
        <Lottie animationData={IcTaxi} />
      </styles.LottieSection>
      <styles.ButtonSection>
        <Button
          text="취소하기"
          padding="0.8rem"
          onClick={() => toggleModal(isModalOpen)}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => toggleModal(isModalOpen)}
          text="현재 배차를 요청 중이에요"
          onCancel={cancelModal}
        />
      </styles.ButtonSection>
    </styles.WaitingWrapper>
  );
};

export default Waiting;
