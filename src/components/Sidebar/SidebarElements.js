import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    top: -100%;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: None;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-rows: repeat(4, 10vw);
    text-align: center;
`

export const SidebarLink = styled(LinkS)`
    font-family: Verdana;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: #fff;
    cursor: pointer;
    width: 100%;

    &:hover {
        color: #5F9EA0;
    }
`

export const SidebarSocials = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const SidebarSocial = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: #fff;
    cursor: pointer;
    width: 10vw;

    &:hover {
        color: #5F9EA0;
    }
`