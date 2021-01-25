import styled from 'styled-components'


export const MainContainer = styled.div `
    
`

export const MainContent = styled.div `
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`

export const MainItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 87vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #FFF;
    text-transform: uppercase;
    line-height: 1.3;
    font-weight: bold;
    margin-top: 6px;


    .btn {
        font-size: 1.4rem;
        padding: 1rem 4rem;
        border: none;
        background-color: #E31837;
        color: #FFF;
        border-radius: 4px;
        cursor: pointer;
        transition: .4s;
        outline: none;

        &:hover {
            background-color: #FFC500;
        }
    }


    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const Title = styled.h1 `
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #E9BA23;
    letter-spacing: 3px;
    
`

export const MainP = styled.p `
    font-size: clamp(1.7rem, 1.1vw, 1.7rem);
    margin-bottom: 2rem;
    letter-spacing: 0.5px;
    margin-top: 1rem;

`