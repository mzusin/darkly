import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ui/App';
// import '../../../dist/darkly.min.css';
import './css/index.pcss';

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