import React, { useState } from 'react';
import { 
    Search, 
    Filter, 
    LogOut, 
    Mail, 
    UserPlus, 
    ExternalLink,
    Star,
    X,
    Calendar,
    CheckCircle2,
    Users,
    MapPin,
    Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AssignedProfessionals = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isInvitationOpen, setIsInvitationOpen] = useState(false);
    const [isSuccessOverlayOpen, setIsSuccessOverlayOpen] = useState(false);
    const [selectedPro, setSelectedPro] = useState(null);

    const professionals = [
        {
            id: 1,
            initials: 'S',
            color: '#003366',
            name: 'Sarah Johnson',
            role: 'Registered Nurse',
            location: 'Los Angeles, CA',
            specialization: 'Emergency Care',
            rating: '4.9 / 5.0',
            certs: ['RN', 'ACLS', 'BLS', 'PALS'],
            nextShift: 'Feb 10, 2026 - Day Shift (7:00 AM - 3:00 PM)',
            completed: 3,
            status: 'active',
            reliability: 98,
            satisfaction: 96,
            level: 'Expert'
        },
        {
            id: 2,
            initials: 'M',
            color: '#3b82f6',
            name: 'Amanda David',
            role: 'Licensed Practical Nurse',
            location: 'Los Angeles, CA',
            specialization: 'Medical-Surgical',
            rating: '4.8 / 5.0',
            certs: ['LPN', 'BLS', 'IV Therapy'],
            nextShift: 'Feb 9, 2026 - Night Shift (11:00 PM - 7:00 AM)',
            completed: 94,
            status: 'active',
            reliability: 95,
            satisfaction: 92,
            level: 'Advanced'
        },
        {
            id: 3,
            initials: 'E',
            color: '#003366',
            name: 'Emily Davis',
            role: 'Certified Nursing Assistant',
            location: 'Los Angeles, CA',
            specialization: 'Geriatric Care',
            rating: '4.7 / 5.0',
            certs: ['CNA', 'BLS', 'Dementia Care'],
            nextShift: 'Feb 10, 2026 - Day Shift (7:00 AM - 3:00 PM)',
            completed: 156,
            status: 'working',
            reliability: 99,
            satisfaction: 98,
            level: 'Expert'
        }
    ];

    const showInviteSuccess = () => {
        setIsInvitationOpen(false);
        setIsSuccessOverlayOpen(true);
        setTimeout(() => setIsSuccessOverlayOpen(false), 2000);
    };

    const handleViewDetails = (pro) => {
        setSelectedPro(pro);
        setIsDetailModalOpen(true);
    };

    const handleInvitePro = (pro) => {
        setSelectedPro(pro);
        setIsInvitationOpen(true);
    };

    return (
        <div className="professionals-page">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Assigned Professionals</h1>
                    <p>Manage your facility operations</p>
                </div>
                <div className="header-actions">
                    <button className="exit-portal-btn" onClick={() => navigate('/facility/dashboard')}>
                        <LogOut size={16} /> Exit Portal
                    </button>
                </div>
            </header>

            <div className="professionals-content">
                <div className="section-header-box-v2">
                    <div className="header-text">
                        <h2>Assigned Professionals</h2>
                        <p>Manage and communicate with your healthcare staff</p>
                    </div>
                    <button className="applicants-badge-btn" onClick={() => navigate('/facility/applicants')}>
                        <Users size={18} /> Applicants <span className="badge">3</span>
                    </button>
                </div>

                <div className="search-filter-row-v2">
                    <div className="search-wrapper-wide">
                        <Search size={18} />
                        <input type="text" placeholder="Search by name, role, or specialization..." />
                    </div>
                    <button className="filter-btn-blue">
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="tabs-selection-row">
                    <button 
                        className={`tab-item ${activeTab === 'All' ? 'active' : ''}`}
                        onClick={() => setActiveTab('All')}
                    >All</button>
                    <button 
                        className={`tab-item ${activeTab === 'Active' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Active')}
                    >Active</button>
                    <button 
                        className={`tab-item ${activeTab === 'Working' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Working')}
                    >Working</button>
                </div>

                <div className="professionals-list-stack">
                    {professionals.map(pro => (
                        <div key={pro.id} className="professional-pro-card">
                            <div className="pro-card-content">
                                <div className="pro-main-section">
                                    <div className="avatar-box" style={{ backgroundColor: pro.color }}>
                                        {pro.initials}
                                    </div>
                                    <div className="info-text">
                                        <div className="name-status-row">
                                            <h3>{pro.name}</h3>
                                            <span className={`status-pill-small ${pro.status}`}>
                                                {pro.status}
                                            </span>
                                        </div>
                                        <p className="role">{pro.role}</p>
                                        <div className="loc-row">
                                            <MapPin size={14} /> {pro.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="pro-stats-section">
                                    <div className="stat-col">
                                        <label>Specialization</label>
                                        <p><strong>{pro.specialization}</strong></p>
                                    </div>
                                    <div className="stat-col">
                                        <label>Rating</label>
                                        <p className="rating-text-pro"><Star size={14} fill="#fbbf24" stroke="#fbbf24" /> <strong>{pro.rating}</strong></p>
                                    </div>
                                    <div className="stat-col">
                                        <label>Certifications</label>
                                        <div className="certs-row-mini">
                                            {pro.certs.slice(0, 3).map((c, i) => <span key={i} className="cert-tag-mini">{c}</span>)}
                                            {pro.certs.length > 3 && <span className="cert-more">+{pro.certs.length - 3}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="pro-shift-section">
                                    <div className="shift-info-box">
                                        <label>Next Shift</label>
                                        <p>{pro.nextShift}</p>
                                    </div>
                                    <div className="shift-info-box">
                                        <label>Shifts Completed</label>
                                        <p><strong>{pro.completed < 10 ? `0${pro.completed}` : pro.completed}</strong></p>
                                    </div>
                                </div>

                                <div className="pro-card-actions">
                                    <button className="btn-pro-action details" onClick={() => handleViewDetails(pro)}><ExternalLink size={16} /> View Details</button>
                                    <button className="btn-pro-action contact"><Mail size={16} /> Contact</button>
                                    <button className="btn-pro-action invite" onClick={() => handleInvitePro(pro)}><UserPlus size={16} /> Invite Professional</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Professional Details Modal */}
            {isDetailModalOpen && selectedPro && (
                <div className="modal-overlay">
                    <div className="professional-details-modal">
                        <button className="modal-close-icon-btn" onClick={() => setIsDetailModalOpen(false)}><X size={20} /></button>
                        
                        <div className="modal-header-section">
                            <h2>Professional Details</h2>
                            <p>Complete profile information for {selectedPro.name}</p>
                        </div>

                        <div className="pro-evaluation-header">
                            <div className="eval-avatar-box" style={{ backgroundColor: selectedPro.color }}>
                                {selectedPro.initials}
                            </div>
                            <div className="eval-main-info">
                                <h3>{selectedPro.name}</h3>
                                <p>{selectedPro.role}</p>
                                <div className="eval-rating">
                                    <Award size={16} color="#fbbf24" />
                                    <span>{selectedPro.rating} Rating</span>
                                </div>
                            </div>
                        </div>

                        <div className="pro-info-grid-v2">
                            <div className="info-box-v2">
                                <label>Specialization</label>
                                <strong>{selectedPro.specialization}</strong>
                            </div>
                            <div className="info-box-v2">
                                <label>Location</label>
                                <strong>{selectedPro.location}</strong>
                            </div>
                            <div className="info-box-v2">
                                <label>Shifts Completed</label>
                                <strong>{selectedPro.completed}</strong>
                            </div>
                            <div className="info-box-v2">
                                <label>Status</label>
                                <span className={`status-tag-v2 ${selectedPro.status}`}>{selectedPro.status}</span>
                            </div>
                        </div>

                        <div className="certs-section-details">
                            <label>Certifications & Licenses</label>
                            <div className="certs-list-details">
                                {selectedPro.certs.map((c, i) => <span key={i} className="cert-badge-details">{c}</span>)}
                            </div>
                        </div>

                        <div className="performance-metrics">
                            <label>Performance Metrics</label>
                            <div className="metric-row">
                                <div className="metric-info">
                                    <span>Reliability</span>
                                    <span className="perc">{selectedPro.reliability}%</span>
                                </div>
                                <div className="metric-bar-bg">
                                    <div className="metric-bar-fill reliability" style={{ width: `${selectedPro.reliability}%` }}></div>
                                </div>
                            </div>
                            <div className="metric-row">
                                <div className="metric-info">
                                    <span>Patient Satisfaction</span>
                                    <span className="perc">{selectedPro.satisfaction}%</span>
                                </div>
                                <div className="metric-bar-bg">
                                    <div className="metric-bar-fill satisfaction" style={{ width: `${selectedPro.satisfaction}%` }}></div>
                                </div>
                            </div>
                            <div className="skill-level-row">
                                <span>Skill Level</span>
                                <span className="levelExpert">{selectedPro.level}</span>
                            </div>
                            <div className="metric-bar-bg">
                                <div className="metric-bar-fill skill" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div className="next-shift-box-v2">
                            <label>Next Scheduled Shift</label>
                            <div className="shift-content">
                                <span className="blue-text">{selectedPro.nextShift}</span>
                            </div>
                        </div>

                        <div className="modal-footer-v2">
                            <button className="btn-footer-close" onClick={() => setIsDetailModalOpen(false)}>Close</button>
                            <button className="btn-footer-contact">Contact Professional</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Invitation Modal */}
            {isInvitationOpen && selectedPro && (
                <div className="modal-overlay">
                    <div className="custom-invitation-modal">
                        <header className="invitation-header">
                            <div>
                                <h2>Custom Shift Invitation</h2>
                                <p>Send custom shift invitation to the professional.</p>
                            </div>
                            <button className="inv-close" onClick={() => setIsInvitationOpen(false)}><X size={24} /></button>
                        </header>

                        <div className="invitation-form">
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
                                        <select className="inv-field-select"><option>{selectedPro.role}</option></select>
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
                                <button className="btn-inv-cancel" onClick={() => setIsInvitationOpen(false)}>Cancel</button>
                                <button className="btn-inv-send" onClick={showInviteSuccess}>Send Invitation</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isSuccessOverlayOpen && (
                <div className="success-overlay-fixed">
                    <div className="success-card-v2">
                        <div className="check-ring">
                            <CheckCircle2 size={64} color="#003366" />
                        </div>
                        <h3>Shift Invitation Sent.</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssignedProfessionals;
