import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

function Sidebar() {
    return (
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to = "about">O mnie</SidebarLink>
                        <SidebarLink to = "projects">Projekty</SidebarLink>
                        <SidebarLink to = "contact">Kontakt</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer> 
        </>
    )
}

export default Sidebar
