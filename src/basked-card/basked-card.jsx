import React, { useState, useEffect } from "react";
import { WrapperPrice } from '../catalog/styled';
import { Image } from '../elements';
import { WrapperFeature } from '../features/styled';
import { PageCounter, PageFullPrice, ProductInfoLine } from '../product-page/styled';
import H4 from '../elements/h4';
import { ButtonDel, WrapperImg } from './styled';
import { sumPrice } from '../utils/random';

export default function BaskedCard({ product, products, setBaskedProduct, setValuePrice }) {
  const arr = [];
  const [productCount, setProductCount] = useState(1);
  useEffect(() => {
    let elems = [];
    const elements = document.querySelectorAll('.value-price');
    for (const elem of elements) {
      elems.push(parseInt(elem.textContent));

    }
    setValuePrice(sumPrice(elems));

  }, [productCount, products])

  const handlerDel = () => {
    const idx = products.findIndex((elem) => elem.code === product.code);
    products.splice(idx, 1);
    setBaskedProduct(arr.concat(products));
    localStorage.setItem('data-basked', JSON.stringify(products));
  }

  return (
    <>
      <WrapperImg>
        <Image src={product.images[0]} />
      </WrapperImg>
      <WrapperFeature>
        <h2 style={{ marginTop: 0 }}>{product.name}</h2>
        <ProductInfoLine>
          <span>Страна:</span>
          <H4>{product.country}</H4>
        </ProductInfoLine>
        <ProductInfoLine>
          <span>Производитель:</span>
          <H4>{product.fabricator}</H4>
        </ProductInfoLine>
        <ProductInfoLine>
          <span>Интерьер:</span>
          <H4>{product.feature.interior}</H4>
        </ProductInfoLine>
        <ProductInfoLine>
          <span>Площадь освещения:</span>
          <H4>{product.feature.lighting_area}</H4>
        </ProductInfoLine>
        <ProductInfoLine>
          <span>Защита:</span>
          <H4>{product.feature.protection}</H4>
        </ProductInfoLine>
      </WrapperFeature>
      <WrapperPrice>
        <ProductInfoLine>
          Цена: <PageFullPrice oldPrice={product?.oldPrice * productCount} price={product.price * productCount} />
        </ProductInfoLine>
        <ProductInfoLine>
          Количество:{" "}
          <PageCounter
            value={productCount}
            minValue={1}
            onChange={setProductCount}
          />
        </ProductInfoLine>
        <ButtonDel size="small" onClick={handlerDel}>Удалить из корзины</ButtonDel>
      </WrapperPrice>
    </>)
}