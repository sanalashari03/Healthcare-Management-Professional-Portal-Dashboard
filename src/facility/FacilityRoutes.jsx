import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FacilityLayout from './layouts/FacilityLayout';
import FacilityAuth from './pages/FacilityAuth';
import Dashboard from './pages/Dashboard';
import ShiftManagement from './pages/ShiftManagement';
import ShiftsStatusDetail from './pages/ShiftsStatusDetail';
import ApplicantsManagement from './pages/ApplicantsManagement';
import AssignedProfessionals from './pages/AssignedProfessionals';
import Timesheets from './pages/Timesheets';
import TimesheetsActivity from './pages/TimesheetsActivity';
import Invoices from './pages/Invoices';
import Messaging from './pages/Messaging';
import BillingCenter from './pages/BillingCenter';
import Notifications from './pages/Notifications';
import FacilityProfile from './pages/FacilityProfile';
import UserRoleManagement from './pages/UserRoleManagement';

const FacilityRoutes = () => {
    return (
        <Routes>
            <Route path="/auth" element={<FacilityAuth />} />
            <Route path="/" element={<FacilityLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="shifts" element={<ShiftManagement />} />
                <Route path="shifts-status" element={<ShiftsStatusDetail />} />
                <Route path="applicants" element={<ApplicantsManagement />} />
                <Route path="professionals" element={<AssignedProfessionals />} />
                <Route path="timesheets" element={<Timesheets />} />
                <Route path="timesheets-activity" element={<TimesheetsActivity />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="messaging" element={<Messaging />} />
                <Route path="billing" element={<BillingCenter />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="profile" element={<FacilityProfile />} />
                <Route path="role-management" element={<UserRoleManagement />} />
                <Route path="*" element={<Navigate to="dashboard" replace />} />
            </Route>
        </Routes>
    );
};

export default FacilityRoutes;
