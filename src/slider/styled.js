import styled from "styled-components";
import { Swiper } from "swiper/react";
import Button from "/src/button/button";

export const StyledSlider = styled(Swiper)`
  max-width: 400px;
  max-height: 657px;
  margin: 0 auto;
  z-index: 5;
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  max-width: 600px;
  max-height: 400px;
  position: relative;
  justify-items: center;
`;

export const StyledButtonPrev = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

export const StyledButtonNext = styled(StyledButtonPrev)`
  left: auto;
  right: 10px;
`