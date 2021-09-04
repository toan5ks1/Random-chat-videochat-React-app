import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {Link} from 'react-router-dom'

export const sticki = styled.div`
    background-color: black;
    overflow: hidden;

`
export const Nav = styled.nav`
    background: #161616;
    height: 80px;
    padding: 0 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    top: 0; 
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
`;
export const NavbarContainer_1 = styled.div`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    height: 80px;
    z-index: 1;
`;
export const NavbarContainer_2 = styled.div`
    display: flex;
    justify-self: flex-end;
    align-items: center;
    height: 80px;
    z-index: 1;

    @media screen and (max-width: 1050px) {
        display: none;
    }
`;

export const NavLogo = styled(LinkR)`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 2.8rem;
    font-weight: bold;
    text-decoration: none; 
    
    margin-left: 0px;
    &:hover {
        text-decoration: none;
        color: #ff5858;
    }
`;

export const Text = styled.span`
    margin-left: 4px;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 1050px) {
        display: block;
        position: absolute;
        right: 0;
        margin-bottom: 55px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    margin: 15px 10px 0 10px;
`;

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.4rem;
    &:hover {
        border-bottom: 3px solid #f857a6;
        transition: all 0.2s ease-out;
        text-decoration: none;
        color: white;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 10px;
    border: 1px solid #fff;
    background: #fff;
    white-space: nowrap;
    padding: 10px 20px;
    color: #ff5858;
    font-size: 1.4rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #f857a6;
        text-decoration: none;
        border: 1px solid #ff5858;
    }
`