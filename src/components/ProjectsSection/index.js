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
    Image,
    ProjectsInfoContainer,
    ProjectsInfo,
    ProjectNumber,
    ProjectMore,
    ProjectContent,
    ProjectImage,
} from './ProjectSectionElements'

import Tilt from 'react-parallax-tilt';
import image1 from '../../images/image1.svg';



function ProjectsSection() {

    const projects = [
        { number: "01", name: "e-Trener", path: 'google.com', info: 'Projekt inżynierski wykorzystujący technologię Python.' },
        { number: "02", name: "eCommerce", path: 'google.com', info: 'Strona sklepu internetowego na podstawie Zalando.' },
        { number: "03", name: "FlowChart", path: 'google.com', info: 'Projekt strony do tworzenia Flow Cahrtów' },
    ];

    const options = {
        scale: 2,
        max: 30
      };

    return (
        <>
            <ProjectsContainer>
                <ProjectsContent>
                    <ProjectsH1>Moje projekty</ProjectsH1>
                    <ProjectsWrapper>
                        
                        {projects.map((project, index) => (
                                <Tilt  options={options} >
                                         <ProjectsItem>
                                                <ProjectContent src={image1}>
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
                                        </ProjectsItem>
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