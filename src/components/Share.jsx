import { useEffect } from "react";
import { styled } from "styled-components";

export const Share = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "김성훈 🩷 장보경 결혼합니다.",
          description: "10월 9일 월요일 오후 2시",
          imageUrl: "https://i.ibb.co/d012cp1/2023-09-04-10-36-11.png",
          link: {
            mobileWebUrl: "https://invitation-rust.vercel.app/",
            webUrl: "https://invitation-rust.vercel.app/",
          },
        },
        buttons: [
          {
            title: "청첩장 보러가기",
            link: {
              mobileWebUrl: "https://invitation-rust.vercel.app/",
              webUrl: "https://invitation-rust.vercel.app/",
            },
          },
        ],
      });
    }
  };

  const copyLink = () => {
    const link = "https://www.bksh.site/"; // 복사하려는 링크
    const textArea = document.createElement("textarea");
    textArea.value = link;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("링크가 복사되었습니다!");
  };

  // HTML
  <button onclick="copyLink()">링크 복사하기</button>;

  return (
    <>
      <ShareContainer>
        <ShareButton onClick={shareKakao}>
          <KakaoImg src="./images/kakao.png" alt="kakao" />
          카카오톡으로 공유하기
        </ShareButton>
        <ShareButton onClick={copyLink}>
          <LinkImg src="./images/link.png" alt="line" />
          링크 복사하기
        </ShareButton>
      </ShareContainer>

      <CopyRight>
        © 2023. 이정은 All rights reserved.
        <br />
        To bk. congratulations!
      </CopyRight>
    </>
  );
};

const ShareContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2.1875rem 0;
  font-family: "MapoFlowerIsland";
  gap: 15px;
`;

const ShareButton = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
`;

const KakaoImg = styled.img`
  object-fit: cover;
  width: 20px;
  padding-right: 10px;
`;

const LinkImg = styled.img`
  object-fit: cover;
  width: 17px;
  height: 17px;
  padding-right: 10px;
`;

const CopyRight = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0;
  text-align: center;
  margin-top: 20px;
  color: #a7a6a6;
  padding-bottom: 20px;
`;
