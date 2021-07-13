import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';




export const ProjectsContainer = styled.div`
    background: #131419;
    min-height: 100vh;
    position: relative;
    z-index: 1;

    /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#adacac, #171717);
        clip-path: circle(30% at left 80%);
    }
    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#adacac, #171717);
        clip-path: circle(18% at right 30%)
    } */
    
`;

export const ProjectsContent = styled.div`
   padding: 1% 3% 3% 3%; 
`;

export const ProjectsH1 = styled.h1`
    font-weight: 800;
    font-size: clamp(50px, 8vw, 100px);
    letter-spacing: 1px;
    color:#fff;
    cursor: default;
    padding-bottom: 4%;
    
    

    @media screen and (max-width: 768px){
        font-size: clamp(30px, 6,5vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;


export const ProjectMore = styled(Link)`
    list-style: none;
    margin-top: 15px;
    position: relative;
    display: inline-block;
    padding: 9px 20px;
    margin-top: 15px;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    top: 50px;
    
`;


export const ProjectsItemContainer = styled.div`

`;

export const ProjectContent = styled.span`
   padding: 20px;
   text-align: center;
   transform: translateY(100px);
   opacity:0;
   transition: 0.5s;

   &:hover{
       transform: translateY(0px);
       opacity: 1;
      

   }
`;



export const ProjectNumber = styled.span`
    position: absolute;
    top: -90px;
    right: 10px;
    font-size: 8em;
    color: rgba(255,255,255, 0.05);
    font-weight:700;
    pointer-events: none;
`;

export const ProjectImage = styled.span`
    max-width: 555px;
    height: 100%;
`;

export const ProjectsName = styled.span`
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
`;


export const ProjectsInfo = styled.div`
    font-size: 1em;
    color: #fff;
    font-weight: 300;
`;


export const ProjectsItem = styled.div`
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    
`

export const ProjectsWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;

    @media screen and (max-width: 488px) {
        width: 20%;
    }
`

