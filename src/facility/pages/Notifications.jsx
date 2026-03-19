import React from 'react';
import { 
    LogOut, 
    Bell, 
    CheckCircle, 
    Clock, 
    AlertCircle, 
    FileText, 
    UserPlus,
    Calendar
} from 'lucide-react';

const Notifications = () => {
    const stats = [
        { label: 'Unread', value: '3', color: '#3b82f6' },
        { label: 'Timesheets', value: '2', color: '#f97316' },
        { label: 'Urgent', value: '1', color: '#ef4444' },
        { label: 'This Week', value: '48', color: '#3b82f6' }
    ];

    const notificationItems = [
        {
            id: 1,
            type: 'timesheet',
            title: 'New Timesheet Submitted',
            desc: 'Sarah Johnson submitted a timesheet for Feb 1-7, 2026 (40 hours)',
            time: '5 minutes ago',
            icon: <Clock size={18} color="#f97316" />,
            bg: '#fff7ed',
            isNew: true
        },
        {
            id: 2,
            type: 'shift',
            title: 'Shift Confirmed',
            desc: 'Michael Chen confirmed the night shift on Feb 9, 2026',
            time: '1 hour ago',
            icon: <UserPlus size={18} color="#3b82f6" />,
            bg: '#eff6ff',
            isNew: true
        },
        {
            id: 3,
            type: 'urgent',
            title: 'Urgent Shift Request',
            desc: 'Emergency Department needs 2 RNs for tomorrow\'s day shift',
            time: '2 hours ago',
            icon: <AlertCircle size={18} color="#ef4444" />,
            bg: '#fef2f2',
            isNew: true
        },
        {
            id: 4,
            type: 'approval',
            title: 'Timesheet Approved',
            desc: 'You approved Emily Davis\'s timesheet for Feb 1-7, 2026',
            time: '3 hours ago',
            icon: <CheckCircle size={18} color="#10b981" />,
            bg: '#ecfdf5',
            isNew: false
        },
        {
            id: 5,
            type: 'invoice',
            title: 'New Invoice Generated',
            desc: 'Invoice INV-2026-002 is ready for review ($12,340)',
            time: '1 day ago',
            icon: <FileText size={18} color="#a855f7" />,
            bg: '#f5f3ff',
            isNew: false
        }
    ];

    return (
        <div className="notifications-page">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Notifications</h1>
                    <p>Manage your facility operations</p>
                </div>
                <div className="header-actions">
                    <button className="exit-portal-btn"><LogOut size={16} /> Exit Portal</button>
                </div>
            </header>

            <div className="notifications-content">
                <div className="notifications-banner-box">
                    <div className="banner-inner-header">
                        <div className="text-col">
                            <h2>Notifications</h2>
                            <p>Stay updated with important facility activities</p>
                        </div>
                        <button className="mark-all-btn">Mark All as Read</button>
                    </div>

                    <div className="notif-stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="notif-stat-card">
                                <span className="val" style={{ color: stat.color }}>{stat.val || stat.value}</span>
                                <span className="label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="notif-list">
                        {notificationItems.map(notif => (
                            <div key={notif.id} className={`notif-item ${notif.isNew ? 'new-border' : ''}`}>
                                <div className="notif-icon-box" style={{ backgroundColor: notif.bg }}>
                                    {notif.icon}
                                </div>
                                <div className="notif-main">
                                    <div className="notif-header">
                                        <div className="title-row">
                                            <h3>{notif.title}</h3>
                                            {notif.isNew && <span className="new-tag">New</span>}
                                        </div>
                                    </div>
                                    <p className="notif-desc">{notif.desc}</p>
                                    <div className="notif-time">
                                        <Clock size={12} /> {notif.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="load-more-container">
                        <button className="btn-load-more">Load More Notifications</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
