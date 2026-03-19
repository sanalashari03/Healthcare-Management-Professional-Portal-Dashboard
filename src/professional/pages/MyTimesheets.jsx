import React, { useState, useEffect } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Clock, 
    Calendar, 
    DollarSign, 
    Send, 
    Timer, 
    X,
    AlertCircle,
    ArrowRightCircle,
    Check,
    CheckCheck,
    CheckCircle,
    Coffee,
    Hospital,
    Phone,
    Search,
    FileText,
    TrendingUp,
    Eye,
    Download,
    ArrowRight,
    MapPin,
    AlertTriangle,
    Bell,
    Navigation2,
    ChevronRight,
    MessageCircle,
    Briefcase
} from 'lucide-react';
import { 
    ConfirmShiftClockInModal, 
    NotificationModal, 
    TimesheetDetailsModal 
} from '../components/TimesheetModals';
import SuccessModal from '../components/SuccessModal';

// --- Page Main Component ---

const MyTimesheets = () => {
    const [activeTab, setActiveTab] = useState('active'); 
    const [shiftStatus, setShiftStatus] = useState('idle'); // idle, clocked_in, on_break, completed
    
    // Modal states
    const [isClockInModalOpen, setIsClockInModalOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [selectedTimesheet, setSelectedTimesheet] = useState(null);

    const stats = [
        { label: "Hours This Week", value: "32", color: "#2563eb" },
        { label: "Pending Review", value: "1", color: "#f59e0b" },
        { label: "Approved", value: "1", color: "#10b981" },
        { label: "This Month", value: "$12.8K", color: "#2563eb" }
    ];

    const historyData = [
        { id: 1, range: "Feb 1-7, 2026", facility: "Memorial Hospital", hours: "40h", rate: "$45", total: "1800", date: "Feb 8, 2026", status: "PENDING APPROVAL", statusColor: "#f59e0b", bgColor: "#fff9f1" },
        { id: 2, range: "Jan 25-31, 2026", facility: "City Medical Center", hours: "36h", rate: "$48", total: "1728", date: "Feb 1, 2026", status: "APPROVED", statusColor: "#2563eb", bgColor: "#eff6ff" },
        { id: 3, range: "Jan 18-24, 2026", facility: "Memorial Hospital", hours: "40h", rate: "$45", total: "1800", date: "Jan 25, 2026", status: "PAID", statusColor: "#10b981", bgColor: "#f0fdf4" }
    ];

    const handleClockInConfirm = () => {
        setShiftStatus('clocked_in');
        setIsClockInModalOpen(false);
    };

    const handleCancelShiftConfirm = () => {
        setShiftStatus('idle');
        setIsCancelModalOpen(false);
    };

    const handleSubmitConfirm = () => {
        setIsSubmitModalOpen(false);
        setIsSuccessModalOpen(true);
        // Reset status for demo
        setTimeout(() => setShiftStatus('completed'), 100);
    };

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader 
                title="My Timesheets" 
                subtitle="Manage your professional profile and assignments" 
            />

            <div className="pro-main-content">
                <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '56px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'left' }}>
                    
                    {/* Page Title Section */}
                    <div style={{ marginBottom: '48px' }}>
                        <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#003366', marginBottom: '8px', letterSpacing: '-0.02em' }}>My Timesheets</h1>
                        <p style={{ fontSize: '16px', fontWeight: 700, color: '#94a3b8' }}>Submit and track your work hours</p>
                    </div>

                    {/* Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                        {stats.map((stat, idx) => (
                            <div key={idx} style={{ padding: '36px', backgroundColor: 'white', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ fontSize: '36px', fontWeight: 900, color: stat.color, marginBottom: '24px' }}>{stat.value}</h3>
                                <p style={{ fontSize: '15px', fontWeight: 850, color: '#94a3b8' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tabs Row */}
                    <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '6px', borderRadius: '16px', width: 'fit-content', marginBottom: '48px' }}>
                        <button 
                            onClick={() => setActiveTab('active')}
                            style={{ 
                                padding: '14px 40px', 
                                borderRadius: '12px', 
                                border: 'none', 
                                fontSize: '14px', 
                                fontWeight: 900, 
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: activeTab === 'active' ? 'white' : 'transparent',
                                color: activeTab === 'active' ? '#1e293b' : '#94a3b8',
                                boxShadow: activeTab === 'active' ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
                            }}
                        >
                            Active Timesheet
                        </button>
                        <button 
                            onClick={() => setActiveTab('history')}
                            style={{ 
                                padding: '14px 40px', 
                                borderRadius: '12px', 
                                border: 'none', 
                                fontSize: '14px', 
                                fontWeight: 900, 
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: activeTab === 'history' ? 'white' : 'transparent',
                                color: activeTab === 'history' ? '#1e293b' : '#94a3b8',
                                boxShadow: activeTab === 'history' ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
                            }}
                        >
                            Timesheet History
                        </button>
                    </div>

                    {/* Active Timesheet View */}
                    {activeTab === 'active' && (
                        <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '48px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '32px' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#1e293b', marginBottom: '4px' }}>Sarah Johnson</h2>
                                    <p style={{ fontSize: '16px', fontWeight: 700, color: '#64748b' }}>Registered Nurse</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '14px', fontWeight: 800, marginTop: '12px' }}>
                                        <Calendar size={18}/>
                                        <span>Feb 10, 2026 • Day Shift</span>
                                    </div>
                                </div>
                                <span style={{ padding: '6px 16px', borderRadius: '10px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#f0fdf4', color: '#10b981' }}>Active</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '32px', marginBottom: '32px' }}>
                                <div style={{ backgroundColor: '#eff6ff', borderRadius: '24px', padding: '32px', border: '1px solid #dbeafe', textAlign: 'left' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#64748b', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Department & Scheduled Time</label>
                                    <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#1e293b', marginBottom: '8px' }}>Emergency Department</h4>
                                    <p style={{ fontSize: '15px', fontWeight: 800, color: '#64748b', marginBottom: '16px' }}>Day Shift</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '15px', fontWeight: 800 }}><Clock size={18}/> Scheduled: 7:00 AM - 3:00 PM (8h)</div>
                                </div>
                                <div style={{ backgroundColor: '#f0fdf4', borderRadius: '24px', padding: '32px', border: '1px solid #dcfce7', textAlign: 'left' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#64748b', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hourly Rate</label>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                                        <DollarSign size={24} color="#059669"/>
                                        <span style={{ fontSize: '36px', fontWeight: 900, color: '#1e293b' }}>40</span>
                                        <span style={{ fontSize: '16px', fontWeight: 800, color: '#64748b' }}>/hour</span>
                                    </div>
                                    <p style={{ fontSize: '13px', fontWeight: 850, color: '#94a3b8', marginTop: '16px' }}>Est. Total: $360.00</p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', marginBottom: '40px' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>Facility</label>
                                    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9', color: '#1e293b', fontWeight: 800, fontSize: '15px' }}>Memorial Hospital, 2300 N. Edward St., Decatur, IL 6252</div>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>Department</label>
                                    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9', color: '#1e293b', fontWeight: 800, fontSize: '15px' }}>Emergency</div>
                                </div>
                            </div>

                            {/* Clocking Sections */}
                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ fontSize: '12px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', textAlign: 'left' }}>Daily Hours & Shift Times</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {/* Clock In */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}><ArrowRight size={22}/></div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p style={{ fontSize: '16px', fontWeight: 850, color: '#1e293b' }}>Clock-In Time</p>
                                                <p style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8' }}>{shiftStatus === 'idle' ? 'Not checked in yet' : 'Clocked in at 6:58 AM - Attestation confirmed'}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            {shiftStatus !== 'idle' ? (
                                                <>
                                                    <span style={{ backgroundColor: '#f0fdf4', color: '#10b981', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase' }}>Clocked In</span>
                                                    <span style={{ fontSize: '18px', fontWeight: 900, color: '#10b981' }}>6:58 AM</span>
                                                </>
                                            ) : (
                                                <button onClick={() => setIsClockInModalOpen(true)} style={{ padding: '10px 24px', backgroundColor: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '10px', fontSize: '12px', fontWeight: 900, cursor: 'pointer' }}>Clock In</button>
                                            )}
                                        </div>
                                    </div>
                                    {/* Clock Out */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ width: '48px', height: '48px', backgroundColor: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}><ArrowRight size={22} style={{ transform: 'rotate(180deg)' }}/></div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p style={{ fontSize: '16px', fontWeight: 850, color: '#1e293b' }}>Clock-Out Time</p>
                                                <p style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8' }}>Not checked out yet</p>
                                            </div>
                                        </div>
                                        <button disabled={shiftStatus === 'idle'} style={{ padding: '10px 24px', backgroundColor: shiftStatus !== 'idle' ? '#f0fdf4' : '#f8fafc', color: shiftStatus !== 'idle' ? '#10b981' : '#cbd5e1', border: 'none', borderRadius: '10px', fontSize: '12px', fontWeight: 900, cursor: shiftStatus !== 'idle' ? 'pointer' : 'default' }}>Clock Out</button>
                                    </div>
                                </div>
                            </div>

                            {/* Timer Section (Only when clocked in) */}
                            {shiftStatus !== 'idle' && (
                                <div style={{ marginBottom: '40px' }}>
                                    <h4 style={{ fontSize: '12px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', textAlign: 'left' }}>Daily Hours Active Timer</h4>
                                    <div style={{ backgroundColor: '#eff6ff', borderRadius: '16px', padding: '16px 24px', border: '1px solid #dbeafe', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2563eb' }}>
                                            <Clock size={20}/>
                                            <span style={{ fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Shift Started</span>
                                        </div>
                                        <span style={{ fontSize: '20px', fontWeight: 900, color: '#2563eb', fontFamily: 'monospace' }}>00 : 38 : 15</span>
                                    </div>
                                </div>
                            )}

                            {/* Break Section */}
                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ fontSize: '12px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', textAlign: 'left' }}>Daily Hours & Shift Times</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {/* Start Break */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ width: '48px', height: '48px', backgroundColor: '#fffbeb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}><Coffee size={22}/></div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p style={{ fontSize: '16px', fontWeight: 850, color: '#1e293b' }}>Start Break</p>
                                                <p style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8' }}>Not checked in yet</p>
                                            </div>
                                        </div>
                                        <button disabled={shiftStatus !== 'clocked_in'} onClick={() => setShiftStatus('on_break')} style={{ padding: '10px 24px', backgroundColor: shiftStatus === 'clocked_in' ? '#eff6ff' : '#f8fafc', color: shiftStatus === 'clocked_in' ? '#2563eb' : '#cbd5e1', border: 'none', borderRadius: '10px', fontSize: '12px', fontWeight: 900, cursor: shiftStatus === 'clocked_in' ? 'pointer' : 'default' }}>Clock In Break</button>
                                    </div>
                                    {/* End Break */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ width: '48px', height: '48px', backgroundColor: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}><Coffee size={22}/></div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p style={{ fontSize: '16px', fontWeight: 850, color: '#1e293b' }}>End Break</p>
                                                <p style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8' }}>Not checked out yet</p>
                                            </div>
                                        </div>
                                        <button disabled={shiftStatus !== 'on_break'} onClick={() => setShiftStatus('clocked_in')} style={{ padding: '10px 24px', backgroundColor: shiftStatus === 'on_break' ? '#f0fdf4' : '#f8fafc', color: shiftStatus === 'on_break' ? '#10b981' : '#cbd5e1', border: 'none', borderRadius: '10px', fontSize: '12px', fontWeight: 900, cursor: shiftStatus === 'on_break' ? 'pointer' : 'default' }}>Clock Out Break</button>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Box */}
                            <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f1f5f9' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#2563eb', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Hours</label>
                                    <p style={{ fontSize: '42px', fontWeight: 900, color: '#1e293b', margin: 0 }}>0<span style={{ fontSize: '24px', color: '#64748b' }}>h</span></p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#f59e0b', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Earnings</label>
                                    <p style={{ fontSize: '42px', fontWeight: 900, color: '#f59e0b', margin: 0 }}>$0.00</p>
                                </div>
                            </div>

                            {/* Page Actions */}
                            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <button onClick={() => setIsCancelModalOpen(true)} style={{ flex: 1.5, padding: '20px', backgroundColor: 'white', color: '#ef4444', border: '1px solid #fee2e2', borderRadius: '16px', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', cursor: 'pointer' }}>Cancel Shift</button>
                                    <button style={{ flex: 1, padding: '20px', backgroundColor: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '16px', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><MessageCircle size={20} color="#2563eb"/> Contact Facility</button>
                                </div>
                                <button 
                                    onClick={() => setIsSubmitModalOpen(true)}
                                    disabled={shiftStatus === 'idle'}
                                    style={{ 
                                        width: '100%', 
                                        padding: '24px', 
                                        backgroundColor: shiftStatus === 'idle' ? '#cbd5e1' : '#003366', 
                                        color: 'white', 
                                        border: 'none', 
                                        borderRadius: '16px', 
                                        fontWeight: 900, 
                                        fontSize: '15px', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '1px', 
                                        cursor: shiftStatus === 'idle' ? 'default' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        boxShadow: shiftStatus === 'idle' ? 'none' : '0 10px 15px -3px rgba(0, 51, 102, 0.2)'
                                    }}
                                >
                                    <Send size={20}/> Submit Timesheet
                                </button>
                            </div>
                        </div>
                    )}

                    {/* History View */}
                    {activeTab === 'history' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {historyData.map((item) => (
                                <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '32px', padding: '48px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', textAlign: 'left' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '40px' }}>
                                        <div>
                                            <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#1e293b', marginBottom: '4px' }}>{item.range}</h3>
                                            <p style={{ fontSize: '16px', fontWeight: 700, color: '#64748b' }}>{item.facility}</p>
                                        </div>
                                        <span style={{ padding: '10px 24px', borderRadius: '12px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', border: `1px solid ${item.statusColor}22`, backgroundColor: item.bgColor, color: item.statusColor }}>{item.status}</span>
                                    </div>

                                    <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '32px', border: '1px solid #f1f5f9', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                                        <div>
                                            <label style={{ fontSize: '11px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Hours</label>
                                            <p style={{ fontSize: '32px', fontWeight: 900, color: '#1e293b', margin: 0 }}>{item.hours}</p>
                                        </div>
                                        <div>
                                            <label style={{ fontSize: '11px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Hourly Rate</label>
                                            <p style={{ fontSize: '32px', fontWeight: 900, color: '#1e293b', margin: 0 }}>{item.rate}</p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <label style={{ fontSize: '11px', fontWeight: 900, color: '#94a3b8', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Amount</label>
                                            <p style={{ fontSize: '32px', fontWeight: 900, color: '#f59e0b', margin: 0 }}>${item.total}</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p style={{ fontSize: '14px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px' }}>Submitted: {item.date}</p>
                                        <button onClick={() => { setSelectedTimesheet(item); setIsDetailsModalOpen(true); }} style={{ padding: '12px 24px', backgroundColor: 'white', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '12px', fontWeight: 850, fontSize: '12px', textTransform: 'uppercase', cursor: 'pointer' }}>View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            <ConfirmShiftClockInModal isOpen={isClockInModalOpen} onClose={() => setIsClockInModalOpen(false)} onConfirm={handleClockInConfirm} shiftDetails={{ facility: "Memorial Hospital", facilityAddress: "Memorial Hospital, 2300 N. Edward St., Decatur, IL 6252", dept: "Emergency Department", date: "Feb 10, 2026", type: "Day Shift", currentTime: "6:58 AM" }} />
            <NotificationModal isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)} onConfirm={handleCancelShiftConfirm} title="Notification" message="Are you sure you want to cancel this shift?" actionText="Confirm" />
            <TimesheetDetailsModal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} mode="submit" onConfirm={handleSubmitConfirm} />
            <TimesheetDetailsModal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} mode="view" timesheet={selectedTimesheet} />
            <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} title="Timesheet Successfully Submitted" message="Your hours has been sent for review." />
        </div>
    );
};

export default MyTimesheets;
