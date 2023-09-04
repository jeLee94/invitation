// Gallery.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

export default function Gallery() {
  const images = [
    "/images/header.jpeg",
    "/images/test.jpeg",
    "/images/header.jpeg",
    "/images/header.jpeg",
    "/images/header.jpeg",
    "/images/header.jpeg",
    "/images/header.jpeg",
    "/images/header.jpeg",
    "/images/header.jpeg",
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
        &lt;
      </LeftArrow>
      <RightArrow onClick={() => setCurrentImage((prev) => prev + 1)}>
        &gt;
      </RightArrow>
    </Container>
  );
}
