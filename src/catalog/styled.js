import styled from "styled-components";
import { Ul, Li } from "/src/elements";
import { Link } from "react-router-dom";
import Button from '../button/button';

export const List = styled(Ul)`
  margin-top: ${(props) => props.theme.indent};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 35px;
  text-align: center;
  padding: 50px 0;

  @media (${({ theme }) => theme.media.large_tab}) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    
  }

  @media (${({ theme }) => theme.media.medium_mob}) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled(Li)`
  display: flex;
  flex-direction: column;

  border: 1px solid #A9A9A9;
  padding: 5px;
  text-align: center;
  border-radius: 13px; 

  &:hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColor};

    img {
      border-radius: 13px;
      height: 90%;
    };

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledBaskedButton = styled(Button)`
  background: #6bb431;
  text-decoration: none;
`;
export const WrapperPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

`;