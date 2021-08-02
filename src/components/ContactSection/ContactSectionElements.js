import styled from "styled-components";
import { keyframes } from 'styled-components'


export const ContactContainer = styled.div`
    background: #131419;
    min-height: 120vh;
    position: relative;
    z-index: 1;
    
`;

export const ContactContent = styled.div`
    padding: 1% 3% 3% 3%;
    
`;

export const ContactH1 = styled.h1`
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

export const ContactWrapper = styled.form`
    max-width: 80vmin;
    padding: 1% 5% 5% 5%;
    border-radius: 10px;
    background: #131419;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
        5px 5px 15px rgba(0, 0, 0, 0.5);

        @media (min-width: 1800px) {
            min-height: 840px;
        }
`;

export const ContactForm = styled.div`
         
    padding: 5% 0% 0% 0%;
`;

export const InputBox = styled.div`
    
    margin-top: 5%;
`;

export const FormBox = styled.div`
    text-align: right;
    margin-top: 5%;
`;

export const InputLabel = styled.label`
  display: block;
  color: #868686;
  margin-bottom: 5px;
  font-size: 18px;

`;

export const Input = styled.input`
    margin-top: 10px;
    text-align: left;
    width: 100%;
    height: 50px;
    color: #868686;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 40px;
    padding: 5px 15px;
    font-size: 18px;
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
        inset 2px 2px 6px rgba(0, 0, 0, 0.8);
`; 

export const Textarea = styled.textarea`
    margin-top: 10px;
    color: #868686;
    padding: 1em;
    resize: none;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 20px; 
    width: 100%; 
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
    inset 2px 2px 6px rgba(0, 0, 0, 0.8);
`; 

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

export const Item = styled.div`
  justify-content: center;
  padding: .5rem;
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

export const Icon= styled.div`
    padding-top: 10%;
    color: #fff;
    max-width: clamp( 20px, 5vmin, 50px); 
    white-space:nowrap;
    

    @media only screen and (max-width: 768px){
    }
`;


export const Button = styled.button`
    margin-top: 20px;
    color: #868686;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 40px;
    padding: 5px 15px;
    font-size: 18px;
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
`;




