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


    ContainerP, 
    Image, 
    Overlay, 
    Text,
} from './ProjectSectionElements'

import Tilt from 'react-parallax-tilt';
import image1 from '../../images/image1.svg';
import Fade from 'react-reveal/Fade';




function ProjectsSection() {

    const projects = [
        { number: "01", name: "e-Trener", path: 'google.com', info: 'Projekt inżynierski wykorzystujący technologię Python.' },
        { number: "02", name: "eCommerce", path: 'google.com', info: 'Strona sklepu internetowego na podstawie odzieżowego Zalando.' },
        { number: "03", name: "FlowChart", path: 'google.com', info: 'Projekt strony do tworzenia zaawansowanych Flow Cahrtów z generacją pliku json.' },
    ];

    const options = {
        scale: 2,
        max: 30
      };
      

    return (
        <>
            <ProjectsContainer>
                <ProjectsContent>
                    <Fade top>
                        <ProjectsH1>Moje projekty</ProjectsH1>
                    </Fade>
                    <ProjectsWrapper>
                        {projects.map((project, index) => (
                                    <Tilt  options={options} key={index}>
                                         {/* <ProjectsItem key={index}>    */}
                                         <ContainerP>
                                            <Image src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
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
                                                    <ProjectMore  to={project.path}>
                                                        Więcej informacji
                                                    </ProjectMore>
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
                        
                    </ProjectsWrapper>
                </ProjectsContent> 
            </ProjectsContainer>
        </>
    )
}

export default ProjectsSection
