import React, {useState} from 'react'
import {ContactContainer, ContactContent, ContactH1, ContactWrapper,
    InputBox, MessageBox, InputLabel, Textarea, Input, ContactForm, Grid, MainGrid, Item, AboutP, Icon, Button, FormBox  } from './ContactSectionElements'

import {Phone} from '@styled-icons/bootstrap/Phone'



function ContactSectionElements() {

    const [status, setStatus] = useState("Wyślij");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Wysyłanie...");
      const { name, email, subject, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Wyślij");
      let result = await response.json();
      alert(result.status);
    };


    return (
        <>
            <ContactContainer id="contact">
                <ContactContent>
                        <ContactH1>Kontakt</ContactH1>
                    <MainGrid>
                        <Item>
                                <ContactForm onSubmit={handleSubmit}> 
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
                                            <Button type="submit">{status}</Button>
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
