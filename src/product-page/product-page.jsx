import React, { useState, useEffect } from "react";
import Code from "/src/code/code";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import Slider from "/src/slider/slider";
import Tabs from "/src/tabs/tabs";
import PopUp from "/src/popup/popup";
import Order from "/src/order/order";
import Accordion from "/src/accordion/accordion";
import iconDelivery from "/src/assets/icon-fast-delivery-.svg"
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  ProductInfoDelivery,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue,
  Delivery,
  TitleProduct
} from "./styled";
import { deliveryDay } from '../mock';
import { HandySvg } from 'handy-svg';
import { Container } from '../layout/styled';
import H4 from '../elements/h4';
import H3 from '../elements/h3';
import Features from '../features/features';

const MAX_TEXT_SIZE = 100;
const COMMENTS_COUNT = 3;

function ProductPage({ product, isShowPopup, setIsShowPopup }) {
  const [productCount, setProductCount] = useState(1);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);
  const [showInfoInAccordion, setShowInfoInAccordion] = useState(false)
  const price = product.price * productCount;
  const oldPrice = product?.oldPrice * productCount;

  useEffect(() => {

    if ((window.matchMedia("(max-width: 780px)").matches)) {
      setShowInfoInAccordion(true);
    } else {
      setShowInfoInAccordion(false);
    }
  }, [showInfoInAccordion, setShowInfoInAccordion]);

  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={
            isShowAllDescription
              ? product?.description
              : product?.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Характеристики",
      content: (
        <Features feature={product.feature}/>
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <Container>
      <StyledProductPage>
        <Header>
          <TitleProduct>{product.name}</TitleProduct>
          <Code>{product.code}</Code>
        </Header>
        <ProductWrapper>
          <Slider images={product.images} />
          <ProductInfo>
            <ProductInfoLine>
              Цена: <PageFullPrice oldPrice={oldPrice} price={price} />
            </ProductInfoLine>
            <ProductInfoLine>
              <span>Страна:</span>
              <H4>{product.country}</H4>
            </ProductInfoLine>
            <ProductInfoLine>
              <span>Производитель:</span>
              <H3>{product.fabricator}</H3>
            </ProductInfoLine>
            <ProductInfoLine>
              Количество:{" "}
              <PageCounter
                value={productCount}
                minValue={1}
                onChange={setProductCount}
              />
            </ProductInfoLine>
            <ProductInfoDelivery deliveryDay={deliveryDay}>
              <Delivery>Доставка:</Delivery>
              <DeliveryValue deliveryDay={deliveryDay}>{product.delivery}</DeliveryValue>
              <HandySvg
                src={iconDelivery}
                width="50"
                height="50"
                className="iconDelivery"
              />
            </ProductInfoDelivery>
            <BuyButton size="large" onClick={() => setIsShowPopup(true)}>
              Купить
            </BuyButton>
            <Popularity count={product.comments.length} />
          </ProductInfo>
        </ProductWrapper>
        {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
        <PopUp
          isShow={isShowPopup}
          onClose={() => setIsShowPopup(false)}
          title="Оформление"
        >
          <Order isShow={isShowPopup} />
        </PopUp>
      </StyledProductPage>
    </Container>
  );
}

export default ProductPage;
