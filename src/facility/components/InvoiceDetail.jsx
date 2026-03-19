import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    X, 
    Download, 
    CheckCircle, 
    Clock,
    DollarSign
} from 'lucide-react';

const InvoiceDetail = ({ invoice, onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="modal-overlay">
            <div className="invoice-detail-modal">
                <div className="modal-header">
                    <div className="inv-title">
                        <h2>{invoice.id}</h2>
                        <p>January 2026</p>
                    </div>
                    <span className={`status-badge ${invoice.status.toLowerCase()}`}>{invoice.status}</span>
                    <button className="close-btn" onClick={onClose}><X size={24} /></button>
                </div>

                <div className="inv-pro-info-grid">
                    <div className="pro-info-item">
                        <label>Sarah Johnson</label>
                        <p>RN</p>
                    </div>
                    <div className="pro-info-item">
                        <label>Facility</label>
                        <p>St. Mary's Hospital</p>
                    </div>
                    <div className="pro-info-item">
                        <label>Department</label>
                        <p>Emergency</p>
                    </div>
                </div>

                <div className="inv-period-banner">
                    <div className="banner-icon-box">
                        <CalendarIcon size={20} />
                    </div>
                    <div className="banner-text">
                        <strong>Period: {invoice.period}</strong>
                        <p>Day Shift: {invoice.schedule}</p>
                    </div>
                </div>

                <div className="inv-details-section">
                    <h3>Shift Details</h3>
                    <div className="inv-days-scroll-grid">
                        {[
                            { day: 'Feb 10', time: '07:00 - 15:00' },
                            { day: 'Feb 11', time: '07:00 - 15:00' },
                            { day: 'Feb 12', time: '07:00 - 15:00' },
                            { day: 'Feb 13', time: '07:00 - 15:00' },
                            { day: 'Feb 14', time: '07:00 - 15:00' },
                            { day: 'Feb 15', time: '07:00 - 15:00' },
                        ].map((item, i) => (
                            <div key={i} className="inv-day-tile">
                                <span className="day-label">{item.day}</span>
                                <span className="time-val">{item.time}</span>
                            </div>
                        ))}
                        <div className="inv-total-hours-tile">
                            48h
                        </div>
                    </div>
                </div>

                <div className="inv-line-items-section">
                    <h3>Line Items Breakdown</h3>
                    <div className="inv-breakdown-table">
                        <div className="inv-breakdown-row">
                            <div className="item-desc">
                                <h4>RN Services - {invoice.staff}</h4>
                                <p>160 hours × $45/hr</p>
                            </div>
                            <div className="item-price">$1,950</div>
                        </div>
                        <div className="inv-breakdown-row">
                            <div className="item-desc">
                                <h4>Breaks</h4>
                                <p>(1h per week) 6 hours × $25/hr</p>
                            </div>
                            <div className="item-price negative">- $150</div>
                        </div>
                        <div className="inv-breakdown-row">
                            <div className="item-desc">
                                <h4>Overtime</h4>
                                <p>(1h per week) 6 hours × $40/hr</p>
                            </div>
                            <div className="item-price blue">None</div>
                        </div>
                    </div>
                </div>

                <div className="inv-footer-summary">
                    <div className="summary-block highlight-blue">
                        <label>Total Hours</label>
                        <p className="val">48h</p>
                    </div>
                    <div className="summary-block highlight-blue">
                        <label>Hourly Rate</label>
                        <p className="val">$45</p>
                    </div>
                    <div className="summary-block highlight-blue">
                        <label>Total Amount</label>
                        <p className="val">$1800</p>
                    </div>
                </div>

                <div className="modal-footer-actions">
                    <button className="btn-secondary" onClick={onClose}>Close</button>
                    <button className="btn-primary-dark"><Download size={18} /> Download PDF</button>
                    {invoice.status === 'Unpaid' && (
                        <button className="btn-success-green" onClick={() => navigate('/facility/billing')}>
                            <DollarSign size={18} /> Pay Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const CalendarIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

export default InvoiceDetail;
