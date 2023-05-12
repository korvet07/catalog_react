import styled from 'styled-components';
import { H1 } from '../elements';

export const StyledCatalogTitle = styled(H1)`
  margin-top: 50px;
  font-size: 34px;
  
  @media (${({ theme }) => theme.media.large_tab}) {
    margin-top: 30px;
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
  }

  @media (${({ theme }) => theme.media.medium_mob}) {
    text-align: center;
    font-size: 26px;
  }
`;