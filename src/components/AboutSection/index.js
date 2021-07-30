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
                        <AboutH1>Trochę o mnie</AboutH1>
                    </Fade>
                    

                    <Grid>
                        <Item>
                            <Fade left duration={2000}>
                                <AboutP>
                                    Cześć, mam na imię Krzysiek i jestem studentem Politechniki Gdańskiej. W 2021 roku 
                                    uzyskałem stopień inżyniera z dziedziny informatyki w medycynie na wydziale Elektroniki i Technologii.
                                </AboutP>
                                <AboutP>
                                    Aktualnie kontynuuję naukę na stopniu magisterskim z Sztucznej Inteligencji. Pomimo wykształcenia
                                    bardziej w kierunku związanym z Machine Learning od dłuższego czasu zauważyłem, iż 
                                    prawdziwą przyjemność sprawia mi tworzenie aplikacji webowych, w związku z czym swój 
                                    wolny czas po studiach oraz pracy przeznaczam na naukę tworzenia aplikacji internetowych.
                                </AboutP>
                                <a href="https://docdro.id/Nj7kHd3">
                                    <Button>CV</Button>
                                </a>
                                

                            </Fade>
                        </Item>
                        <ItemImage>
                            <Fade right duration={4000}>
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
