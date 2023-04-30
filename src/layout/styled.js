import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`;

export const Container = styled.div`
    padding: 0 ${(props) => props.theme.indent};
    max-width: 1200px;
    margin: 0 auto;
  `