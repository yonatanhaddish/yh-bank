import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    top: 0;
`;

export const CloseIcon = styled(FaTimes) `
    color:#fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div `

`;

export const SideBtnWrap = styled.div `

`;

export const SidebarLink = styled.div `

`;

export const SidebarMenu = styled.div `

`;

export const SidebarRoute = styled.div `

`;