import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {AuthContextContainer} from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextContainer>
        <App />
    </AuthContextContainer>
);
