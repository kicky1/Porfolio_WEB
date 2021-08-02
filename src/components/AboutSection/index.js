import React from 'react'
import { useEffect, useState } from 'react';
import {AboutContainer, AboutContent, AboutH1, AboutP, Item, Grid, Image, ItemImage, Button} from './AboutSectionElements'
import image from '../../images/krzysio.png'
import Fade from 'react-reveal/Fade';



function AboutSectionElements() {


    return (
        <>
            <AboutContainer id="about">
                <AboutContent>
                    <Fade left duration={2000}>
                        <AboutH1>O mnie</AboutH1>
                    </Fade>
                    

                    <Grid>
                        <Item>
                            <Fade left duration={2000}>
                                <AboutP>
                                    Cześć, mam na imię Krzysiek i jestem studentem Politechniki Gdańskiej. W 2021 roku 
                                    uzyskałem stopień inżyniera z dziedziny informatyki w medycynie na wydziale Elektroniki i Technologii.
                                </AboutP>
                                <AboutP>
                                    Aktualnie kontynuuję naukę na stopniu magisterskim z Sztucznej Inteligencji oraz pracuję jako
                                    Junior Developer w firmie Sevenet. Pomimo wykształcenia związanego z Machine Learning od 
                                    dłuższego czasu zajmuję się tworzeniem aplikacji webowych.
                                </AboutP>
                                <a href="https://docdro.id/Nj7kHd3">
                                    <Button>CV</Button>
                                </a>
                            </Fade>
                        </Item>
                        <ItemImage>
                            <Fade duration={4000}>
                                <Image src={image}/>  
                            </Fade>
                        </ItemImage>
                    </Grid>
                </AboutContent> 
                
            </AboutContainer>
        </>
    )
}

export default AboutSectionElements
