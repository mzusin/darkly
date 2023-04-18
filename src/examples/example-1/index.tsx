import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ui/App';
import './css/index.pcss';
import '../../../dist/darkly.min.css';

const init = () => {
    const $root =  document.getElementById('root') as HTMLElement;
    if(!$root) return;

    const root = ReactDOM.createRoot($root);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

init();