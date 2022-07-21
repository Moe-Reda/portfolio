import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-family: Verdana;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: None;
    margin-left: 0vw;
`

export const MobileIcon = styled.div`
    display: None;

    @media screen and (max-width: 880px){
        display: block;
        position: absolute;
        top: 2rem;
        right: 1.5rem;
        transform: translate(-100%, 60%)
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        &:hover {
            color: #5F9EA0;
            transition: 0.2s ease-in-out;
        }
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 0vw;
    margin-left: 0vw;

    @media screen and (max-width: 880px){
        display: None;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Verdana;

    &.active{
        border-bottom: 3px solid #5F9EA0;
        transition: 0.3s ease-in-out;
    }

    &:hover {
        color: #5F9EA0;
        transition: 0.3s ease-in-out;
    }
`

export const NavSocial = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #5F9EA0;
        transition: 0.2s ease-in-out;
    }
`

export const NavSocials = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 0px;

    @media screen and (max-width: 880px){
        display: None;
    }
`