import styled from "styled-components";
import { Li, Ul,Input } from '../elements';
import Button from '../button/button';

export const ListBasked = styled(Ul)`
  display: flex;
  flex-direction: column;
`;

export const ItemBasked = styled(Li)`
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed #3F4E65;
  padding: 30px;
`;


export const WrapperFeatures = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperCheckout = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

export const CheckoutBasked = styled(Button)`
  background: #6bb431;
`;

export const TotalPrice = styled.div`
  display: inline-block;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); 
  font-weight: 700;
  display: flex;
  align-self: center;
  color: #07318a;
  border-radius: 10px;
  font-family: Helvetica;
`