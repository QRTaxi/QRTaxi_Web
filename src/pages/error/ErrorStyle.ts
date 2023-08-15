import { LayoutWrapper } from '@/components/common/Layout';
import { styled } from 'styled-components';

export const ErrorWrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;

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
  flex-direction: column;

  margin-top: 7rem;
  gap: 2rem;
`;

export const SecondSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  margin-top: 6rem;
  margin-bottom: 3rem;
`;

export const LottieSection = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 80%;
  }
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

export const TitleText = styled.p`
  ${({ theme }) => theme.fonts.QT_Title1_Pretendard_Bold_24}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};
  text-align: center;
  font-size: 3.5rem;
  line-height: 3.5rem;
  letter-spacing: -0.03em;
`;

export const BodyTextArea = styled.div`
  text-align: center;
  & > p {
    ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
    color: ${({ theme }) => theme.colors.QT_Color_Gray_3};
    line-height: 2rem;
  }
`;
