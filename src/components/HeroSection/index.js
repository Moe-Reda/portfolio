import React from "react";
import {HeroContainer, Herobg, Imagebg, HeroContent, HeroH1} from "./HeroSectionElements";
import Image from '../../images/Image.jpg'

const HeroSection = () => {
    return(
        <HeroContainer id='home'>
                <Herobg>
                    <Imagebg src={Image}/>
                </Herobg>
                <HeroContent>
                    <HeroH1>
                        Hey! I'm Reda.{'\n'}
                    </HeroH1>
                    <HeroH1>
                        I write fancy code to make fancy things
                        :)
                    </HeroH1>
                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection