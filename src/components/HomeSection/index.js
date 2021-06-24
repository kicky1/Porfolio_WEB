import React from 'react';
import {
    HomeContainer, 
    HomeBg, 
    VideoBg, 
    HomeItem, 
    HomeLinks, 
    HomeMenu, 
    HomeContent,
    HomeP,
    HomeH1} from './HomeSectionElements';

import Video from '../../videos/video.mp4';

function HomeSectionElements() {
    return (
        <>
            <HomeContainer>
                <HomeBg>
                    <VideoBg autoPlay loop muted src={Video} type='video.mp4'/>
                </HomeBg>
                <HomeContent>
                    <HomeH1>Krzysztof Wicki</HomeH1>
                    <HomeP>Frontend Developer</HomeP>
                        <HomeMenu>
                            <HomeItem>
                                <HomeLinks to='about'>O mnie</HomeLinks>
                            </HomeItem>
                            <HomeItem>
                                <HomeLinks to='projects'>Projekty</HomeLinks>
                            </HomeItem>
                            <HomeItem>
                                <HomeLinks to='contact'>Kontkat</HomeLinks>
                            </HomeItem>
                        </HomeMenu>
                </HomeContent>
                
            </HomeContainer>
            
        </>
    )
}

export default HomeSectionElements
