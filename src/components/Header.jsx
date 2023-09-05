import styled from "styled-components";
import React from "react";

//html 띄어쓰기
// &23b; ?

const Header = () => {
  return (
    <StyledHeader>
      <IntroduceWrapper>
        <Date>
          23 <Line />
          10
          <Line /> 09
        </Date>
        <Introduce>
          M &nbsp;&nbsp;O&nbsp;&nbsp;N&nbsp;&nbsp; D &nbsp;&nbsp;A&nbsp;&nbsp; Y
        </Introduce>
      </IntroduceWrapper>
      <ArchStyledDiv>
        <ArchStyledImg />
      </ArchStyledDiv>
      <Name>
        김성훈 <ShortLine /> 장보경
      </Name>
      <Where>2023년 10월 9일 월요일 오후 2시</Where>
      <Where>보테가마지오 서울숲 G층(B2)</Where>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  max-width: 400px;
  background-color: #2a4741;
  color: white;
  font-family: "GangwonEdu_OTFLightA";
  text-align: center;
  margin: 0 auto;
  height: 100%;
  padding: 0 0 70px 0;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 50px 0 20px 0;
  margin: 0 auto;
`;

const Line = styled.div`
  height: 30px;
  background-color: #fff;
  width: 1px;
  display: flex;
  margin: 3px 15px 0 15px;
`;

const Date = styled.div`
  margin: 0 auto;

  font-weight: bold;
  font-size: 2rem;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 500;
  font-family: "BookkMyungjo-Bd";
  text-shadow: 0 0 17px #e0ab26b4;
`;

const Introduce = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding: 0;
  font-family: "MapoFlowerIsland";
`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  text-shadow: 0 0 17px #e0ab26b4;
`;

const ShortLine = styled.div`
  height: 20px;
  background-color: #fff;
  width: 1px;
  display: flex;
  margin: 3px 20px;
`;

const Where = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  padding: 6px 0;
  color: #dcdcdc;
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
  content: url("/images/16.jpeg");
  filter: grayscale(100%);
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
