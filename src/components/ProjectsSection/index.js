import React from 'react';
import {ProjectsContainer,
    ProjectsContent,
    ProjectsH1,
    ProjectsName,
    ProjectsInfo,
    ProjectNumber,
    ProjectContent,
    ContainerP, 
    Image, 
    Overlay, 
    ProjectsTech,
    NButtonBack,
    ButtonContainer,
    NButtonNext,
    RightArrowAlt2,
    LeftArrowAlt2
} from './ProjectSectionElements'

import ecommerce from '../../images/ecommerce.svg'
import etrener from '../../images/etrener.svg'
import flowchart from '../../images/flowchart.svg'
import video from '../../images/video.svg'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function ProjectsSection() {


    const projects = [
        { id: 1, number: "01", name: "e-Trener", path: 'https://github.com/kicky1/eTrener2', image: etrener, info: 'Aplikacja słuąca do doskonalenia wykonywanych na żywo ćwiczeń.', tech: 'Python' },
        { id: 2, number: "02", name: "eCommerce", path: 'https://github.com/kicky1/eCommerce', image: ecommerce, info: 'Aplikacja internetowa eCommerce na podstawie strony z ubraniami Zalando.', tech: 'React, Redux, Node' },
        { id: 3, number: "03", name: "FlowChart", path: 'https://github.com/kicky1/FlowChart', image: flowchart, info: 'Projekt strony do tworzenia zaawansowanych Flow Cahrtów z generacją pliku json.', tech: 'React, Redux' },
        { id: 4, number: "04", name: "VideoSearch", path: 'google.com', image: video, info: 'Aplikacja internetowa słuąca do wyszukiwania filmów za pomocą słów kluczowych.', tech: 'React, Redux, Node' },

    ];

    const options = {
        scale: 2,
        max: 30
      };
      

    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsContent>
                        <ProjectsH1>Portfolio</ProjectsH1>
                    
                        <CarouselProvider
                        naturalSlideWidth={300}
                        naturalSlideHeight={300}
                        totalSlides={projects.length}
                        infinite={true}
                        visibleSlides={3}
                    ><Slider>
                        {projects.map((project, index) => (
                            <Slide index={index} key={index}>
                                   
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
                                  
                                    </Slide>
                                ))
                                }   
                        </Slider>
                        <ButtonContainer>
                        <NButtonBack><LeftArrowAlt2/></NButtonBack>
                        <NButtonNext><RightArrowAlt2/></NButtonNext>
                        </ButtonContainer>
                        

                        </CarouselProvider>       
                   
                </ProjectsContent> 
            </ProjectsContainer>
        </>
    )
}

export default ProjectsSection
