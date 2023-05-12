import styled from 'styled-components';
import { Input, Li, Ul } from '../elements';
import Button from '../button/button';

export const StyledFilter = styled.div`
  max-width: 300px;
  padding-top: 70px;

  @media (${({ theme }) => theme.media.medium_mob}) {
    margin: 0 auto;
  }
`;

export const FilterTitle = styled.h2`
  margin-top: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
`;

export const StyledFilterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledFieldset = styled.fieldset`
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    border: none;
`;

export const StyledLegend = styled.legend`
    color: #111111;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
`;

export const WrapperInputPrice = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #f3ce88;
    border-radius: 35px;

    &::after {
      position: absolute;
      content: "";
      top: 10px;
      left: calc(50% - 10px);
      width: 20px;
      height: 2px;
      background-color: #64646a;
    }
`;

export const StyledInputPrice = styled(Input)`
    max-width: 100px;
    padding: 5px;
    text-align: center;
    background: transparent;
    box-shadow: none;
    &:focus,
    &:active {
      border: none;
      outline: none;
    }
`;

export const StyledInputSearch = styled(Input)`
    display: inline-block;
    background-color:  #64646a;
    margin: auto 0;
    border-radius: 79px;
    padding-left: 15px;
    
`;

export const WrapperInputsList = styled(Ul)`
  display: flex;
  flex-direction: column;
`;

export const WrapperInputItem = styled(Li)`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledCatalogList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 70px;
`;

export const StyledSort = styled.div`
  display: flex;
  gap: 20px;

  @media (${({ theme }) => theme.media.medium_mob}) {
    justify-content: center;
  }
`;

export const  StyledButtonSort = styled(Button)`
  background:  #f3ce88;
  height: auto;
  padding: 10px;
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  padding-right: 15px;

  @media (${({ theme }) => theme.media.medium_mob}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;