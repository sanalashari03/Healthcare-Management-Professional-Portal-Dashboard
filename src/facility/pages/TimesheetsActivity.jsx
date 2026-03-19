import React, { useState } from 'react';
import { 
    Search, 
    Filter, 
    CheckCircle, 
    XCircle, 
    Clock, 
    Calendar,
    ArrowLeft,
    AlertCircle,
    Info,
    ArrowRight,
    Edit3,
    Mail,
    ChevronDown,
    ExternalLink,
    MessageCircle
} from 'lucide-react';
import '../styles/FacilityPortal.css';
import { RejectTimesheetModal, DisputeOptionsModal } from '../components/TimesheetModals';

const ShiftActivityCard = ({ state, name = "Sarah Johnson", role = "Registered Nurse" }) => {
    const [showOverride, setShowOverride] = useState(false);

    const [showReject, setShowReject] = useState(false);
    const [showDispute, setShowDispute] = useState(false);

    // Render Status Pill
    const renderStatusPill = () => {
        if (state === 'expired' || state === 'override') return <span className="hf-status-tag admin-rejected" style={{ fontSize: '0.75rem', padding: '4px 12px' }}>Clock In Error</span>;
        if (state === 'awaiting-timesheet') return <span className="hf-status-tag admin-rejected" style={{ backgroundColor: '#f3e8ff', color: '#a855f7', fontSize: '0.75rem', padding: '4px 12px' }}>Awaiting Timesheet</span>;
        if (state === 'window-open') return <span className="hf-status-tag submitted-for-review" style={{ backgroundColor: '#fff7ed', color: '#f97316', fontSize: '0.75rem', padding: '4px 12px' }}>Upcoming</span>;
        return <span className="hf-status-tag submitted-for-review" style={{ fontSize: '0.75rem', padding: '4px 12px' }}>Active</span>;
    };

    return (
        <div className="hf-table-wrapper" style={{ padding: '32px', marginBottom: '32px', border: '1px solid #e2e8f0', borderRadius: '32px' }}>
            <div className="hf-detail-header-v3" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="title-stack">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', margin: '0 0 4px 0' }}>{name}</h3>
                    <p style={{ color: '#64748b', fontWeight: 600, margin: 0 }}>{role}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>
                        <Calendar size={14} /> Feb 10, 2026 • Day Shift
                    </div>
                </div>
                {renderStatusPill()}
            </div>

            {/* Expired Alert */}
            {(state === 'expired' && !showOverride) && (
                <div className="hf-discrepancy-box" style={{ marginBottom: '24px', padding: '24px', border: '1px solid #f87171', background: '#fef2f2', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <AlertCircle size={20} style={{ color: '#ef4444' }} />
                        <div>
                            <strong style={{ color: '#b91c1c', display: 'block', marginBottom: '4px' }}>Clock Window Expired -- Professional Did Not Clock In</strong>
                            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                                The clock-in window for this shift was <strong>6:45 AM - 7:15 AM</strong>. The professional did not clock in during this period. Current time is <strong>8:30 AM</strong>. A <strong>manual clock-in-override</strong> is required if the professional is present and working.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* Window Open Alert */}
            {state === 'window-open' && (
                <div className="hf-discrepancy-box" style={{ marginBottom: '24px', padding: '24px', border: '1px solid #fdba74', background: '#fff7ed', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Clock size={20} style={{ color: '#f97316' }} />
                        <div>
                            <strong style={{ color: '#ea580c', display: 'block', marginBottom: '4px' }}>Clock-In Window Open</strong>
                            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                                The professional can clock in starting at <strong>6:45 AM</strong> (15 minutes before shift start). Shift starts in <strong>2h 15m</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Live Tracker Banner */}
            {state === 'live' && (
                <div className="hf-total-footer-v3" style={{ background: '#003366', color: 'white', marginBottom: '24px', padding: '24px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Clock size={32} />
                        <div>
                            <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Time on Shift (Facility View)</label>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>05:23:41</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Clocked in 6:45 AM - Live tracking</div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Elapsed Billable</label>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>5h 0m</div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Break excluded: 23 min</div>
                    </div>
                </div>
            )}

            {/* Completed Banner */}
            {state === 'completed' && (
                <div className="hf-total-footer-v3" style={{ background: '#003366', color: 'white', marginBottom: '24px', padding: '24px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Clock size={32} />
                        <div>
                            <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Time on Shift (Facility View)</label>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>Completed</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Clocked in 6:45 AM - Clocked out 3:02 PM</div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Elapsed Billable</label>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>5h 0m</div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Break excluded: 23 min</div>
                    </div>
                </div>
            )}

            {/* Information Grid */}
            <div className="hf-info-tiles-v3" style={{ marginBottom: '24px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div className="hf-tile-v3 blue" style={{ background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '16px', padding: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Department & Scheduled Time</label>
                    <strong style={{ display: 'block', marginBottom: '4px', fontSize: '1.1rem', color: '#1e293b' }}>Emergency Department</strong>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Scheduled: 7:00 AM - 3:00 PM (8h)</span>
                </div>
                <div className="hf-tile-v3 green" style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '16px', padding: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Hourly Rate</label>
                    <div className="hf-hourly-rate-v3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="hf-hr-val" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>$40</span>
                        <span className="hf-hr-unit" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>/hour</span>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Est. Total: $380.00</span>
                </div>
            </div>

            {/* Timelines */}
            <div style={{ marginBottom: '32px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>Clock-In</label>
                
                {state === 'expired' && !showOverride && (
                    <div className="hf-timeline-entry" style={{ border: '1px solid #fee2e2', background: '#fffafa', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                        <div className="entry-icon-box" style={{ background: '#fee2e2', color: '#ef4444', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyCommand: 'center', justifyContent: 'center' }}><XCircle size={20} /></div>
                        <div className="entry-content" style={{ flex: 1 }}>
                            <strong style={{ display: 'block', fontSize: '1rem', color: '#ef4444', marginBottom: '2px' }}>Clock-In Time Expired</strong>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>Clock window expired at 7:15 AM -- No clock-in recorded</p>
                        </div>
                        <span className="hf-status-tag admin-rejected" style={{ fontSize: '0.75rem', borderRadius: '100px', fontWeight: 800, padding: '8px 16px' }}>Window Expired</span>
                    </div>
                )}

                {showOverride && (
                    <div className="hf-timeline-entry" style={{ border: '1px solid #fee2e2', display: 'block', padding: '24px', borderRadius: '16px', background: '#fffafa', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', gap: '12px', color: '#ef4444', fontWeight: 800, marginBottom: '16px', alignItems: 'center' }}>
                            <XCircle size={20} /> Facility Clock-In Override
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px', margin: 0 }}>
                            Confirm or adjust the professional's submitted clock-out time. This will be recorded as the official clock-in time for this shift.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', marginTop: '16px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Professional Submitted</label>
                                <input type="text" className="hf-pill-input" defaultValue="07:30 PM" style={{ width: '100%', padding: '14px 20px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', fontWeight: 700 }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Scheduled Clock-In Time</label>
                                <div className="hf-pill-input" style={{ width: '100%', padding: '14px 20px', background: '#f1f5f9', color: '#94a3b8', border: '1px solid #e2e8f0', borderRadius: '12px', fontWeight: 700 }}>6:45 AM - 7:15 AM</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="hf-status-tag submitted-for-review" style={{ border: 'none', cursor: 'pointer', padding: '12px 24px', borderRadius: '100px', fontWeight: 800, background: '#dcfce7', color: '#15803d' }} onClick={() => setShowOverride(false)}>Approved & Set Clock-In</button>
                            <button className="hf-status-tag" style={{ border: '1px solid #e2e8f0', background: 'white', color: '#475569', cursor: 'pointer', padding: '12px 24px', borderRadius: '100px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}><Edit3 size={14} /> Adjust Time</button>
                        </div>
                    </div>
                )}

                {(state === 'live' || state === 'completed') && (
                    <>
                        <div className="hf-timeline-entry" style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                            <div className="entry-icon-box" style={{ background: '#dcfce7', color: '#10b981', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={20} /></div>
                            <div className="entry-content" style={{ flex: 1 }}>
                                <strong style={{ display: 'block', fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Clock-In Time</strong>
                                <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Clocked in at 6:58 AM - Attestation confirmed</p>
                            </div>
                            <span className="entry-badge" style={{ background: '#dcfce7', color: '#15803d', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <CheckCircle size={12} /> Clocked In
                            </span>
                        </div>
                        <div className="hf-timeline-entry" style={{ background: '#f0fdf4', border: '1px solid #dcfce7', marginTop: '-8px', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                            <div className="entry-icon-box" style={{ background: '#dcfce7', color: '#10b981', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={20} /></div>
                            <div className="entry-content" style={{ flex: 1 }}>
                                <strong style={{ display: 'block', fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Attestation Recorded</strong>
                                <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Attested at 6:58 AM</p>
                            </div>
                            <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.85rem' }}>Confirmed <span style={{ marginLeft: '8px' }}>6:58 AM</span></div>
                        </div>
                    </>
                )}
            </div>

            {/* Clock Out */}
            <div style={{ marginBottom: '32px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>Clock-Out</label>
                
                {state === 'completed' ? (
                    <>
                        <div className="hf-timeline-entry" style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                            <div className="entry-icon-box" style={{ background: '#dcfce7', color: '#10b981', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={20} /></div>
                            <div className="entry-content" style={{ flex: 1 }}>
                                <strong style={{ display: 'block', fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Clock-Out Time</strong>
                                <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Clocked in at 3:02 PM - Attestation confirmed</p>
                            </div>
                            <span className="entry-badge" style={{ background: '#dcfce7', color: '#15803d', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <CheckCircle size={12} /> Clocked Out
                            </span>
                        </div>
                        <div className="hf-timeline-entry" style={{ background: '#f0fdf4', border: '1px solid #dcfce7', marginTop: '-8px', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                            <div className="entry-icon-box" style={{ background: '#dcfce7', color: '#10b981', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={20} /></div>
                            <div className="entry-content" style={{ flex: 1 }}>
                                <strong style={{ display: 'block', fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Attestation Recorded</strong>
                                <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Attested at 3:02 PM</p>
                            </div>
                            <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.85rem' }}>Confirmed <span style={{ marginLeft: '8px' }}>3:02 PM</span></div>
                        </div>
                    </>
                ) : (
                    <div className="hf-timeline-entry" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                        <div className="entry-icon-box" style={{ background: '#f8fafc', color: '#64748b', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowRight size={20} /></div>
                        <div className="entry-content" style={{ flex: 1 }}>
                            <strong style={{ display: 'block', fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Clock-Out Time</strong>
                            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Not clocked out yet</p>
                        </div>
                        <span className="entry-badge" style={{ background: '#f1f5f9', color: '#94a3b8', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <CheckCircle size={12} /> Not clocked out yet
                        </span>
                    </div>
                )}
            </div>

            {/* Break Status */}
            {state === 'live' && (
                <div style={{ marginBottom: '32px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>Break Status</label>
                    <div className="hf-timeline-entry" style={{ border: '1px solid #fdba74', background: '#fffaf5', display: 'block', padding: '24px', borderRadius: '16px', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f97316' }}>
                                <Clock size={20} />
                                <div>
                                    <strong style={{ color: '#ea580c', display: 'block' }}>Break In Progress (Facility View)</strong>
                                    <p style={{ color: '#fb923c', fontSize: '0.85rem', margin: 0 }}>Break Started 11:30 AM - Duration tracked</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>00 : 23 : 15</div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Will be excluded from billable hours</div>
                            </div>
                        </div>
                        <div className="hf-timeline-entry" style={{ margin: '0', background: 'white', border: '1.5px solid #ffedd5', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                             <div className="entry-icon-box" style={{ background: '#fff7ed', color: '#fb923c', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={20} /></div>
                             <div className="entry-content" style={{ flex: 1 }}>
                                 <strong style={{ display: 'block', fontSize: '1rem', color: '#fdba74', marginBottom: '2px' }}>End Break</strong>
                                 <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>Awaiting professional to end break</p>
                             </div>
                             <span className="hf-status-tag" style={{ background: '#ffedd5', color: '#ea580c', fontWeight: 800, borderRadius: '100px', padding: '8px 16px' }}>Break Running</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Ready for Approval Banner */}
            {state === 'completed' && (
                <div className="hf-total-footer-v3" style={{ background: '#f0fdf4', border: '1px solid #dcfce7', display: 'block', marginBottom: '32px', padding: '24px', borderRadius: '20px', color: '#15803d' }}>
                    <div style={{ padding: 0 }}>
                        <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>Timesheet Ready for Approval</strong>
                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '24px', opacity: 0.9, margin: '0 0 24px 0' }}>
                            Professional has clocked out and submitted their timesheet. All clock-in/out times and attestations are recorded. Review the shift summary and approve or dispute below.
                        </p>
                        <div style={{ display: 'flex', gap: '48px', marginBottom: '24px' }}>
                            <div>
                                <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>Billable hours</label>
                                <strong style={{ color: '#1e293b', fontSize: '1.25rem' }}>7h 34m</strong>
                            </div>
                            <div>
                                <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>Total Amount</label>
                                <strong style={{ color: '#f97316', fontSize: '1.25rem' }}>$302.67</strong>
                            </div>
                            <div>
                                <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>Submitted at</label>
                                <strong style={{ color: '#1e293b', fontSize: '1.25rem' }}>3:05 PM</strong>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="hf-status-tag submitted-for-review" style={{ border: 'none', cursor: 'pointer', padding: '12px 24px', borderRadius: '100px', fontWeight: 800, background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16}/> Approve Timesheet</button>
                            <button className="hf-status-tag" style={{ border: '1px solid #e2e8f0', background: 'white', color: '#475569', cursor: 'pointer', padding: '12px 24px', borderRadius: '100px', fontWeight: 800 }} onClick={() => setShowDispute(true)}>Dispute / Flag</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Stats Boxes */}
            <div className="hf-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div className="hf-tile-v3" style={{ background: 'white', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Breaks</label>
                    <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>{state === 'completed' ? '0h 30m' : '(1h per week) 6 hours x $25/hr'}</strong>
                </div>
                <div className="hf-tile-v3" style={{ background: state === 'expired' ? '#fff1f2' : 'white', border: state === 'expired' ? '1px solid #fca5a5' : '1px solid #e2e8f0', padding: '16px', borderRadius: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Exception flags</label>
                    <strong style={{ fontSize: '0.9rem', color: state === 'expired' ? '#ef4444' : '#1e293b' }}>{state === 'expired' ? 'Missed Clock-In' : 'None'}</strong>
                </div>
                <div className="hf-tile-v3" style={{ background: 'white', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Total Hours</label>
                    <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>{state === 'completed' ? '7h 34m' : state === 'live' ? '8h' : 'NA'}</strong>
                </div>
                <div className="hf-tile-v3" style={{ background: '#fff7ed', border: '1px solid #ffedd5', padding: '16px', borderRadius: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Total Amount</label>
                    <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>{state === 'completed' ? '$302.67' : state === 'live' ? '$320' : 'NA'}</strong>
                </div>
            </div>

            {/* Bottom Alert/Message */}
            {state === 'expired' && !showOverride && (
                <div style={{ background: '#fff1f2', color: '#b91c1c', padding: '16px 20px', borderRadius: '12px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <AlertCircle size={18} /> <div><strong>Action Required:</strong> Clock window has closed. Use the Manual Override button to record the professional's actual start time if they are on the floor.</div>
                </div>
            )}

            {/* Footer Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
                {state === 'expired' && !showOverride && (
                    <button className="btn-reject-hf" style={{ border: 'none', background: '#ef4444', color: 'white', padding: '12px 24px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setShowOverride(true)}>
                        <Edit3 size={16} /> Manual Clock-In Override
                    </button>
                )}
                <button className="btn-cancel-hf" style={{ width: 'fit-content', padding: '12px 24px', fontSize: '0.9rem', border: '1px solid #e2e8f0', background: 'white', color: '#475569', borderRadius: '12px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setShowReject(true)}>
                    <XCircle size={16} /> Reject (Internal)
                </button>
                <button className="btn-cancel-hf" style={{ width: 'fit-content', padding: '12px 24px', fontSize: '0.9rem', border: '1px solid #e2e8f0', background: 'white', color: '#475569', borderRadius: '12px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={16} /> Contact Professional
                </button>
            </div>

            <RejectTimesheetModal 
                isOpen={showReject} 
                onClose={() => setShowReject(false)} 
                onConfirm={(note) => { console.log('Rejected with note:', note); setShowReject(false); }} 
                name={name}
            />
            <DisputeOptionsModal 
                isOpen={showDispute} 
                onClose={() => setShowDispute(false)} 
                onConfirm={(data) => { console.log('Disputed with data:', data); setShowDispute(false); }} 
            />
        </div>
    );
};

const TimesheetsActivity = () => {
    const [activeTab, setActiveTab] = useState('Active');

    return (
        <div className="timesheets-page hf-layout" style={{ background: '#f8fafc', minHeight: '100vh', padding: '24px' }}>
            <header className="dashboard-header h-fidelity" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="header-info">
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#003366', fontFamily: 'Outfit', margin: '0 0 4px 0' }}>Timesheets Activity</h1>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', margin: 0 }}>View current status of Timesheets</p>
                </div>
                <div className="header-actions">
                    <button className="go-back-btn fancy" onClick={() => window.history.back()} style={{ background: 'white', border: '1px solid #e2e8f0', padding: '10px 24px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#475569', cursor: 'pointer' }}>
                        <ArrowLeft size={16} /> Go Back
                    </button>
                </div>
            </header>

            <div className="hf-table-wrapper" style={{ padding: '32px', marginBottom: '32px', border: '1px solid #e2e8f0', borderRadius: '32px', background: 'white' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                    <div className="hf-search-input" style={{ flex: 1, padding: '14px 24px', background: '#f1f5f9', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Search size={20} style={{ color: '#94a3b8' }} />
                        <input type="text" placeholder="Search by name, role, or specialization..." style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                    </div>
                    <button className="hf-filter-btn" style={{ background: '#003366', color: 'white', border: 'none', borderRadius: '100px', padding: '0 32px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="hf-pill-tabs" style={{ marginBottom: '0', display: 'flex', gap: '4px', background: '#f1f5f9', padding: '6px', borderRadius: '100px', width: 'fit-content' }}>
                    {['All', 'Active', 'Awaiting Timesheet'].map(tab => (
                        <button 
                            key={tab}
                            className={`hf-tab-pill ${activeTab === tab ? 'active' : ''}`}
                            style={{ 
                                padding: '10px 24px', 
                                border: 'none', 
                                borderRadius: '100px', 
                                fontWeight: 700, 
                                cursor: 'pointer',
                                background: activeTab === tab ? 'white' : 'transparent',
                                color: activeTab === tab ? '#1e293b' : '#64748b'
                            }}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="activity-cards-list">
                {activeTab === 'Active' && (
                    <>
                        <ShiftActivityCard state="expired" />
                        <ShiftActivityCard state="live" />
                    </>
                )}
                {activeTab === 'All' && (
                    <>
                        <ShiftActivityCard state="completed" />
                        <ShiftActivityCard state="expired" />
                        <ShiftActivityCard state="live" />
                        <ShiftActivityCard state="window-open" name="David Martinez" role="Registered Nurse" />
                    </>
                )}
                {activeTab === 'Awaiting Timesheet' && (
                    <>
                        <ShiftActivityCard state="awaiting-timesheet" name="Michael Chen" role="Licensed Practical Nurse" />
                    </>
                )}
            </div>
        </div>
    );
};

export default TimesheetsActivity;
