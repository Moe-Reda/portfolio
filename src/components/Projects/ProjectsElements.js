import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    color: #fff;
    background: black;
    padding: 10px 0;
    width: 100%;
    min-height: 51vw;

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

export const CardContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 2vw;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3vw;
    margin-bottom: 5vw;
`

export const Projectcard = styled.div`
    background: #1F2124;
    border-radius: 2vw;
    width: 40vw;
    text-align: center;
    color: white;
    padding: 2vw;
    min-width: 400px;
    margin-bottom: 0vw;
    transition: 0.2s ease-in-out;
`

export const ProjectName = styled.h2`
    font-family: Verdana;
    font-size: 3vw;
`

export const ProjectDescription = styled.p`
font-family: Verdana;
min-width: 41vw;
text-align: left;
line-height: 2;
`

export const TechnologiesContainer = styled.div`
display: flex;
justify-content: space-between;
font-family: Verdana;
color: #ffffff;
font-size: 1vw;
background: #1F2124;
padding: 1vw;
width: 15vw;
min-width: 120px;

@media screen and (max-width: 880px){
    font-size: 2vw;
    width: 30vw;
}
`