import styled from "styled-components";


export const ContactContainer = styled.div`
    background: #131419;
    min-height: 100vh;
    
    z-index: 1;
    
`;

export const ContactContent = styled.div`
    padding: 5% 3% 0 3%;
    
`;

export const ContactH1 = styled.div`
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

export const ContactWrapper = styled.form`
    min-height: 30vmin;
    padding: 1% 2% 2% 2%;
    border-radius: 10px;
    background: #131419;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
        5px 5px 15px rgba(0, 0, 0, 0.5);

    @media only screen and (min-height: 1200px){
        min-height: 50vmin;
    }   

`;

export const ContactForm = styled.div`
         
    padding: 3% 0% 0% 0%;
`;

export const InputBox = styled.div`
    margin-top: 0.2rem;
`;

export const MessageBox = styled.div`
    
    margin-top: 2rem;
    padding-left: 10px;
    padding-right: 10px;
    
    @media only screen and (min-height: 1200px){
    margin-top: 4rem;
}
`;

export const FormBox = styled.div`
    text-align: right;
    margin-top: 1%;
`;



export const InputLabel = styled.label`
 
  color: #868686;
  margin-bottom: 0px;
  font-size: 2.5vmin;

  @media only screen and (max-width: 768px){
    font-size: 4vmin;
}
  

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
    border-radius: 20px;
    font-size: 18px;
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
        inset 2px 2px 6px rgba(0, 0, 0, 0.8);    
    
`; 

export const Textarea = styled.textarea`
    margin-top: 10px;
    color: #868686;
    resize: none;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 20px; 
    width: 100%; 
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
    inset 2px 2px 6px rgba(0, 0, 0, 0.8);

    @media only screen and (min-height: 1200px){
        font-size: clamp( 20px, 2vmin, 50px);
    }  
`; 

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 30%;
  grid-gap: 8vmin;
  @media only screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40px 40px;
  grid-gap: 5px;

  @media only screen and (max-width: 768px){
    grid-template-columns: repeat(1, 5fr);
    grid-gap: 50px;
}
  
`;


export const Item = styled.div`
  justify-content: center;
  padding: .5rem;
  font-weight: 350;
  
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

export const Icon= styled.div`
    padding-top: 10%;
    color: #fff;
    max-width: clamp( 20px, 5vmin, 50px); 
    font-size: clamp( 20px, 2.5vmin, 50px);
    white-space:nowrap;
    font-weight: 250;

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

    @media screen and (max-width: 768px){
        font-size: 2vh;
        width: 6rem;
        height: 2.5rem;
    }
`;




