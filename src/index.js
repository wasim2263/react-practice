import ReactDOM from 'react-dom/client';
import {App, Hello} from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Hello name="wasim"/>
        <App info="Welcome to the team"/>
    </>
);

