import React from 'react';
import { FeatureContainer, FeatureButton } from './styled'

export default function Feature() {
    return (
        <FeatureContainer>

            <h1>Pizza do Dia</h1>
            <p>Todo dia é dia de Pizza.</p>
            <FeatureButton>Peça Agora</FeatureButton>
        </FeatureContainer>
    )
}