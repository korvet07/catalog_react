import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: ${(props) => props.maxWidth}px;
`;

export default Image;
