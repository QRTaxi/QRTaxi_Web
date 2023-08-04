import { useState } from 'react';

import * as styles from './BookingStyle';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

const Booking = () => {
  const [phoneNum, setPhoneNum] = useState<number>();

  const Validation = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 유효성 검사에서 구현해야할 것들:
    // 1. 11자가 모두 입력됐는지
    // 2. 11자 이상 입력하면 막히게 해야 함
    // 3. 서버에서 제시한대로 정규화해서 보내줘야함(Post)
    console.log(e.target.value);
    const num = Number(e.target.value);
    setPhoneNum(num);
    if (phoneNum && phoneNum.toString().length == 11) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {};

  return (
    <styles.BookingWrapper>
      <styles.FirstSection>
        <Header />
      </styles.FirstSection>
      <styles.SecondSection>
        <styles.SecondContent>
          <p>나의 현재 위치는</p>
          <h1>한국외국어대학교 정문</h1>
        </styles.SecondContent>
        <styles.SecondContent>
          <p>전화번호를 입력해주세요.</p>
          <input
            placeholder="010-1234-5678"
            type="number"
            onChange={Validation}
          />
        </styles.SecondContent>
      </styles.SecondSection>
      <styles.ButtonSection>
        <Button text="호출하기" onClick={handleSubmit} />
      </styles.ButtonSection>
    </styles.BookingWrapper>
  );
};

export default Booking;
