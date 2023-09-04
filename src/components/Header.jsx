import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <StyledHeader>
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
  max-width: 600px;
  background-color: #ffffffff;
  font-family: "MapoFlowerIsland";
  text-align: center;
  margin: 0 auto;
  height: 100%;
  padding: 20px 0;
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
  width: 75%;
  border: 0px;
  object-fit: cover;
  content: url("/images/header.jpeg");
`;
