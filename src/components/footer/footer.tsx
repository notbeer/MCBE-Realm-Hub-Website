import React, { useState } from 'react';
import { YellowSpan } from '../other/color';
import { Footer as FooterContainer, FooterContent, FooterColumn, FooterTitle, FooterList, FooterItem, FooterContact, FooterText, FooterTextTitle } from './footerElements';

export default function Footer() {
    const [realmhub, setRealmhub] = useState(false),
    [support, setSupport] = useState(false),
    [legal, setLegal] = useState(false),
    [faq, setFaq] = useState(false);

    const handleClick = (fn: React.Dispatch<React.SetStateAction<boolean>>, bool: boolean): void => {
        if(window.innerWidth <= 800) fn(!bool);
    };

    return (
        <FooterContainer id="FooterContainer">
            <FooterContent>
                <FooterColumn>
                    <FooterTitle onClick={() => handleClick(setRealmhub, realmhub)} { ...(realmhub ? { className: 'active' } : {}) }>Discover</FooterTitle>
                    <FooterList>
                        <FooterItem><a className="item" href="/">Home</a></FooterItem>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle onClick={() => handleClick(setSupport, support)} { ...(support ? { className: 'active' } : {}) }>Support</FooterTitle>
                    <FooterList>
                        <FooterItem><a className="item" href="mailto:mcberealmhub@gmail.com" target="_blank">Mail</a></FooterItem>
                        <FooterItem><a className="item" href="https://discord.com/invite/CpRXfygxsE" target="_blank">Discord</a></FooterItem>
                        <FooterItem><a className="item" href="#">Message</a></FooterItem>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle onClick={() => handleClick(setLegal, legal)} { ...(legal ? { className: 'active' } : {}) }>Legal</FooterTitle>
                    <FooterList>
                        <FooterItem><a className="item" href="#">Terms</a></FooterItem>
                        <FooterItem><a className="item" href="#">Privacy</a></FooterItem>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle onClick={() => handleClick(setFaq, faq)} { ...(faq ? { className: 'active' } : {}) }>FAQ</FooterTitle>
                    <FooterList>
                        <FooterItem><a className="item" href="#">Cookie policy</a></FooterItem>
                        <FooterItem><a className="item" href="#">What's new</a></FooterItem>
                    </FooterList>
                </FooterColumn>
            </FooterContent>
            <FooterContact>
                <a href="https://discord.com/invite/CpRXfygxsE" target="_blank"><i className='bx bxl-discord'/></a>
                <a href="https://www.youtube.com/channel/UCMuVWe26eTTsUyY9tNZmztg" target="_blank"><i className='bx bxl-youtube'></i></a>
            </FooterContact>
            <FooterText>
                © 2020 - {new Date().getFullYear()} <a>Realmhub<YellowSpan>.</YellowSpan>dev</a> - Official MCBE Realm Hub website.<br/>All Rights Reserved.
            </FooterText>
        </FooterContainer>
    );
};

/* <FooterColumn>
    <FooterTitle>Kawaii<YellowSpan>.</YellowSpan>Tv</FooterTitle>
    <FooterDescription>Watch your favorite Anime collection videos. We provide you with the latest and high quality Anime for free!</FooterDescription>
</FooterColumn> */