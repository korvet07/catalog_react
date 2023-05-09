import React, { useState, useEffect } from "react";
import { Image } from "/src/elements";
import Title from "/src/title/title";
import FullPrice from "/src/full-price/full-price";
import { StyledBaskedButton, List, ListItem, StyledLink, WrapperPrice } from "./styled";
import { Container } from '../layout/styled';

function BaskedButton({ product, children, setQuantityBaskedProduct, quantityBaskedProduct }) {
  let baskedProduct = [];
  const [isDisable, setIsDisable] = useState(false);
  useEffect(() => {
    if (quantityBaskedProduct?.find((elem) => elem.code === product.code)) {
      setIsDisable(true);
    }
  }, [isDisable])

  const handlerClickBaskedButton = () => {
    setIsDisable(true);
    if (!quantityBaskedProduct?.length) {
      baskedProduct.push(product);
      setQuantityBaskedProduct(baskedProduct);
      localStorage.setItem('data-basked', JSON.stringify(quantityBaskedProduct));
    } else if (!quantityBaskedProduct?.find((elem) => elem.code === product.code)) {
      quantityBaskedProduct.push(product);
      setQuantityBaskedProduct(baskedProduct.concat(quantityBaskedProduct));
      localStorage.setItem('data-basked', JSON.stringify(quantityBaskedProduct));
    }
  }

  return (
    <StyledBaskedButton disabled={isDisable} size="medium" onClick={handlerClickBaskedButton}>{children}</StyledBaskedButton>
  )
}

export default function Catalog({ products, setQuantityBaskedProduct, quantityBaskedProduct }) {

  const catalogList = Array.isArray(products) &&
    products.map((product) => (
      <ListItem key={product.code}>
        <StyledLink to={`/product/${product.code}`}>
          <Image src={product.images[0]} />
          <h2 style={{ marginTop: 0 }}>{product.name}</h2>
        </StyledLink>
        <WrapperPrice>
          <FullPrice
            oldPrice={product.oldPrice}
            price={product.price}
          />
          <BaskedButton product={product} quantityBaskedProduct={quantityBaskedProduct} setQuantityBaskedProduct={setQuantityBaskedProduct}>В корзину</BaskedButton>
        </WrapperPrice>
      </ListItem>
    ));

  return (
    <section>
      <Container>
        <Title>Каталог</Title>
        {catalogList.length ?
          <List>
            {catalogList}
          </List>
          : null}
      </Container>
    </section>
  );
}
