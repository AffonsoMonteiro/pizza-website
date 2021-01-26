import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBarRoute, SideBtnWrap} from './styled'


function SideBar( {isOpen, toggle} ) {

    return(
        <SideBarContainer isOpen={isOpen}  >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>

            <SideBarMenu>
                <SideBarLink to="/">Pizzas</SideBarLink>
                <SideBarLink to="/">Sobremesas</SideBarLink>
                <SideBarLink to="/">Menu Completo</SideBarLink>
            </SideBarMenu>

            <SideBtnWrap>
                <SideBarRoute to="/">Peça Agora</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBar