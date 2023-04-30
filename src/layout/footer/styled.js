import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Container } from '../styled';

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
`

export const StyledFooter = styled.footer`
  background: #ffd700b3;
`;

export const WrapperSocial = styled.div`
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SocialLink = styled(Link)`
  svg {
    fill: #ffffff;
  }
  
  &:hover svg {
    fill: coral;
    transform: scale(1.2);
  }
`;

export const Copyright = styled.span`
  min-width: 148px;
  font-size: 20px;
  font-weight: 200;
  vertical-align: middle;
  text-align: right;
`;