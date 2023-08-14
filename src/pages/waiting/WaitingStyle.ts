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

export const FirstSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.QT_Title2_Pretendard_SemiBold_20}
    font-weight: 500;
    font-size: 2.6rem;
    line-height: 131.2%;
    letter-spacing: -0.025em;
  }
`;

export const SecondSection = styled(ContentWrapper)`
  display: flex;
  justify-content: center;
`;

export const ThirdSection = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  margin-top: 6rem;
  margin-bottom: 3rem;
`;
