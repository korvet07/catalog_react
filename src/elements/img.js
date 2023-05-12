import styled from "styled-components";

export default styled.img.attrs(() => ({
  loading: "lazy"
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* max-width: 400px; */
  margin: 0 auto;
`;
