import styled from "styled-components";
import React from "react";

const Thanks = () => {
  return (
    <ThanksContainer>
      <Image />
      <Content>
        첫 번째 <span style={{ textShadow: "0 1px 1rem #cd8a1f" }}>가을</span>,
        설레는 첫 만남
        <br />
        <br />
        <br />두 번째{" "}
        <span style={{ textShadow: "0 1px 1rem #cd8a1f" }}>가을</span>, 서로에게
        스며들었고
        <br />
        <br />
        <br />세 번째{" "}
        <span style={{ textShadow: "0 1px 1rem #cd8a1f" }}>가을</span>, 예쁜
        꿈을 꾸게 되었습니다.
        <br />
        <br />
        <br />
        나란히 두손 꼭 잡고 걸어갈 그 길을
        <br />
        <br />
        <br />
        하나가 되는 순간 함께{" "}
        <span style={{ textShadow: "0 1px 1rem #f77878" }}>축복</span>해주세요.
        <br />
        <br />
        <br />
      </Content>
      <InviImg />
      <IntroduceContainer>
        <IntroduceWrapper>
          <Introduce>
            <span style={{ color: "#000" }}>김환 . 윤은숙</span>의
          </Introduce>
          <Introduce>아들</Introduce>
          <Introduce>
            <span style={{ color: "#000", fontSize: "1.1rem" }}>김성훈</span>
          </Introduce>
        </IntroduceWrapper>
        <ReverseLine />
        <IntroduceWrapper>
          <Introduce>
            <span style={{ color: "#000" }}>장세탁 . 이인화</span>의
          </Introduce>
          <Introduce>딸</Introduce>
          <Introduce>
            <span style={{ color: "#000", fontSize: "1.1rem" }}>장보경</span>
          </Introduce>
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
  color: #3e3e3e;
  font-family: "GangwonEdu_OTFLightA";
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
  height: 60px;
  width: 1px;
  background-color: #e1e1e1;
  margin: 10px 0;
`;

const Content = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 30px 0;
`;
const Introduce = styled.div`
  font-size: 1rem;
  font-weight: 500;
  padding: 5px 0;
  color: #a7a6a6;
`;

const IntroduceWrapper = styled.div`
  width: 100%;
  border: 0px;
  font-weight: 500;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const InviImg = styled.img`
  margin: 10px auto;
  content: url("/images/invi.jpeg");
  width: 70%;
  border: 0px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;
