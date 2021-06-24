import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

function Sidebar({isOpen, toggle}) {

    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon  onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to = "about" onClick={toggle}>O mnie</SidebarLink>
                        <SidebarLink to = "projects" onClick={toggle}>Projekty</SidebarLink>
                        <SidebarLink to = "contact" onClick={toggle}>Kontakt</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer> 
        </>
    )
}

export default Sidebar
