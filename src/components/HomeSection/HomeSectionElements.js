import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const HomeContainer = styled.div`
    background: #0c0c0c;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;


export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.h1`
    color: #fff;
    font-size: 64px;
    text-align: center;
    

    @media screen and (max-width: 768px){
        font-size:  40px;
    }

    @media screen and (max-width: 488px){
        font-size:  32px;
    }
`;

export const HomeP = styled.p`
    color: #fff;
    font-size: 32px;
    text-align: center;
    padding-top: 2%;

    @media screen and (max-width: 768px){
        font-size:  24px;
    }

    @media screen and (max-width: 488px){
        font-size:  18px;
    }
`;

export const HomeMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-top: 5%;
`;

export const HomeItem = styled.div`
    height: 80px;
    
`;

export const HomeLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size:  22px;

    @media screen and (max-width: 768px){
        font-size:  16px;
        padding: 0 9px;
        border-bottom: 0px;
    }

    @media screen and (max-width: 488px){
        font-size:  14px;
        padding: 0 9px;
    }

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }

    /* &:active {
        border-bottom: 3px solid #01bf71;
    } */
`;