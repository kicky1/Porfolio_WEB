import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #131419;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;


export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`;

export const HomeContent = styled.div`
    z-index: 3;
    padding: 1% 3% 3% 3%;
    position: absolute;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.div`
    font-weight: 800;
    font-size: clamp(50px, 8vw, 100px);
    padding: 0 2px;
    letter-spacing: 2px;
    color:#fff;

    

    @media screen and (max-width: 768px){
        font-size: clamp(30px, 6,5vw, 50px);
    }

    @media screen and (max-width: 488px){
        font-size:  39px;
    }
`;

export const HomeP = styled.p`
    color: #fff;
    font-size: clamp(24px, 3.2vw, 60px);
    text-align: center;
    padding-top: 2%;



    @media screen and (max-width: 488px){
        font-size:  20px;
    }
`;

export const HomeMenu = styled.ul`

    align-items: center;
    list-style: none;
    text-align: center;
    padding-top: 5%;
`;

export const HomeItem = styled.div`
    height: 80px;
    
`;

