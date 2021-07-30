import styled from "styled-components";


export const AboutContainer = styled.div`
    background: #131419;
    min-height: 100vh;
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

export const AboutH1 = styled.h1`
    font-weight: 800;
    font-size: clamp(50px, 8vw, 100px);
    letter-spacing: 1px;
    color:#fff;
    

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
  padding-top: 5%;
  padding-bottom: 1%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;


export const AboutP= styled.p`
    color: #fff;
    font-size: clamp( 14px, 2.5vmin, 30px); 
    padding-top: 4%;
    padding-bottom: 1%;
    letter-spacing: 2px; 
    line-height: 1.5em;

    @media only screen and (max-width: 768px){
        font-size: 3vmin;
    }
`;


export const Image = styled.img`
    max-width: 50vmin;

    border-radius: 10px;
    box-shadow: -3px -3px 10px rgba(255,255,255,0.2),
                5px 5px 15px rgba(0,0,0,0.5);

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

