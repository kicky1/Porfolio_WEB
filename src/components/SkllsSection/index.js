import React from 'react'
import {SkillsContainer, SkillsWrapper, SkillsContent, SkillstH1, SkillsList, SkillsItem, SkillsSvgWrapper, SkillsInfo} from './SkillsSectionElements'
import {
    Css3,
    Javascript,
    Html5,
    Wordpress,
    

} from '@styled-icons/simple-icons';


import {LogoReact} from '@styled-icons/ionicons-solid/LogoReact';
import {Vuejs} from '@styled-icons/boxicons-logos/Vuejs';
import {Bootstrap} from '@styled-icons/boxicons-logos/Bootstrap';
import {Java} from '@styled-icons/fa-brands/Java';
import {Python} from '@styled-icons/boxicons-logos/Python';
import {StyledComponents} from '@styled-icons/simple-icons';
import { Github } from '@styled-icons/bootstrap/Github';
import {Adobexd} from '@styled-icons/simple-icons/Adobexd'
import {Mongodb} from '@styled-icons/simple-icons/Mongodb'
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs'
import {Woo} from '@styled-icons/simple-icons/Woo'
import {Adobephotoshop} from '@styled-icons/simple-icons/Adobephotoshop'
import {Markdown} from '@styled-icons/boxicons-logos/Markdown'
import Fade from 'react-reveal/Fade';


function SkillsSection() {

    const skills = [
        { name: "html", icon: <Html5 />, color: "#e34c26" },
        { name: "css3", icon: <Css3 />, color: "#2965f1" },
        { name: "javascript", icon: <Javascript />, color: "#f0db4f" },
        { name: "git", icon: <Github />, color: "#fff" },
        { name: "react.js", icon: <LogoReact />, color: "#61DBFB" },
        { name: "vue.js", icon: <Vuejs />, color: "#41B883" },
        { name: "java", icon: <Java />, color: "#f89820" },
        { name: "python", icon: <Python />, color: "#FFE873" },
        { name: "bootstrap", icon: <Bootstrap />, color: "#602C50" },
        // { name: "styled components", icon: <StyledComponents />, color: "#DDA0DD" },
        { name: "wordpress", icon: <Wordpress />, color: "#21759b" },
        // { name: "Markdown", icon: <Markdown />, color: "#fff" },
        { name: "Woo commerce", icon: <Woo />, color: "#764abc" },
        { name: "Nodejs", icon: <Nodejs />, color: "#68A063" },
        { name: "mongodb", icon: <Mongodb />, color: "#4DB33D" },
        { name: "Photoshop", icon: <Adobephotoshop />, color: "#4FCCFE" },
        { name: "adobexd", icon: <Adobexd />, color: "#B82357" },


    ];

    return (
        <>
            <SkillsContainer>
                <SkillsContent>
                    <Fade left duration={2000}>
                        <SkillstH1>Technologie</SkillstH1>
                    </Fade>
                    <SkillsWrapper>
                        <Fade bottom duration={2000}>
                            <SkillsList>
                                {skills.map((link, index) => (
                                    <SkillsItem key={index}>
                                        <SkillsSvgWrapper color={link.color}>
                                            {link.icon}
                                        </SkillsSvgWrapper>
                                        <SkillsInfo>
                                            {link.name}
                                        </SkillsInfo>
                                    </SkillsItem>
                                ))}
                            </SkillsList>
                        </Fade>
                    </SkillsWrapper>
                </SkillsContent> 
            </SkillsContainer>
        </>
    )
}

export default SkillsSection
