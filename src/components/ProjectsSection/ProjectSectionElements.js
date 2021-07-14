import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import image1 from '../../images/image1.svg';


export const Image = styled.img`
    display: block;
  width: 100%;
  height: auto;

`;

export const Overlay = styled.div`
    padding-top: 20px;
  position: absolute;
  /* top: 0; */
  /* bottom: 0; */
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  
  background-color: #c2b6b6;

  background-image: linear-gradient(315deg, #c2b6b6 0%, #576574 74%);


  text-align: center;
   transform: translateY(0px);

  &:hover{
      opacity:1;
      
  }

`


export const Text = styled.div`
   color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;


`

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
    position: sticky;
    display: inline-block;
    font-size: 2.5vh;
    padding: 9px 20px;
    margin-top: 50px;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    top: 10%;

    @media screen and (max-width: 488px){
        font-size:  2vh;
        top: 7%;
        margin-top: 15px;
    }
    
`;


export const ProjectsItemContainer = styled.div`

`;

export const ProjectContent = styled.span`
    position: sticky;
   text-align: center;
   transform: translateY(100px);
   /* opacity:0; */
   transition: 0.5s;

   &:hover{
       transform: translateY(0px); 
       /* opacity: 1; */
      

   }

`;




export const ProjectNumber = styled.span`
    position: absolute;
    font-size: clamp(250px, 20vw, 350px);
    top: -14vh;
    right: 0vh;
    color: rgba(255,255,255, 0.05);
    font-weight:700;
    pointer-events: none;

    @media screen and (max-width: 1500px){
        font-size: clamp(200px, 17vw, 300px);
        top: -14vh;
        right: 0vh;
    }

    @media screen and (max-width: 488px){
        font-size: 20vh;
        top: -40px;
        right: 02px;
    }
`;

// export const ProjectImage = styled.img`
//     position: static;
//     width: 45vh;
//     height: 45vh;
//     transform: translateY(0px);
//     opacity:1;
//     transition: 0.5s;
    
//     &:hover{
//         transform: translateY(0px);
//         opacity: 0;

//    }
// `;

export const ProjectsName = styled.span`
    font-size: 8vh;
    color: #fff;
    /* z-index: 1; */
    

    @media screen and (max-width: 488px){
        font-size:  4.5vh;
    }
`;


export const ProjectsInfo = styled.div`
    font-size: 3vh;
    letter-spacing: 1px;
    color:#fff;
    cursor: default;
    
    @media screen and (max-width: 488px){
        font-size:  1.8vh;
    }
`;


export const ProjectsItem = styled.div`
    position: relative;
    width: 49vh;
    height: 49vh;
    margin: 10vh;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    flex-basis: 29%;


    @media screen and (max-width: 1200px) {
        flex-basis: 19%;

    }

    @media screen and (max-width: 488px){
        flex-basis: 50%;
        width: 30vh;
        height: 30vh;
    }
    
`
export const ContainerP = styled.div`
    position: relative;
    width: 45vh;
    height: 45vh;
    margin: 10vh;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    flex-basis: 29%;

    @media screen and (max-width: 1200px) {
        flex-basis: 19%;

    }

    @media screen and (max-width: 488px){
        flex-basis: 50%;
        width: 30vh;
        height: 30vh;
    }
`;


export const ProjectsWrapper = styled.div`
    padding: 0% 10% 0% 10%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;

`;




