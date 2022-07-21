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
        </CardContainer>
    </ProjectsContainer>
    )
}

export default Projects