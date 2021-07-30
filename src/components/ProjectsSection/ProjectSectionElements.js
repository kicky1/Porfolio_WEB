import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import image1 from '../../images/image1.svg';


export const Image = styled.img`
    display: block;
  width: 90%;
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
  transition: .7s ease;
  
  background-color: #303030;

  background-image:  #303030;


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
    padding-bottom: 4%;
    
    

    @media screen and (max-width: 768px){
        font-size: clamp(30px, 6,5vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;




// export const ProjectMore = styled(Link)`
//     display: inline-block;
//     margin-top: 10%;
//     text-decoration: none;
//     text-align: center;
//     width: 250px;
//     padding: 15px 0;
//     border-radius: 40px;
//     overflow: hidden;
//     position: sticky;
    
// `;

// export const ProjectText = styled.span`
//     font-size: 20px;
//     font-weight: 400;
//     color: #ffffff;
//     letter-spacing: 4px;
//     position: relative;
//     z-index: 1;

//     @media screen and (max-width: 488px){
//         font-size:  2vh;
//     }
    
// `;

// export const ProjectLiquid = styled.div`
//     width: 250px;
//     height: 250px;
//     background: #4973ff;
//     box-shadow: inset 0 0 50px rgba(0,0,0,.7);
//     position: absolute;
//     top: -80px;
//     left: 0;
//     transition: .5s;

//     ::before,::after{
//         content: "";
//         width: 140%;
//         height: 130%;
//         background: #000;
//         position: absolute;
//         top: 8%;
//         left: 40%;
//         transform: translate(-50%, 75%);
//     };

//     ::before{
//         border-radius: 45%;
//         background: rgba(20,20,20,1);
//         animation: shake 5s linear infinite;
//     };

//     ::after{
//         border-radius: 40%;
//         background: rgba(20,20,20,0.5);
//         animation: shake 10s linear infinite;
//     }

//     @keyframes shake {
//         0% {
//             transform: translate(-50%, -75%) rotate(0deg)
//         }
//         100% {
//             transform: translate(-50%, -75%) rotate(360deg)
//         }
//     }

//     &:hover{
//         top: -160px;
//         box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
//     }
    
// `;






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
export const ContainerP = styled(Link)`
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




