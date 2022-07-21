import styled from 'styled-components'

export const ContactContainer = styled.div`
    color: #fff;
    background: black;
    padding-top: 50px;
    padding-bottom: 29vw;
    width: 100%;

    @media screen and (max-width: 880px){
        padding-bottom: 10vw;
    }
`

export const Headline = styled.h1`
    font-family: Verdana;
    margin-bottom: 24px;
    font-size: 4vw;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    margin-left: 5vw;

    @media screen and (max-width: 880px){
        font-size: 6vw;
    }
`

export const ElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Message = styled.div`
    width: 35vw;
    font-family: Verdana;
    margin-top: 3vw;
    text-align: center;
`

export const EmailButton = styled.a`
    display: flex;
    justify-content: space-between;
    Background: #1F2124;
    font-family: Verdana;
    color: white;
    transition: 0.2s ease-in-out;
    margin-top: 3vw;
    padding: 25px;
    border-radius: 9px;
    width: 8vw;
    min-width: 150px;

    &:hover{
        Background: #5F9EA0;
        color: black;
        transition: 0.2s ease-in-out;
    }
`