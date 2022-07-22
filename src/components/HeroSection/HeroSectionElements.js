import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55vw;
    position: relative;
    z-index: 1;
    width: 100%;
    margin: 0;
`

export const Herobg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Imagebg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: -30vw;
`

export const HeroH1 = styled.h1`
    color: white;
    font-family: Verdana;
    font-size: 4vw;
    text-align: center;
    padding: 1vw;
    background-color: #000;
    width: 45vw;

    @media screen and (max-width: 790px;){
        font-size: 40px;
    }

    @media screen and (max-width: 480px;){
        font-size: 32px;
    }
`
