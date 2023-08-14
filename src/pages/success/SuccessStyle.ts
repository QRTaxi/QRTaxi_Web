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

  margin-top: 2rem;
`;

export const ThirdSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
`;

export const TextSection = styled.div`
  & > h1 {
    ${({ theme }) => theme.fonts.QT_Noto_SB_Title_2}

    line-height: 131.2%;
    letter-spacing: -0.025em;
  }
`;

export const LottieSection = styled.div``;

export const IconDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Noto_B_Title_3}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};
  text-align: center;
  margin-top: 13.5rem;
  line-height: 5.3rem;
  letter-spacing: -0.03em;
`; //margin-top으로 lottie 아이콘이랑 안겹쳐지게 함(임시)

export const DriverInfoSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DriverPic = styled.div`
  border-radius: 100%;
  padding: 1rem;
  background-color: #fce49f;
`;

export const DriverInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CarNumDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Noto_SB_Title_2}
  font-size: 3rem;
  text-align: left;
  margin-top: 1.5rem;
  line-height: 5.3rem;
  letter-spacing: -0.03em;
`;

export const DriverDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_3};
  text-align: left;
  line-height: 2rem;
`;

export const CallBtnDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_3};
  text-align: center;
  line-height: 2rem;
`;
