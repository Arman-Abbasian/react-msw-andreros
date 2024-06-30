import './sass/_index.scss';
// Picnic CSS - lightweight CSS library to help styling the interface
// https://picnicss.com/documentation
import "../node_modules/picnic/picnic.min.css";

import React from 'react';

import { AppRouter } from './routes/AppRouter';

export const App: React.FC = () => (
    <div className="rsa-application-scope">
        <AppRouter />
    </div>
);
