import React from 'react';
import { 
    ArrowLeft, 
    Search, 
    Filter, 
    Eye,
    CheckCircle2,
    XCircle,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Clock,
    User,
    Calendar,
    Building2,
    Mail,
    Phone,
    Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ApplicantsManagement = () => {
    const navigate = useNavigate();
    const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
    const [isInvitationOpen, setIsInvitationOpen] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [isSuccessOverlayOpen, setIsSuccessOverlayOpen] = React.useState(false);
    const [selectedApplicant, setSelectedApplicant] = React.useState(null);

    const applicants = [
        { id: 1, reqStatus: 'Recent', name: 'Sarah Johnson', facility: 'St. Mary\'s Hospital', dept: 'RN', date: '2026-2-15', scheduled: '07:00 AM - 03:00 PM', status: 'Pending' },
        { id: 2, reqStatus: '1h ago', name: 'Lisa Anderson', facility: 'St. Mary\'s Hospital', dept: 'RN', date: '2024-10-14', scheduled: '08:00 AM - 04:00 PM', status: 'Pending' },
        { id: 3, reqStatus: '2d ago', name: 'Michael Chen', facility: 'General Medical', dept: 'PN', date: '2024-10-11', scheduled: '08:00 AM - 04:00 PM', status: 'Pending' },
        { id: 4, reqStatus: '1y ago', name: 'Emma Davis', facility: 'City Hospital', dept: 'ACLS', date: '2024-10-12', scheduled: '02:00 PM - 10:00 PM', status: 'Pending' },
        { id: 5, reqStatus: '1y ago', name: 'James Wilson', facility: 'County Hospital', dept: 'BLS', date: '2024-10-13', scheduled: '10:00 PM - 06:00 AM', status: 'Pending', highlight: true },
        { id: 6, reqStatus: '2d ago', name: 'David Martinez', facility: 'Care Home Plus', dept: 'PN', date: '2024-10-09', scheduled: '08:00 AM - 04:00 PM', status: 'Approved' },
        { id: 7, reqStatus: '2d ago', name: 'Robert Taylor', facility: 'General Medical', dept: 'RN', date: '2024-10-08', scheduled: '12:00 PM - 08:00 PM', status: 'Rejected' },
    ];

    const showSuccess = (msg) => {
        setSuccessMessage(msg);
        setIsSuccessOverlayOpen(true);
        setTimeout(() => setIsSuccessOverlayOpen(false), 2000);
    };

    const handleViewDetail = (app) => {
        setSelectedApplicant(app);
        setIsDetailModalOpen(true);
    };

    const handleSendInvitation = () => {
        setIsInvitationOpen(false);
        setIsDetailModalOpen(false);
        showSuccess('Shift Invitation Sent');
    };

    return (
        <div className="applicants-page">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Shift Management</h1>
                    <p>Manage your facility Shift operations</p>
                </div>
                <div className="header-actions">
                    <button className="go-back-btn" onClick={() => navigate('/facility/shifts-status')}><ArrowLeft size={16} /> Go Back</button>
                </div>
            </header>

            <div className="applicants-content-wrapper">
                <div className="applicants-header-box">
                    <div className="box-left">
                        <h2>Applicants</h2>
                        <p>Manage and handle requests made by professionals</p>
                    </div>

                    <div className="applicants-filter-row">
                        <div className="search-box-wide">
                            <Search size={20} />
                            <input type="text" placeholder="Search by facility name, role, or specialization..." />
                        </div>
                        <button className="btn-filter-dark">
                            <Filter size={20} /> Filter
                        </button>
                    </div>
                </div>

                <div className="applicants-table-container">
                    <h3>Applicants Requests</h3>
                    <div className="table-responsive">
                        <table className="applicants-table">
                            <thead>
                                <tr>
                                    <th>Req Status</th>
                                    <th>Staff Name</th>
                                    <th>Facility</th>
                                    <th>Department</th>
                                    <th>Shift Date</th>
                                    <th>Scheduled</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map(app => (
                                    <tr key={app.id} className={app.highlight ? 'row-urgent-bg' : ''}>
                                        <td><span className="req-status-badge">{app.reqStatus}</span></td>
                                        <td><strong>{app.name}</strong></td>
                                        <td>{app.facility}</td>
                                        <td><span className="dept-tag-light">{app.dept}</span></td>
                                        <td>{app.date}</td>
                                        <td>
                                            <div className="scheduled-cell">
                                                <span>{app.scheduled}</span>
                                                <small>8h Shift</small>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`app-status-badge ${app.status.toLowerCase()}`}>
                                                {app.status === 'Pending' && <Clock size={12} />}
                                                {app.status === 'Approved' && <CheckCircle2 size={12} />}
                                                {app.status === 'Rejected' && <XCircle size={12} />}
                                                {app.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-btns-cell">
                                                <button className="btn-table-action view" onClick={() => handleViewDetail(app)}><Eye size={16} /></button>
                                                {app.status === 'Pending' && (
                                                    <>
                                                        <button className="btn-table-action approve"><CheckCircle2 size={16} /></button>
                                                        <button className="btn-table-action reject"><XCircle size={16} /></button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="table-footer-pagination">
                        <div className="rows-per-page">
                            <span>Rows per page</span>
                            <div className="select-box-mini">10</div>
                            <span className="total-count">of 140 rows</span>
                        </div>
                        <div className="pagination">
                            <button className="page-btn"><ChevronsLeft size={18} /></button>
                            <button className="page-btn"><ChevronLeft size={18} /></button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="page-dots">...</span>
                            <button className="page-btn">10</button>
                            <button className="page-btn"><ChevronRight size={18} /></button>
                            <button className="page-btn"><ChevronsRight size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Applicant Detail Modal */}
            {isDetailModalOpen && (
                <div className="modal-overlay">
                    <div className="applicant-detail-modal">
                        <button className="modal-close-btn" onClick={() => setIsDetailModalOpen(false)}>Close</button>
                        
                        <div className="app-profile-header">
                            <div className="profile-avatar-large">
                                <div className="avatar-circle-blue">S</div>
                            </div>
                            <div className="profile-main-info">
                                <h2>Sarah Johnson</h2>
                                <p className="role">RN</p>
                                <div className="rating-row">
                                    <span className="star-icon">⭐</span>
                                    <span>4.9 / 5.0 • 8 years experience</span>
                                </div>
                            </div>
                            <div className="app-status-fixed">
                                <span className="app-status-badge pending">Pending</span>
                            </div>
                        </div>

                        <div className="app-info-boxes">
                            <div className="info-box-light blue">
                                <label>Shift Date & Time</label>
                                <div className="box-content">
                                    <Calendar size={18} />
                                    <span>Feb 10, 2026</span>
                                </div>
                                <p>Day Shift: 7:00 AM - 3:00 PM</p>
                            </div>
                            <div className="info-box-light purple">
                                <label>Department</label>
                                <div className="box-content">
                                    <Building2 size={18} />
                                    <span>Emergency</span>
                                </div>
                                <p>Requested: Feb 9, 2026</p>
                            </div>
                        </div>

                        <div className="certifications-section">
                            <label>Certifications</label>
                            <div className="cert-tags-row">
                                <span className="cert-tag-blue">RN</span>
                                <span className="cert-tag-blue">ACLS</span>
                                <span className="cert-tag-blue">BLS</span>
                                <span className="cert-tag-blue">PALS</span>
                                <span className="cert-tag-blue">Pediatric Certified</span>
                            </div>
                        </div>

                        <div className="professional-message-box">
                            <label>Professional's Message:</label>
                            <div className="message-bubble">
                                <p>I have extensive pediatric experience and am familiar with your facility's protocols. I've worked at Memorial Hospital before and received excellent feedback.</p>
                            </div>
                        </div>

                        <button className="btn-custom-invite-orange" onClick={() => setIsInvitationOpen(true)}>
                            <Mail size={18} /> Custom Shift Invitation
                        </button>

                        <div className="evaluation-actions">
                            <button className="btn-accept-green"><CheckCircle2 size={18} /> Accept Request</button>
                            <button className="btn-reject-outline"><XCircle size={18} /> Reject</button>
                            <button className="btn-contact-simple"><Mail size={18} /> Contact</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Invitation Modal */}
            {isInvitationOpen && (
                <div className="modal-overlay">
                    <div className="custom-invitation-modal">
                        <header className="invitation-header">
                            <div>
                                <h2>Custom Shift Invitation</h2>
                                <p>Send custom shift invitation to the professional.</p>
                            </div>
                            <button className="inv-close" onClick={() => setIsInvitationOpen(false)}><XCircle size={24} /></button>
                        </header>

                        <div className="invitation-form">
                            <div className="form-group">
                                <label>Shift Date *</label>
                                <div className="inv-input-box">
                                    <Calendar size={18} />
                                    <span>Tuesday, February 10, 2026</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Department *</label>
                                <select className="inv-select">
                                    <option>Emergency Department</option>
                                </select>
                            </div>
                            <div className="form-group">
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

                            <div className="form-group">
                                <label>Special Note</label>
                                <textarea className="inv-textarea" placeholder="Any additional information or special circumstances..."></textarea>
                            </div>

                            <div className="inv-footer">
                                <button className="btn-inv-cancel" onClick={() => setIsInvitationOpen(false)}>Cancel</button>
                                <button className="btn-inv-send" onClick={handleSendInvitation}>Send Invitation</button>
                            </div>
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

export default ApplicantsManagement;
