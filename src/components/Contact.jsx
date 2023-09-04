// Contact.js

import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
  font-family: "MapoFlowerIsland";
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 10px 0;
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

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
`;

export default function Contact() {
  return (
    <Container>
      <Title>Contact</Title>
      <ContactTitle>
        신랑에게 연락하기
        <Icon href="tel:+821012345678">📞</Icon>
        <Icon href="YOUR_KAKAOTALK_LINK_HERE">💬</Icon>
      </ContactTitle>

      <ContactTitle>
        신부에게 연락하기
        <Icon href="tel:+821098765432">📞</Icon>
        <Icon href="YOUR_KAKAOTALK_LINK_FOR_BRIDE">💬</Icon>
      </ContactTitle>
      <Wrapper>
        <ParentContainer>
          신랑측 혼주
          <Icon href="tel:+821098765432">📞</Icon>
          <Icon href="YOUR_KAKAOTALK_LINK_FOR_BRIDE">💬</Icon>
        </ParentContainer>
        <ParentContainer>
          신부측 혼주
          <Icon href="tel:+821098765432">📞</Icon>
          <Icon href="YOUR_KAKAOTALK_LINK_FOR_BRIDE">💬</Icon>
        </ParentContainer>
      </Wrapper>
    </Container>
  );
}
