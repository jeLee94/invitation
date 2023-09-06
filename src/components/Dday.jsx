import styled from "styled-components";
import React, { useEffect, useState } from "react";

const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: center;
  padding: 12px 0 50px;
`;

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MapoFlowerIsland";
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0 10px;
  font-size: 1.5rem;
`;

const TimeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.span`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  width: auto;
  border-radius: 5px;
  background-color: #ffc67721; // 배경색은 원하는대로 변경 가능
  padding: 5px 10px;
  margin: 0 5px;
`;

const Desc = styled.div`
  font-size: 0.8rem;
  margin-top: 5px;
  font-weight: 300;
`;

const Separator = styled.div`
  margin: 0 10px;
  font-size: 1.5rem;
`;

const RemainMessage = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
  font-family: "MapoFlowerIsland";
`;

// D-day 카운트다운
//오늘 날짜가 2023년 10월 09일 까지 몇일 남았는지 계산
const Dday = () => {
  const calculateTimeLeft = () => {
    const today = new Date();
    const dday = new Date("2023-10-09 14:00:00");
    const gap = dday.getTime() - today.getTime();
    return {
      day: Math.floor(gap / (1000 * 60 * 60 * 24)),
      hour: Math.floor((gap / (1000 * 60 * 60)) % 24),
      minute: Math.floor((gap / (1000 * 60)) % 60),
      second: Math.floor((gap / 1000) % 60),
    };
  };

  const formatNumber = (num) => {
    const str = num.toString();
    return str.length === 1 ? "0" + str : str;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, []);

  return (
    <CountdownWrapper>
      <CountdownContainer>
        <TimeCard>
          <Card>
            {timeLeft.day}
            <Desc>Days</Desc>
          </Card>
        </TimeCard>
        <Separator>:</Separator>
        <TimeCard>
          <Card>
            {formatNumber(timeLeft.hour)}
            <Desc>Hour</Desc>
          </Card>
        </TimeCard>
        <Separator>:</Separator>
        <TimeCard>
          <Card>
            {formatNumber(timeLeft.minute)}
            <Desc>Min</Desc>
          </Card>
        </TimeCard>
        <Separator>:</Separator>
        <TimeCard>
          <Card>
            {formatNumber(timeLeft.second)}
            <Desc>Sec</Desc>
          </Card>
        </TimeCard>
      </CountdownContainer>
      <RemainMessage>
        성훈 <span style={{ color: "#fb6e6e" }}>♥️</span> 보경의 결혼식이
        <span style={{ color: "#fb6e6e", fontWeight: "bold" }}>
          &nbsp;{timeLeft.day + 1}
        </span>
        일 남았습니다.
      </RemainMessage>
    </CountdownWrapper>
  );
};

export default Dday;
