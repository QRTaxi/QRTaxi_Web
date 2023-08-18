import { LayoutWrapper } from '@/components/common/Layout';
import styled, * as styledComponents from 'styled-components';

const moveHorizontally = styledComponents.keyframes`
  0% {
    transform: translateX(70%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const LandingWrapper = styledComponents.styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: black;
`;

export const ContentWrapper = styledComponents.styled.section`
  width: 100%;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
  background-color: black;
  position: relative;
  z-index: 1; /* Ensure that content is above the animation */
`;

export const FirstSection = styledComponents.styled(ContentWrapper)`
  display: flex;
  align-items: center;
  margin-top: 10rem;
  background-color: black;
  position: relative;
  z-index: 1; /* Ensure that content is above the animation */
`;

export const SecondSection = styledComponents.styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: black;
  z-index: 1; /* Ensure that content is above the animation */
`;

export const Contents = styledComponents.styled.header`
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};

  & > h1 {
    ${({ theme }) => theme.fonts.QT_Title4_Pretendard_Bold_35}
    line-height: 131.2%;
    letter-spacing: -0.05em;
  }
`;

export const CameraButton = styledComponents.styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26rem;
  height: 26rem;

  border: none;
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.QT_Color_Orange.primary};

  box-shadow:
    0 3px 9px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
  }

  & > svg {
    width: 65%;
  }
`;

export const CamBtnDescription = styledComponents.styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  text-align: center;
`;

export const LottieTaxiSection = styledComponents.styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden; 
  animation: ${moveHorizontally} 2s linear infinite;
  

  & > div {
    width: 150%;
  }
`;

export const LottieSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;

  & > div {
    width: 80%;
  }
`;
