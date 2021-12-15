import React from "react";
import styled, { css } from "styled-components";

export const NavigationContainer = styled.nav`
    position: absolute;
    width: 100%;
    height: 80px;
    z-index: 2;
`;
export const NavigationContent = styled.div`
    padding: 0px 50px 0px 50px;
    width: 100%;
    height: 80px;
    transition: all 0.7s ease-in-out;
    @media (max-width: 600px) {
        padding: 0px 35px 0px 35px;
    }
    &.sticky {
        top: -140px;
        transition: top 0.4s ease-in-out;
    }
    &.active {
        top: 0px;
        position: fixed;
        background: rgba(24, 20, 18, 0.9);
        transition: top 1s ease-in-out;
    }
`;
export const NavigationLogo = styled.h1`
    position: absolute;
    color: #fff;
    top: 10px;
    @media (max-width: 600px) {
        vertical-align: middle;
        
    }
`;

const Bar = css`
    height: 4px;
    width: 25px;
    background: #fff;
    border-radius: 5px;
    transform-origin: left;
    transition: all 0.3s;
`;
const Hamburger = styled.div<{ open: boolean }>`
    position: relative;
    top: 30px;
    margin-left: auto; 
    width: 25px;
    cursor: pointer;
    transition: left 0.3s;
    div {
        ${Bar}
        &.top {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &.middle {
            margin: 5px 0px;
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
        }
        &.bottom {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;
export const HamburgerButton = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <Hamburger open={open} onClick={() => setOpen(!open)}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </Hamburger>
    );
};