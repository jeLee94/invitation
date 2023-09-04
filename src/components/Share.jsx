import { useEffect } from "react";
import { styled } from "styled-components";

export const Share = () => {
  useEffect(() => {
    if (window.Kakao) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }, []);

  const handleShareKakaoClick = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "청첩장",
          description: "초대합니다",
          imageUrl: "",
          link: {
            mobileWebUrl: "./",
            webUrl: "./",
          },
        },
      });
    }
  };
  return (
    <ShareKaKaoBtn onClick={handleShareKakaoClick}>
      Kakao로 공유하기
    </ShareKaKaoBtn>
  );
};

const ShareKaKaoBtn = styled.button`
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
