import React, { useState, useEffect } from "react";
import { Container } from '../layout/styled';
import Title from '../title/title';
import H3 from '../elements/h3';
import { CheckoutBasked, ItemBasked, ListBasked, TotalPrice, WrapperCheckout } from './styled';
import BaskedCard from '../basked-card/basked-card';
import PopUp from '../popup/popup';
import Order from '../order/order';


export default function Basked({ quantity, setQuantityBaskedProduct, isShowPopup, setIsShowPopup }) {


  const [valuePrice, setValuePrice] = useState()

  const baskedList = Array.isArray(quantity) &&
    quantity.map((product) => (
      <ItemBasked key={product.code}  >
        <BaskedCard product={product} products={quantity} setBaskedProduct={setQuantityBaskedProduct} setValuePrice={setValuePrice} />
      </ItemBasked>
    ));

  return (
    <section>
      <Container>
        <Title>Корзина</Title>
        {baskedList.length ?
          <ListBasked>
            {baskedList}
            <WrapperCheckout>
              <CheckoutBasked size="large" onClick={() => setIsShowPopup(true)}>Оформить заказ</CheckoutBasked>
              <TotalPrice >Итого:&nbsp;<span id="total">{valuePrice}&nbsp;₽</span> </TotalPrice>
            </WrapperCheckout>
            <PopUp
              isShow={isShowPopup}
              onClose={() => setIsShowPopup(false)}
              title="Оформление"
            >
              <Order isShow={isShowPopup} />
            </PopUp>
          </ListBasked>
          : <H3>Ваша корзина пуста- добавьте товары!</H3>}
      </Container>
    </section>
  )
}