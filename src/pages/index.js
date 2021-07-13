import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkllsSection';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </>
    )
}

export default Home
