import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import Home from './pages/home/home';
import NotFound from './pages/error/error';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

/* <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Switch>
        </BrowserRouter> */