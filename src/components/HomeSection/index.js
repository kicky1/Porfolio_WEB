import React from 'react';
import {
    HomeContainer, 
    HomeBg, 
    VideoBg, 
    HomeContent,
    HomeP,
    HomeH1} from './HomeSectionElements';

import Video from '../../videos/video.mp4';


function HomeSectionElements() {
    return (
        <>
            <HomeContainer  id="home">
                <HomeBg>
                    <VideoBg autoPlay loop muted src={Video} type='video.mp4'/>
                </HomeBg>
                <HomeContent>
                    <HomeH1>Krzysztof Wicki</HomeH1>
                    <HomeP>Frontend Developer</HomeP>
                </HomeContent>
                
            </HomeContainer>
            
        </>
    )
}

export default HomeSectionElements
