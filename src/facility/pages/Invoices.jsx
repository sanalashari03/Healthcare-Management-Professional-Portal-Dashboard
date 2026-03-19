import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Search, 
    Filter, 
    LogOut,
    Eye,
    ChevronDown,
    ArrowRight
} from 'lucide-react';
import InvoiceDetail from '../components/InvoiceDetail';

const Invoices = () => {
    const navigate = useNavigate();
    const [selectedInvoice, setSelectedInvoice] = useState(null);

    const stats = [
        { label: 'Total Outstanding', value: '$12,340', color: '#003366', icon: <DollarIcon size={20} color="white" />, bg: '#003366' },
        { label: 'Paid This Year', value: '$94,230', color: '#10b981', icon: <DollarIcon size={20} color="white" />, bg: '#10b981' },
        { label: 'Total Invoices', value: '52', color: '#a855f7', icon: <FileIcon size={20} color="white" />, bg: '#a855f7' },
    ];

    const invoices = [
        { id: 'INV-2026-001', staff: 'Sarah Johnson', hospital: 'St. Mary\'s Hospital', period: 'Feb 1-7, 2026', schedule: '07:00 AM - 03:00 PM', duration: '8h Shift', amount: '$1800', status: 'Unpaid' },
        { id: 'INV-2026-001', staff: 'Lisa Anderson', hospital: 'St. Mary\'s Hospital', period: 'Feb 1-7, 2026', schedule: '08:00 AM - 04:00 PM', duration: '8h', amount: '$1900', status: 'Unpaid' },
        { id: 'INV-2026-001', staff: 'Michael Chen', hospital: 'General Medical', period: 'Feb 1-7, 2026', schedule: '08:00 AM - 04:00 PM', duration: '8h', amount: '$2000', status: 'Unpaid' },
        { id: 'INV-2026-001', staff: 'Emma Davis', hospital: 'City Hospital', period: 'Feb 1-7, 2026', schedule: '02:00 PM - 10:00 PM', duration: '8h', amount: '$1800', status: 'Unpaid' },
        { id: 'INV-2026-001', staff: 'James Wilson', hospital: 'County Hospital', period: 'Feb 1-7, 2026', schedule: '10:00 PM - 06:00 AM', duration: '8h', amount: '$1800', status: 'Unpaid' },
        { id: 'INV-2026-001', staff: 'David Martinez', hospital: 'Care Home Plus', period: 'Feb 1-7, 2026', schedule: '08:00 AM - 04:00 PM', duration: '8h', amount: '$1800', status: 'Paid' },
        { id: 'INV-2026-001', staff: 'Robert Taylor', hospital: 'General Medical', period: 'Feb 1-7, 2026', schedule: '12:00 PM - 08:00 PM', duration: '8h', amount: '$1800', status: 'Paid' },
    ];

    return (
        <div className="invoices-page">
            {selectedInvoice && <InvoiceDetail invoice={selectedInvoice} onClose={() => setSelectedInvoice(null)} />}
            
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Invoices</h1>
                    <p>Invoice Management</p>
                </div>
                <div className="header-actions">
                    <button className="exit-portal-btn"><LogOut size={16} /> Exit Portal</button>
                    <button className="go-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Go Back</button>
                </div>
            </header>

            <div className="invoices-content activity-section">
                <div className="invoice-stats-row">
                    {stats.map((stat, i) => (
                        <div key={i} className="inv-stat-card">
                            <div className="inv-stat-header">
                                <div className="inv-stat-badge" style={{ backgroundColor: stat.bg }}>
                                    {stat.icon}
                                </div>
                                <span className="inv-stat-label">{stat.label}</span>
                            </div>
                            <h3>{stat.value}</h3>
                        </div>
                    ))}
                </div>

                <div className="invoices-table-card">
                    <div className="card-header">
                        <div className="title-area">
                            <h2>Weekly Invoices</h2>
                            <p className="subtitle">View and download your facility invoices</p>
                        </div>
                    </div>

                    <div className="search-filter-row">
                        <div className="search-wrapper">
                            <Search size={18} />
                            <input type="text" placeholder="Search by name, role, or specialization..." />
                        </div>
                        <button className="filter-btn-dark"><Filter size={18} /> Filter</button>
                    </div>

                    <div className="table-responsive">
                        <table className="invoices-table">
                            <thead>
                                <tr>
                                    <th>Invoice #</th>
                                    <th>Staff Name</th>
                                    <th>Facility</th>
                                    <th>Period</th>
                                    <th>Scheduled</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th className="actions-col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoices.map((inv, i) => (
                                    <tr key={i}>
                                        <td>{inv.id}</td>
                                        <td><strong>{inv.staff}</strong></td>
                                        <td>{inv.hospital}</td>
                                        <td>{inv.period}</td>
                                        <td>
                                            <div className="scheduled-info">
                                                <span>{inv.schedule}</span>
                                                <span className="duration">{inv.duration}</span>
                                            </div>
                                        </td>
                                        <td><strong>{inv.amount}</strong></td>
                                        <td>
                                            <span className={`status-pill-small ${inv.status.toLowerCase()}`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="actions-cell">
                                            <div className="actions-group">
                                                <button 
                                                    className="view-details-btn-solid"
                                                    onClick={() => setSelectedInvoice(inv)}
                                                >
                                                    <Eye size={16} /> View Details
                                                </button>
                                                {inv.status === 'Unpaid' && (
                                                    <button className="pay-now-link" onClick={() => navigate('/facility/billing')}>Pay Now</button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DollarIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);

const FileIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
);

const ArrowLeft = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);

export default Invoices;
