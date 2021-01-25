import React, { useState } from 'react';
import {MainContainer, MainContent, MainItems, Title, MainP  } from './styled'
import SideBar from '../SideBar'
import NavBar from '../../components/NavBar'

function Main() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MainContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <MainContent>
                <MainItems>
                    <Title>Melhor pizza de todas</Title>
                    <MainP>Dinheiro não compra felicidade, mas compra pizza que é a mesma coisa!</MainP>
                    <button className="btn">Faça seu pedido</button>
                </MainItems>
            </MainContent>
        </MainContainer>
    )
}

export default Main