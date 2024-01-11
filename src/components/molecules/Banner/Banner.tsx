import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

import { ExploreTourButton } from "../../atoms/Button/Button";
import { MainTitle } from "../../atoms/Title/Title";

import back1 from "../../../assets/images/Property1.png";
import back2 from "../../../assets/images/Property2.png";
import back3 from "../../../assets/images/Property3.png";

const Banner = () => {
  const photos = useMemo(() => [back1, back2, back3], []);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [nextPhotoIndex, setNextPhotoIndex] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const preloadImages = async () => {
      await Promise.all(
        photos.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
            })
        )
      );
      if (isMounted) {
        setIsLoaded(true);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [photos]);

  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setNextPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isLoaded, photos.length]);

  const handleScroll = () => {
    const cardsSection = document.getElementById("cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <BannerContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex]})`,
          opacity: 1,
        }}
      />
      <BackgroundImage
        style={{
          backgroundImage: `url(${photos[nextPhotoIndex]})`,
          opacity: 0,
          transition: "opacity 0.9s ease-in-out",
        }}
      />
      <ContentContainer>
        <MainTitle />
        <ExploreTourButton onClick={handleScroll} />
      </ContentContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  text-align: center;
`;

export default Banner;
