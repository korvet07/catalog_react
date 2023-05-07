import styled from 'styled-components';

export default styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
`;

// export default function ({ children }) {
// return (
//   <StyledVisuallyHidden>{children}</StyledVisuallyHidden>
// )
// };