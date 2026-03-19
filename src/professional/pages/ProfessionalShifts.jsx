import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Bell, 
    X, 
    Building2, 
    Calendar, 
    Clock, 
    DollarSign, 
    Phone, 
    Search, 
    Filter, 
    MapPin,
    AlertCircle,
    CheckCircle,
    Eye,
    ShieldCheck,
    Navigation2,
    ChevronRight,
    Hospital,
    Info,
    Check,
    MessageCircle,
    ArrowRight,
    Briefcase
} from 'lucide-react';

// --- Helper Components ---

const EmptyState = ({ icon, title, message }) => (
    <div style={{ textAlign: 'center', padding: '100px 40px', backgroundColor: '#f8fafc', borderRadius: '32px', border: '2px dashed #e2e8f0', margin: '40px 0' }}>
        <div style={{ marginBottom: '24px', display: 'inline-flex', padding: '24px', backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#003366', marginBottom: '12px' }}>{title}</h3>
        <p style={{ fontSize: '16px', fontWeight: 700, color: '#94a3b8', maxWidth: '400px', margin: '0 auto' }}>{message}</p>
    </div>
);

// --- Modals ---

const CancelShiftModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', padding: '20px' }}>
            <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '500px', borderRadius: '40px', padding: '64px 40px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '32px', right: '32px', color: '#cbd5e1', cursor: 'pointer' }} onClick={onClose}><X size={24}/></div>
                <div style={{ width: '100px', height: '100px', backgroundColor: '#fffbeb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px auto' }}>
                    <Bell size={48} color="#f59e0b" fill="#f59e0b" style={{ opacity: 0.9 }}/>
                </div>
                <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#f59e0b', marginBottom: '16px', letterSpacing: '-0.02em' }}>Notification</h2>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '48px', lineHeight: 1.4 }}>Are you sure you want to cancel this shift?</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button onClick={onConfirm} style={{ flex: 1, padding: '22px', backgroundColor: '#fbbf24', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 900, fontSize: '16px', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(251, 191, 36, 0.2)' }}>Confirm</button>
                    <button onClick={onClose} style={{ flex: 1, padding: '22px', backgroundColor: 'white', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: '20px', fontWeight: 900, fontSize: '16px', cursor: 'pointer' }}>Close</button>
                </div>
            </div>
        </div>
    );
};

