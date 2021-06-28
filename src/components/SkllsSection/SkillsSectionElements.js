import styled from "styled-components";


export const SkillsContainer = styled.div`
   background: #0c0c0c;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  
`;

export const SkillsContent = styled.div`
     padding: 1% 3% 3% 3%;
`;

export const SkillsWrapper = styled.div`
     padding: 0% 10% 0% 10%;
`;

export const SkillstH1 = styled.h1`
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

export const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 5vh 0vh;
    border: 1px solid white;
    min-height: 30vw;

    @media (min-width: 1800px) {
        min-height: 840px;
    }
`

export const SkillsItem = styled.li`
    position: relative;
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


export const SkillsInfo = styled.span`
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    font-size: clamp(12px, 2.5vw, 20px);
    white-space: nowrap;
    margin-top: 10px;
    color: #fff;
`

export const SkillsSvgWrapper = styled.span`
    width: 25%;
    color: #fff;
    transition: color 4s 1.5s;
    overflow: hidden;
    color: ${(props) => props.color};

    @media screen and (max-width: 488px) {
        width: 20%;
    }

 

`