import React, { useState } from 'react';
import { 
    LogOut, 
    Building2, 
    MapPin, 
    Phone, 
    Mail, 
    Globe, 
    Lock, 
    X,
    CheckCircle2,
    CheckCircle
} from 'lucide-react';

const FacilityProfile = () => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setShowChangePassword(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="profile-page">
            {showChangePassword && (
                <ChangePasswordModal 
                    onClose={() => setShowChangePassword(false)} 
                    onConfirm={handlePasswordChange}
                />
            )}

            {showSuccess && <SuccessOverlay />}

            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Facility Profile</h1>
                    <p>Manage your facility operations</p>
                </div>
                <div className="header-actions">
                    <button className="exit-portal-btn"><LogOut size={16} /> Exit Portal</button>
                </div>
            </header>

            <div className="profile-content">
                <div className="profile-main-box">
                    <div className="box-header-row">
                        <div className="text-col">
                            <h2>Facility Profile</h2>
                            <p>Manage your facility information and settings</p>
                        </div>
                        <button className="change-pass-btn" onClick={() => setShowChangePassword(true)}>Change Password</button>
                    </div>

                    <div className="profile-form-container">
                        <div className="facility-identity">
                            <div className="brand-logo-large">
                                <Building2 size={32} color="#003366" />
                            </div>
                            <div className="identity-text">
                                <h3>Memorial Hospital</h3>
                                <p>Healthcare Facility</p>
                            </div>
                        </div>

                        <form className="main-profile-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Facility Name *</label>
                                    <input type="text" defaultValue="Memorial Hospital" />
                                </div>
                                <div className="form-group">
                                    <label>Facility Type *</label>
                                    <input type="text" defaultValue="General Hospital" />
                                </div>
                                
                                <div className="form-group full-width">
                                    <label>Address *</label>
                                    <div className="input-with-icon">
                                        <MapPin size={18} />
                                        <input type="text" defaultValue="1234 Medical Center Drive" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>City *</label>
                                    <input type="text" defaultValue="Los Angeles" />
                                </div>
                                <div className="form-group">
                                    <label>State *</label>
                                    <input type="text" defaultValue="California" />
                                </div>
                                <div className="form-group">
                                    <label>ZIP Code *</label>
                                    <input type="text" defaultValue="90001" />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number *</label>
                                    <div className="input-with-icon">
                                        <Phone size={18} />
                                        <input type="text" defaultValue="(555) 123-4567" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <div className="input-with-icon">
                                        <Mail size={18} />
                                        <input type="email" defaultValue="contact@memorialhospital.com" />
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label>Website</label>
                                    <div className="input-with-icon">
                                        <Globe size={18} />
                                        <input type="text" defaultValue="www.memorialhospital.com" />
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label>Facility Description</label>
                                    <textarea rows="6"></textarea>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-save-changes">Save Changes</button>
                                <button type="button" className="btn-cancel-profile">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="billing-info-box">
                    <h3>Billing Information</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Billing Contact Name</label>
                            <input type="text" defaultValue="John Smith" />
                        </div>
                        <div className="form-group">
                            <label>Billing Email</label>
                            <input type="email" defaultValue="billing@memorialhospital.com" />
                        </div>
                    </div>
                    <button className="btn-update-billing">Update Billing Info</button>
                </div>
            </div>
        </div>
    );
};

const ChangePasswordModal = ({ onClose, onConfirm }) => {
    return (
        <div className="modal-overlay">
            <div className="change-password-modal">
                <div className="modal-top-icon">
                    <div className="bell-circle">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#facc15"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    </div>
                </div>
                
                <div className="modal-header-centered">
                    <h2>Notification</h2>
                    <p className="subtitle">Are you sure you want to change password?</p>
                </div>

                <form className="change-pass-form" onSubmit={onConfirm}>
                    <div className="form-group">
                        <label>Enter Old Password*</label>
                        <input type="password" placeholder="Type your previous password." />
                    </div>
                    <div className="form-group">
                        <label>New Password*</label>
                        <input type="password" placeholder="Type new password." />
                    </div>
                    <div className="form-group">
                        <label>Confirm New Password*</label>
                        <input type="password" placeholder="Type new password." />
                    </div>

                    <div className="modal-actions-grid">
                        <button type="button" className="btn-cancel-modal" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-confirm-modal">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SuccessOverlay = () => (
    <div className="success-overlay-fixed">
        <div className="success-card">
            <div className="success-icon-animated">
                <div className="check-outer">
                    <CheckCircle2 size={48} color="#003366" />
                </div>
            </div>
            <h3>Password Successfully Changed</h3>
        </div>
    </div>
);

export default FacilityProfile;
