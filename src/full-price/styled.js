import styled from "styled-components";
import Price from "/src/price/price";

export const InnerPrice = styled(Price)`
  margin-left: ${(props) => props.theme.indent};

  @media (${({ theme }) => theme.media.large_tab}) {
    font-size: 22px;
    font-weight: 600;
    line-height: 120%;
  }
  
`;

export const PriceWrapper = styled.span`
  vertical-align: bottom;
  display: inline-block !important;
`;
