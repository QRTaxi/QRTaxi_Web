import { styled, keyframes } from 'styled-components';

const moveHorizontally = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(70%);
  }
`;

export const LandingWrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 6rem;
  background-color: black;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  padding-left: 2.3rem;
  padding-right: 2.3rem;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.QT_Color_Orange.primary};
`;

export const FirstSection = styled(ContentWrapper)`
  margin-top: 10rem;
`;

export const SecondSection = styled(ContentWrapper)`
  align-items: center;
  gap: 3rem;
`;

export const ThirdSection = styled(ContentWrapper)`
  align-items: center;
  gap: 8rem;
`;

export const FourthSection = styled(ContentWrapper)`
  align-items: center;
  gap: 8rem;
  margin-bottom: 10rem;
`;

export const ThirdHeader = styled.h1`
  ${({ theme }) => theme.fonts.QT_Title2_Pretendard_SemiBold_20}
  font-size: 2.6rem;
  line-height: 131.2%;
  letter-spacing: -0.05em;
  text-align: center;

  margin-top: 2rem;
`;

export const bodyText = styled.p`
  ${({ theme }) => theme.fonts.QT_Subtitle2_Pretendard_Medium_18}
`;

export const GuideDescription = styled(ContentWrapper)`
  color: ${({ theme }) => theme.colors.QT_Color_White};

  margin-top: 3rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid white;
`;

export const GuideTitle = styled.p`
  ${({ theme }) => theme.fonts.QT_Title1_Pretendard_Bold_24}
`;

export const GuideBody = styled(bodyText)`
  line-height: 150%;
  font-weight: 400;
  & > span {
    ${({ theme }) => theme.fonts.QT_Subtitle2_Pretendard_Medium_18}
    font-weight: 900;
  }
  & > div {
    ${({ theme }) => theme.fonts.QT_Title1_Pretendard_Bold_24}
  }
`;

export const StepBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Subtitle = styled(bodyText)``;

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
    0 3px 9px rgba(255, 255, 255, 0.12),
    0 1px 2px rgba(255, 255, 255, 0.24);
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow:
      0 10px 20px rgba(255, 255, 255, 0.19),
      0 6px 6px rgba(255, 255, 255, 0.23);
  }

  & > svg {
    width: 65%;
  }
`;

export const CamBtnDescription = styled(bodyText)`
  text-align: center;
`;

export const StepDescription = styled.div`
  & > span {
    ${({ theme }) => theme.fonts.QT_Body2_Pretendard_Bold_16}
    font-size: 2rem;
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const LottieSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & > div {
    width: 80%;
    position: absolute;
    bottom: -11rem;
    z-index: 100;
  }
`;

export const LottieTaxiSection = styled.div`
  overflow: hidden;
  animation: ${moveHorizontally} 2s linear infinite;

  & > div {
    transform: scaleX(-1);
  }
`;

export const HelpImgSection = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
`;

export const HelpDescription = styled.p`
  ${({ theme }) => theme.fonts.QT_Body1_Pretendard_Medium_16}
  font-size: 1.2rem;
  text-align: center;
`;

export const IOS1LottieSection = styled(LottieSection)`
  & > img {
    width: 80%;
  }
  & > div {
    width: 80%;
    position: absolute;
    bottom: 0rem;
    left: -2rem;
    z-index: 100;
  }
`;
export const IOS2LottieSection = styled(LottieSection)`
  & > img {
    width: 80%;
  }
  & > div {
    width: 80%;
    position: absolute;
    bottom: 4.5rem;
    z-index: 100;
  }
`;

export const Android1LottieSection = styled(LottieSection)`
  & > img {
    width: 80%;
  }
  & > div {
    width: 80%;
    position: absolute;
    bottom: -1.9rem;
    left: 1
    z-index: 100;
  }
`;
export const Android2LottieSection = styled(LottieSection)`
  & > img {
    width: 80%;
  }
  & > div {
    width: 80%;
    position: absolute;
    bottom: -4.7rem;
    z-index: 100;
  }
`;
