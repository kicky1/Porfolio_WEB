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
import { Link, animateScroll as scroll } from "react-scroll";

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
                                <HomeLinks>
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        O mnie
                                    </Link>
                                </HomeLinks>
                            </HomeItem>
                            <HomeItem>
                                <HomeLinks>
                                    <Link
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        >
                                            Projekty
                                    </Link>
                                </HomeLinks>
                            </HomeItem>
                            <HomeItem>
                                <HomeLinks>
                                    <Link
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                        >
                                        Kontkat
                                    </Link>
                                </HomeLinks>
                            </HomeItem>
                        </HomeMenu>
                </HomeContent>
                
            </HomeContainer>
            
        </>
    )
}

export default HomeSectionElements
