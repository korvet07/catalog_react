import { Copyright, FooterContainer, SocialLink, StyledFooter, WrapperSocial } from './styled';
import { HandySvg } from 'handy-svg';
import iconOdnoklassniki from '/src/assets/odnoklassniki.svg';
import iconPinterest from '/src/assets/pinterest.svg';
import iconVk from '/src/assets/vk.svg';




export default function Footer() {

  return (
    <StyledFooter>
      <FooterContainer>
        <WrapperSocial>
          <SocialLink to={'#'}>
            <HandySvg
              src={iconOdnoklassniki}
              width="40"
              height="40"
            />
          </SocialLink>
          <SocialLink to={'#'}>
            <HandySvg
              src={iconPinterest}
              width="40"
              height="40"
            />
          </SocialLink>
          <SocialLink to={'#'}>
            <HandySvg
              src={iconVk}
              width="40"
              height="40"
            />
          </SocialLink>
        </WrapperSocial>
        <Copyright>&#169; Сделано  2023</Copyright>
      </FooterContainer>
    </StyledFooter>
  )
}