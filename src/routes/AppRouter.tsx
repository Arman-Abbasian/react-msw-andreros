import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/HomePage/HomePage';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    path="*"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <HomePage />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
