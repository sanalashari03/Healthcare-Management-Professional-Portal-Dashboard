import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCircle, 
  FileCheck, 
  Calendar, 
  Clock, 
  Receipt, 
  MessageSquare, 
  Bell, 
  LifeBuoy, 
  LogOut, 
  ArrowLeft,
  DollarSign
} from 'lucide-react';

const ProfessionalSidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/professional/dashboard' },
        { name: 'My Profile', icon: <UserCircle size={20} />, path: '/professional/profile' },
        { name: 'My Credentials', icon: <FileCheck size={20} />, path: '/professional/credentials' },
        { name: 'Shifts', icon: <Calendar size={20} />, path: '/professional/shifts' },
        { name: 'My Timesheets', icon: <Clock size={20} />, path: '/professional/timesheets' },
        { name: 'Earnings', icon: <DollarSign size={20} />, path: '/professional/invoices' },
        { name: 'Messaging', icon: <MessageSquare size={20} />, path: '/professional/messaging' },
        { name: 'Notifications', icon: <Bell size={20} />, path: '/professional/notifications' },
        { name: 'Support', icon: <LifeBuoy size={20} />, path: '/professional/support' },
    ];

    return (
        <aside className="pro-sidebar">
            <div className="pro-sidebar-brand">
                <div className="pro-brand-icon">
                    <UserCircle size={24} color="white" />
                </div>
                <div className="pro-brand-text">
                    <h3>Professional Portal</h3>
                    <p>Sarah Johnson, RN</p>
                </div>
            </div>

            <nav className="pro-sidebar-nav">
                {menuItems.map((item) => (
                    <NavLink 
                        key={item.name} 
                        to={item.path} 
                        className={({ isActive }) => `pro-nav-link ${isActive ? 'active' : ''}`}
                    >
                        <span className="pro-nav-icon">{item.icon}</span>
                        <span className="pro-nav-text">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="pro-sidebar-footer">
                <button className="pro-footer-action" onClick={() => navigate('/portals')}>
                    <ArrowLeft size={18} />
                    <span>Back to Portals</span>
                </button>
                <button className="pro-footer-action logout" onClick={() => navigate('/professional/auth')}>
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default ProfessionalSidebar;
