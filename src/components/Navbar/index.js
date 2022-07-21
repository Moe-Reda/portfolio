import React from "react";
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavSocial, NavSocials} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import pdf from '../../documents/mohamedredamahboub.pdf';
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return(
<>
<Nav>
    <NavbarContainer>
        <NavLogo to='home' onClick={toggleHome}>Reda Mahboub</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLink to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Contact</NavLink>
            </NavItem>
        </NavMenu>
        <NavSocials>
            <NavItem>
                <NavSocial href="https://www.instagram.com/m.m.reda_/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </NavSocial>
            </NavItem>
            <NavItem>
                <NavSocial href="https://www.linkedin.com/in/mohamed-reda-mahboub-983739211/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </NavSocial>
            </NavItem>
            <NavItem>
                <NavSocial href="/">
                    <FontAwesomeIcon icon={faGithub} />
                </NavSocial>
            </NavItem>
            <NavItem>
                <NavSocial href={pdf}>
                    <FontAwesomeIcon icon={faFile}/>
                </NavSocial>
            </NavItem>
        </NavSocials>
    </NavbarContainer>
</Nav>
</>
    )
}

export default Navbar