import React from 'react';
import FilterSort from '../filter-sort/filter-sort';
import { Container } from '../layout/styled';
import Title from "/src/title/title";
import { StyledCatalogTitle } from './styled';

export default function CatalogPage({ products, setQuantityBaskedProduct, quantityBaskedProduct }) {
  return (
    <section>
      <Container>
      <StyledCatalogTitle>Каталог</StyledCatalogTitle>
        <FilterSort setQuantityBaskedProduct={setQuantityBaskedProduct} quantityBaskedProduct={quantityBaskedProduct} products={products} />
      </Container>
    </section>
  )
}