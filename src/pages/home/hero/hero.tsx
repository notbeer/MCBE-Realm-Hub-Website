import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import { IconButton, Collapse } from '@material-ui/core';
import {
    Hero as HeroContainer,
    HeroContent,
    HeroTitle,
    HeroDescription,
    DownIcon
} from './heroElements';

export default function Hero() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <HeroContainer id="HeroContainer">
            <Collapse in={checked}{ ...(checked ? { timeout: 1000 } : {}) }>
                <HeroContent>
                    <HeroTitle>Realm Hub</HeroTitle>
                    <HeroDescription>We provide you with documentations and pre-built utils to enhance your Realm Development for free.<br/>Wether it's commands, add-ons, or scripting we have got you covered!</HeroDescription>
                    <Scroll to="Content" smooth={true}>
                        <IconButton>
                            <DownIcon/>
                        </IconButton>
                    </Scroll>
                </HeroContent>
            </Collapse>
        </HeroContainer>
    );
};
// <ScrollToTop sticky={sticky}/>