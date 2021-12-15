import { CssBaseline } from '@material-ui/core';

import { Error } from './errorElements';
import Navigation from '../../components/navbar/navigation';
import Error404 from './404/404';
import Footer from '../../components/footer/footer';

export default function NotFound() {
    return (
        <Error>
            <CssBaseline>
                <Navigation activationHeight={100}/>
                <Error404/>
                <Footer/>
            </CssBaseline>
        </Error>
    );
};
