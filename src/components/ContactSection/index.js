import React from 'react'
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import {ContactContainer, ContactContent, ContactH1, ContactWrapper,
    InputBox,InputLabel, Textarea, Input, ContactForm, Grid, Item, AboutP, Icon, Button, FormBox  } from './ContactSectionElements'

import {Phone} from '@styled-icons/bootstrap/Phone'



function ContactSectionElements() {


    return (
        <>
            <ContactContainer id="contact">
                <ContactContent>
                    <Fade left duration={2000}>
                        <ContactH1>Kontakt</ContactH1>
                    </Fade>
                    <Grid>
                        <Item>
                            <Fade left duration={2000}>
                                <ContactForm>
                                    <ContactWrapper>
                                        <InputBox>
                                            <InputLabel>Imię</InputLabel>
                                            <Input type="text" name="name" />
                                        </InputBox>
                                        <InputBox>
                                            <InputLabel>E-mail</InputLabel>
                                            <Input type="email" name="email" />
                                        </InputBox>
                                        <InputBox>
                                            <InputLabel>Treść wiadomości</InputLabel>
                                            <Textarea name="message" rows="8"></Textarea>
                                        </InputBox>
                                        <FormBox>
                                            <Button>Wyślij</Button>
                                        </FormBox>  
                                    </ContactWrapper>
                                </ContactForm>
                            </Fade>   
                        </Item>
                        <Item>
                            <AboutP>
                            W celu uzyskania informacji odnośnie potencjalnej współpracy proszę o wypełnienie formularza lub
                            kontakt telefoniczny.
                            </AboutP>
                            <Icon>
                            <Phone/> +48 506804736
                            </Icon>
                        </Item>
                    </Grid>
                 
                </ContactContent> 
            </ContactContainer>
        </>
    )
}

export default ContactSectionElements
