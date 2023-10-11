import React, { useState, useEffect } from 'react';
import { FilterTitle, StyledButtonFilter, StyledButtonSort, StyledCatalogList, StyledFieldset, StyledFilter, StyledFilterForm, StyledInputPrice, StyledLegend, StyledSort, StyledWrapper, WrapperInputItem, WrapperInputPrice, WrapperInputsList } from './styled';
import Catalog from '../catalog/catalog';
import Input from '../elements/input';

export default function FilterSort({ products, setQuantityBaskedProduct, quantityBaskedProduct }) {
  const filterProducts = [];

  const [filterChange, setChangeState] = useState(filterProducts);
  const [dataState, setDataState] = useState(products);

  useEffect(() => {
    document.forms.filter.addEventListener('change', (evt) => {

      if (evt.target.checked && evt.target.closest('.fabricator')) {
        const filterProducts = dataState.slice().filter((item) => item.fabricator === evt.target.name);
        setChangeState(filterChange.concat(filterProducts));
        setDataState(filterChange);
      } else if (evt.target.checked && evt.target.closest('.protection')) {
        const filterProducts = dataState.slice().filter((item) => item.feature.protection === evt.target.name);
        setChangeState(filterChange.concat(filterProducts));
        setDataState(filterChange);
      } else if (evt.target.checked && evt.target.closest('.plinth_type')) {
        const filterProducts = dataState.slice().filter((item) => item.feature.plinth_type === evt.target.name);
        setChangeState(filterChange.concat(filterProducts));
        setDataState(filterChange);
      } else {
        setChangeState(filterProducts);
        setDataState(filterChange);
      }
    })
  }, [filterChange, setChangeState, dataState])

  return (
    <StyledWrapper>
      <StyledFilter>
        <FilterTitle>Подбор по параметрам</FilterTitle>
        <StyledFilterForm name="filter">
          <StyledFieldset>
            <StyledLegend>Цена ₽</StyledLegend>
            <WrapperInputPrice>
              <StyledInputPrice type="number" placeholder="min" name="min" />
              <StyledInputPrice type="number" placeholder="max" name="max" />
            </WrapperInputPrice>
          </StyledFieldset>
          <StyledFieldset className="fabricator">
            <StyledLegend>Производитель</StyledLegend>
            <WrapperInputsList>
              <WrapperInputItem>
                <Input type="checkbox" name="Azzardo" /><span>Azzardo</span>
              </WrapperInputItem>
              <WrapperInputItem>
                <Input type="checkbox" name="Banci" /><span>Banci</span>
              </WrapperInputItem>
              <WrapperInputItem>
                <Input type="checkbox" name="Chiaro" /><span>Chiaro</span>
              </WrapperInputItem>
            </WrapperInputsList>
          </StyledFieldset>
          <StyledFieldset className="protection">
            <StyledLegend>Защита</StyledLegend>
            <WrapperInputsList>
              <WrapperInputItem>
                <Input type="checkbox" name="IP20" /><span>IP20</span>
              </WrapperInputItem>
              <WrapperInputItem>
                <Input type="checkbox" name="IP21" /><span>IP21</span>
              </WrapperInputItem>
              <WrapperInputItem>
                <Input type="checkbox" name="IP44" /><span>IP44</span>
              </WrapperInputItem>
            </WrapperInputsList>
          </StyledFieldset>
          <StyledFieldset className="plinth_type">
            <StyledLegend>Тип цоколя</StyledLegend>
            <WrapperInputsList>
              <WrapperInputItem>
                <Input type="checkbox" name="E14" /><span>E14</span>
              </WrapperInputItem>
              <WrapperInputItem>
                <Input type="checkbox" name="E27" /><span>E27</span>
              </WrapperInputItem>
            </WrapperInputsList>
          </StyledFieldset>
          <StyledButtonFilter size="large">Показать</StyledButtonFilter>
          <StyledButtonFilter size="large" type="reset">Сбросить</StyledButtonFilter>
        </StyledFilterForm>
      </StyledFilter>
      <StyledCatalogList>
        <StyledSort>
          <StyledButtonSort size="medium">По возрастанию цены</StyledButtonSort>
          <StyledButtonSort size="medium">По убыванию цены</StyledButtonSort>
        </StyledSort>
        <Catalog setQuantityBaskedProduct={setQuantityBaskedProduct} quantityBaskedProduct={quantityBaskedProduct} products={dataState} />
      </StyledCatalogList>
    </StyledWrapper>
  )
}