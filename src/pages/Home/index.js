import React from 'react';

import NavBar from '../../components/NavBar'
import Main from '../../components/Main'
import { Container } from './styled'

function Home() {
    return(
        <Container >
            <NavBar />
            <Main />
        </Container>
    )
}


export default Home;