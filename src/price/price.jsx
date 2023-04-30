import styled from "styled-components";

export const Price = styled.span.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  color:#07318a;
`;

export default Price;
