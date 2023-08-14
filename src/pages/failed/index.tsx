import * as styles from './FailedStyle';
import Button from '@/components/common/Button';
import Lottie from 'lottie-react';
import { IcSadFace } from '@/assets/lottie';

import { useRecoilState, useRecoilValue } from 'recoil';
import { userPayloadState, userStatus } from '@/utils/recoil/store';
import { useNavigate } from 'react-router-dom';
import AssignUser from '@/utils/hooks/AssignUser';
import { theme } from '@/styles/theme';

const Failed = () => {
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const payload = useRecoilValue(userPayloadState);
  const navigate = useNavigate();

  const handleReassign = () => {
    setUserStatus({ ...UserStatus, status: 'booking' });

    AssignUser({ payload, navigate, setUserStatus }).catch((error: Error) =>
      console.error('Failed to submit user info:', error),
    );
  };
  return (
    <styles.FailedWrapper>
      <styles.FirstSection>
        <styles.LottieSection>
          <Lottie animationData={IcSadFace} loop={false} />
        </styles.LottieSection>
        <styles.TextSection>
          <styles.TitleText>
            호출 가능한
            <br />
            택시가 없어요
          </styles.TitleText>
          <styles.BodyTextArea>
            <p>
              다시 호출하시려면
              <br />
              아래 버튼을 눌러주세요
            </p>
          </styles.BodyTextArea>
        </styles.TextSection>
      </styles.FirstSection>
      <styles.SecondSection>
        <Button
          text="택시 다시 호출하기"
          color={theme.colors.QT_Color_White}
          backgroundColor={theme.colors.QT_Color_Orange.primary}
          padding="1rem"
          fontSize="1.6rem"
          borderRadius="1rem"
          width="100%"
          onClick={handleReassign}
        />
      </styles.SecondSection>
    </styles.FailedWrapper>
  );
};

export default Failed;
