import React, { useEffect, useRef } from 'react';
import {ProjectsContainer,
    ProjectsContent,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsName,
    ProjectsInfo,
    ProjectNumber,
    ProjectContent,
    ContainerP, 
    Image, 
    Overlay, 
    ProjectsTech
} from './ProjectSectionElements'

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import ecommerce from '../../images/ecommerce.svg'
import etrener from '../../images/etrener.svg'
import flowchart from '../../images/flowchart.svg'
import video from '../../images/video.svg'



function ProjectsSection() {

    const projects = [
        { number: "01", name: "e-Trener", path: 'https://github.com/kicky1/eTrener2', image: etrener, info: 'Aplikacja słuąca do doskonalenia wykonywanych na żywo ćwiczeń.', tech: 'Python' },
        { number: "02", name: "eCommerce", path: 'https://github.com/kicky1/eCommerce', image: ecommerce, info: 'Aplikacja internetowa eCommerce na podstawie strony z ubraniami Zalando.', tech: 'React, Redux, Node' },
        { number: "03", name: "FlowChart", path: 'https://github.com/kicky1/FlowChart', image: flowchart, info: 'Projekt strony do tworzenia zaawansowanych Flow Cahrtów z generacją pliku json.', tech: 'React, Redux' },
        { number: "04", name: "VideoSearch", path: 'google.com', image: video, info: 'Aplikacja internetowa słuąca do wyszukiwania filmów za pomocą słów kluczowych.', tech: 'React, Redux, Node' },

    ];

    const options = {
        scale: 2,
        max: 30
      };
      

    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsContent>
                    <Fade left duration={2000}>
                        <ProjectsH1>Portfolio</ProjectsH1>
                    </Fade>
                    <ProjectsWrapper>
                        <Fade left duration={2000}>
                        {projects.map((project, index) => (
                                    <Tilt  options={options} key={index}>
                                         {/* <ProjectsItem key={index}>    */}
                                         <ContainerP href={project.path}>
                                            <Image src={project.image} alt="Avatar"/>
                                            <Overlay>
                                            <ProjectContent>  
                                                    <ProjectNumber>
                                                        {project.number}
                                                    </ProjectNumber>
                                                    <ProjectsName>
                                                        {project.name}
                                                    </ProjectsName>
                                                    <ProjectsInfo>
                                                        {project.info}
                                                    </ProjectsInfo>
                                                    <ProjectsTech>
                                                        Technologie: {project.tech}
                                                    </ProjectsTech>
                                                </ProjectContent> 
                                            </Overlay>
                                        </ContainerP>
                                    </Tilt> 
                                ))
                                } 
                        </Fade>             
                    </ProjectsWrapper>
                </ProjectsContent> 
            </ProjectsContainer>
        </>
    )
}

export default ProjectsSection
