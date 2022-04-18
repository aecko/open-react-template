import React from "react";
import { ProductWrapper, StyledProductList } from "./styles";

export const ProductList = ({ products }) => {
  return (
    <ProductWrapper>
      <h3>Products</h3>
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
