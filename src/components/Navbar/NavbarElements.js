import styled from 'styled-components'

export const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    z-index: 2;
    background-color: ${({ scrollY }) => (scrollY > 100 ? "#131419" : "transparent")};
    border: ${({ scrollY }) => (scrollY > 100 ? "1px solid" : "none")}; 
    box-shadow: ${({ scrollY }) => (scrollY > 100 ? "0px 5px 12px -1px rgba(0, 0, 0, 0.5)" : "none")};
    
    @media screen and (max-width: 960px){
        transtion: 0.8 all ease;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavbarContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div`
    display: inline-block;
    font-weight:900;
    color: green;

`;


export const Logo = styled.div`
    
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media only screen and (min-height: 1200px){
        font-size: clamp(30px, 4vh, 50px);
    } 
`;

export const NavLink = styled.div`
   
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }

    @media screen and (max-width: 768px){
        display: none;
    }
    @media only screen and (min-height: 1200px){
        font-size: clamp(30px, 2.5vh, 50px);
    } 

`;


export const NavIcon = styled.div`
   
    margin: 0 5px;
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }

    @media screen and (max-width: 768px){
        display: none;
    }

    @media only screen and (min-height: 1200px){
        font-size: clamp(30px, 2.3vh, 50px);
        margin: 0 10px;
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


