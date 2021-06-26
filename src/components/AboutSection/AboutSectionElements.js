import styled from "styled-components";


export const AboutContainer = styled.div`
    background: #0c0c0c;
    height: 100vh;
    position: relative;
    z-index: 1;
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
    cursor: default;
    
    

    @media screen and (max-width: 768px){
        font-size: clamp(30px, 6,5vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;

export const AboutP = styled.p`
    color: #fff;
    font-size: clamp(20px, 2.4vw, 60px);
    padding-top: 4%;
    letter-spacing: 2px; 
    line-height: 1.5em;
    



    @media screen and (max-width: 488px){
        font-size:  20px;
    }
`;