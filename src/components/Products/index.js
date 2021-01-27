import React from 'react';

import {    ProductsContainer,
            ProductsTitle,
            ProductsWrapper,
            ProductCard,
            ProductImg,
            ProductInfo,
            ProductName, 
            ProductDesc,
            ProductPrice,
            ProductButton   } from './styled'

function Products( {title, data} ) {
    return (
        <ProductsContainer>
            <ProductsTitle> {title} </ProductsTitle>

            <ProductsWrapper>
                {data.map((product, index) => 
                    <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo> 
                        <ProductName> {product.name} </ProductName>
                        <ProductDesc> {product.desc} </ProductDesc>
                        <ProductPrice>R$ {product.price} </ProductPrice> 
                        <ProductButton> Adicionar ao Carrinho </ProductButton>
                    </ProductInfo>
                </ProductCard>
                )}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products;