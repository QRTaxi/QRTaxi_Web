import { styled } from 'styled-components';

export const WaitingWrapper = styled.div`
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

export const TextSection = styled(ContentWrapper)`
  height: 33%;
  display: flex;
  align-items: center;
`;

export const TextContent = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 131.2%;
  letter-spacing: -0.025em;

  padding-bottom: 1.4rem;
`;

export const LottieSection = styled(ContentWrapper)`
  height: 33%;
  padding-left: 1.1rem;
  padding-right: 1.4rem;
`; // Lottie 이미지가 독립적인 여백을 갖고 있어서 불가피하게 하드코딩함

export const ButtonSection = styled(ContentWrapper)`
  height: 33%;
  display: flex;
  align-items: center;
`;
