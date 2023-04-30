import styled from "styled-components";
import { Ul, Li } from "/src/elements";
import { Link } from "react-router-dom";

export const List = styled(Ul)`
  margin-top: ${(props) => props.theme.indent};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 35px;
  text-align: center;
`;

export const ListItem = styled(Li)`
  width: 100%;
  height: 100%;
  border: 1px solid #A9A9A9;
  padding: 5px;
  text-align: center;
  border-radius: 13px; 

  &:hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.textColor};

    img {
      border-radius: 13px;
    };
  &:hover {
    opacity: 0.7;
  }
`;
