import ReactDOM from 'react-dom/client';
import {Info, Hello} from './Info'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Hello name="wasim"/>
        <Info info="Welcome to the team"/>
    </>
);

