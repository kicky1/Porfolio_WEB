import styled from 'styled-components';
import {ButtonBack, ButtonNext } from 'pure-react-carousel';
import {RightArrowAlt} from "@styled-icons/boxicons-regular/RightArrowAlt";
import {LeftArrowAlt} from "@styled-icons/boxicons-regular/LeftArrowAlt";

export const NButtonBack = styled(ButtonBack)`
    margin-top: 20px;
    color: #868686;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.8);
    width: 12vw;
    height: 6vh;
    font-size: 3vh;

    &:hover {
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
            inset 2px 2px 6px rgba(0, 0, 0, 0.8);
        
    }

    @media (min-height: 1000px){
        font-size: 2vh;
        width: 10vw;
        height: 5vh;
    }

    @media screen and (max-width: 768px){
        font-size: 2vh;
        width: 6rem;
        height: 2.5rem;
    }
`;

export const RightArrowAlt2 = styled(RightArrowAlt)`

    width: 48px;
   

    @media (min-height: 1000px){
        font-size: 2vh;
        width: 10vw;
        height: 5vh;
    }

    @media screen and (max-width: 768px){
        font-size: 2vh;
        width: 6rem;
        height: 2.5rem;
    }
`;

export const LeftArrowAlt2 = styled(LeftArrowAlt)`

    width: 48px;

    @media (min-height: 1000px){
        font-size: 2vh;
        width: 10vw;
        height: 5vh;
    }

    @media screen and (max-width: 768px){
        font-size: 2vh;
        width: 6rem;
        height: 2.5rem;
    }
`;

export const NButtonNext = styled(ButtonNext)`
    margin-top: 20px;
    color: #868686;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.8);
    width: 12vw;
    height: 6vh;
    font-size: 3vh;
    margin-left:100px;

    &:hover {
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
            inset 2px 2px 6px rgba(0, 0, 0, 0.8);
        
    }

    @media (min-height: 1000px){
        font-size: 2vh;
        width: 10vw;
        height: 5vh;
    }

    @media screen and (max-width: 768px){
        font-size: 2vh;
        width: 6rem;
        height: 2.5rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 100%;

`;


export const Image = styled.img`
    display: block;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
`;

export const Overlay = styled.div`
    padding-top: 20px;
    position: absolute;
    /* left: 0;
    right: 0; */
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


export const ProjectsContainer = styled.div`
    background: #131419;
    min-height: 100vh;
    width: 100%;
`;

export const ProjectsContent = styled.div`
   padding: 5% 3% 0 3%;
`;

export const ProjectsH1 = styled.div`
    font-weight: 300;
    font-size: clamp(40px, 5vw, 80px);
    color:#EBEBEB;
    
    @media screen and (max-width: 768px){
        font-size: clamp(30px, 4vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;


export const ProjectContent = styled.span`
    transition: 0.5s;
`;




export const ProjectNumber = styled.span`
    position: absolute;
    font-size: clamp(250px, 20vw, 350px);
    top: -8vmin;
    right: -1vmin;
    color: rgba(255,255,255, 0.05);
    font-weight:500;
    pointer-events: none;

    @media only screen and (min-height: 1200px){
        font-size: clamp(450px, 35vw, 500px);
        top: -9vmin;
        right: 0vmin;
    }

    @media screen and (max-width: 488px){
        font-size: 20vh;
        top: -40px;
        right: 2px;
    }
    
`;


export const ProjectsName = styled.span`
    color: #fff;
    font-size: clamp( 24px, 4.5vmin, 50px); 
    padding-top: 4%;
    padding-bottom: 1%;
    letter-spacing: 2px; 
    line-height: 1.6em;
    font-family: 'Segoe UI';
    font-weight: 450;
    

    @media screen and (max-width: 488px){
        font-size:  4.5vh;
    }

    @media only screen and (min-height: 1200px){
        font-size: clamp( 40px, 5vmin, 70px); 
    }
`;


export const ProjectsInfo = styled.div`
    padding: 10px;
    color: #fff;
    font-size: clamp( 20px, 3vmin, 40px); 
    padding-top: 4%;
    padding-bottom: 1%;
    letter-spacing: 2px; 
    line-height: 1.2em;
    font-weight: 250;
    
    @media screen and (max-width: 488px){
        font-size:  1.8vh;
    }

    @media only screen and (min-height: 1200px){
        padding-top: 2.5rem;
    }
`;

export const ProjectsTech = styled.div`
    padding: 10px;
    color: #fff;
    font-size: clamp( 14px, 2.5vmin, 40px); 
    padding-top: 7%;
    padding-bottom: 1%;
    letter-spacing: 2px; 
    line-height: 1.2em;
    font-weight: 250;
    text-align: left;

    @media screen and (max-width: 488px){
        font-size:  1.8vh;
    }

    @media only screen and (min-height: 1200px){
        padding-top: 6rem;
    }
`;


export const ContainerP = styled.a`
    position: relative;
    width: 45vh;
    height: 45vh;
    margin: 10vh;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
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




