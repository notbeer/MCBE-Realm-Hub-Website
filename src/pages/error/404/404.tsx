
// @ts-nocheck
import '../../../scss/glitch.scss';
import {
    Error,
    ErrorContent,
    Error404Text
} from './404Elements';

export default function Error404() {
    const root = document.documentElement;
    root?.style.setProperty("--randomness-height", 360);
    return (
        <Error>
            <ErrorContent>
                <Error404Text className="glitch" data-text="404">404</Error404Text>  
            </ErrorContent>
        </Error>
    );
};
// <div className="glitch" data-text="404" style={{ position: 'relative', color: '#eee', fontSize: '300px', fontWeight: '800' }}>404</div>
