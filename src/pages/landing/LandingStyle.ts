import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100vh;
  gap: 1rem;
`;

export const FirstSection = styled.section`
  width: 100%;
  height: 30rem;
`;

export const Contents = styled.header`
  padding-top: 11rem;
  padding-left: 2.3rem;

  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};

  & > h1 {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 131.2%;
    letter-spacing: -0.05em;

    padding-bottom: 1.4rem;
  }
`;

export const LandingTitle = styled.p`
  color: ${({ theme }) => theme.colors.QT_Color_White}
  font: ${({ theme }) => theme.fonts.QT_Title4_Pretendard_Bold_35}
`;

export const CameraButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 25rem;

  border: none;
  border-radius: 100%;
  background-color: ${theme.colors.QT_Color_Orange.primary};

  & > svg {
    width: 60%;
  }
`;

export const CamBtnDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  text-align: center;
`;
