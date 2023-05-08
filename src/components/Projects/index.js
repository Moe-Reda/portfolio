import React from "react";
import {ProjectDescription, ProjectName, Projectcard, ProjectsContainer, Headline, CardContainer, TechnologiesContainer} from "./ProjectsElements"

const Projects = () =>{
    return(
    <ProjectsContainer id='projects'>
        <Headline>My projects:</Headline>
        <CardContainer>
            <Projectcard>
                <ProjectName>Portfilio website</ProjectName>
                    <ProjectDescription>
                        You currently are looking at it right now and I hope that you are enjoying every second you spend in it :) .
                        I use this website as a portfolio for my projects and experiences, you can also find my contact and socials here.
                    </ProjectDescription>
                    <TechnologiesContainer >
                        <p>React</p>
                    </TechnologiesContainer>
            </Projectcard>
            <Projectcard>
                <ProjectName>Chat Server</ProjectName>
                    <ProjectDescription>
                        For the CSC209 course (Software tools and systems). I programed a chat server in C that uses a TCP connection and does not block.
                    </ProjectDescription>
                    <TechnologiesContainer >
                        <p>C</p>
                    </TechnologiesContainer>
            </Projectcard>
            <Projectcard>
                <ProjectName>Simon's Game</ProjectName>
                    <ProjectDescription>
                        For the CSC258 course (Computer Organization). I made the notoriously known "Simon's Game" using an Assembly language (RISC-V). In addition to this I also wrote a technical documentation for it.
                    </ProjectDescription>
                    <TechnologiesContainer >
                        <p>Assembly</p>
                    </TechnologiesContainer>
            </Projectcard>
        </CardContainer>
    </ProjectsContainer>
    )
}

export default Projects