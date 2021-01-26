import React from 'react';

import Main from '../../components/Main'
import Products from '../../components/Products'
import { Container } from './styled'

import {productData} from '../../components/Products/data'

function Home() {
    return(
        <Container >
            <Main />
            <Products title="Escolha a sua favorita" data={productData} />
        </Container>
    )
}


export default Home;