import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <StyledHeader>
      {/* <LogoImage /> */}
      <ArchStyledDiv>
        <ArchStyledImg />
      </ArchStyledDiv>
      <Name>성훈 . 보경</Name>
      <Introduce>2023년 10월 9일 월요일 오후 2시</Introduce>
      <Where>보테가마지오</Where>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  max-width: 400px;
  background-color: #33554e;
  color: white;
  font-family: "MapoFlowerIsland";
  text-align: center;
  margin: 0 auto;
  height: 100%;
  padding: 0 0 70px 0;
`;

const LogoImage = styled.img`
  content: url("/images/sb.png");
  width: 60%;
  border: 0px;
  object-fit: cover;
  margin: 0 auto;
`;

const Name = styled.div`
  font-size: 1.8rem;
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
  margin: 30px auto;
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
