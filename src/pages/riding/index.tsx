import * as styles from './RidingStyle';
import Error from '@/pages/error';
import Lottie from 'lottie-react';
import { IcDriver, IcRiding } from '@/assets/lottie';

import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { driverInfoState, userStatus } from '@/utils/recoil/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { initWebSocket } from '@/utils/api/webSocket';

const Riding = () => {
  const [UserStatus, setUserStatus] = useRecoilState(userStatus);
  const driverInfo = useRecoilValue(driverInfoState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      ['/waiting', '/success', '/riding'].includes(location.pathname) &&
      UserStatus.id
    ) {
      initWebSocket(UserStatus.id, navigate);
    }
    setUserStatus({ ...UserStatus, status: 'riding' });
  }, []);

  return driverInfo ? (
    'id' in driverInfo ? (
      <styles.RidingWrapper>
        <styles.FirstSection></styles.FirstSection>
        <styles.SecondSection>
          <styles.TextSection>
            <h1>탑승 중</h1>
          </styles.TextSection>
          <styles.DriverInfoSection>
            <styles.DriverPic>
              <Lottie animationData={IcDriver} />
            </styles.DriverPic>
            <styles.DriverInfo>
              <h1>{driverInfo.driver_id.taxi_num}</h1>
              <p>
                {driverInfo.driver_id.name} 기사님{' '}
                {driverInfo.driver_id.car_type}
              </p>
            </styles.DriverInfo>
          </styles.DriverInfoSection>
          <styles.LottieSection>
            <Lottie animationData={IcRiding} />
          </styles.LottieSection>
          <styles.ETASection>
            <p>안전하게 목적지까지 모시고 있어요.</p>
          </styles.ETASection>
        </styles.SecondSection>
        <styles.ThirdSection></styles.ThirdSection>
      </styles.RidingWrapper>
    ) : (
      <Error error={driverInfo} />
    )
  ) : (
    <div>skeleton</div>
  );
};

export default Riding;
