import React from 'react'
import {ContactContainer, ContactContent, ContactH1, ContactWrapper,
    InputBox, MessageBox, InputLabel, Textarea, Input, ContactForm, Grid, MainGrid, Item, AboutP, Icon, Button, FormBox  } from './ContactSectionElements'

import {Phone} from '@styled-icons/bootstrap/Phone'



function ContactSectionElements() {


    return (
        <>
            <ContactContainer id="contact">
                <ContactContent>
                        <ContactH1>Kontakt</ContactH1>
                    <MainGrid>
                        <Item>
                                <ContactForm> 
                                    <ContactWrapper>
                                        <InputBox>
                                            <Grid>
                                                <Item>
                                                    <InputLabel>Imię</InputLabel>
                                                    <Input type="text" name="name" autocomplete="nope"/>
                                                </Item>
                                                <Item>
                                                    <InputLabel>E-mail</InputLabel>
                                                    <Input type="email" name="email" autocomplete="off" />
                                                </Item>
                                                <Item>
                                                    <InputLabel>Temat</InputLabel>
                                                    <Input type="text" name="subject" />
                                                </Item>
                                            </Grid>
                                        </InputBox>
                                        <MessageBox>
                                            <InputLabel>Treść wiadomości</InputLabel>
                                            <Textarea name="message" rows="12"></Textarea>
                                        </MessageBox>
                                        <FormBox>
                                            <Button>Wyślij</Button>
                                        </FormBox>  
                                    </ContactWrapper>
                                </ContactForm> 
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
                    </MainGrid>
                 
                </ContactContent> 
            </ContactContainer>
        </>
    )
}

export default ContactSectionElements
