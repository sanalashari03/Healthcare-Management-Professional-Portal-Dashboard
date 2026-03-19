import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ProfessionalSidebar from '../components/ProfessionalSidebar';
import ProfessionalHeader from '../components/ProfessionalHeader';
import '../styles/ProfessionalPortal.css';

const ProfessionalLayout = () => {
    const location = useLocation();
    
    // Determine page title based on path
    const getPageDetails = () => {
        const path = location.pathname.split('/').pop();
        switch(path) {
            case 'dashboard': return { title: 'Dashboard', subtitle: 'Manage your professional profile and assignments' };
            case 'profile': return { title: 'My Profile', subtitle: 'View and edit your professional information' };
            case 'credentials': return { title: 'My Credentials', subtitle: 'Manage your licenses and certifications' };
            case 'shifts': return { title: 'Shifts', subtitle: 'Browse and manage your upcoming work' };
            case 'timesheets': return { title: 'My Timesheets', subtitle: 'Review and submit your hours' };
            case 'invoices': return { title: 'Earnings', subtitle: 'Track your earnings and payments' };
            case 'messaging': return { title: 'Messaging', subtitle: 'Communicate with your facilities' };
            case 'notifications': return { title: 'Notifications', subtitle: 'Stay updated on new opportunities' };
            case 'support': return { title: 'Support', subtitle: 'Get help with your portal' };
            default: return { title: 'Professional Portal', subtitle: 'Welcome back, Sarah' };
        }
    };

    const { title, subtitle } = getPageDetails();

    return (
        <div className="pro-layout-container">
            <ProfessionalSidebar />
            <div className="pro-main-wrapper">
                <ProfessionalHeader title={title} subtitle={subtitle} />
                <main className="pro-content-area">
                    <div className="pro-page-container">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfessionalLayout;
