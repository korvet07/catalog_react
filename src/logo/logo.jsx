import { LogoWrapper } from './styled';
import { HandySvg } from 'handy-svg';
import  logoImage  from "/src/assets/logo.svg";

export function Logo() {
  return (
    <LogoWrapper>
      <HandySvg
        src={logoImage}
        width="100"
        height="100"
      />
    </LogoWrapper>
  )
}