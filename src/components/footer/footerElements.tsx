import styled from "styled-components";

export const Footer = styled.footer`
    background: #212121;
`;
export const FooterContent = styled.div`
    padding: 40px 80px 0px 60px;
    text-align: center;
    vertical-align: middle;
    display: flex;
    @media (max-width: 800px) {
        padding: 40px 60px 0px 60px;
        display: inline;
        flex-wrap: wrap;
    }
`;
export const FooterColumn = styled.div`
    color: rgba(107, 114, 128, 1);
    text-decoration: none;
    width: 50%;
    margin: 0 auto;
`;
export const FooterTitle = styled.h3`
    color: rgba(156, 163, 175, 1);
    font-family: inherit;
    font-size: 17px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
    @media (max-width: 800px) {
        user-select: none;
        cursor: pointer;
        &.active ~ul {
            height: 100%;
            transform-origin: top;
            transform: scaleY(1);
            transition: transform .2s ease-out;
        }
    }
`;
export const FooterDescription = styled.p`
    color: #fff;
    opacity: 0.75;
    font-size: 15px;
`;
export const FooterList = styled.ul`
    padding: 0;
    list-style: none;
    @media (max-width: 800px) {
        height: 0;
        transform: scaleY(0);
        &::hover {
            height: 100%;
            transform-origin: top;
            transform: scaleY(1); 
        }
    }
`;
export const FooterItem = styled.li`
    cursor: pointer;
    margin-top: 5px;
    .item {
        color: #fff;
        font-family: inherit;
        font-size: 15px;
        opacity: 0.75;
        text-decoration: none;
        transition: color 0.4s;
        &:hover {
            color: #fdd25c;
            transition: color 0.4s;
        }
        /*
        position: relative;
        display: inline-block;
        transition: color 0.3s;
        &:after {
            content: '';
            position: absolute;
            width: 50%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 25%;
            background-color: #fdd25c;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        &:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
        */
    }
`;

export const FooterContact = styled.div`
    margin-right: 12px;
    text-align: center;
    padding-bottom: 17px;
    i {
        color: #fff;
        font-size: 25px;
        margin-left: 10px;
        transition: color 0.3s;
        &:hover {
            color: #fdd25c;
        }
    }
`;

export const FooterTextTitle = styled.h2`
    color: #fff;
    text-align: center;
`;
export const FooterText = styled.div`
    color: rgba(107, 114, 128, 1);
    //padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`;