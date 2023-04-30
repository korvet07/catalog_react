import { Nav, StyledLink, LinkNav, WrapperLink, Head } from './styled';
import { NavLink } from "react-router-dom";
import { Logo } from '/src/logo/logo';
import iconTel from '/src/assets/phone-call.svg';
import iconEmail from '/src/assets/email.svg'
import iconBasket from '/src/assets/basket.svg'
import { HandySvg } from 'handy-svg';
import { Container } from '../styled';


export default function Header() {

  return (
    <Head>
      <Container>
        <Nav>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <WrapperLink>
            <LinkNav>Главная</LinkNav>
            <LinkNav>О нас</LinkNav>
            <LinkNav>Контакты</LinkNav>
          </WrapperLink>
          <StyledLink to={`#`}>
            <HandySvg
              src={iconBasket}
              width="30"
              height="30"
            />
          </StyledLink>
          <StyledLink href={`tel:+74950005252`}>
            <HandySvg
              src={iconTel}
              width="25"
              height="25"
            />
          </StyledLink>
          <StyledLink href={`mailto:info@sd.ru`}>
            <HandySvg
              src={iconEmail}
              width="25"
              height="25"
            />
          </StyledLink>
        </Nav>
      </Container>
    </Head>
  )
};
