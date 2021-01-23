import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: maroon;
`;

export const Description = styled.p`
  text-align: center;
`;


export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
`;

export const Device = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.price {
      color: ${(props) => props.theme.color};
    }
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

  export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}}`;


  /*export const ProductWrapper  = styled.div`
  p {
    text-align: center;
    &.price {
      color: ${(props) => props.theme.color};
    }
  }`;*/

