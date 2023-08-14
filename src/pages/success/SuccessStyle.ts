import { LayoutWrapper } from '@/components/common/Layout';
import { styled } from 'styled-components';

export const FinishWrapper = styled(LayoutWrapper)`
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
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const SecondSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const ThirdSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  margin-top: 6rem;
  margin-bottom: 3rem;
`;

export const TextSection = styled.div`
  & > h1 {
    ${({ theme }) => theme.fonts.QT_Title2_Pretendard_SemiBold_20}
    font-weight: 500;
    font-size: 2.6rem;
    line-height: 131.2%;
    letter-spacing: -0.025em;
  }

  margin-bottom: 2rem;
`;

export const LottieSection = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 50%;
  }
`;

export const DriverInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const DriverPic = styled.div`
  width: 30%;
  border-radius: 100%;
  padding: 1rem;
  background-color: #fce49f;
`;

export const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;

  letter-spacing: -0.03rem;

  & > h1 {
    ${({ theme }) => theme.fonts.QT_Title1_Pretendard_Bold_24}
    font-size: 3.2rem;
    font-weight: 600;
  }

  & > p {
    ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  }
`;

export const ETASection = styled.section`
  & > p {
    ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
    color: ${({ theme }) => theme.colors.QT_Color_Gray_3};
    text-align: center;
  }
`;
