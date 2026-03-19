import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/FacilityPortal.css';

const FacilityLayout = () => {
    return (
        <div className="facility-layout">
            <Sidebar />
            <main className="facility-main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default FacilityLayout;
