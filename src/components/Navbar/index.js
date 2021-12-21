import React from 'react'
import { FaBars } from 'react-icons/fa';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">YH-Bank</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">Service</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">AA</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">Signup</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav> 
        </>
    );
};

export default Navbar;