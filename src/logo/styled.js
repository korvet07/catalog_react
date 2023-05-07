import styled from 'styled-components'

export const LogoWrapper = styled.div`
width: 100px;
height: 100px;

@media (${({ theme }) => theme.media.medium_mob}){
  margin-left: 60px;
}
`;