const ShiftDetailsModal = ({ isOpen, onClose, shift }) => {
    if (!isOpen || !shift) return null;
    const isPending = shift.status === 'pending';
    
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '20px' }} onClick={onClose}>
            <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '640px', maxHeight: '92vh', borderRadius: '48px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
                {/* Header Banner */}
                <div style={{ backgroundColor: '#003366', padding: '48px 40px', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                    <button onClick={onClose} style={{ position: 'absolute', top: '32px', right: '32px', backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={20}/></button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ width: '80px', height: '80px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <Hospital size={36} color="white" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '4px' }}>{shift.facility}</h2>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{shift.role}</p>
                        </div>
                    </div>
                    <span style={{ backgroundColor: '#f0fdf4', color: '#16a34a', padding: '8px 20px', borderRadius: '12px', fontWeight: 900, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{shift.statusLabel || 'Available'}</span>
                </div>

                <div style={{ padding: '40px', overflowY: 'auto', flex: 1, textAlign: 'left' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px' }}>Shift Information</h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '48px' }}>
                        <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003366', border: '1px solid #f1f5f9' }}><Calendar size={22}/></div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', display: 'block' }}>Date & Shift</label>
                                <span style={{ fontSize: '17px', fontWeight: 850, color: '#1e293b' }}>{shift.dateLong || shift.date}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003366', border: '1px solid #f1f5f9' }}><AlertCircle size={22}/></div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', display: 'block' }}>Priority Level</label>
                                <span style={{ fontSize: '17px', fontWeight: 850, color: '#1e293b' }}>Normal</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003366', border: '1px solid #f1f5f9' }}><Clock size={22}/></div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', display: 'block' }}>Timing</label>
                                <span style={{ fontSize: '17px', fontWeight: 850, color: '#1e293b' }}>Day Shift ({shift.time})</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#fffbeb', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', border: '1px solid #fef3c7' }}><DollarSign size={22}/></div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: 900, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', display: 'block', opacity: 0.6 }}>Compensation</label>
                                <span style={{ fontSize: '17px', fontWeight: 900, color: '#f59e0b' }}>{shift.rate}/hr • Total: {shift.total}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #dbeafe', borderRadius: '24px', padding: '24px', marginBottom: '32px' }}>
                        <h4 style={{ color: '#2563eb', fontSize: '15px', fontWeight: 900, marginBottom: '8px' }}>Special Requirements</h4>
                        <p style={{ color: '#2563eb', fontSize: '15px', fontWeight: 700, margin: 0 }}>ACLS certification required</p>
                    </div>

                    <div style={{ border: '2px solid #fde68a', borderRadius: '32px', padding: '32px' }}>
                        <h4 style={{ color: '#d97706', fontSize: '15px', fontWeight: 900, marginBottom: '20px' }}>Important Reminders</h4>
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <li style={{ color: '#d97706', fontSize: '15px', fontWeight: 800, display: 'flex', gap: '10px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#d97706', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div> Arrive 15 minutes early for check-in</li>
                            <li style={{ color: '#d97706', fontSize: '15px', fontWeight: 800, display: 'flex', gap: '10px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#d97706', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div> Bring valid ID and certifications</li>
                            <li style={{ color: '#d97706', fontSize: '15px', fontWeight: 800, display: 'flex', gap: '10px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#d97706', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div> Review facility-specific protocols</li>
                            <li style={{ color: '#d97706', fontSize: '15px', fontWeight: 800, display: 'flex', gap: '10px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#d97706', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div> Contact coordinator if any issues arise</li>
                        </ul>
                    </div>
                </div>

                <div style={{ padding: '32px 40px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '16px' }}>
                    <button onClick={onClose} style={{ flex: 1, padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', backgroundColor: 'white', color: '#64748b', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>Close</button>
                    {!isPending ? (
                        <>
                            <button style={{ flex: 1.2, padding: '20px', borderRadius: '16px', border: 'none', backgroundColor: '#fbbf24', color: 'white', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>Contact Facility</button>
                            <button style={{ flex: 1.2, padding: '20px', borderRadius: '16px', border: 'none', backgroundColor: '#003366', color: 'white', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>Confirm Shift</button>
                        </>
                    ) : (
                        <button style={{ flex: 2, padding: '20px', borderRadius: '16px', border: 'none', backgroundColor: '#fbbf24', color: 'white', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>Contact Facility</button>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Main Page Component ---

const ProfessionalShifts = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('new');
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);
    const [selectedShift, setSelectedShift] = useState(null);

    const mockShifts = [
        {
            id: 1,
            facility: "St. Mary's Hospital",
            role: "Registered Nurse",
            address: "1234 Medical Center Drive, Los Angeles, CA 90015",
            date: "Tuesday, February 10, 2026",
            dateLong: "Tuesday, February 10, 2026",
            time: "7AM - 3PM",
            rate: "$45",
            total: "$320",
            status: 'new',
            statusLabel: 'Available'
        },
        {
            id: 2,
            facility: "Memorial Hospital",
            role: "Registered Nurse",
            address: "1234 Medical Center Drive, Los Angeles, CA 90015",
            date: "Feb 10, 2026",
            dateLong: "Tuesday, February 10, 2026",
            time: "7AM - 3PM",
            rate: "$40",
            total: "$320",
            status: 'new',
            statusLabel: 'Available'
        },
        {
            id: 3,
            facility: "St. Mary's Hospital",
            role: "Registered Nurse",
            address: "Memorial Hospital, 2300 N. Edward St., Decatur, IL 62522",
            department: "Emergency",
            date: "Feb 10, 2026",
            time: "7:00 AM - 3:00 PM (8h)",
            rate: "$40",
            status: 'active',
            statusLabel: 'Not Clocked-In'
        },
        {
            id: 4,
            facility: "St. Mary's Hospital",
            role: "Registered Nurse",
            address: "1234 Medical Center Drive, Los Angeles, CA 90015",
            date: "Tuesday, February 10, 2026",
            time: "7AM - 3PM",
            rate: "$45",
            total: "$320",
            status: 'pending',
            statusLabel: 'Pending Confirmation'
        },
        {
            id: 5,
            facility: "St. Mary's Hospital",
            role: "Registered Nurse",
            address: "1234 Medical Center Drive, Los Angeles, CA 90015",
            date: "Tuesday, February 10, 2026",
            time: "7AM - 3PM",
            rate: "$45",
            total: "$320",
            status: 'past',
            statusLabel: 'Completed'
        }
    ];

    const filteredShifts = mockShifts.filter(s => s.status === activeTab);

    const openDetails = (shift) => {
        setSelectedShift(shift);
        setIsDetailsOpen(true);
    };

    const getHeaderContent = () => {
        switch(activeTab) {
            case 'new': return { title: 'Browse Shifts', sub: 'View and manage your shift assignments' };
            case 'active': return { title: 'Browse Shifts', sub: 'View and manage your shift assignments' };
            case 'pending': return { title: 'Pending Shift Status', sub: 'View and manage your shift assignments' };
            case 'past': return { title: 'Shifts', sub: 'View and manage your shift assignments' };
            default: return { title: 'Shifts', sub: 'Manage you professional shifts' };
        }
    };

    const header = getHeaderContent();

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader title="Shifts" subtitle="Manage you professional shifts" />

            <div className="pro-main-content">
                <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '56px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'left' }}>
                    
                    {/* Page Title Section */}
                    <div style={{ marginBottom: '48px' }}>
                        <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#003366', marginBottom: '8px', letterSpacing: '-0.02em' }}>{header.title}</h1>
                        <p style={{ fontSize: '16px', fontWeight: 700, color: '#94a3b8' }}>{header.sub}</p>
                    </div>

                    {/* Stats Grid (Only on Past Tab) */}
                    {activeTab === 'past' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                            {[
                                { val: '8', label: 'Upcoming', color: '#2563eb' },
                                { val: '3', label: 'Confirmed', color: '#10b981' },
                                { val: '5', label: 'Pending', color: '#f59e0b' },
                                { val: '127', label: 'Completed', color: '#2563eb' }
                            ].map((stat, idx) => (
                                <div key={idx} style={{ padding: '36px', backgroundColor: 'white', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                                    <h3 style={{ fontSize: '36px', fontWeight: 900, color: stat.color, marginBottom: '24px' }}>{stat.val}</h3>
                                    <p style={{ fontSize: '15px', fontWeight: 850, color: '#94a3b8' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Search & Filter Row */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '48px' }}>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <Search size={22} style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }}/>
                            <input 
                                type="text" 
                                placeholder="Search by facility name, role, or specialization..." 
                                style={{ width: '100%', padding: '22px 24px 22px 64px', borderRadius: '16px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '16px', fontWeight: 700, color: '#1e293b', outline: 'none' }}
                            />
                        </div>
                        <button style={{ padding: '0 40px', backgroundColor: '#003366', color: 'white', borderRadius: '16px', border: 'none', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 51, 102, 0.2)' }}>
                            <Filter size={20}/> <span style={{ fontSize: '16px' }}>Filter</span>
                        </button>
                    </div>

                    {/* Tabs Row */}
                    <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '6px', borderRadius: '16px', width: 'fit-content', marginBottom: '48px' }}>
                        {['new', 'active', 'pending', 'past'].map(tab => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{ 
                                    padding: '14px 40px', 
                                    borderRadius: '12px', 
                                    border: 'none', 
                                    fontSize: '14px', 
                                    fontWeight: 900, 
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    backgroundColor: activeTab === tab ? 'white' : 'transparent',
                                    color: activeTab === tab ? '#1e293b' : '#94a3b8',
                                    boxShadow: activeTab === tab ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
                                }}
                            >
                                {tab === 'new' ? 'New Shifts' : tab === 'active' ? 'Active Shifts' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Shifts Grid/List */}
                    <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'new' ? 'repeat(2, 1fr)' : '1fr', gap: '32px' }}>
                        {filteredShifts.map(shift => (
                            <div key={shift.id} style={{ backgroundColor: 'white', borderRadius: '32px', padding: '40px', border: '1px solid #f1f5f9', position: 'relative', transition: 'transform 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
                                    <div style={{ textAlign: 'left' }}>
                                        <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#1e293b', marginBottom: '4px' }}>{shift.facility}</h3>
                                        <p style={{ fontSize: '15px', fontWeight: 700, color: '#64748b' }}>{shift.role}</p>
                                    </div>
                                    <span style={{ 
                                        padding: '6px 16px', 
                                        borderRadius: '10px', 
                                        fontSize: '11px', 
                                        fontWeight: 900, 
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: shift.status === 'new' || shift.status === 'past' ? '#f0fdf4' : '#fffbeb',
                                        color: shift.status === 'new' || shift.status === 'past' ? '#10b981' : '#f59e0b'
                                    }}>
                                        {shift.statusLabel}
                                    </span>
                                </div>

                                {(activeTab === 'new' || activeTab === 'pending' || activeTab === 'past') && <p style={{ color: '#2563eb', fontSize: '14px', fontWeight: 900, marginBottom: '24px', textAlign: 'left' }}>• 1 staff needed</p>}

                                {activeTab === 'active' ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '32px' }}>
                                            <div style={{ textAlign: 'left' }}>
                                                <label style={{ fontSize: '12px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>Facility</label>
                                                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 800, fontSize: '15px' }}>{shift.address}</div>
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <label style={{ fontSize: '12px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>Department</label>
                                                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 800, fontSize: '15px' }}>{shift.department}</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
                                            <div style={{ backgroundColor: '#eff6ff', borderRadius: '24px', padding: '32px', border: '1px solid #dbeafe', textAlign: 'left' }}>
                                                <label style={{ fontSize: '11px', fontWeight: 900, color: '#64748b', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Department & Scheduled Time</label>
                                                <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#1e293b', marginBottom: '8px' }}>Emergency Department</h4>
                                                <p style={{ fontSize: '15px', fontWeight: 800, color: '#64748b', marginBottom: '16px' }}>Day Shift</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '15px', fontWeight: 800 }}><Clock size={18}/> Scheduled: {shift.time}</div>
                                            </div>
                                            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '24px', padding: '32px', border: '1px solid #dcfce7', textAlign: 'left' }}>
                                                <label style={{ fontSize: '11px', fontWeight: 900, color: '#64748b', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hourly Rate</label>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                                                    <DollarSign size={24} color="#059669"/>
                                                    <span style={{ fontSize: '36px', fontWeight: 900, color: '#1e293b' }}>{shift.rate.replace('$', '')}</span>
                                                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#64748b' }}>/hour</span>
                                                </div>
                                                <p style={{ fontSize: '13px', fontWeight: 850, color: '#94a3b8', marginTop: '16px' }}>Est. Total: $360.00</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px', textAlign: 'left' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '15px', fontWeight: 800 }}><MapPin size={20} color="#cbd5e1"/> {shift.address}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '15px', fontWeight: 800 }}><Calendar size={20} color="#cbd5e1"/> {shift.date}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '15px', fontWeight: 800 }}><Clock size={20} color="#cbd5e1"/> {shift.time}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#f59e0b', fontSize: '15px', fontWeight: 900 }}><DollarSign size={20}/> {shift.rate}/hr • Total: {shift.total}</div>
                                    </div>
                                )}

                                {activeTab !== 'active' && (
                                    <div style={{ padding: '24px', backgroundColor: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe', marginBottom: '40px', textAlign: 'left' }}>
                                        <label style={{ color: '#2563eb', fontSize: '12px', fontWeight: 900, marginBottom: '6px', display: 'block', textTransform: 'uppercase' }}>Special Requirements:</label>
                                        <p style={{ color: '#2563eb', fontSize: '15px', fontWeight: 800, margin: 0 }}>ACLS certification required</p>
                                    </div>
                                )}

                                <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', paddingTop: '32px', borderTop: '1px solid #f1f5f9' }}>
                                    <button onClick={() => openDetails(shift)} style={{ flex: activeTab === 'past' ? 1 : 'none', padding: '16px 32px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0, 51, 102, 0.2)' }}>View Details</button>
                                    {activeTab === 'new' && (
                                        <>
                                            <button style={{ padding: '16px 24px', backgroundColor: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer' }}><Phone size={20}/></button>
                                            <button style={{ padding: '16px 24px', backgroundColor: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer' }}><Navigation2 size={20}/></button>
                                        </>
                                    )}
                                    {activeTab === 'pending' && (
                                        <button onClick={() => setIsCancelOpen(true)} style={{ padding: '16px 32px', backgroundColor: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '12px', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}><X size={18}/> Cancel Shift</button>
                                    )}
                                    {activeTab === 'active' && (
                                        <button style={{ padding: '16px 32px', backgroundColor: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '12px', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}><Phone size={18}/> Contact Facility</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredShifts.length === 0 && (
                        <EmptyState 
                            icon={<Briefcase size={64} color="#cbd5e1" strokeWidth={1.5}/>}
                            title="No Shifts Found"
                            message="We couldn't find any shifts matching this criteria in your current status."
                        />
                    )}
                </div>
            </div>

            {/* Modals */}
            <ShiftDetailsModal isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} shift={selectedShift} />
            <CancelShiftModal isOpen={isCancelOpen} onClose={() => setIsCancelOpen(false)} onConfirm={() => setIsCancelOpen(false)} />
        </div>
    );
};

export default ProfessionalShifts;
