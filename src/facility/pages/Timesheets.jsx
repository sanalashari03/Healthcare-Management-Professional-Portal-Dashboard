import React, { useState } from 'react';
import { 
    Search, 
    Filter, 
    CheckCircle, 
    XCircle, 
    Eye, 
    ChevronDown, 
    ArrowLeft,
    Download,
    AlertCircle,
    Clock,
    DollarSign,
    ExternalLink
} from 'lucide-react';

const Timesheets = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [showDetail, setShowDetail] = useState(false);
    const [showReject, setShowReject] = useState(false);
    const [showDispute, setShowDispute] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedTS, setSelectedTS] = useState(null);

    const stats = [
        { label: 'Pending Review', value: '12', color: '#f97316', icon: <AlertCircle size={22} color="#f97316" />, bg: '#fff7ed' },
        { label: 'Approved', value: '48', color: '#10b981', icon: <CheckCircle size={22} color="#10b981" />, bg: '#ecfdf5' },
        { label: 'Total Hours', value: '1,248', color: '#3b82f6', icon: <Clock size={22} color="#3b82f6" />, bg: '#eff6ff' },
        { label: 'This Period', value: '$48.3K', color: '#a855f7', icon: <DollarSign size={22} color="#a855f7" />, bg: '#faf5ff' },
    ];

    const timesheets = [
        { id: 'TE001', staff: 'Sarah Johnson', dept: 'RN', date: '2026-2-15', scheduled: '07:00 AM - 03:00 PM', duration: '8h Shift', status: 'Submitted' },
        { id: 'TE002', staff: 'Lisa Anderson', dept: 'RN', date: '2024-10-14', scheduled: '08:00 AM - 04:00 PM', duration: '8h', status: 'Awaiting clock out' },
        { id: 'TE003', staff: 'Michael Chen', dept: 'PN', date: '2024-10-11', scheduled: '08:00 AM - 04:00 PM', duration: '8h', status: 'Pending Approval' },
        { id: 'TE004', staff: 'Emma Davis', dept: 'ACLS', date: '2024-10-12', scheduled: '02:00 PM - 10:00 PM', duration: '8h', status: 'Approved' },
        { id: 'TE005', staff: 'James Wilson', dept: 'BLS', date: '2024-10-13', scheduled: '10:00 PM - 06:00 AM', duration: '8h', status: 'Pending Approval', highlight: true },
        { id: 'TE006', staff: 'David Martinez', dept: 'PN', date: '2024-10-09', scheduled: '08:00 AM - 04:00 PM', duration: '8h', status: 'Rejected' },
        { id: 'TE007', staff: 'Robert Taylor', dept: 'RN', date: '2024-10-08', scheduled: '12:00 PM - 08:00 PM', duration: '8h', status: 'Dispute' },
        { id: 'TE005', staff: 'James Wilson', dept: 'BLS', date: '2024-10-13', scheduled: '10:00 PM - 06:00 AM', duration: '8h', status: 'Locked' },
    ];

    const handleReject = () => {
        setShowReject(false);
        setShowDetail(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="timesheets-page">
            <header className="dashboard-header h-fidelity">
                <div className="header-info">
                    <h1>Timesheets</h1>
                    <p>Timesheet Review & Approval</p>
                </div>
                <div className="header-actions">
                    <button className="go-back-btn fancy" onClick={() => window.history.back()}>
                        <ArrowLeft size={16} /> Go Back
                    </button>
                </div>
            </header>

            <div className="timesheets-container-hf">
                <div className="hf-main-box">
                    <div className="hf-title-row">
                        <div className="title-stack">
                            <h2>Timesheets</h2>
                            <p>Review and approve staff timesheets</p>
                        </div>
                        <button className="export-all-btn-v2">
                            <Download size={16} /> Export All
                        </button>
                    </div>

                    <div className="hf-stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="hf-stat-card">
                                <div className="hf-stat-icon" style={{ backgroundColor: stat.bg }}>
                                    {stat.icon}
                                </div>
                                <div className="hf-stat-details">
                                    <div className="hf-stat-val">{stat.value}</div>
                                    <div className="hf-stat-label">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hf-tabs-row">
                        <div className="hf-pill-tabs">
                            {['All', 'Pending', 'Not Submitted', 'Rejected Timesheets', 'Approved'].map(tab => (
                                <button 
                                    key={tab}
                                    className={`hf-tab-pill ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hf-table-wrapper">
                        <div className="hf-table-header-bar">
                            Professional Submitted Timesheets
                        </div>
                        <table className="hf-timesheets-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Staff Name</th>
                                    <th>Department</th>
                                    <th>Shift Date</th>
                                    <th>Scheduled</th>
                                    <th>Status</th>
                                    <th className="hf-actions-col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timesheets.map((ts, i) => (
                                    <tr key={i} className={ts.highlight ? 'hf-highlight-row' : ''}>
                                        <td>{ts.id}</td>
                                        <td><strong>{ts.staff}</strong></td>
                                        <td>{ts.dept}</td>
                                        <td>{ts.date}</td>
                                        <td>
                                            <div className="hf-sched-cell">
                                                <div className="hf-time-range">{ts.scheduled}</div>
                                                <div className="hf-duration-sub">{ts.duration}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`hf-status-tag ${ts.status.toLowerCase().replace(/ /g, '-')}`}>
                                                <Clock size={12} /> {ts.status}
                                            </span>
                                        </td>
                                        <td className="hf-actions-cell">
                                            <button className="hf-action-btn view" onClick={() => { setSelectedTS(ts); setShowDetail(true); }}><Eye size={18} /></button>
                                            <button className="hf-action-btn approve"><CheckCircle size={18} /></button>
                                            <button className="hf-action-btn reject" onClick={() => { setSelectedTS(ts); setShowReject(true); }}><XCircle size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Detail Modal Overlay */}
            {showDetail && selectedTS && (
                <div className="hf-modal-overlay">
                    <div className="hf-modal-content" style={{ maxWidth: '600px', padding: '32px' }}>
                        <div className="hf-modal-header" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', margin: '0 0 4px 0' }}>{selectedTS.staff}</h2>
                                <p style={{ color: '#64748b', margin: 0 }}>Timesheet ID: <strong>{selectedTS.id}</strong> • {selectedTS.dept}</p>
                            </div>
                            <button onClick={() => setShowDetail(false)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><XCircle size={24} /></button>
                        </div>

                        <div className="hf-modal-body" style={{ marginBottom: '32px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Shift Date</label>
                                    <strong style={{ color: '#1e293b' }}>{selectedTS.date}</strong>
                                </div>
                                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Status</label>
                                    <strong style={{ color: '#3b82f6' }}>{selectedTS.status}</strong>
                                </div>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', marginBottom: '24px' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Scheduled Hours</label>
                                <strong style={{ color: '#1e293b' }}>{selectedTS.scheduled} ({selectedTS.duration})</strong>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                                For detailed clock-in/out times, break durations, and attestations, please visit the activity tracking page.
                            </p>
                        </div>

                        <div className="hf-modal-footer" style={{ display: 'flex', gap: '12px' }}>
                            <button className="hf-btn-secondary" onClick={() => setShowDetail(false)} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 700, cursor: 'pointer' }}>Close</button>
                            <button className="hf-btn-primary" onClick={() => window.location.href='/facility/timesheets/activity'} style={{ flex: 2, padding: '14px', borderRadius: '12px', border: 'none', background: '#003366', color: 'white', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                View Full Activity <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timesheets;
