import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
    LayoutGrid, 
    UserPlus, 
    Users, 
    Clock, 
    FileCheck, 
    FileText, 
    Building2, 
    Bell, 
    MessageSquare, 
    ChevronDown, 
    ArrowLeft, 
    LogOut,
    Radio
} from 'lucide-react';

const Sidebar = () => {
    const navigate = useNavigate();
    const [shiftsOpen, setShiftsOpen] = useState(false);
    const [timesheetsOpen, setTimesheetsOpen] = useState(true);

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutGrid size={20} />, path: 'dashboard' },
        { 
            name: 'Shift Management', 
            icon: <UserPlus size={20} />, 
            path: 'shifts',
            hasSubmenu: true,
            isOpen: shiftsOpen,
            toggle: () => setShiftsOpen(!shiftsOpen),
            submenu: [
                { name: 'Post Shifts', icon: <UserPlus size={18} />, path: 'shifts' },
                { name: 'Shift Status', icon: <Radio size={18} />, path: 'shifts-status' },
                { name: 'Applicants', icon: <Users size={18} />, path: 'applicants' }
            ]
        },
        { name: 'Assigned Professionals', icon: <Users size={20} />, path: 'professionals' },
        { 
            name: 'Timesheets', 
            icon: <Clock size={20} />, 
            path: 'timesheets',
            hasSubmenu: true,
            isOpen: timesheetsOpen,
            toggle: () => setTimesheetsOpen(!timesheetsOpen),
            submenu: [
                { name: 'Timesheet Review', icon: <Clock size={18} />, path: 'timesheets' },
                { name: 'Timesheet Activity', icon: <FileCheck size={18} />, path: 'timesheets-activity' }
            ]
        },
        { name: 'Invoices', icon: <FileText size={20} />, path: 'invoices' },
        { name: 'Facility Profile', icon: <Building2 size={20} />, path: 'profile' },
        { name: 'Notifications', icon: <Bell size={20} />, path: 'notifications' },
        { name: 'Messaging', icon: <MessageSquare size={20} />, path: 'messaging' },
    ];

    return (
        <aside className="facility-sidebar">
            <div className="sidebar-header">
                <div className="facility-brand">
                    <div className="brand-icon">
                        <Building2 size={22} color="white" />
                    </div>
                    <div className="brand-text">
                        <h3>Facility Portal</h3>
                        <span>Memorial Hospital</span>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-group">
                        {item.hasSubmenu ? (
                            <>
                                <div 
                                    className={`menu-item has-submenu ${item.isOpen ? 'active-parent' : ''}`}
                                    onClick={item.toggle}
                                >
                                    <div className="item-main">
                                        <span className="item-icon">{item.icon}</span>
                                        <span className="item-text">{item.name}</span>
                                    </div>
                                    <ChevronDown className={`submenu-arrow ${item.isOpen ? 'rotated' : ''}`} size={16} />
                                </div>
                                {item.isOpen && (
                                    <div className="submenu">
                                        {item.submenu.map((sub, idx) => (
                                            <NavLink 
                                                key={idx}
                                                to={sub.path}
                                                className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                                            >
                                                <div className="sub-active-capsule">
                                                    <span className="sub-icon">{sub.icon}</span>
                                                    <span className="sub-text">{sub.name}</span>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <NavLink 
                                to={item.path}
                                className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
                            >
                                <div className="item-main">
                                    <span className="item-icon">{item.icon}</span>
                                    <span className="item-text">{item.name}</span>
                                </div>
                            </NavLink>
                        )}
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="footer-links">
                    <button className="footer-link-btn back-btn" onClick={() => navigate('/portals')}>
                        <span className="footer-icon-circle"><ArrowLeft size={16} /></span>
                        Back to Portals
                    </button>
                    <button className="footer-link-btn logout-link" onClick={() => navigate('/facility/auth')}>
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
