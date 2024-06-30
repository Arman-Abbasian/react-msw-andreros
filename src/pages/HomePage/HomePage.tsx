import clsx from 'clsx';
import React, { useState } from 'react';

import { startMockServiceWorker, stopMockServiceWorker } from '@/mocks/browser';
import { getAxiosTodosApi } from '@/services/axiosTodoService';
import { getFetchTodosApi } from '@/services/fetchTodoService';

export interface IHomePageProps {
    className?: string;
}

const HomePage: React.FC<IHomePageProps> = ({ className }) => {
    const rootClasses = clsx('rsa-home-page', className);
    const [mswEnabled, setMswEnabled] = useState(true);
    const [textareaValue, setTextareaValue] = useState('');

    const handleMswEnabledCheckboxChange = () => {
        const enable = !mswEnabled;
        if (enable) startMockServiceWorker();
        else stopMockServiceWorker();
        setMswEnabled(enable);
    }
    
    const handleGetFetchTodosButtonClick = async () => {
        const fetchResponse = await getFetchTodosApi();
        const apiResponse = await fetchResponse.json();
        setTextareaValue(JSON.stringify(apiResponse));
        console.log('API response with fetch: ', apiResponse);
    }

    const handleGetAxiosTodosButtonClick = async () => {
        const axiosResponse = await getAxiosTodosApi();
        setTextareaValue(JSON.stringify(axiosResponse.data));
        console.log('API response with axios: ', axiosResponse.data);
    }

    return (
        <div className={rootClasses}>
            <h1>Mock Service Worker</h1>

            <div className="card">
                <header>
                    <h3>How to see <b>Mock Service Worker</b> in action?</h3>
                </header>
                <footer>
                    Use your browser <b>developer tools</b>, in particular <b>Console</b> and <b>Network</b> to examine the application requests
                    with and without the <b>Mock Service Worker</b> enabled.
                </footer>
            </div>

            <h1>Examples</h1>

            <label>
                <input type="checkbox" checked={mswEnabled} onChange={handleMswEnabledCheckboxChange} />
                <span className="checkable">Use Mock Service Worker</span>
            </label>
            <br />
            <br />

            <h2>Get To Dos with <b>fetch</b> browser API</h2>
            <button type="button" onClick={handleGetFetchTodosButtonClick}>Get To Dos</button>
            <br />
            <br />

            <h2>Get To Dos with an <b>Axios</b> instance</h2>
            <button type="button" onClick={handleGetAxiosTodosButtonClick}>Get To Dos</button>
            <br />
            <br />

            <h2>API Response</h2>
            <textarea className="rsa-home-page__textarea" placeholder="Textarea" value={textareaValue} readOnly></textarea>
        </div>
    );
};

export default HomePage;
