import styled from "styled-components";
import React from "react";

const Thanks = () => {
  return (
    <ThanksContainer>
      <Image />
      <Content>
        서로가 마주보며 다져온 사랑을
        <br />
        <br />
        이제 함께 한 곳을 바라보며
        <br />
        <br />
        걸어갈 수 있는 큰 사랑으로 키우고자 합니다.
        <br />
        <br />
        저희 두 사람이 사랑의 이름으로
        <br />
        <br />
        지켜나갈 수 있게 앞날을
        <br />
        <br />
        축복해 주시면 감사하겠습니다.
      </Content>
      <IntroduceContainer>
        <IntroduceWrapper>
          <Introduce>김환 . 윤은숙의</Introduce>
          <Introduce>아들</Introduce>
          <Introduce>김성훈</Introduce>
        </IntroduceWrapper>
        <ReverseLine />
        <IntroduceWrapper>
          <Introduce>장세탁 . 이인화의</Introduce>
          <Introduce>딸</Introduce>
          <Introduce>장보경</Introduce>
        </IntroduceWrapper>
      </IntroduceContainer>
      {/* <Image /> */}
    </ThanksContainer>
  );
};

export default Thanks;

const ThanksContainer = styled.header`
  max-width: 400px;
  background-color: #fff;
  color: #000;
  font-family: "MapoFlowerIsland";
  text-align: center;
  margin: 0 auto;
  padding: 50px 0;
  height: 100%;
`;

const Image = styled.img`
  margin: 10px auto;
  content: url("/images/sb.png");
  width: 50%;
  border: 0px;
  object-fit: cover;
`;

const ReverseLine = styled.div`
  height: 50px;
  width: 1px;
  background-color: #e1e1e1;
  margin: 10px 0;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 10px 0;
`;
const Content = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 30px 0;
`;
const Introduce = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
`;

const IntroduceWrapper = styled.div`
  width: 100%;
  border: 0px;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
