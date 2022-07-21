import React from "react";
import {AboutContainer, TextWrapper, Headline, Text} from './AboutElements'

const About = () =>{
    return(
    <AboutContainer id='about'>
        <Headline>About me:</Headline>
        <Text>
            I am a student at the University of Toronto currently looking for an intership for spring 2023. 
            I enjoy creating apps and solving complex problems, in addition to this I am really eager to learn new technologies. 
        </Text>
    </AboutContainer>
    )
}

export default About