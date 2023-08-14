import { LayoutWrapper } from '@/components/common/Layout';
import { styled } from 'styled-components';

export const LandingWrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
`;

export const FirstSection = styled(ContentWrapper)`
  display: flex;
  align-items: center;

  margin-top: 7rem;
`;

export const SecondSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10rem;

  gap: 5rem;
`;

export const Contents = styled.header`
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};

  & > h1 {
    ${({ theme }) => theme.fonts.QT_Title4_Pretendard_Bold_35}
    line-height: 131.2%;
    letter-spacing: -0.05em;
  }
`;

export const CameraButton = styled.button`
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

export const CamBtnDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  text-align: center;
`;
