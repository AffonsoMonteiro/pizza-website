import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './styled'
import Hero from '../../components/Hero';

function NavBar() {
    return (
        <Nav>
            <NavLink to="/"> Pizza </NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars />
            </NavIcon>
            <Hero />
        </Nav>
    )
}

export default NavBar;