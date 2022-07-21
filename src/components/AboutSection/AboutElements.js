import styled from 'styled-components'

export const AboutContainer = styled.div`
    color: #fff;
    background: black;
    padding: 10px 0;
    width: 100%;
    height: 51vw;

`

export const Headline = styled.h1`
    font-family: Verdana;
    font-size: 4vw;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    margin-left: 5vw;

    @media screen and (max-width: 880px){
        font-size: 6vw;
    }
`

export const Text = styled.p`
    font-family: Verdana;
    max-width: 80vw;
    margin-top: 3vw;
    margin-left: 9vw;
    font-size: 3vw;
    color: #fff;
    line-height: 1.5;
`