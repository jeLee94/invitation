// Contact.js

import styled from "styled-components";

const ContactWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 0;
  font-family: "GangwonEdu_OTFLightA";
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  padding: 20px 0 5px 0;
  text-align: center;
  font-family: "MapoFlowerIsland";
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
`;

const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Icon = styled.a`
  margin: 0 5px;
  color: black;

  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: darkgray;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  border: none;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  border-bottom: none;

  &:last-child {
    border-bottom: none;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-top: none;

  &:first-child {
    border-top: none;
  }
`;

const Call = styled.img`
  content: url("./icon/call.png");
  border: none;
  cursor: pointer;
  text-decoration: underline;
  margin: 0 auto;
  width: 18px;
  height: 18px;
  background-color: transparent;
`;

const SMS = styled.a`
  background-color: transparent;
  margin: 0 auto;
  content: url("./icon/message.png");
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  color: blue;

  &:hover {
    color: darkblue;
  }
`;

const Name = styled.div`
  font-size: 1rem;
  font-weight: 300;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  color: ${({ label }) => (label.startsWith("신랑") ? "#008cff" : "#eb9494")};
`;

export default function Contact() {
  const contacts = {
    신랑: {
      이름: "김성훈",
      전화: "01072826261",
    },
    신랑아버지: {
      이름: "김환",
      전화: "01022814145",
    },
    신랑어머니: {
      이름: "윤은숙",
      전화: "01086326261",
    },
    신부: {
      이름: "장보경",
      전화: "01067889782",
    },
    신부아버지: {
      이름: "장세탁",
      전화: "01052598227",
    },
    신부어머니: {
      이름: "이인화",
      전화: "01071479782",
    },
  };
  return (
    <ContactWrapper>
      <div style={{ paddingBottom: "30px" }}>
        <SubTitle>C O N T A C T</SubTitle>
        <Title>연 락 하 기</Title>
      </div>
      <Container>
        {Object.entries(contacts).map(([key, value], index) => {
          return (
            <Section key={index}>
              <Row>
                <Name label={key}>{key}</Name>
                <Name label={key}>{value.이름}</Name>
                <Call label={key} href={`tel:${value.전화}`} />
                <SMS href={`sms:${value.전화}`} />
              </Row>
            </Section>
          );
        })}
      </Container>
    </ContactWrapper>
  );
}
