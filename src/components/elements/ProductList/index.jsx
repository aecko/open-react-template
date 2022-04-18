import React from "react";
import {
  ProductWrapper,
  SmallLineSeparator,
  StyledHeadline,
  StyledProductList,
} from "./styles";

export const ProductList = ({ products }) => {
  return (
    <ProductWrapper>
      <StyledHeadline>Products</StyledHeadline>
      <SmallLineSeparator />
      {products !== undefined && (
        <StyledProductList>
          {products?.map((product) => (
            <li key={product.id}>
              <a href={product.link}>{product.title}</a>
            </li>
          ))}
        </StyledProductList>
      )}
    </ProductWrapper>
  );
};
