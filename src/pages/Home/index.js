import React from 'react';

import Main from '../../components/Main'
import Products from '../../components/Products'
import Feature from '../../components/Feature'
import Footer from '../../components/Footer'
import { Container } from './styled'

import {productData, productDataTwo } from '../../components/Products/data'

function Home() {
    return(
        <Container >
            <Main />
            <Products title="Escolha a sua favorita" data={productData} />
            <Feature data={productDataTwo} />
            <Footer/>
        </Container>
    )
}


export default Home;