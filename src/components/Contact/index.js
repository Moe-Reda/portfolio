import React from "react";
import {ContactContainer, Headline, ElementsContainer, EmailButton, Message} from "./ContactElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons';

const Contact = () =>{
    return(
    <ContactContainer id='contact'>
        <Headline>Contact:</Headline>
            <ElementsContainer>
                <Message>
                    You're more than welcome to contact me for anything related to profesional opportunities or plain and normal talking.
                </Message>
                <EmailButton>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Send email
                </EmailButton>
            </ElementsContainer>
    </ContactContainer>
    )
}

export default Contact