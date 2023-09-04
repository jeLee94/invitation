// Gallery.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  transition: 0.3s;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const BeforeArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
`;

const NextArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (currentImage < 0) {
      setCurrentImage(images.length - 1);
    } else if (currentImage >= images.length) {
      setCurrentImage(0);
    }
  }, [currentImage, images.length]);

  return (
    <Container>
      <Image
        src={images[currentImage]}
        alt={`Gallery image ${currentImage + 1}`}
      />

      <LeftArrow onClick={() => setCurrentImage((prev) => prev - 1)}>
        <BeforeArrow />
      </LeftArrow>
      <RightArrow onClick={() => setCurrentImage((prev) => prev + 1)}>
        <NextArrow />
      </RightArrow>
    </Container>
  );
}
