import styled from 'styled-components';

export const Sidebar = styled.div<{ open: boolean }>`
    position: fixed;
    background-color: ${({ open }) => open ? 'rgba(23, 24, 26, 0.75)' : ''};
    width: ${({ open }) => open ? '100%' : '0%'};
    height: ${({ open }) => open ? '100%' : '0%'};
    transition: background-color 0.3s ease-in-out;
`;
export const SidebarContent = styled.div<{ open: boolean }>`
    position: relative;
    background: rgba(24, 20, 18, 1);
    height: 100%;
    width: 220px;
    left: 0px;
    left: ${({ open }) => open ? '0px' : '-300px'};
    transition: left 0.3s;
`;

export const SidebarTitle = styled.h1`
    position: absolute;
    color: #fff;
    padding: 9px 0px 0px 63px;
    &:after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 70%;
        padding-top: 10px;
        border-bottom: 2px solid #fdd25c;
    }
`;