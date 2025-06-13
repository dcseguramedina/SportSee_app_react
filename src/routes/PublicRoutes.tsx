import React from 'react';
import { Routes, Route } from 'react-router';
import Layout from '../layout/Layout.tsx';
import Dashboard from '../views/dashboard/Dashboard';

const PublicRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;
