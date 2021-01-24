import React from 'react';
import {SideBarContainer} from './styled'


function SideBar() {
    return(
        <SideBarContainer>
            <Icon>
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