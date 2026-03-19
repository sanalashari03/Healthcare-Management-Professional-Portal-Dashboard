import React, { useState } from 'react';
import { X, AlertCircle, Clock, FileText, Upload, ChevronDown } from 'lucide-react';

export const RejectTimesheetModal = ({ isOpen, onClose, onConfirm, name }) => {
    const [note, setNote] = useState('');

    if (!isOpen) return null;

    return (
        <div className="hf-modal-overlay">
            <div className="hf-modal-content" style={{ maxWidth: '500px', padding: '32px' }}>
                <div className="hf-modal-header" style={{ marginBottom: '24px' }}>
                    <div style={{ background: '#fef2f2', color: '#ef4444', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                        <AlertCircle size={24} />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', margin: '0 0 8px 0' }}>Reject Timesheet</h2>
                    <p style={{ color: '#64748b', margin: 0 }}>You are rejecting the timesheet for <strong>{name}</strong>. Please provide a reason for the rejection.</p>
                </div>

                <div className="hf-modal-body" style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Rejection Reason / Internal Note</label>
                    <textarea 
                        className="hf-textarea-v3"
                        placeholder="Explain why this timesheet is being rejected..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        style={{ width: '100%', height: '120px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', resize: 'none' }}
                    />
                </div>

                <div className="hf-modal-footer" style={{ display: 'flex', gap: '12px' }}>
                    <button className="hf-btn-secondary" onClick={onClose} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                    <button className="hf-btn-danger" onClick={() => onConfirm(note)} style={{ flex: 2, padding: '14px', borderRadius: '12px', border: 'none', background: '#ef4444', color: 'white', fontWeight: 800, cursor: 'pointer' }}>Confirm Rejection</button>
                </div>
            </div>
        </div>
    );
};

export const DisputeOptionsModal = ({ isOpen, onClose, onConfirm }) => {
    const [selectedReason, setSelectedReason] = useState('');
    const [notes, setNotes] = useState('');

    if (!isOpen) return null;

    const reasons = [
        "Time tracking discrepancy",
        "Incorrect department",
        "Break not taken/recorded",
        "Professional behavior issue",
        "Other"
    ];

    return (
        <div className="hf-modal-overlay">
            <div className="hf-modal-content" style={{ maxWidth: '600px', padding: '32px' }}>
                <div className="hf-modal-header" style={{ marginBottom: '24px', position: 'relative' }}>
                    <button onClick={onClose} style={{ position: 'absolute', right: '-8px', top: '-8px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><X size={20} /></button>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', margin: '0 0 8px 0' }}>Dispute Timesheet</h2>
                    <p style={{ color: '#64748b', margin: 0 }}>Report an issue or discrepancy with this timesheet for further review.</p>
                </div>

                <div className="hf-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: '8px' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Primary Reason</label>
                        <div style={{ position: 'relative' }}>
                            <select 
                                className="hf-select-v3"
                                value={selectedReason}
                                onChange={(e) => setSelectedReason(e.target.value)}
                                style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: 600, appearance: 'none' }}
                            >
                                <option value="">Select a reason...</option>
                                {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                            <ChevronDown size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Actual Clock-In</label>
                            <div style={{ position: 'relative' }}>
                                <Clock size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input type="text" placeholder="e.g. 7:15 AM" style={{ width: '100%', padding: '14px 14px 14px 44px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: 600 }} />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Actual Clock-Out</label>
                            <div style={{ position: 'relative' }}>
                                <Clock size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input type="text" placeholder="e.g. 3:15 PM" style={{ width: '100%', padding: '14px 14px 14px 44px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: 600 }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Detailed Notes</label>
                        <textarea 
                            placeholder="Provide any additional context regarding the dispute..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            style={{ width: '100%', height: '100px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', resize: 'none' }}
                        />
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>Upload Evidence (Optional)</label>
                        <div style={{ border: '2px dashed #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}>
                            <div style={{ background: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', border: '1px solid #e2e8f0' }}>
                                <Upload size={20} style={{ color: '#3b82f6' }} />
                            </div>
                            <strong style={{ display: 'block', fontSize: '0.9rem', color: '#1e293b', marginBottom: '4px' }}>Click to upload or drag and drop</strong>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>PDF, PNG, JPG (Max 5MB)</p>
                        </div>
                    </div>
                </div>

                <div className="hf-modal-footer" style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                    <button className="hf-btn-secondary" onClick={onClose} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                    <button className="hf-btn-primary" onClick={() => onConfirm({ selectedReason, notes })} style={{ flex: 2, padding: '14px', borderRadius: '12px', border: 'none', background: '#003366', color: 'white', fontWeight: 800, cursor: 'pointer' }}>Submit Dispute</button>
                </div>
            </div>
        </div>
    );
};
