import React from "react";
import { Image } from "/src/elements";
import Title from "/src/title/title";
import FullPrice from "/src/full-price/full-price";
import { List, ListItem, StyledLink } from "./styled";
import { Container } from '../layout/styled';

export default function Catalog({ products }) {
  return (
    <Container>
      <Title>Каталог</Title>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.code}>
              <StyledLink to={`/product/${product.code}`}>
                <Image src={product.images[0]} />
                <h2>{product.name}</h2>
                <span>
                  <FullPrice
                    oldPrice={product.oldPrice}
                    price={product.price}
                  />
                </span>
              </StyledLink>
            </ListItem>
          ))}
      </List>
    </Container>
  );
}
