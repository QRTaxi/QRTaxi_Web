import { styled } from 'styled-components';

export const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100vh;
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
  padding-top: 5rem;
`;

export const SecondSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const SecondContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > p {
    font: ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16};
  }

  & > h1 {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 131.2%;
    letter-spacing: -0.05em;

    padding-bottom: 1.4rem;
  }

  & > input {
    padding: 1.5rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.QT_Color_Gray_4};

    font: ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16};
  }
`;

export const ButtonSection = styled(ContentWrapper)`
  height: 33%;
  display: flex;
  align-items: center;
`;
