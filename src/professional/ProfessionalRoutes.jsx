import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfessionalLayout from './layouts/ProfessionalLayout';
import ProfessionalAuth from './pages/auth/ProfessionalAuth';
import ForgotPassword from './pages/auth/ForgotPassword';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import MyProfile from './pages/MyProfile';
import MyCredentials from './pages/MyCredentials';
import ProfessionalShifts from './pages/ProfessionalShifts';
import MyTimesheets from './pages/MyTimesheets';
import MyInvoices from './pages/MyInvoices';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import Support from './pages/Support';

const ProfessionalRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/auth" element={<ProfessionalAuth />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Portal Routes with Layout */}
      <Route path="/" element={<ProfessionalLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ProfessionalDashboard />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="credentials" element={<MyCredentials />} />
        <Route path="shifts" element={<ProfessionalShifts />} />
        <Route path="timesheets" element={<MyTimesheets />} />
        <Route path="invoices" element={<MyInvoices />} />
        <Route path="messaging" element={<Messaging />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default ProfessionalRoutes;
