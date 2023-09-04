// Gallery.js
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 30px 0 0 0;
  margin: 30px auto;
  font-family: "MapoFlowerIsland";
  background-color: #fff;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 20px 0;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  scroll-behavior: smooth;
  transition: 0.5s ease;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
  transition: 0.5s ease;
`;

const Arrow = styled.button`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  transition: 0.5s ease;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
  transition: left 0.5s ease;
`;

const BeforeArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 20L7 12L15 4"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const RightArrow = styled(Arrow)`
  right: 10px;
  transition: right 0.5s ease;
`;

const NextArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="scale(-1, 1) translate(-24, 0)">
        <path
          d="M15 20L7 12L15 4"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default function Gallery() {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
  ];

  const myRef = useRef(null);

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;
    //slide.offsetWidth -> className app의 width 크기(margin을 제외한 border,padding 크기 까지)
    //slide.scrollLeft -> 요소의 수평 스크롤 위치를 나타낸다
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth - 10) {
      slide.scrollLeft = 0;
    }
  };

  const [autoSlide, setAutoSlide] = useState(true);
  const timerRef = useRef(null);
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        if (myRef.current) {
          nextClick();
        }
      }, 3000);
    }

    return () => clearInterval(interval); // cleanup to prevent memory leaks
  }, [autoSlide]);

  const handleArrowClick = (direction) => {
    setAutoSlide(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setAutoSlide(true);
    }, 3000);

    if (direction === "prev") {
      prevClick();
    } else {
      nextClick();
    }
  };

  return (
    <Container>
      <SubTitle>G A L L E R Y</SubTitle>
      <Title>웨딩 갤러리</Title>
      <ImageContainer ref={myRef}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Gallery image ${index + 1}`} />
        ))}
      </ImageContainer>

      <LeftArrow onClick={() => handleArrowClick("prev")}>
        <BeforeArrow />
      </LeftArrow>
      <RightArrow onClick={() => handleArrowClick("next")}>
        <NextArrow />
      </RightArrow>
    </Container>
  );
}
