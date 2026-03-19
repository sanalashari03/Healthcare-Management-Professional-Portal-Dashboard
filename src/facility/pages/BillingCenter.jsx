import React from 'react';
import { 
    ArrowLeft, 
    LogOut, 
    ShieldCheck, 
    Info, 
    ChevronDown,
    Building2,
    Database,
    Phone,
    Mail,
    UserCircle
} from 'lucide-react';

const BillingCenter = () => {
    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleProcessPayment = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="billing-page">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Billing Center</h1>
                    <p>Payment details to make payments for professionals</p>
                </div>
                <div className="header-actions">
                    <button className="go-back-btn" onClick={() => window.history.back()}><ArrowLeft size={16} /> Go Back</button>
                </div>
            </header>

            <div className="billing-content activity-section">
                <div className="billing-pro-header-dark">
                    <div className="pro-profile-box">
                        <div className="pro-avatar-large">SJ</div>
                        <div className="pro-main-meta">
                            <h2>Sarah Johnson</h2>
                            <p>Registered Nurse (RN) • License: RN-CA-123456</p>
                        </div>
                    </div>
                    <div className="billing-period-grid">
                        <div className="period-box">
                            <label>INVOICE NUMBER</label>
                            <strong>INV-2026-002</strong>
                        </div>
                        <div className="period-box">
                            <label>WORK PERIOD</label>
                            <strong>Feb 1-7, 2026</strong>
                        </div>
                    </div>
                </div>

                <div className="billing-layout-grid">
                    <div className="billing-main-form-area">
                        <div className="account-verification-box-v2">
                            <div className="v-header">
                                <div className="v-title">
                                    <ShieldCheck size={20} color="#10b981" />
                                    <h3>EDM Solutions Account</h3>
                                </div>
                                <span className="verified-badge">VERIFIED</span>
                            </div>
                            
                            <div className="v-details-grid">
                                <div className="v-item"><label>Bank Name:</label><span>Chase Bank</span></div>
                                <div className="v-item"><label>Account Type:</label><span>Checking</span></div>
                                <div className="v-item"><label>Account Number:</label><span>******5678</span></div>
                                <div className="v-item"><label>Routing Number:</label><span>021000021</span></div>
                                <div className="v-item"><label>Account Holder:</label><span>EDM Solutions</span></div>
                            </div>
                        </div>

                        <div className="billing-alert-info">
                            <Info size={18} />
                            <p>Payment will be sent directly to the professional's verified bank account via ACH transfer. Processing typically takes 1-2 business days.</p>
                        </div>

                        <form className="payment-information-form-v2" onSubmit={handleProcessPayment}>
                            <h2 className="form-main-title">Facility Payment Information</h2>
                            <p>Enter your facility's payment details</p>

                            <div className="form-section-v2">
                                <div className="s-header"><Building2 size={18} /> <h3>Facility Details</h3></div>
                                <div className="s-grid">
                                    <div className="s-field"><label>Facility Name *</label><input type="text" defaultValue="Memorial Hospital" /></div>
                                    <div className="s-field"><label>Tax ID / EIN *</label><input type="text" placeholder="XX-XXXXXXXX" /></div>
                                </div>
                            </div>

                            <div className="form-section-v2">
                                <div className="s-header"><Database size={18} /> <h3>Payment Source Account</h3></div>
                                <div className="s-grid">
                                    <div className="s-field"><label>Bank Name *</label><input type="text" placeholder="e.g. Bank of America" /></div>
                                    <div className="s-field">
                                        <label>Account Type *</label>
                                        <select className="s-select">
                                            <option>Select account type</option>
                                            <option>Checking</option>
                                            <option>Savings</option>
                                        </select>
                                    </div>
                                    <div className="s-field">
                                        <label>Account Number *</label>
                                        <input type="password" placeholder="Enter account number" />
                                        <span className="h">Your facility's bank account</span>
                                    </div>
                                    <div className="s-field"><label>Routing Number *</label><input type="text" placeholder="9-digit routing number" /></div>
                                    <div className="s-field full"><label>Account Holder Name *</label><input type="text" placeholder="Name as it appears on account" /></div>
                                </div>
                            </div>

                            <div className="form-section-v2">
                                <div className="s-header"><UserCircle size={18} /> <h3>Authorized Person</h3></div>
                                <div className="s-grid">
                                    <div className="s-field"><label>Full Name *</label><input type="text" placeholder="Authorized person's name" /></div>
                                    <div className="s-field"><label>Title/Position *</label><input type="text" placeholder="e.g. Finance Director" /></div>
                                    <div className="s-field"><label>Email Address *</label><input type="email" placeholder="email@facility.com" /></div>
                                    <div className="s-field"><label>Phone Number *</label><input type="text" placeholder="(XXX) XXX-XXXX" /></div>
                                </div>
                            </div>

                            <div className="s-field full"><label>Payment Notes (Optional)</label><textarea placeholder="e.g. Reference number or additional notes"></textarea></div>

                            <div className="form-footer-v2">
                                <button type="button" className="btn-cancel-v2">Cancel</button>
                                <button type="submit" className="btn-process-v2">Process Payment</button>
                            </div>
                        </form>
                    </div>

                    <div className="billing-sidebar-summary">
                        <div className="payment-summary-card">
                            <h3>Payment Summary</h3>
                            <div className="summary-list">
                                <div className="s-row">
                                    <label>Regular Hours (40 hrs @ $45/hr):</label>
                                    <strong>$1,800.00</strong>
                                </div>
                                <div className="s-row">
                                    <label>Overtime (8 hrs @ $67.50/hr):</label>
                                    <strong>$540.00</strong>
                                </div>
                                <div className="s-row deduction">
                                    <label>Breaks Deduction:</label>
                                    <strong>-$150.00</strong>
                                </div>
                                <div className="divider" />
                                <div className="s-row subtotal">
                                    <label>Subtotal:</label>
                                    <strong>$2,190.00</strong>
                                </div>
                                <div className="s-row">
                                    <label>Platform Fee (3%):</label>
                                    <strong>$65.70</strong>
                                </div>
                                <div className="fees-highlight-box">
                                    <div className="f-row"><span>ACH Processing Fee:</span><strong>$0.50</strong></div>
                                    <div className="f-row"><span>Service Fee:</span><strong>$114.30</strong></div>
                                </div>
                                <div className="divider" />
                                <div className="s-row total">
                                    <label>Total Payment:</label>
                                    <span className="total-val">$2,370.00</span>
                                </div>
                            </div>

                            <div className="payment-details-footer">
                                <h4>Payment Details:</h4>
                                <ul>
                                    <li>Professional receives: $2,190.00</li>
                                    <li>Processing time: 1-2 business days</li>
                                    <li>Payment method: ACH Transfer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Overlay */}
            {showSuccess && (
                <div className="success-overlay-fixed">
                    <div className="success-modal-content animated zoomIn">
                        <div className="success-check-circle">
                            <ShieldCheck size={64} className="check-icon" />
                        </div>
                        <h2>Payment Processed Successfully</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

const DollarIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);

const FileIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
);

const CalendarIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

export default BillingCenter;
