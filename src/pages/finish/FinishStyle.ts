import { styled } from 'styled-components';

export const FinishWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100vh;
  gap: 1rem;
  margin-top: 2.3rem;
`;

export const FirstSection = styled.section`
  width: 100%;
  height: 80rem;
  padding: 1.6rem;
`;
export const ContentWrapper = styled.section`
  width: 100%;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
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

export const LottieSection = styled(ContentWrapper)`
  height: 33%;
  padding-left: 1.1rem;
  padding-right: 1.4rem;
`;

export const IconDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Noto_B_Title_3}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_Black};
  text-align: center;
  margin-top: 13.5rem;
  line-height: 5.3rem;
`; //margin-top으로 lottie 아이콘이랑 안겹쳐지게 함(임시)

export const CallBtnDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  color: ${({ theme }) => theme.colors.QT_Color_Gray_3};
  text-align: center;
  line-height: 2rem;
`;
