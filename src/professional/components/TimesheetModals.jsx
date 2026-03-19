import React from 'react';
import { 
    X, 
    Bell, 
    Calendar, 
    Clock, 
    MapPin, 
    DollarSign, 
    AlertTriangle,
    CheckCircle,
    Info,
    ArrowRight,
    Coffee,
    History,
    AlertCircle,
    Hospital
} from 'lucide-react';

// --- Helper Components ---

const ModalOverlay = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', padding: '20px' }} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                {children}
            </div>
        </div>
    );
};

// --- Modals ---

export const ConfirmShiftClockInModal = ({ isOpen, onClose, onConfirm, shiftDetails }) => {
    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose}>
            <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '580px', maxHeight: '92vh', overflowY: 'auto', borderRadius: '48px', padding: '64px 40px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                <div style={{ width: '100px', height: '100px', backgroundColor: '#fffbeb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px auto' }}>
                    <Bell size={48} color="#f59e0b" fill="#f59e0b" style={{ opacity: 0.9 }}/>
                </div>
                <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#f59e0b', marginBottom: '8px', letterSpacing: '-0.02em' }}>Confirm Shift Clock In</h2>
                <p style={{ fontSize: '20px', fontWeight: 850, color: '#1e293b', marginBottom: '48px' }}>{shiftDetails?.dept} - {shiftDetails?.facility}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '16px', marginBottom: '40px' }}>
                    <div style={{ backgroundColor: '#eff6ff', borderRadius: '16px', padding: '24px', border: '1px solid #dbeafe', textAlign: 'left' }}>
                        <label style={{ fontSize: '11px', fontWeight: 900, color: '#2563eb', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Shift Date</label>
                        <p style={{ fontSize: '17px', fontWeight: 900, color: '#1e293b', margin: 0 }}>{shiftDetails?.date}</p>
                        <p style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', margin: 0 }}>{shiftDetails?.type}</p>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', borderRadius: '16px', padding: '24px', border: '1px solid #dcfce7', textAlign: 'left' }}>
                        <label style={{ fontSize: '11px', fontWeight: 900, color: '#10b981', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Clock In Time</label>
                        <p style={{ fontSize: '28px', fontWeight: 900, color: '#1e293b', margin: 0 }}>{shiftDetails?.currentTime}</p>
                        <p style={{ fontSize: '13px', fontWeight: 700, color: '#10b981', margin: 0 }}>Within clock window</p>
                    </div>
                </div>

                <div style={{ border: '2px solid #fde68a', borderRadius: '32px', padding: '32px', textAlign: 'left', marginBottom: '48px' }}>
                    <h4 style={{ color: '#d97706', fontSize: '16px', fontWeight: 900, marginBottom: '12px' }}>Attestation Required</h4>
                    <p style={{ color: '#d97706', fontSize: '14px', fontWeight: 750, lineHeight: 1.5, marginBottom: '24px' }}>
                        By clocking in, you confirm that you are physically present at the assigned facility, fit for duty, and ready to begin your scheduled shift. You acknowledge that submitting false clock data may result in account suspension.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <label style={{ display: 'flex', gap: '14px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: '#fbbf24', marginTop: '4px', flexShrink: 0 }} defaultChecked />
                            <span style={{ fontSize: '14px', fontWeight: 750, color: '#1e293b', lineHeight: 1.4 }}>I confirm I am physically present at <span style={{ fontWeight: 900 }}>Memorial Hospital, 2300 N. Edward St., Decatur, IL</span> and ready to work my scheduled shift.</span>
                        </label>
                        <label style={{ display: 'flex', gap: '14px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: '#fbbf24', marginTop: '4px', flexShrink: 0 }} defaultChecked />
                            <span style={{ fontSize: '14px', fontWeight: 750, color: '#1e293b', lineHeight: 1.4 }}>I understand that my clock-in time of <span style={{ fontWeight: 900 }}>6:58 AM</span> will be recorded on my official timesheet and submitted for facility approval.</span>
                        </label>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', paddingBottom: '20px' }}>
                    <button onClick={onClose} style={{ flex: 1, padding: '22px', backgroundColor: 'white', color: '#fbbf24', border: '1px solid #fbbf24', borderRadius: '20px', fontWeight: 900, fontSize: '16px', cursor: 'pointer' }}>Cancel</button>
                    <button onClick={onConfirm} style={{ flex: 1, padding: '22px', backgroundColor: '#fbbf24', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 900, fontSize: '16px', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(251, 191, 36, 0.2)' }}>Confirm</button>
                </div>
            </div>
        </ModalOverlay>
    );
};

export const NotificationModal = ({ isOpen, onClose, onConfirm, title, message, actionText = "Confirm" }) => {
    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose}>
            <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '500px', maxHeight: '92vh', overflowY: 'auto', borderRadius: '40px', padding: '64px 40px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                <div style={{ width: '100px', height: '100px', backgroundColor: '#fffbeb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px auto' }}>
                    <Bell size={48} color="#f59e0b" fill="#f59e0b" style={{ opacity: 0.9 }}/>
                </div>
                <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#f59e0b', marginBottom: '16px', letterSpacing: '-0.02em' }}>{title}</h2>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '48px', lineHeight: 1.4 }}>{message}</p>
                <div style={{ display: 'flex', gap: '16px', paddingBottom: '20px' }}>
                    <button onClick={onConfirm} style={{ flex: 1, padding: '22px', backgroundColor: '#fbbf24', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 900, fontSize: '16px', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(251, 191, 36, 0.2)' }}>{actionText}</button>
                    <button onClick={onClose} style={{ flex: 1, padding: '22px', backgroundColor: 'white', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: '20px', fontWeight: 900, fontSize: '16px', cursor: 'pointer' }}>Close</button>
                </div>
            </div>
        </ModalOverlay>
    );
};

export const TimesheetDetailsModal = ({ isOpen, onClose, mode = 'submit', onConfirm, timesheet }) => {
    if (!isOpen) return null;

    const clockEvents = [
        { id: 1, type: "Clock-In", subtitle: "Shift Start", status: "Clocked In", icon: ArrowRight, color: "#2563eb", bgColor: "#eff6ff", time: "6:58 AM" },
        { id: 2, type: "Break Start", subtitle: "Break begins", status: "Clock In", icon: Coffee, color: "#f59e0b", bgColor: "#fffbeb", time: "11:30 AM" },
        { id: 3, type: "Bread End", subtitle: "Break ends", status: "Clock Out", icon: Coffee, color: "#f59e0b", bgColor: "#fffbeb", time: "12:30 PM" },
        { id: 4, type: "Clock-Out", subtitle: "Shift end", status: "Clock Out", icon: ArrowRight, color: "#10b981", bgColor: "#f0fdf4", time: "3:00 PM", rotate: true }
    ];

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose}>
            <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto', borderRadius: '48px', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)', textAlign: 'left' }}>
                <div style={{ padding: '48px 40px 32px 40px', borderBottom: '1px solid #f1f5f9', position: 'relative', flexShrink: 0 }}>
                    <button onClick={onClose} style={{ position: 'absolute', top: '32px', right: '32px', backgroundColor: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}><X size={24}/></button>
                    <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#003366', marginBottom: '4px' }}>Timesheet Details</h2>
                    <p style={{ fontSize: '15px', fontWeight: 750, color: '#94a3b8' }}>{mode === 'submit' ? 'Review your hours before submitting' : 'Information about your submitted timesheet'}</p>
                </div>

                <div style={{ padding: '40px', flex: 1 }}>
                    {mode === 'submit' ? (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '48px' }}>
                                {[
                                    { label: 'Shift Date', val: 'Tuesday, February 1-7, 2026' },
                                    { label: 'Shift Type', val: 'Day Shift' },
                                    { label: 'Facility', val: 'Memorial Hospital' },
                                    { label: 'Scheduled', val: '7:00 AM - 3:00 PM' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <label style={{ fontSize: '10px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>{item.label}</label>
                                        <span style={{ fontSize: '15px', fontWeight: 900, color: '#1e293b' }}>{item.val}</span>
                                    </div>
                                ))}
                            </div>

                            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>Clock Events</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                                {clockEvents.map(event => (
                                    <div key={event.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ width: '44px', height: '44px', backgroundColor: event.bgColor, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: event.color }}>
                                                <event.icon size={20} style={{ transform: event.rotate ? 'rotate(180deg)' : 'none' }}/>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '15px', fontWeight: 850, color: '#1e293b' }}>{event.type}</p>
                                                <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8' }}>{event.subtitle}</p>
                                            </div>
                                        </div>
                                        <span style={{ backgroundColor: event.bgColor, color: event.color, padding: '4px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase' }}>{event.status}</span>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <div style={{ width: '44px', height: '44px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e293b', border: '1px solid #f1f5f9' }}><Clock size={20}/></div>
                                        <p style={{ fontSize: '15px', fontWeight: 850, color: '#f43f5e' }}>Total Break Time</p>
                                    </div>
                                    <span style={{ fontSize: '16px', fontWeight: 900, color: '#f43f5e' }}>1h</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#eff6ff', borderRadius: '24px', padding: '40px', border: '1px solid #dbeafe', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                                <div>
                                    <label style={{ fontSize: '10px', fontWeight: 900, color: '#3b82f6', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Hours</label>
                                    <p style={{ fontSize: '42px', fontWeight: 900, color: '#003366', margin: 0 }}>7.5h</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <label style={{ fontSize: '10px', fontWeight: 900, color: '#3b82f6', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Rate / Hour</label>
                                    <p style={{ fontSize: '42px', fontWeight: 900, color: '#003366', margin: 0 }}>$40</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <label style={{ fontSize: '10px', fontWeight: 900, color: '#3b82f6', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Earnings</label>
                                    <p style={{ fontSize: '42px', fontWeight: 900, color: '#f59e0b', margin: 0 }}>$1,800</p>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#fffbeb', borderRadius: '24px', padding: '24px', border: '1px solid #fef3c7', marginBottom: '32px' }}>
                                <p style={{ fontSize: '14px', fontWeight: 750, color: '#92400e', lineHeight: 1.5, margin: 0 }}>
                                    <span style={{ fontWeight: 900 }}>Once submitted, your timesheet will be sent for review.</span> You won't be able to make changes after submission, Please confirm all clock events are accurate.
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                                <span style={{ backgroundColor: '#fff9f1', color: '#f59e0b', padding: '6px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 900, border: '1px solid #fef3c7', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div> Pending Approval</span>
                            </div>
                            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>Shift Information</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                                {[
                                    { label: 'Date & Shift', val: timesheet?.range || 'Tuesday, February 1-7, 2026', icon: Calendar },
                                    { label: 'Facility', val: timesheet?.facility || 'Memorial Hospital Edward St', icon: Hospital },
                                    { label: 'Timing', val: 'Day Shift (7AM - 3PM)', icon: Clock },
                                    { label: 'Compensation', val: `$${timesheet?.rate || '40'}/hr • Total: $${timesheet?.total || '1,800'}`, icon: DollarSign, color: '#f59e0b' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '20px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ width: '44px', height: '44px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f1f5f9', color: '#003366' }}><item.icon size={20}/></div>
                                        <div>
                                            <label style={{ fontSize: '10px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>{item.label}</label>
                                            <span style={{ fontSize: '15px', fontWeight: 850, color: item.color || '#1e293b' }}>{item.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ padding: '24px', backgroundColor: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe', color: '#2563eb', fontWeight: 750, fontSize: '14px' }}>
                                Admins are reviewing your Timesheet
                            </div>
                        </>
                    )}
                </div>

                <div style={{ padding: '32px 40px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', gap: '16px', flexShrink: 0 }}>
                    <button onClick={onClose} style={{ padding: '16px 40px', borderRadius: '14px', border: '1px solid #e2e8f0', backgroundColor: 'white', color: '#64748b', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>Close</button>
                    {mode === 'submit' ? (
                        <button onClick={onConfirm} style={{ padding: '16px 40px', borderRadius: '14px', border: 'none', backgroundColor: '#003366', color: 'white', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0, 51, 102, 0.2)' }}>Submit Timesheet</button>
                    ) : (
                        <button style={{ padding: '16px 40px', borderRadius: '14px', border: 'none', backgroundColor: '#fbbf24', color: 'white', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(251, 191, 36, 0.2)' }}>Contact Facility</button>
                    )}
                </div>
            </div>
        </ModalOverlay>
    );
};
