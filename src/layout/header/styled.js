import { NavLink } from "react-router-dom";
import styled, { css } from 'styled-components';
import { ACss } from '../../elements/index';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledNav = styled.nav`
  display: flex;
  min-height: 80px;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  color: ${(props) => props.theme.textColor};

  @media (${({ theme }) => theme.media.medium_mob}){
    justify-content: space-between;
  }
`;

export const StyledLinkHeader = styled(NavLink)`
  ${ACss}
  position: relative;

    .basked-value {
      position: absolute;
      font-size: 16px;
      line-height: 100%;
      width: 23px;
      height: 23px;
      color: #ffffff;
      background-color: coral;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 3px;
      right: -5px;
    }

  svg {
    fill: #3F4E65;
  }

  &:hover {
      color:  #FF4500;
  }

  &:hover svg {
    fill:  #FF4500;
    transition: fill 0.5ms ease;
  }
`;

export const WrapperLink = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    transform: none;
    box-shadow: none;

    @media (${({ theme }) => theme.media.medium_mob}){
    flex-direction: column;
    left: 0;
    top: 130px;
    width: 100%;
    position: absolute;
    transition: all 0.5s cubic-bezier(0.1, 0.82, 0.76, 0.96);
    transform: ${(props) => props.burgerStatus ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 6;
    box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.3);
    background:#F0E68C;
    padding: 30px 0;
    }
`;

export const Head = styled.header`
  position: relative;
  background: #ffd700b3;
`;

const burgerOpen = css`
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(-45deg);
`;

export const ButtonBurger = styled.button`
    display: none;
    position: relative;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    background-color: #696969;
    border-radius: 50%;
    cursor: pointer;
    transition:  all 0.8s cubic-bezier(0.1, 0.82, 0.76, 0.96);

    &:hover {
      background: #FF4500;
    }

    &::after {
        position: absolute;
        content: "";
        top: ${(props) => props.burgerStatus ? '0' : '10px'};
        left: ${(props) => props.burgerStatus ? '0' : '10px'};
        width: 15px;
        height: 2px;
        background-color: #ffffff;
        ${(props) => props.burgerStatus ? '' : 'box-shadow: 0 7px #ffffff;'}
        border-radius: 3px;
        ${(props) => props.burgerStatus ? burgerOpen : ''};
        transition:  all 0.3s cubic-bezier(0.1, 0.82, 0.76, 0.96);
    }

    &::before {
        position: absolute;
        content: "";
        top: ${(props) => props.burgerStatus ? '16' : '23'}px;
        left: 10px;
        width: 15px;
        height: 2px;
        background-color: #ffffff;
        border-radius: 3px;
        ${(props) => props.burgerStatus ? 'transform: rotate(45deg);' : ''}
        transition:  all 0.3s cubic-bezier(0.1, 0.82, 0.76, 0.96);
    }

    @media (${({ theme }) => theme.media.medium_mob}) {
      display: flex;
    }
`;

export const WrapperContacts = styled.div`
  display: contents;

  @media (${({ theme }) => theme.media.medium_mob}){
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const LinkBasket = styled(NavLink)`

svg {
    fill: #3F4E65;
  }

  &:hover svg {
    fill:  #FF4500;
    transition: fill 0.5ms ease;
  }
`