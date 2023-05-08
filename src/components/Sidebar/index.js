import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper, SidebarSocial, SidebarSocials} from "./SidebarElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import pdf from '../../documents/MohamedRedaMahboub.pdf';

const Sidebar = ({isOpen, toggle}) =>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about'>
                            About
                        </SidebarLink>
                        <SidebarLink to='projects'>
                            Projects
                        </SidebarLink>
                        <SidebarLink to='contact'>
                            Contact
                        </SidebarLink>
                        <SidebarSocials>
                            <SidebarSocial href='https://www.instagram.com/m.m.reda_/'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </SidebarSocial>
                            <SidebarSocial href='https://www.linkedin.com/in/mohamed-reda-mahboub-983739211/'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </SidebarSocial>
                            <SidebarSocial href='/'>
                                <FontAwesomeIcon icon={faGithub} />
                            </SidebarSocial>
                            <SidebarSocial href={pdf}>
                                <FontAwesomeIcon icon={faFile}/>
                            </SidebarSocial>
                        </SidebarSocials>
                    </SidebarMenu>
                </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar