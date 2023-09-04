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
          title: "title",
          description: "설명",
          imageUrl: "이미지 url",
          link: {
            mobileWebUrl: "https://invitation-rust.vercel.app/",
            webUrl: "https://invitation-rust.vercel.app/",
          },
        },
        buttons: [
          {
            title: "title",
            link: {
              mobileWebUrl: "https://invitation-rust.vercel.app/",
              webUrl: "https://invitation-rust.vercel.app/",
            },
          },
        ],
      });
    }
  };

  return (
    <div>
      <ShareKaKaoBtn onClick={shareKakao} />
    </div>
  );
};

const ShareKaKaoBtn = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 50px auto;
  cursor: pointer;
`;
