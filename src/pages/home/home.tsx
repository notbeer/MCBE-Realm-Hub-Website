import { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';

import { Home as HomeContainer } from './homeElements';
import { ScrollToTop } from '../../components/button/buttonElements';
import Navigation from '../../components/navbar/navigation';
import Hero from './hero/hero';
import Footer from '../../components/footer/footer';
import Content from './content/content';

export default function Home() {
    const [sticky, setSticky] = useState(false);

    const onScroll = () => {
        if(window.scrollY > 546) setSticky(true);
        else setSticky(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);

    return (
        <HomeContainer id="HomeContainer">
            <ScrollToTop sticky={sticky}/>
            <CssBaseline>
                <Navigation/>
                <Hero/>
                <Content/>
                <Footer/>
            </CssBaseline>
        </HomeContainer>
    );
};