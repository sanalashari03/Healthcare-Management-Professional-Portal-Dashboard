import React from 'react';
import { 
    Calendar, 
    Plus, 
    Info, 
    ChevronRight, 
    Eye,
    LogOut,
    CheckCircle2,
    XCircle,
    Bell,
    Mail,
    Edit3,
    Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShiftManagement = () => {
    const navigate = useNavigate();
    const [isPostedModalOpen, setIsPostedModalOpen] = React.useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
    const [isCancelConfirmOpen, setIsCancelConfirmOpen] = React.useState(false);
    const [isInvitationOpen, setIsInvitationOpen] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [isSuccessOverlayOpen, setIsSuccessOverlayOpen] = React.useState(false);

    const shiftStatuses = [
        { id: 1, role: 'RN - Day Shift', date: 'Feb 10, 2026', time: '7AM - 3PM', staff: '1 staff needed', status: 'Open' },
        { id: 2, role: 'RN - Day Shift', date: 'Feb 10, 2026', time: '7AM - 3PM', staff: '1 staff needed', status: 'Cancelled' },
        { id: 3, role: 'RN - Day Shift', date: 'Feb 10, 2026', time: '7AM - 3PM', staff: '1 staff needed', status: 'Filled' },
        { id: 4, role: 'RN - Day Shift', date: 'Feb 10, 2026', time: '7AM - 3PM', staff: '1 staff needed', status: 'Completed' },
    ];

    const showSuccess = (msg) => {
        setSuccessMessage(msg);
        setIsSuccessOverlayOpen(true);
        setTimeout(() => setIsSuccessOverlayOpen(false), 2000);
    };

    const handlePostShift = (e) => {
        e.preventDefault();
        showSuccess('Shift Posted Successfully');
    };

    const handleEditSave = () => {
        setIsEditModalOpen(false);
        showSuccess('Shift Successfully Edited');
    };

    const handleCancelConfirm = () => {
        setIsCancelConfirmOpen(false);
        setIsPostedModalOpen(false);
        showSuccess('Shift Cancelled Successfully');
    };

    const handleInviteSend = () => {
        setIsInvitationOpen(false);
        showSuccess('Shift Invitation Sent');
    };

    return (
        <div className="shifts-container">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Shift Management</h1>
                    <p>Shift lifecycle overview</p>
                </div>
                <div className="header-actions">
                    <button className="exit-portal-btn">
                        <LogOut size={16} /> Exit Portal
                    </button>
                </div>
            </header>

            <div className="shifts-main-grid">
                <div className="shift-posting-column">
                    <div className="activity-section no-padding-bg">
                        <div className="section-header">
                            <h2>Shift Posting</h2>
                        </div>
                        <p className="section-desc">Fill out the form below to request healthcare professionals for your facility</p>
                        
                        <form className="shift-post-form" onSubmit={handlePostShift}>
                            <div className="form-group">
                                <label>Shift Date *</label>
                                <div className="date-input-box">
                                    <Calendar size={18} />
                                    <span>Tuesday, February 10, 2026</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Department *</label>
                                <select className="form-select-large">
                                    <option>Emergency Department</option>
                                    <option>ICU</option>
                                    <option>General Ward</option>
                                </select>
                            </div>

                            <div className="form-header-row">
                                <label>Shift Requirements *</label>
                                <button type="button" className="btn-add-shift-inline">
                                    <Plus size={16} /> Add Shift
                                </button>
                            </div>

                            <div className="shift-card-requirement">
                                <div className="card-top">
                                    <h3>Shift 1</h3>
                                </div>
                                <div className="card-grid">
                                    <div className="card-input-group">
                                        <label>Role</label>
                                        <select className="card-select">
                                            <option>Registered Nurse (RN)</option>
                                            <option>LPN</option>
                                            <option>CNA</option>
                                        </select>
                                    </div>
                                    <div className="card-input-group">
                                        <label>Shift Type</label>
                                        <select className="card-select">
                                            <option>Day Shift (7AM - 3PM)</option>
                                            <option>Evening Shift (3PM - 11PM)</option>
                                            <option>Night Shift (11PM - 7AM)</option>
                                        </select>
                                    </div>
                                    <div className="card-input-group">
                                        <label>Number of Staff Needed</label>
                                        <input type="number" className="card-input" defaultValue="1" />
                                    </div>
                                    <div className="card-input-group">
                                        <label>Priority Level</label>
                                        <select className="card-select">
                                            <option>Normal</option>
                                            <option>High</option>
                                            <option>Urgent</option>
                                        </select>
                                    </div>
                                    <div className="card-input-group full-width">
                                        <label>$ Hourly Rate (Payout) *</label>
                                        <div className="currency-box">
                                            <span className="cur-sym">$</span>
                                            <input type="text" className="cur-input" defaultValue="40" />
                                            <span className="cur-unit">/hour</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Note</label>
                                <textarea className="form-textarea-classic" placeholder="Any additional information or special circumstances..."></textarea>
                            </div>

                            <div className="form-footer-actions">
                                <button type="submit" className="btn-submit-post">Post Shift</button>
                                <button type="button" className="btn-save-draft">Save as Draft</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="shift-status-column">
                    <div className="activity-section no-padding-bg">
                        <div className="section-header">
                            <h2>Shift Status</h2>
                            <button className="view-all-link" onClick={() => navigate('/facility/shifts-status')}>View All Status</button>
                        </div>
                        <p className="recent-label">Recent</p>

                        <div className="status-cards-stack">
                            {shiftStatuses.map(item => (
                                <div key={item.id} className="mini-status-card">
                                    <div className="mini-content">
                                        <div className="left-info">
                                            <h4>{item.role}</h4>
                                            <span>{item.date}</span>
                                            <span>{item.time}</span>
                                            <p className="needed">• {item.staff}</p>
                                        </div>
                                        <div className={`mini-badge ${item.status.toLowerCase()}`}>
                                            {item.status}
                                        </div>
                                    </div>
                                    <button className="mini-view-btn" onClick={() => setIsPostedModalOpen(true)}>
                                        <Eye size={14} /> View
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isPostedModalOpen && (
                <div className="modal-overlay">
                    <div className="posted-shift-modal">
                        <button className="modal-close-btn" onClick={() => setIsPostedModalOpen(false)}>Close</button>
                        <div className="modal-header-main">
                            <h2>Posted Shift</h2>
                        </div>
                        
                        <div className="modal-content-grid">
                            <div className="info-block">
                                <label>Shift Status</label>
                                <div className="status-row">
                                    <span className="status-text">Shift Type: Day Shift</span>
                                    <span className="status-tag open">Open</span>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-col">
                                    <label>Facility</label>
                                    <span>St. Mary’s Hospital</span>
                                </div>
                                <div className="info-col">
                                    <label>Department</label>
                                    <span className="faded">Emergency</span>
                                </div>
                            </div>

                            <div className="blue-date-box">
                                <label>Shift Date & Time</label>
                                <div className="date-flex">
                                    <Calendar size={18} />
                                    <span>Feb 10, 2026</span>
                                </div>
                                <p>Day Shift: 7:00 AM - 3:00 PM</p>
                            </div>

                            <div className="info-block">
                                <label>Special Note</label>
                                <p className="note-text">Please bring your certificates to the facility, when you reach.</p>
                            </div>

                            <button className="btn-orange-full" onClick={() => navigate('/facility/applicants')}>
                                <Users size={18} /> View Applicants
                            </button>

                            <div className="modal-footer-split">
                                <button className="btn-outline-red" onClick={() => setIsCancelConfirmOpen(true)}>Cancel Shift</button>
                                <button className="btn-dark-blue" onClick={() => setIsEditModalOpen(true)}>Edit Shift</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="edit-shift-modal">
                        <div className="edit-modal-header">
                            <h2>Edit Shift</h2>
                            <p>Change Shift details</p>
                        </div>
                        
                        <div className="edit-form-body">
                            <div className="inv-form-group">
                                <label>Shift Date *</label>
                                <div className="inv-input-box">
                                    <Calendar size={18} />
                                    <span>Tuesday, February 10, 2026</span>
                                </div>
                            </div>
                            <div className="inv-form-group">
                                <label>Department *</label>
                                <select className="inv-select">
                                    <option>Emergency Department</option>
                                </select>
                            </div>
                            <div className="inv-form-group">
                                <label>Status</label>
                                <select className="inv-select">
                                    <option>Open</option>
                                </select>
                            </div>
                            
                            <label className="section-title">Shift Requirements *</label>
                            <div className="inv-requirement-card">
                                <h3>Shift 1</h3>
                                <div className="inv-grid">
                                    <div className="inv-field">
                                        <label>Role</label>
                                        <select className="inv-field-select"><option>Registered Nurse (RN)</option></select>
                                    </div>
                                    <div className="inv-field">
                                        <label>Shift Type</label>
                                        <select className="inv-field-select"><option>Day Shift (7AM - 3PM)</option></select>
                                    </div>
                                    <div className="inv-field">
                                        <label>Facility</label>
                                        <input className="inv-field-input" defaultValue="St. Mary's Hospital" />
                                    </div>
                                    <div className="inv-field">
                                        <label>Priority Level</label>
                                        <select className="inv-field-select"><option>Normal</option></select>
                                    </div>
                                    <div className="inv-field">
                                        <label>Number of Staff Needed</label>
                                        <input className="inv-field-input" defaultValue="1" />
                                    </div>
                                    <div className="inv-field">
                                        <label>$ Hourly Rate (Payout) *</label>
                                        <div className="inv-currency-box">
                                            <span>$ 40</span>
                                            <span className="unit">/hour</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="inv-form-group">
                                <label>Special Note</label>
                                <textarea className="inv-textarea" placeholder="Any additional information or special circumstances..."></textarea>
                            </div>

                            <div className="inv-footer">
                                <button className="btn-inv-cancel" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                                <button className="btn-inv-send" onClick={handleEditSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isCancelConfirmOpen && (
                <div className="modal-overlay">
                    <div className="notification-modal-card">
                        <div className="notif-header">
                            <Bell size={48} color="#f59e0b" fill="#fef3c7" />
                            <h2>Notification</h2>
                        </div>
                        <p>Are You Sure You Want To Cancel This Shift?</p>
                        <div className="notif-btns">
                            <button className="btn-confirm-notif" onClick={handleCancelConfirm}>Confirm</button>
                            <button className="btn-close-notif" onClick={() => setIsCancelConfirmOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {isSuccessOverlayOpen && (
                <div className="success-overlay-fixed">
                    <div className="success-card-v2">
                        <div className="success-check-animated">
                            <div className="check-ring">
                                <CheckCircle2 size={64} color="#003366" />
                            </div>
                        </div>
                        <h3>{successMessage}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShiftManagement;
