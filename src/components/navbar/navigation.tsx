import { useState, useEffect } from 'react';
import useWindowDimensions from '../../utils/dimension';
import Sidebar from '../sidebar/sidebar';
import {
    NavigationContainer,
    NavigationContent,
    HamburgerButton
} from './navigationElements';

export default function Navigation() {
    const [sticky, setSticky] = useState(false),
    [active, setActive] = useState(false),
    [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 80) setSticky(true);
            else {
                setSticky(false);
                setOpen(false);
            };
            if(window.scrollY > 500) setActive(true);
            else if(window.scrollY <= 0) setActive(false);
        });
    }, []);
    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if(!open) return;
            if(e.target.getAttribute("class")?.includes('search-box')) setOpen(false);
            else if(e.target.getAttribute("id")?.includes('SidebarContainer')) setOpen(false);
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [open]);
    

    return (
        <NavigationContainer id="NavigationContainer">
            <Sidebar open={open}/>
            <NavigationContent {...(sticky ? { className: 'sticky' } : {})} {...(active ? { className: 'sticky active' } : {})}>
                {useWindowDimensions().width <= 600 ? <HamburgerButton open={open} setOpen={setOpen}/> : null}
            </NavigationContent>
        </NavigationContainer>
    );
};