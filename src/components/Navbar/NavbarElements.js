import styled from 'styled-components'


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transtion: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 10;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;

`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavIcon2 = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* padding-left: 20px; */
    transform: translate(-240%, 60%);
    font-size: 1.8rem;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        margin-left: 20px;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #fff;
        transition: all 300ms ease-in-out;

        &:hover {  
        color: #01bf71;
        }

        
    }
`;


