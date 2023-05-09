import { StyledLink, LinkNav, WrapperLink, Head, ButtonBurger, WrapperContacts, LinkBasket, StyledNav, StyledLinkHeader } from './styled';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Logo } from '/src/logo/logo';
import iconTel from '/src/assets/phone-call.svg';
import iconEmail from '/src/assets/email.svg'
import iconBasket from '/src/assets/basket.svg'
import { HandySvg } from 'handy-svg';
import { Container } from '../styled';
import { VisuallyHidden } from '../../elements/index';

function BaskedLink({ quantity }) {
  return (
    <StyledLinkHeader to={`/basked`}>
      <HandySvg
        src={iconBasket}
        width="30"
        height="30"
      />
      {quantity?.length ? <span className="basked-value">{quantity.length}</span> : null}
    </StyledLinkHeader>
  )
}

export default function Header({ quantity }) {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Head>
      <Container>
        <StyledNav>
          <ButtonBurger burgerStatus={burgerStatus} onClick={() => setBurgerStatus(!burgerStatus)}>
            <VisuallyHidden>Открыть/Закрыть бургер меню</VisuallyHidden>
          </ButtonBurger>
          <StyledLinkHeader to="/">
            <Logo />
          </StyledLinkHeader>
          <WrapperLink burgerStatus={burgerStatus}>
            <StyledLinkHeader to="#">Главная</StyledLinkHeader>
            <StyledLinkHeader to="/">Каталог</StyledLinkHeader>
            <StyledLinkHeader to="#">О нас</StyledLinkHeader>
            <StyledLinkHeader to="#">Контакты</StyledLinkHeader>
          </WrapperLink>
          <WrapperContacts>
            <BaskedLink quantity={quantity} />
            <StyledLinkHeader as="a" href={`tel:+74950005252`}>
              <HandySvg
                src={iconTel}
                width="25"
                height="25"
              />
            </StyledLinkHeader>
            <StyledLinkHeader as="a" href={`mailto:info@sd.ru`}>
              <HandySvg
                src={iconEmail}
                width="25"
                height="25"
              />
            </StyledLinkHeader>
          </WrapperContacts>
        </StyledNav>
      </Container>
    </Head>
  )
};
