import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = style.aside `
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
`

export const CloseIcon = style(FaTimes) `
    color:#fff;
`