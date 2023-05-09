import styled, { css } from "styled-components";
import Button from "/src/button/button";
import Counter from "/src/counter/counter";
import FullPrice from "/src/full-price/full-price";
import Title from "/src/title/title";

const valueStyle = css`
  display: inline-flex;
  text-align: left;
  align-items: center;
  margin-left: ${(props) => props.theme.indent};
  color: ${(props) => props.theme.textColor};
`;

export const StyledProductPage = styled.section`
  padding: ${(props) => props.theme.indent};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: ${(props) => props.theme.font};
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;

export const Header = styled.header`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductWrapper = styled.section`
  padding: 35px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: ${(props) => props.theme.indent};

  @media (${({ theme }) => theme.media.medium_mob}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ProductInfo = styled.div`
  padding: 35px 20px 20px;
  border-left: 1px solid #888;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.theme.indent};

  @media (${({ theme }) => theme.media.medium_mob}){
    border: none;
  }
`;

export const ProductInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ProductInfoDelivery = styled(ProductInfoLine).attrs((props) => ({
  title: props.deliveryDay >= 1 && props.deliveryDay <= 3 ? 'Быстрая доставка' :
    props.deliveryDay >= 4 && props.deliveryDay <= 5 ? 'Средняя нагрузка доставки' : 'Высокая нагрузка доставки'
}))`

    .iconDelivery {
      fill: ${(props) => props.deliveryDay >= 1 && props.deliveryDay <= 3 ? '#00FA9A' :
    props.deliveryDay >= 4 && props.deliveryDay <= 5 ? '#FFD700' : '#e55c5c'};
      margin-bottom: 5px;
    }
`;

export const PageCounter = styled(Counter)`
  ${valueStyle}
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
`;

export const DeliveryValue = styled.span`
  ${valueStyle}
  color:${(props) => props.deliveryDay >= 1 && props.deliveryDay <= 3 ? '#00FA9A' :
    props.deliveryDay >= 4 && props.deliveryDay <= 5 ? '#FFD700' : '#e55c5c'};
  font-weight: 700;
`;

export const Delivery = styled.span`
  ${valueStyle}
  margin: 0;
`;

export const BuyButton = styled(Button)`
  margin: 0 auto;
  width: 45%;
  min-width: 160px;
`;

export const TitleProduct = styled(Title)`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;