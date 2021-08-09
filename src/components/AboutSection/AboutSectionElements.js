import styled from "styled-components";
import { keyframes } from 'styled-components'


export const AboutContainer = styled.div`
    background: #131419;
    height: 100vh;
    position: relative;
    display: flex;
    z-index: 1;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
    
`;

export const AboutContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 5% 3% 0 3%;
    flex-direction: column;
    
`;

export const LinkSevenet = styled.a`
    color: #fff;

    :visited{
        color: #fff;
    }
`;

export const H3 = styled.div`
    color: #fff;
    font-size: clamp( 14px, 2.5vmin, 30px); 
    font-weight: 450;
    display: inline-block;

    @media only screen and (max-width: 768px){
        font-size: 3vmin;
    }
`;

export const AboutH1 = styled.h1`
    font-weight: 350;
    font-size: clamp(40px, 5vw, 80px);
    letter-spacing: 1px;
    color:#fff;
    font-family: 'Segoe UI';
    
    

    @media screen and (max-width: 768px){
        font-size: clamp(30px, 6,5vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;

export const Item = styled.div`
  justify-content: center;
  padding: .5rem;
`;

export const ItemImage = styled.div`
  text-align: center;
  padding: .5rem;
  padding-top: 0%;
  padding-bottom: 1%;

  @media screen and (max-width: 768px){
        display: none;
    }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    }
`;


export const AboutP= styled.div`
    color: #fff;
    font-size: clamp( 14px, 2.5vmin, 30px); 
    padding-top: 4%;
    padding-bottom: 1%;
    letter-spacing: 2px; 
    line-height: 1.6em;
    font-family: 'Segoe UI';
    font-weight: 250;

    @media only screen and (max-width: 768px){
        font-size: 3vmin;
    }
`;

const rotation = keyframes`

    0% {
			border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
	
	50% {
			border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
	}
  
	100% {
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 

`;



export const Image = styled.img`
    max-width: 50vmin;
    background-color: #131419;
	border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;          
	animation: ${rotation} 10s infinite;
	overflow: hidden;
    -webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
    box-shadow: 0 0 8px 8px 131419 inset;
      
    &:hover{
        animation-play-state: paused;
    }
   
    

`;

export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin-top: 10vmin;
    width: 12vw;
    height: 6vh;
    font-size: 3vh;
    background: transparent;
    color: white;
    border: 2px solid white;
    transition: 1s;

    &:hover {
        background: white;
        color: black;
        
    }


    @media (min-height: 1000px){
        font-size: 2vh;
        width: 10vw;
        height: 5vh;
    }
`;

