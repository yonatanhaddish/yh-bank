import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">yh</NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
