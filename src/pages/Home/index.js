import React from 'react';

import NavBar from '../../components/NavBar'
import Hero from '../../components/Hero'
import { Container } from './styled'

function Home() {
    return(
        <Container >
            <NavBar />
            <Hero />
        </Container>
    )
}


export default Home;