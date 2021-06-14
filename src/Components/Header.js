import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled, { css } from "styled-components/macro";

const Header = ({ slides }) => {
  // REACT HOOKS
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeOut = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeOut.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log(current);
  };

  return (
    <HeaderSection>
      <HeaderWrapper>
        {slides.map((slide, index) => {
          return (
            <HeaderSlide key={index}>
              {index === current && (
                <HeaderSlider>
                  <HeaderImage src={slide.image} alt={slide.alt} />
                </HeaderSlider>
              )}
            </HeaderSlide>
          );
        })}
        <SliderButtons>
          <NumberWrapper>
            <PrevArror onClick={prevSlide} />
            <PrevNumber>{current === 0 ? length - 1 : current - 1}</PrevNumber>
            <CurrentNumber>{current}</CurrentNumber>
            <NextNumber>{current === length - 1 ? 0 : current + 1}</NextNumber>
            <NextArror onClick={nextSlide} />
          </NumberWrapper>
        </SliderButtons>
      </HeaderWrapper>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.section`
  height: 100vh;
  position: absolute;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeaderSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeaderSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const ArrorButtons = css`
  width: 90px;
  height: 90px;
  cursor: pointer;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
    transfor: scale(1.05);
  }
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 350px;
  left: 350px;
  display: flex;
  z-index: 10;
  @media screen and (max-width: 768px) {
    bottom: 100px;
    left: 200px;
  }
`;
const PrevArror = styled(MdKeyboardArrowLeft)`
  ${ArrorButtons}
`;
const NextArror = styled(MdKeyboardArrowRight)`
  ${ArrorButtons}
`;

const NumberWrapper = styled.div`
  font-family: Poppins;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
  top: 0px;
  text-align: center;
  @media screen and (max-width: 768px) {
    top: 250px;
    left: 60px;
  }
`;
const PrevNumber = styled.div`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
  text-align: center;
`;
const CurrentNumber = styled.div`
  font-family: Poppins;
  font-size: 80px;
  font-weight: 900;
  margin: 10px;
  text-align: center;
`;
const NextNumber = styled.div`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
  text-align: center;
`;
