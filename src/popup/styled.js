import styled from "styled-components";
import Button from "/src/button/button";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  z-index: 100;

`;

export const StyledPopup = styled.div`
  position: absolute;
  padding: 20px;
  background-color: #fff;
  min-width: 500px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: 0 25px 50px rgba(0,0,0,.15);
  border-radius: 30px;

  @media (${({ theme }) => theme.media.medium_mob}){
    min-width: 0;
  }
`;

export const Close = styled(Button)`
  position: absolute;
  top: 0;
  right: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  border-bottom: 1px solid black;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;
