import React from 'react'
import {AboutContainer, AboutContent, AboutH1, AboutP, Item, Grid, Image, ItemImage, Button, LinkSevenet, H3} from './AboutSectionElements'
import image from '../../images/krzysio.png'


function AboutSectionElements() {


    return (
        <>
            <AboutContainer id="about">
                <AboutContent>
                        <AboutH1>O mnie</AboutH1>
                    

                    <Grid>
                        <Item>
                                <AboutP>
                                    Cześć, mam na imię Krzysiek od <H3>4 lat</H3> interesuję się tworzeniem aplikacji webowych.
                                </AboutP>
                                <AboutP>   
                                    Jestem absolwentem studiów <H3>I stopnia</H3> kierunku Informatyka w Medycynie na wydziale Elektroniki i Telekomunikacji
                                    Politechniki Gdańskiej. Obecnie kontynuuję naukę na <H3>II stopniu</H3> na nowo powstałym kierunku Artificial Intelligence
                                    na Politechnice Gdańskiej.
                                </AboutP>
                                <AboutP>
                                    Aktualnie pracuję jako Fonr-End Developer w <LinkSevenet href='https://sevenet.pl/pl'>Sevenet</LinkSevenet>.
                                </AboutP>
                                <a href="https://docdro.id/Nj7kHd3">
                                    <Button>CV</Button>
                                </a>
                        </Item>
                        <ItemImage>
                                <Image src={image}/>  
                        </ItemImage>
                    </Grid>
                </AboutContent> 
                
            </AboutContainer>
        </>
    )
}

export default AboutSectionElements
