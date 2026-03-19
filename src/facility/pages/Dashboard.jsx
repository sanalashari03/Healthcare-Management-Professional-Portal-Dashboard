import React from 'react';
import { 
    Users, 
    Clock, 
    DollarSign, 
    Files, 
    PlusCircle, 
    CheckSquare, 
    Eye, 
    FileSpreadsheet,
    Bell,
    MessageSquare,
    LogOut,
    ExternalLink
} from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { title: 'Active Professionals', value: '03', sub: '+3 this week', icon: <Users size={24} color="#3b82f6" />, bg: '#eff6ff' },
        { title: 'Pending Timesheets', value: '02', sub: 'Awaiting approval', icon: <Clock size={24} color="#f97316" />, bg: '#fff7ed' },
        { title: "This Month's Billing", value: '$10,350', sub: '+12% from last month', icon: <DollarSign size={24} color="#10b981" />, bg: '#ecfdf5' },
        { title: 'Open Shift Requests', value: '3', sub: '4 urgent', icon: <Files size={24} color="#a855f7" />, bg: '#faf5ff' },
    ];

    const upcomingShifts = [
        { id: 1, date: 'Feb 9, 2026', time: 'Day Shift (7AM - 3PM)', role: 'Registered Nurse', staff: 'Sarah Johnson', status: 'Confirmed' },
        { id: 2, date: 'Feb 9, 2026', time: 'Night Shift (11PM - 7AM)', role: 'LPN', staff: 'Michael Chen', status: 'Confirmed' },
        { id: 3, date: 'Feb 10, 2026', time: 'Day Shift (7AM - 3PM)', role: 'CNA', staff: 'Emily Davis', status: 'Confirmed' },
        { id: 4, date: 'Feb 10, 2026', time: 'Evening Shift (3PM - 11PM)', role: 'Registered Nurse', staff: 'Unassigned', status: 'Open' },
    ];

    const recentTimesheets = [
        { id: 1, name: 'Sarah Johnson', role: 'RN', dates: 'Feb 1-7, 2026', hours: '40 hours', status: 'Pending' },
        { id: 2, name: 'Michael Chen', role: 'LPN', dates: 'Feb 1-7, 2026', hours: '36 hours', status: 'Pending' },
        { id: 3, name: 'Emily Davis', role: 'CNA', dates: 'Feb 1-7, 2026', hours: '40 hours', status: 'Approved' },
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Dashboard</h1>
                    <p>Manage your facility operations</p>
                </div>
                <div className="header-actions">
                    <button className="icon-badge-btn">
                        <Bell size={20} />
                        <span className="badge-num orange">3</span>
                    </button>
                    <button className="icon-badge-btn">
                        <MessageSquare size={20} />
                        <span className="badge-num blue">5</span>
                    </button>
                    <button className="exit-portal-btn">
                        <LogOut size={16} /> Exit Portal
                    </button>
                </div>
            </header>

            <section className="stats-grid">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: stat.bg }}>
                            {stat.icon}
                        </div>
                        <div className="stat-content">
                            <h3>{stat.value}</h3>
                            <p className="stat-title">{stat.title}</p>
                            <span className="stat-sub">{stat.sub}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="quick-actions-section">
                <h2>Quick Actions</h2>
                <div className="quick-actions-grid">
                    <button className="action-card blue">
                        <Users size={20} /> Request Staff
                    </button>
                    <button className="action-card orange">
                        <Clock size={20} /> Review Timesheets
                    </button>
                    <button className="action-card outline">
                        <Users size={20} /> View Staff
                    </button>
                    <button className="action-card outline">
                        <DollarSign size={20} /> View Invoices
                    </button>
                </div>
            </section>

            <div className="dashboard-main-grid">
                <section className="activity-section">
                    <div className="section-header">
                        <h2>Upcoming Shifts</h2>
                        <button className="view-all-btn">View All <ExternalLink size={14} /></button>
                    </div>
                    <div className="shifts-list">
                        {upcomingShifts.map(shift => (
                            <div key={shift.id} className="shift-item-card">
                                <div className="shift-info">
                                    <div className="shift-date-box">
                                        <CalendarRange size={16} /> {shift.date}
                                    </div>
                                    <p className="shift-time">{shift.time}</p>
                                    <p className="shift-role-name"><strong>{shift.role}</strong></p>
                                    <p className="shift-staff">Assigned to: {shift.staff}</p>
                                </div>
                                <div className={`status-badge ${shift.status.toLowerCase()}`}>
                                    {shift.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="activity-section">
                    <div className="section-header">
                        <h2>Recent Timesheets</h2>
                        <button className="view-all-btn">View All <ExternalLink size={14} /></button>
                    </div>
                    <div className="timesheets-list">
                        {recentTimesheets.map(ts => (
                            <div key={ts.id} className="timesheet-item-card">
                                <div className="ts-info">
                                    <div className="ts-header-flex">
                                        <strong>{ts.name}</strong>
                                        <span className={`ts-status-pill ${ts.status.toLowerCase()}`}>
                                            {ts.status === 'Pending' ? '● Pending' : '✓ Approved'}
                                        </span>
                                    </div>
                                    <p className="ts-role">{ts.role}</p>
                                    <p className="ts-dates">{ts.dates}</p>
                                    <p className="ts-hours">{ts.hours}</p>
                                </div>
                                {ts.status === 'Pending' && (
                                    <div className="ts-actions">
                                        <button className="btn-approve">Approve</button>
                                        <button className="btn-reject">Reject</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

// Internal icon dependency fix
const CalendarRange = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
    </svg>
);

export default Dashboard;
