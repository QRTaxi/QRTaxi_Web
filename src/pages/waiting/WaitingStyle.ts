import { LayoutWrapper } from '@/components/common/Layout';
import { styled } from 'styled-components';

export const WaitingWrapper = styled(LayoutWrapper)`
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

export const TextSection = styled(ContentWrapper)`
  height: 20%;
  display: flex;
  align-items: center;
`;

export const TextContent = styled.p`
  ${({ theme }) => theme.fonts.QT_Noto_M_Subtitle_1}
  font-size: 3.5rem;

  letter-spacing: -0.025em;

  padding-bottom: 1.4rem;
`;

export const LottieSection = styled(ContentWrapper)`
  padding-left: 1.1rem;
  padding-right: 1.4rem;
`; // Lottie 이미지가 독립적인 여백을 갖고 있어서 불가피하게 하드코딩함

export const ButtonSection = styled(ContentWrapper)`
  height: 20%;
  display: flex;
  align-items: center;
`;
