import React, { useState } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    CheckCircle, 
    AlertCircle, 
    Clock, 
    XCircle, 
    Upload, 
    ShieldCheck, 
    Calendar, 
    Download, 
    ShieldAlert, 
    ArrowLeft 
} from 'lucide-react';
import EmptyState from '../components/EmptyState';
import ErrorModal from '../components/ErrorModal';
import SuccessModal from '../components/SuccessModal';

const MyCredentials = () => {
    const [view, setView] = useState('list'); // 'list' or 'upload'
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorOpen, setIsErrorOpen] = useState(false);

    const stats = [
        { label: 'Approved', count: 1, icon: <CheckCircle size={24} />, color: 'green', bg: '#f0fdf4', text: '#16a34a' },
        { label: 'Expired', count: 1, icon: <AlertCircle size={24} />, color: 'orange', bg: '#fff7ed', text: '#ea580c' },
        { label: 'Pending', count: 1, icon: <Clock size={24} />, color: 'blue', bg: '#eff6ff', text: '#2563eb' },
        { label: 'Rejected', count: 1, icon: <XCircle size={24} />, color: 'purple', bg: '#f5f3ff', text: '#7c3aed' },
    ];

    const credentialsList = [
        { id: 1, title: "PALS Certification", type: "Certification", issueDate: "June 5, 2024", expiryDate: "June 5, 2026", notes: "Valid and current", status: "Pending", icon: <ShieldCheck size={24} /> },
        { id: 2, title: "RN License - California", type: "License", issueDate: "Jan 15, 2023", expiryDate: "Jan 15, 2027", notes: "Verified and approved", status: "Approved", icon: <ShieldCheck size={24} /> },
        { id: 3, title: "ACLS Certification", type: "Certification", issueDate: "March 20, 2024", expiryDate: "March 15, 2026", notes: "Please renew before expiration", status: "Expired", icon: <ShieldCheck size={24} /> },
        { id: 4, title: "PALS Certification", type: "Certification", issueDate: "June 5, 2024", expiryDate: "June 5, 2026", notes: "Valid and current", status: "Rejected", icon: <ShieldCheck size={24} /> }
    ];

    const isEmpty = credentialsList.length === 0;

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader 
                title={view === 'list' ? "My Credentials" : "Profile Settings"} 
                subtitle={view === 'list' ? "Manage and upload your professional credentials" : "Manage your professional information and preferences"} 
            />

            <div className="pro-main-content">
                {view === 'list' ? (
                    <>
                        <div className="section-header">
                            <div>
                                <h2>My Credentials</h2>
                                <p className="small-text muted-text">Manage and upload your professional credentials</p>
                            </div>
                            <div className="flex-layout gap-4">
                                <button className="pro-header-exit-btn" onClick={() => setIsErrorOpen(true)}>
                                    <AlertCircle size={16} /> Demo Error
                                </button>
                                <button className="quick-action-btn-hf orange !flex-row !h-auto !py-2.5 !px-6" onClick={() => setView('upload')}>
                                    <Upload size={16} /> <span>Upload New</span>
                                </button>
                            </div>
                        </div>

                        <div className="pro-stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="hf-stat-card">
                                    <div className="hf-icon-box" style={{ background: stat.bg, color: stat.text }}>
                                        {stat.icon}
                                    </div>
                                    <div className="stat-content">
                                        <h3 className="!text-2xl !mb-0">{isEmpty ? 0 : stat.count}</h3>
                                        <p className="label !text-[12px]">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {isEmpty ? (
                            <div className="empty-state-wrapper">
                                <EmptyState 
                                    icon={ShieldAlert}
                                    title="No Credentials to Display"
                                    description="You haven't uploaded any credentials yet. Start by uploading your licenses or certifications."
                                    actionText="Upload New Credential"
                                    onAction={() => setView('upload')}
                                />
                            </div>
                        ) : (
                            <div className="credentials-list">
                                {credentialsList.map(cred => (
                                    <div key={cred.id} className="hf-item-card">
                                        <div className="flex-layout justify-between items-start mb-6">
                                            <div className="flex-layout gap-4">
                                                <div className="hf-icon-box" style={{ background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>
                                                    {cred.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-slate-800">{cred.title}</h4>
                                                    <p className="small-text muted-text">{cred.type}</p>
                                                </div>
                                            </div>
                                            <span className={`shift-badge-hf ${cred.status.toLowerCase()}`}>
                                                {cred.status}
                                            </span>
                                        </div>

                                        <div className="hf-data-grid">
                                            <div className="hf-data-cell">
                                                <label>Issue Date</label>
                                                <span><Calendar size={13} className="inline mr-1 opacity-60" /> {cred.issueDate}</span>
                                            </div>
                                            <div className="hf-data-cell">
                                                <label>Expiry Date</label>
                                                <span><Calendar size={13} className="inline mr-1 opacity-60" /> {cred.expiryDate}</span>
                                            </div>
                                            <div className="hf-data-cell">
                                                <label>Admin Notes</label>
                                                <span className="italic-text opacity-70">"{cred.notes}"</span>
                                            </div>
                                        </div>

                                        {cred.status === 'Expired' && (
                                            <div className="hf-alert-box mb-6">
                                                <AlertCircle size={18} />
                                                <div>
                                                    <strong>Credential Expired</strong>
                                                    <p>Please renew this credential to maintain your active status and eligibility for shifts.</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex-layout gap-4 pt-4 border-t border-slate-50">
                                            <button className="pro-header-exit-btn !py-2">
                                                <Download size={14} /> <span>Download</span>
                                            </button>
                                            {cred.status === 'Expired' && (
                                                <button className="quick-action-btn-hf orange !flex-row !h-auto !py-2 !px-6" onClick={() => setView('upload')}>
                                                    <Upload size={14} /> <span>Upload Renewal</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="hf-upload-view max-w-4xl mx-auto py-10 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {/* Header Box - Explicit Styles */}
                        <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', marginBottom: '2.5rem', textAlign: 'left', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#003366', margin: '0 0 4px 0' }}>Upload New Credentials</h2>
                            <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>Manage your professional information and preferences</p>
                        </div>

                        <div style={{ background: 'white', border: '1px solid #f1f5f9', borderRadius: '32px', padding: '3rem', textAlign: 'left', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                            {/* Sarah Johnson Profile */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid #f8fafc' }}>
                                <div style={{ width: '80px', height: '80px', background: '#f59e0b', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'white', fontSize: '1.875rem', fontWeight: 900, boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)' }}>
                                    <span style={{ margin: 'auto' }}>SJ</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e293b', margin: '0 0 4px 0' }}>Sarah Johnson</h3>
                                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>Registered Nurse (RN)</p>
                                </div>
                            </div>

                            {/* Form Body */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div className="modal-input-group">
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#475569', marginBottom: '12px', display: 'block' }}>Credential Name*</label>
                                    <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px', fontSize: '14px', fontWeight: 700, color: '#475569', outline: 'none' }} placeholder="e.g - RN License - California" />
                                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginTop: '12px', marginLeft: '4px' }}>Enter the full name of the credential.</p>
                                </div>

                                <div className="modal-input-group">
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#475569', marginBottom: '12px', display: 'block' }}>Issuing Organization*</label>
                                    <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px', fontSize: '14px', fontWeight: 700, color: '#475569', outline: 'none' }} placeholder="e.g - California Board of Registered Nursing" />
                                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginTop: '12px', marginLeft: '4px' }}>Enter the full name of the credential.</p>
                                </div>

                                <div className="modal-input-group">
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#475569', marginBottom: '12px', display: 'block' }}>License/Certification Number</label>
                                    <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px', fontSize: '14px', fontWeight: 700, color: '#475569', outline: 'none' }} placeholder="Enter credential number" />
                                </div>

                                <div className="modal-input-group">
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#475569', marginBottom: '12px', display: 'block' }}>Dates*</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '12px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px', fontSize: '14px', fontWeight: 700, color: '#475569', outline: 'none' }} placeholder="mm/dd/yyyy" />
                                            <Calendar size={18} style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px', fontSize: '14px', fontWeight: 700, color: '#475569', outline: 'none' }} placeholder="mm/dd/yyyy" />
                                            <Calendar size={18} style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginLeft: '4px' }}>Enter the full name of the credential.</p>
                                        <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginLeft: '4px' }}>Enter the full name of the credential.</p>
                                    </div>
                                </div>

                                {/* Upload Area Area- solid border, grey bg */}
                                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    <div style={{ width: '64px', height: '64px', background: '#f59e0b', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'white', marginBottom: '1.5rem', boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)' }}>
                                        <Upload size={28} style={{ margin: 'auto' }} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b', marginBottom: '8px' }}>Upload New Credential</h3>
                                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', marginBottom: '2rem', maxWidth: '400px' }}>Upload licenses, certifications, or vaccination records (PDF, JPG, PNG)</p>
                                    <button style={{ padding: '0.75rem 2.5rem', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '12px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s', boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.1)' }}>
                                        <Upload size={18} /> Choose File
                                    </button>
                                </div>

                                <div className="modal-input-group" style={{ marginTop: '0.5rem' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, color: '#475569', marginBottom: '12px', display: 'block' }}>Additional Notes (Optional)</label>
                                    <input type="text" style={{ width: '100%', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '1.25rem', borderRadius: '16px', fontSize: '14px', fontWeight: 700, color: '#475569', outline: 'none' }} placeholder="Enter credential number" />
                                </div>

                                {/* Page Action Buttons */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', paddingTop: '2rem' }}>
                                    <button 
                                        onClick={() => setView('list')}
                                        style={{ padding: '0.875rem 2.5rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '12px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={() => setIsSuccessModalOpen(true)}
                                        style={{ padding: '0.875rem 3rem', background: '#003366', color: 'white', border: 'none', borderRadius: '12px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 10px 15px -3px rgba(0, 51, 102, 0.2)' }}
                                    >
                                        Confirm Submission
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <SuccessModal 
                isOpen={isSuccessModalOpen} 
                onClose={() => { setIsSuccessModalOpen(false); setView('list'); }} 
                title="Credential Successfully Uploaded"
                message="Your credential has been submitted and is currently pending review by our administration team."
                actionText="Done"
            />
            
            <ErrorModal 
                isOpen={isErrorOpen}
                onClose={() => setIsErrorOpen(false)}
                title="Credential Uploaded Unsuccessful"
                message="Please check your file format and network connection and try again."
                onAction={() => setIsErrorOpen(false)}
                actionText="Try Again"
            />
        </div>
    );
};

export default MyCredentials;
