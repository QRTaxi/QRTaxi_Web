import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { theme } from '@/styles/theme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text1: string;
  text2?: string;
  action: string;
  onAction: () => void;
}
export const ContentWrapper = styled.section`
  width: 100%;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
`;

export const ModalButtonSection = styled(ContentWrapper)`
  height: 23%;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 90%;
`;

export const ModalTitle = styled.p`
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};
  text-align: left;
  line-height: 5.3rem;
  letter-spacing: -0.03em;
  font-size: x-large;
  font-weight: bold;
`;

export const ModalBody = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  text1,
  text2,
  action,
  onAction,
}) => {
  return (
    <ModalWrapper>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>{title}</ModalTitle>
            <ModalBody>{text1}</ModalBody>
            <ModalBody>{text2}</ModalBody>
            <ModalButtonSection>
              <Button
                backgroundColor={theme.colors.QT_Color_White}
                color={theme.colors.QT_Color_Red}
                text={action}
                padding="0rem"
                onClick={onAction}
                fontSize="1.8rem"
              />
              <Button
                backgroundColor={theme.colors.QT_Color_White}
                color={theme.colors.QT_Color_Gray_3}
                text="닫기"
                padding="0rem"
                onClick={onClose}
                fontSize="1.8rem"
              />
            </ModalButtonSection>
          </ModalContent>
        </ModalOverlay>
      )}
    </ModalWrapper>
  );
};

export default Modal;
