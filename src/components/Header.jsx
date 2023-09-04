import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [dDay, setDDay] = useState(null);

  useEffect(() => {
    const today = new Date();
    const eventDate = new Date(2023, 9, 9); // 10월은 9로 표기합니다 (0부터 시작)

    const diffInTime = eventDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    setDDay(diffInDays);
  }, []);

  return (
    <StyledHeader>
      {/* {dDay !== null && <Dday> D-{dDay} </Dday>} */}
      <ArchStyledDiv>
        <ArchStyledImg />
      </ArchStyledDiv>
      <Name>김성훈 | 장보경</Name>
      <Introduce>2023년 10월 9일 월요일 오후 2시</Introduce>
      <Where>보테가마지오</Where>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  max-width: 400px;
  background-color: #ffffffff;
  font-family: "MapoFlowerIsland";
  text-align: center;
  margin: 0 auto;
  height: 100%;
  padding: 50px 0;
`;
const Name = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 10px 0;
`;
const Introduce = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 0;
`;
const Where = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0;
`;

const ArchStyledDiv = styled.div`
  width: 100%;
  border: 0px;
`;

const ArchStyledImg = styled.img`
  margin: 10px auto;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  width: 90%;
  border: 0px;
  object-fit: cover;
  content: url("/images/header.jpeg");
`;

const Dday = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1rem;
  z-index: 10;
`;
