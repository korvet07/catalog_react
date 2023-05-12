import React, { useState } from 'react';
import { FilterTitle, StyledButtonSort, StyledCatalogList, StyledFieldset, StyledFilter, StyledFilterForm, StyledInputPrice, StyledLegend, StyledSort, StyledWrapper, WrapperInputPrice } from './styled';
import Catalog from '../catalog/catalog';

export default function FilterSort({ products, setQuantityBaskedProduct, quantityBaskedProduct }) {
  const [dataState, setDataState] = useState(products);

  return (
    <StyledWrapper>
      <StyledFilter>
      <FilterTitle>Подбор по параметрам</FilterTitle>
        <StyledFilterForm>
          <StyledFieldset>
            <StyledLegend>Цена ₽</StyledLegend>
            <WrapperInputPrice>
              <StyledInputPrice type="number" placeholder="min" name="min" />
              <StyledInputPrice type="number" placeholder="max" name="max" />
            </WrapperInputPrice>
          </StyledFieldset>
        </StyledFilterForm>
      </StyledFilter>
      <StyledCatalogList>
        <StyledSort>
          <StyledButtonSort size="medium">По возрастанию цены</StyledButtonSort>
          <StyledButtonSort size="medium">По убыванию цены</StyledButtonSort>
        </StyledSort>
        <Catalog setQuantityBaskedProduct={setQuantityBaskedProduct} quantityBaskedProduct={quantityBaskedProduct} products={products} />
      </StyledCatalogList>
    </StyledWrapper>
  )
}