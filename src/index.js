import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
=======
    <BrowserRouter basename='/rocks'>
        <App />
    </BrowserRouter>
>>>>>>> 3bbb121a1f10b343b5530766121389a974dc434d
);

