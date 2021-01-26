import styled from 'styled-components'

export const ProductsContainer = styled.div `
    
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150F0F;
    color: #FFF;
    
`

export const ProductsTitle = styled.h1 `
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin: 3rem 0;
`

export const ProductsWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div `
    margin: 0 2rem;
    line-height: 2;
    width: 300px;

`

export const ProductImg = styled.img `
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #FDC500;

`

export const ProductInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;

`   

export const ProductName = styled.h2 `
    font-weight: 400;
    font-size: 1.5rem;
`
export const ProductDesc = styled.p `
    margin-bottom: 1rem;

`
export const ProductPrice = styled.p `
    margin-bottom: 1rem;
    font-size: 2rem;
`
export const ProductButton = styled.button `
    font-size: 1rem;
    padding: 1rem 2rem;
    border: none;
    width: 300px;
    background-color: #E31837;
    color: #FFF;
    transition: .4s ease-in-out;

    &:hover {
        background-color: #FFC500;
        color: #000;
        cursor: pointer;
    }
`