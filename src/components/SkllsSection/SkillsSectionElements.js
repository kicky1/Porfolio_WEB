import styled from "styled-components";


export const SkillsContainer = styled.div`
    background: #131419;
    min-height: 100vh;
   
    z-index: 1;
  
`;

export const SkillsContent = styled.div`
     padding: 5% 3% 0 3%;
`;

export const SkillsWrapper = styled.div`
     padding: 0% 10% 0% 10%;
`;

export const SkillstH1 = styled.div`
    font-weight: 300;
    font-size: clamp(40px, 5vw, 80px);
    color:#EBEBEB;
    padding-bottom: 4%;
    
    
    

    @media screen and (max-width: 768px){
        font-size: clamp(30px, 6,5vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;

export const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 5vh 0vh;
    border-radius: 10px;
    box-shadow: -5px -5px 10px rgba(255,255,255,0.05),
                5px 5px 15px rgba(0,0,0,0.5);
   
`



export const SkillsItem = styled.div`
    
    flex-basis: 19.5%;
    display: grid;
    place-items: center;
    padding: 15px 0;

    @media screen and (max-width: 1200px) {
        flex-basis: 29%;
    }

    @media screen and (max-width: 488px){
        flex-basis: 50%;
    }
`


export const SkillsInfo = styled.div`
    
    z-index: 1;
    text-transform: uppercase;
    font-size: clamp(12px, 2vw, 20px);
    white-space: nowrap;
    margin-top: 7px;
    color: #EBEBEB;
    letter-spacing: 1px; 
    line-height: 1.2em;
    font-weight: 250;
`

export const SkillsSvgWrapper = styled.div`
    width: 25%;
    color: #fff;
    transition: color 4s 1.5s;
    overflow: hidden;
    color: ${(props) => props.color};

    @media screen and (max-width: 488px) {
        width: 20%;
    }

 

`