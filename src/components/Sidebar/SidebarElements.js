import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d ;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.44s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
    /* top: 0 */


`;

export const CloseIcon = styled(FaTimes)`
    transition: all 250ms ease-in-out;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px){
        padding-top: 30%;
        grid-template-rows: repeat(6, 80px);
    }
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }
`;




