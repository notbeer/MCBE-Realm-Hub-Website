import { Link as Scroll } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const ScrollToTop = ({ sticky }: { sticky: boolean }) => {
    return (
        <Scroll to="root" smooth={true} style={{ position: 'relative' }}>
            <IconButton style={{ background: '#f3c669', position: 'fixed', bottom: '20px', right: '20px', transform: `${sticky ? 'scale(1.0)' : 'scale(0)'}`, transition: 'transform 0.25s linear', zIndex: 2 }}>
                <ExpandLessIcon style={{ color: '#fff' }}/>
            </IconButton>
        </Scroll>
    );
};