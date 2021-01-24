import React from 'react';
import {MainContainer, MainContent, MainItems, Title, MainP  } from './styled'

function Main() {
    return (
        <MainContainer>
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