import React, { useEffect, useRef } from 'react';
import {ProjectsContainer,
    ProjectsContent,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsList,
    ProjectsItem,
    ProjectsItemContainer,
    ProjectsName,
    ImageWrapper,
    ProjectsImageHoverContainer,
    RevealImage,
   
    ProjectsInfoContainer,
    ProjectsInfo,
    ProjectNumber,
    ProjectMore,
    ProjectContent,
    ProjectImage,
    ProjectText,
    ProjectLiquid,

    ContainerP, 
    Image, 
    Overlay, 
    Text,
} from './ProjectSectionElements'

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import ecommerce from '../../images/ecommerce.svg'
import etrener from '../../images/etrener.svg'
import flowchart from '../../images/flowchart.svg'
import video from '../../images/video.svg'



function ProjectsSection() {

    const projects = [
        { number: "01", name: "e-Trener", path: 'google.com', image: etrener, info: 'Projekt inżynierski wykorzystujący technologię Python.' },
        { number: "02", name: "eCommerce", path: 'google.com', image: ecommerce, info: 'Strona sklepu internetowego na podstawie odzieżowego Zalando.' },
        { number: "03", name: "FlowChart", path: 'google.com', image: flowchart, info: 'Projekt strony do tworzenia zaawansowanych Flow Cahrtów z generacją pliku json.' },
        { number: "04", name: "VideoSearch", path: 'google.com', image: video, info: 'Projekt strony do wyszukiwania informacji na temat wybranego filmu.' },

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
                                         <ContainerP to={project.path}>
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
                                                    {/* <ProjectMore  to={project.path}>
                                                        <ProjectText>Więcej informacji</ProjectText>
                                                        <ProjectLiquid/>
                                                    </ProjectMore> */}
                                                </ProjectContent> 
                                            </Overlay>
                                        </ContainerP>
                                                {/* <ProjectContent>  
                                                    <ProjectNumber>
                                                        {project.number}
                                                    </ProjectNumber>
                                                    <ProjectsName>
                                                        {project.name}
                                                    </ProjectsName>
                                                    <ProjectsInfo>
                                                            {project.info}
                                                    </ProjectsInfo>
                                                    <ProjectMore  to={project.path}>
                                                        Więcej informacji
                                                    </ProjectMore>
                                                </ProjectContent>                */}
                                        {/* </ProjectsItem> */}
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
