import React, { useState } from "react";
import styled from "styled-components";

const Account = () => {
  const [showDetails, setShowDetails] = useState(false); // 계좌 정보 표시 여부
  const [showDetails2, setShowDetails2] = useState(false); // 계좌 정보 표시 여부

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(`${name}님의 계좌번호 ${text.split(" ")[0]}가 복사되었습니다.`);
      },
      () => {
        console.error("복사 실패");
      }
    );
  };

  return (
    <AccountWrap>
      <Flower />
      <Title>
        <span>마음 전하실 곳</span>
      </Title>
      <AccountItem>
        <AccountTitle onClick={() => setShowDetails(!showDetails)}>
          <Section>신랑측 계좌번호</Section>
          <Arrow>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </Arrow>
        </AccountTitle>
        {showDetails && (
          <>
            <AccountContainer>
              <AccountText>
                신한 | 110-498-232067 <br />
                김성훈
                <CopyButton
                  onClick={() =>
                    copyToClipboard("110498232067 신한 김성훈", "김성훈")
                  }
                >
                  복사하기
                </CopyButton>
              </AccountText>
            </AccountContainer>
            <AccountContainer>
              <AccountText>
                SC제일 | 100-20-023571 <br />
                김환(부)
                <CopyButton
                  onClick={() =>
                    copyToClipboard("10020023571 제일 김환", "김환")
                  }
                >
                  복사하기
                </CopyButton>
              </AccountText>
            </AccountContainer>
            <AccountContainer>
              <AccountText>
                신한 | 110-407-444129 <br />
                윤은숙(모)
                <CopyButton
                  onClick={() =>
                    copyToClipboard("110407444129 신한 윤은숙", "윤은숙")
                  }
                >
                  복사하기
                </CopyButton>
              </AccountText>
            </AccountContainer>
          </>
        )}
      </AccountItem>
      <AccountItem>
        <AccountTitle onClick={() => setShowDetails2(!showDetails2)}>
          <Section>신부측 계좌번호</Section>
          <Arrow>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </Arrow>
        </AccountTitle>
        {showDetails && (
          <>
            <AccountContainer>
              <AccountText>
                하나 | 542-910076-75507 <br />
                장보경
                <CopyButton
                  onClick={() =>
                    copyToClipboard("54291007675507 하나 장보경", "장보경")
                  }
                >
                  복사하기
                </CopyButton>
              </AccountText>
            </AccountContainer>
            <AccountContainer>
              <AccountText>
                수협 | 047-03-038232 <br />
                장세탁(부)
                <CopyButton
                  onClick={() =>
                    copyToClipboard("04703038232 수협 장세탁", "장세탁")
                  }
                >
                  복사하기
                </CopyButton>
              </AccountText>
            </AccountContainer>
            <AccountContainer>
              <AccountText>
                농협 | 356-0647-997413 <br />
                이인화(모)
                <CopyButton
                  onClick={() =>
                    copyToClipboard("3560647997413 농협 이인화", "이인화")
                  }
                >
                  복사하기
                </CopyButton>
              </AccountText>
            </AccountContainer>
          </>
        )}
      </AccountItem>
    </AccountWrap>
  );
};

export default Account;
export const AccountWrap = styled.div`
  font-family: "Pretendard-Regular";
  margin: 1px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  svg {
    width: 15px;
    height: 14px;
  }

  > .content {
    margin: 0 1rem;
    font-size: 0.9rem;
    line-height: 1.6rem;
  }
`;

export const Subtitle = styled.div`
  display: inline-block;
  content: "";
  width: 24px;
  height: 38px;
  background-image: url(/mcard/1006/icon_flower_01.png?6bde95268944da57c8346f559bd5a06e);
  background-size: cover;
  filter: hue-rotate(330deg) saturate(0.15);

  &.orange {
    width: 20px;
    height: 36px;
    background-image: url(/mcard/1006/icon_flower_03.png?964cf7c30cefb913efa9ac36ed4b532a);
    filter: none;
  }
`;

export const AccountItem = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    border: 0;
  }
`;

export const AccountTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  /* padding: 8px 0; */
  text-align: center;
  cursor: pointer;
  z-index: 999;
  color: var(--text-dark-color);
  background: var(--third-bg-color);
  border-radius: 6px;

  &.expand {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  > .arrow {
    position: absolute;
    top: 9px;
    right: 18px;
    transform: rotate(0);
    transition-duration: 0.5s;
    transform-origin: center center;
  }

  > .arrow.rotate {
    top: 8px;
    transform: rotate(180deg);
    transition-duration: 0.5s;
  }
`;

export const AccountContainer = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-out;
  background: #fff;
  border: 0.5px solid rgba(135, 134, 134, 0.05);
  width: 317px;
`;

export const AccountText = styled.div`
  color: #494949;
  line-height: 1.6rem;
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-out;
  font-size: min(0.85rem, 16px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2) {
    border-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  > .inner {
    padding: 0.75rem 0 0.75rem 0.85rem;
    line-height: 26px;
    letter-spacing: 0;
    text-align: left;
    background: var(--fourth-bg-color);
  }

  .btn-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 60px;
    cursor: pointer;
    padding: 0 4px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const CopyButton = styled.div`
  width: 54px;
  cursor: pointer;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #e1e1e1;
  color: #333;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 24px;

  svg {
    margin: -2px 2px 0 0;
    height: 12px;
    width: 12px;
    vertical-align: middle;
    fill: #999;
  }

  &.kakaopay {
    top: calc(0.75rem + 28px);
    background: #fbdf1d;
    border-color: #fbdf1d;
    font-size: max(11px, 0.6rem);

    img {
      vertical-align: middle;
      width: 38px;
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;

  right: 20px;
  svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    fill: #999;
  }
`;

export const Title = styled.div`
  font-family: "MapoFlowerIsland";
  font-size: 1.2rem;
  font-weight: 700;
  padding: 20px 0;
  text-align: center;
`;

export const Section = styled.div`
  font-family: "MapoFlowerIsland";
  width: 320px;
  height: 45px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  background-color: #9cc0ac;
  color: #042212;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flower = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  content: url("/icon/flower.png");
`;
