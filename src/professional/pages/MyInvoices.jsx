import React, { useState } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Receipt, 
    Download, 
    Eye, 
    X, 
    TrendingUp, 
    Calendar,
    Search,
    Filter,
    FileText,
    DollarSign,
    Clock,
    CheckCircle,
    Building2,
    Hospital,
    FileCheck2
} from 'lucide-react';
import EmptyState from '../components/EmptyState';
import ErrorModal from '../components/ErrorModal';

// Modal 1: The "Memorial Hospital" PDF Statement (for Download PDF button)
const EarningsStatementModal = ({ isOpen, onClose, invoice }) => {
    if (!isOpen || !invoice) return null;
    return (
        <div className="pro-modal-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
            <div className="pro-modal-content paystub-modal max-w-3xl p-0 overflow-hidden shadow-2xl flex flex-col max-h-[95vh]" style={{ borderRadius: '24px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                {/* Modal Header - Professional Blue */}
                <div style={{ background: '#1e40af', padding: '2.5rem', textAlign: 'center', color: 'white', position: 'relative' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '0.05em' }}>MEMORIAL HOSPITAL</h2>
                    <p style={{ fontSize: '14px', fontWeight: 600, opacity: 0.8, margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Professional Portal</p>
                    <button onClick={onClose} style={{ position: 'absolute', right: '2rem', top: '2rem', color: 'white', opacity: 0.6, cursor: 'pointer', background: 'none', border: 'none' }}>
                        <X size={24}/>
                    </button>
                    <div style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', background: '#f59e0b' }}></div>
                </div>
                
                <div style={{ flex: 1, overflowY: 'auto', padding: '3rem', background: 'white' }}>
                    {/* Document Title */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#16a34a', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>EARNINGS STATEMENT</h1>
                        <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>Document ID: {invoice.id}</p>
                    </div>

                    {/* Info Grid - 2x3 Style */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#bfdbfe', border: '1px solid #bfdbfe', borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem' }}>
                        {[
                            { label: 'PAYSTB Number:', value: invoice.id },
                            { label: 'Issue Date:', value: 'Feb 10, 2026' },
                            { label: 'Pay Period:', value: invoice.week },
                            { label: 'Payment Date:', value: invoice.paidDate },
                            { label: 'Department:', value: invoice.facility.split(' • ')[1] },
                            { label: 'Payment Method:', value: 'Direct Deposit' }
                        ].map((row, i) => (
                            <div key={i} style={{ display: 'flex', background: '#eff6ff', padding: '12px 16px' }}>
                                <span style={{ width: '140px', fontSize: '11px', fontWeight: 900, color: '#1e40af' }}>{row.label}</span>
                                <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>{row.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Shift Details Section */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#1e3a8a', paddingBottom: '8px', borderBottom: '2px solid #f1f5f9', marginBottom: '1.5rem', textTransform: 'uppercase' }}>SHIFT DETAILS</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: '#1e3a8a', color: 'white', textAlign: 'left' }}>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900 }}>Date</th>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900 }}>Shift Type</th>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900 }}>Time</th>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900 }}>Hours</th>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900, textAlign: 'right' }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2].map((_, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>{i === 0 ? "Monday, Feb 3, 2026" : "Tuesday, Feb 4, 2026"}</td>
                                            <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>Day Shift</td>
                                            <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>7:00 AM - 3:00 PM</td>
                                            <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>7.5</td>
                                            <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 900, textAlign: 'right' }}>$337.50</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Payment Breakdown Section */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#1e3a8a', paddingBottom: '8px', borderBottom: '2px solid #f1f5f9', marginBottom: '1.5rem', textTransform: 'uppercase' }}>PAYMENT BREAKDOWN</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: '#1e3a8a', color: 'white', textAlign: 'left' }}>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900 }}>Description</th>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900 }}>Hours/Rate</th>
                                        <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 900, textAlign: 'right' }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>Regular Hours</td>
                                        <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>40 hrs @ $45.00/hr</td>
                                        <td style={{ padding: '12px 16px', fontSize: '13px', color: '#1e293b', fontWeight: 900, textAlign: 'right' }}>$1,800.00</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>Overtime Hours</td>
                                        <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>2.25 hrs @ $67.50/hr</td>
                                        <td style={{ padding: '12px 16px', fontSize: '13px', color: '#1e293b', fontWeight: 900, textAlign: 'right' }}>$151.88</td>
                                    </tr>
                                    <tr style={{ background: '#f8fafc' }}>
                                        <td colSpan={2} style={{ padding: '12px 16px', fontSize: '13px', color: '#1e3a8a', fontWeight: 900 }}>Gross Pay</td>
                                        <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1e3a8a', fontWeight: 900, textAlign: 'right' }}>$1,951.88</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Net Pay Green Box */}
                    <div style={{ background: '#16a34a', padding: '1.5rem 2.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>NET PAY</span>
                        <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white' }}>$1,951.88</span>
                    </div>

                    {/* Important Information Box */}
                    <div style={{ background: '#fefce8', border: '1px solid #fef08a', padding: '1.5rem', borderRadius: '12px', textAlign: 'left' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#854d0e', marginBottom: '1rem' }}>Important Information:</h4>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                'This statement is is for your records only',
                                'Payment has been processed via Direct Deposit',
                                'For questions regarding this payment, please contact the billing department',
                                'Keep this statement for tax purposes'
                            ].map((item, i) => (
                                <li key={i} style={{ fontSize: '12px', fontWeight: 600, color: '#a16207', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '4px', height: '4px', background: '#f59e0b', borderRadius: '50%' }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>Generated on February 15, 2026 at 2:30 PM | Memorial Hospital Professional Portal | Document ID: PRO-2026-001</p>
                </div>
            </div>
        </div>
    );
};

// Modal 2: The "Paystub Details" (for View Details button)
const PaystubDetailsModal = ({ isOpen, onClose, invoice }) => {
    if (!isOpen || !invoice) return null;
    return (
        <div className="pro-modal-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
            <div className="pro-modal-content paystub-modal max-w-2xl p-0 overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-slate-200" style={{ borderRadius: '24px', background: 'white' }}>
                {/* Modal Header */}
                <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', position: 'sticky', top: 0, zIndex: 10 }}>
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b', margin: '0 0 4px 0' }}>Paystub Details</h2>
                        <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>Complete breakdown of your payment</p>
                    </div>
                    <button onClick={onClose} style={{ color: '#cbd5e1', cursor: 'pointer', padding: '8px', background: '#f8fafc', borderRadius: '50%', border: 'none', display: 'flex' }}>
                        <X size={20}/>
                    </button>
                </div>
                
                <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', background: 'white', textAlign: 'left' }}>
                    {/* Top Green Banner */}
                    <div style={{ background: '#16a34a', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 15px -3px rgba(22, 163, 74, 0.2)' }}>
                        <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <FileText size={32} />
                        </div>
                        <div>
                            <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 900, margin: '0 0 4px 0' }}>{invoice.id}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 700 }}>{invoice.facility.split(' • ')[0]}</span>
                                <div style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.4)', borderRadius: '50%' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'white', background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    <Calendar size={12}/> {invoice.week}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Invoice Information Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Invoice Information</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {[
                                { label: 'Issue Date', value: 'Feb 10, 2026' },
                                { label: 'Paid Date', value: invoice.paidDate },
                                { label: 'Department', value: invoice.facility.split(' • ')[1] },
                                { label: 'Payment Method', value: 'Direct Deposit' }
                            ].map((info, i) => (
                                <div key={i} style={{ background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px' }}>
                                    <label style={{ fontSize: '9px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>{info.label}</label>
                                    <span style={{ fontSize: '14px', fontWeight: 900, color: '#1e293b' }}>{info.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shift Details List */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', borderBottom: '1px solid #f8fafc', paddingBottom: '1rem' }}>Shift Details</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[1, 2].map((_, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '4px', height: '40px', background: '#dbeafe', borderRadius: '99px' }}></div>
                                        <div>
                                            <p style={{ fontWeight: 900, color: '#1e293b', fontSize: '14px', margin: '0 0 2px 0' }}>{i === 0 ? "Monday, Feb 3, 2026" : "Tuesday, Feb 4, 2026"}</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: '#94a3b8' }}>
                                                <span>Day Shift</span>
                                                <div style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%' }}></div>
                                                <span>7:00 AM - 3:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 900, color: '#1e293b' }}>7.5 hrs</div>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8' }}>$337.50</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final Net Pay Green Row */}
                    <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', padding: '1.5rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <span style={{ fontSize: '13px', fontWeight: 900, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Net Pay</span>
                        <span style={{ fontSize: '2rem', fontWeight: 900, color: '#16a34a' }}>{invoice.total}</span>
                    </div>
                </div>

                <div style={{ padding: '1.5rem 2rem', background: '#f8fafc', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button 
                        onClick={onClose}
                        style={{ padding: '12px 32px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', color: '#94a3b8', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}
                    >
                        Close
                    </button>
                    <button style={{ padding: '12px 40px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)' }}>
                        <Download size={18}/> Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

const MyInvoices = () => {
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isStatementOpen, setIsStatementOpen] = useState(false);
    const [isErrorOpen, setIsErrorOpen] = useState(false);

    const stats = [
        { label: "Total Paid", value: "3", sub: "invoices", color: "green", icon: <CheckCircle size={32}/> },
        { label: "This Month", value: "$3,871.88", sub: "earned", color: "blue", icon: <DollarSign size={32}/> },
        { label: "Total Earned", value: "$5,491.88", sub: "lifetime", color: "purple", icon: <TrendingUp size={32}/> }
    ];

    const invoices = [
        { id: "PAYSTB-2026-001", facility: "St. Mary's Hospital • Emergency Department", week: "Week of Feb 3-9, 2026", hours: "42.25 hrs", overtime: "+2.25 OT", rate: "$45/hr", total: "$1,951.88", paidDate: "Feb 11, 2026" },
        { id: "PAYSTB-2026-002", facility: "City Medical Center • ICU", week: "Week of Jan 27-Feb 2, 2026", hours: "40 hrs", rate: "$48/hr", total: "$1,920", paidDate: "Feb 5, 2026" },
        { id: "PAYSTB-2026-003", facility: "Memorial Hospital • Medical-Surgical", week: "Week of Jan 20-26, 2026", hours: "36 hrs", rate: "$45/hr", total: "$1,620", paidDate: "Jan 29, 2026" }
    ];

    return (
        <div className="pro-dashboard" style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <ProfessionalHeader title="Earnings" subtitle="All your earnings in one place." />

            <div className="pro-main-content" style={{ padding: '2.5rem 4rem', maxWidth: '1400px', margin: '0 auto' }}>
                {/* Stats Row - Robust Inline */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    {stats.map((stat, i) => (
                        <div key={i} style={{ background: 'white', borderRadius: '32px', padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.02)' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: stat.color === 'green' ? '#f0fdf4' : stat.color === 'blue' ? '#eff6ff' : '#f5f3ff', color: stat.color === 'green' ? '#16a34a' : stat.color === 'blue' ? '#216cf2' : '#7c3aed' }}>
                                {React.cloneElement(stat.icon, { size: 28 })}
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <h5 style={{ fontSize: '10px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.15em', margin: '0 0 2px 0' }}>{stat.label}</h5>
                                <h3 style={{ fontSize: '1.875rem', fontWeight: 900, color: stat.color === 'green' ? '#16a34a' : stat.color === 'blue' ? '#003366' : '#7c3aed', margin: '0 0 2px 0' }}>
                                    {stat.value}
                                </h3>
                                <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ background: 'white', borderRadius: '40px', padding: '3rem', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.01)' }}>
                    <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.875rem', fontWeight: 900, color: '#1e293b', margin: '0 0 8px 0' }}>Payment History</h3>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>All your earnings in one place.</p>
                    </div>

                    {/* Filter Bar */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem 1.25rem 1.25rem 4rem', borderRadius: '20px', fontSize: '14px', fontWeight: 700, outline: 'none', color: '#1e293b' }} placeholder="Search by facility name, role, or specialization..." />
                            <Search size={22} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }} />
                        </div>
                        <button style={{ background: '#003366', color: 'white', padding: '0 3.5rem', borderRadius: '20px', border: 'none', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 15px -3px rgba(0, 51, 102, 0.2)' }}>
                            <Filter size={20} /> Filter
                        </button>
                    </div>

                    {/* Invoices List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {invoices.map(invoice => (
                            <div key={invoice.id} style={{ border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
                                <div style={{ padding: '2.5rem 3rem', borderBottom: '1px solid #f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ width: '64px', height: '64px', background: '#16a34a', color: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(22, 163, 74, 0.15)' }}>
                                            <FileText size={32}/>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e293b', margin: '0 0 4px 0' }}>{invoice.id}</h3>
                                            <p style={{ fontSize: '14px', fontWeight: 700, color: '#94a3b8', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Hospital size={16} style={{ color: '#cbd5e1' }}/> {invoice.facility}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontSize: '10px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.15em', margin: '0 0 12px 0' }}>{invoice.week}</p>
                                        <span style={{ background: '#f0fdf4', color: '#16a34a', padding: '8px 32px', borderRadius: '99px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid #dcfce7' }}>Paid</span>
                                    </div>
                                </div>
                                
                                <div style={{ padding: '3rem', background: 'white', textAlign: 'left' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
                                            <label style={{ fontSize: '10px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>Total Hours</label>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <Clock size={22} style={{ color: '#cbd5e1' }}/>
                                                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b' }}>{invoice.hours}</span>
                                            </div>
                                            {invoice.overtime && <p style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 900, margin: '12px 0 0 4px' }}>{invoice.overtime}</p>}
                                        </div>
                                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
                                            <label style={{ fontSize: '10px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>Hourly Rate</label>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <DollarSign size={22} style={{ color: '#cbd5e1' }}/>
                                                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b' }}>{invoice.rate}</span>
                                            </div>
                                        </div>
                                        <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '24px', border: '1px solid #dcfce7' }}>
                                            <label style={{ fontSize: '10px', fontWeight: 900, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>Net Pay</label>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <CheckCircle size={22} style={{ color: '#16a34a', opacity: 0.4 }}/>
                                                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#16a34a' }}>{invoice.total}</span>
                                            </div>
                                        </div>
                                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
                                            <label style={{ fontSize: '10px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>Paid Date</label>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <Calendar size={22} style={{ color: '#cbd5e1' }}/>
                                                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b' }}>{invoice.paidDate}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Direct Deposit Banner Row */}
                                    <div style={{ background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '16px', padding: '1.25rem 2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontSize: '10px', fontWeight: 900, color: '#1e40af', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Payment Method:</span>
                                        <span style={{ fontSize: '12px', fontWeight: 900, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Deposit</span>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button 
                                            onClick={() => { setSelectedInvoice(invoice); setIsDetailsOpen(true); }}
                                            style={{ background: '#003366', color: 'white', padding: '12px 48px', borderRadius: '20px', border: 'none', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 15px -3px rgba(0, 51, 102, 0.2)' }}
                                        >
                                            <Eye size={20} /> View Details
                                        </button>
                                        <button 
                                            onClick={() => { setSelectedInvoice(invoice); setIsStatementOpen(true); }}
                                            style={{ background: 'white', border: '2px solid #f1f5f9', padding: '12px 48px', borderRadius: '20px', color: '#94a3b8', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
                                        >
                                            <Download size={20} /> Download PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <PaystubDetailsModal 
                isOpen={isDetailsOpen} 
                onClose={() => setIsDetailsOpen(false)} 
                invoice={selectedInvoice} 
            />

            <EarningsStatementModal 
                isOpen={isStatementOpen} 
                onClose={() => setIsStatementOpen(false)} 
                invoice={selectedInvoice} 
            />

            <ErrorModal 
                isOpen={isErrorOpen}
                onClose={() => setIsErrorOpen(false)}
                title="Access Denied"
                message="We encountered an error while trying to process your request. Please try again later."
                onAction={() => setIsErrorOpen(false)}
            />
        </div>
    );
};

export default MyInvoices;
