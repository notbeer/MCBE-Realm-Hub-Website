import styled from 'styled-components';

export const Sidebar = styled.div<{ open: boolean }>`
    position: fixed;
    background: rgba(24, 20, 18, 1);
    height: 100%;
    width: 100%;
    top: ${({ open }) => open ? '0px' : '-1000px'};
    transition: top 0.6s;
`;
export const SidebarContent = styled.div<{ open: boolean }>`
    position: relative;
    background: rgba(24, 20, 18, 1);
    height: 100%;
    width: 100%;
    top: 0px;
    top: ${({ open }) => open ? '0px' : '-300px'};
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