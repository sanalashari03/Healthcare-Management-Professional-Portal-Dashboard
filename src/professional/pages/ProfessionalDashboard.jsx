import React, { useState } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Bell, 
    Calendar, 
    Clock, 
    MapPin, 
    Zap, 
    CheckCircle, 
    AlertCircle, 
    X, 
    Phone, 
    Building2,
    DollarSign,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    Search,
    History,
    FileText,
    User,
    Upload,
    Timer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessionalDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: "Total Earnings", value: "$12.8K", sub: "This month", color: "purple", icon: <DollarSign size={20}/> },
        { label: "Reliable Score", value: "8", sub: "Next 7 days", color: "blue", icon: <TrendingUp size={20}/> },
        { label: "Hours This Week", value: "32", sub: "+8 from last week", color: "green", icon: <Clock size={20}/> },
        { label: "Credentials Status", value: "Active", sub: "2 expiring soon", color: "orange", icon: <ShieldCheck size={20}/> }
    ];

    const upcomingShifts = [
        { 
            hospital: "St. Mary's Hospital", 
            dept: "Emergency Department", 
            date: "Feb 9, 2026", 
            shift: "Day Shift (7AM - 3PM)", 
            rate: "$45/hr", 
            status: "Confirmed" 
        },
        { 
            hospital: "Memorial Hospital", 
            dept: "Emergency Department", 
            date: "Feb 9, 2026", 
            shift: "Day Shift (7AM - 3PM)", 
            rate: "$45/hr", 
            status: "Confirmed" 
        },
        { 
            hospital: "Memorial Hospital", 
            dept: "Emergency Department", 
            date: "Feb 9, 2026", 
            shift: "Day Shift (7AM - 3PM)", 
            rate: "$45/hr", 
            status: "Invited",
            invited: true
        }
    ];

    const remainders = [
        { title: "Upcoming shift", time: "12 min", desc: "Your shift is in 12 hours, Be Prepared!", color: "#fff7ed" },
        { title: "BLS Certification", time: "71 days", desc: "Expires: April 20, 2026", color: "#fff7ed", action: "Renew Now" },
        { title: "BLS Certification", time: "71 days", desc: "Expires: April 20, 2026", color: "#fff7ed", action: "Renew Now" }
    ];

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader title="Dashboard" subtitle="Manage your professional profile and assignments" />

            <div className="pro-main-content">
                {/* Dashboard Banner */}
                <div className="dashboard-banner">
                    <h1>Welcome back, Sarah!</h1>
                    <p>You have 8 upcoming shifts scheduled. Keep up the great work!</p>
                </div>

                {/* Stats Grid */}
                <div className="pro-stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-card-high-fidelity">
                            <div className={`stat-icon-circle ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <h3>{stat.value}</h3>
                                <p className="label">{stat.label}</p>
                                <p className="subtext">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="quick-actions-card">
                    <h3>Quick Actions</h3>
                    <div className="quick-actions-row">
                        <button className="quick-action-btn-hf orange">
                            <Clock size={20} />
                            <span>Submit Timesheet</span>
                        </button>
                        <button className="quick-action-btn-hf navy">
                            <Calendar size={20} />
                            <span>View Shifts</span>
                        </button>
                        <button className="quick-action-btn-hf">
                            <ShieldCheck size={20} />
                            <span>Upload Credential</span>
                        </button>
                        <button className="quick-action-btn-hf">
                            <User size={20} />
                            <span>Update Profile</span>
                        </button>
                        <button className="quick-action-btn-hf">
                            <History size={20} />
                            <span>Job History</span>
                        </button>
                    </div>
                </div>

                {/* Dashboard Split */}
                <div className="dashboard-split">
                    {/* Upcoming Shifts Column */}
                    <div className="upcoming-shifts-card">
                        <div className="section-header">
                            <h2>Upcoming Shifts</h2>
                            <button className="view-all-btn">View All <ArrowRight size={16}/></button>
                        </div>

                        <div className="hf-shifts-list">
                            {upcomingShifts.map((shift, i) => (
                                <div key={i} className="shift-card-hf">
                                    <div className="badge-row">
                                        <span className={`shift-badge-hf ${shift.status.toLowerCase()}`}>
                                            {shift.status}
                                        </span>
                                    </div>
                                    <div className="flex-layout justify-between items-start">
                                        <div>
                                            <h4>{shift.hospital}</h4>
                                            <p className="dept">{shift.dept}</p>
                                            <div className="shift-info-hf">
                                                <div className="info-item-hf"><Calendar size={14} /> {shift.date}</div>
                                                <div className="info-item-hf">Day Shift (7AM - 3PM)</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="shift-rate-hf">{shift.rate}</div>
                                        </div>
                                    </div>
                                    <div className="shift-actions-hf">
                                        {shift.invited && (
                                            <button className="accept-btn">Accept Invite</button>
                                        )}
                                        <button className="dispute-link">Dispute Time Option</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Remainders Column */}
                    <div className="remainders-sidebar">
                        <h3><AlertCircle size={20} /> Remainders</h3>
                        <div className="remainders-list">
                            {remainders.map((rem, i) => (
                                <div key={i} className="remainder-item-hf">
                                    <span className="time-badge">{rem.time}</span>
                                    <h4>{rem.title}</h4>
                                    <p>{rem.desc}</p>
                                    {rem.action && (
                                        <button className="renew-btn-hf">{rem.action}</button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button className="view-all-notif">View All Notifications</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalDashboard;
