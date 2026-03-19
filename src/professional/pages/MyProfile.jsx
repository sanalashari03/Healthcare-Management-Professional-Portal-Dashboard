import React, { useState } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import BankAccounts from '../components/BankAccounts';
import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Briefcase, 
    Award,
    DollarSign,
    Save,
    MapPinIcon,
    Calendar,
    ChevronDown,
    Building2,
    ShieldCheck
} from 'lucide-react';

const MyProfile = () => {
    const [view, setView] = useState('profile');

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader 
                title="My Profile" 
                subtitle="Manage your professional profile and assignments" 
            />

            <div className="pro-main-content">
                <div className="hf-item-card !p-0 !mb-10 overflow-hidden">
                    <div className="px-12 py-8 border-b border-slate-50 flex justify-between items-center bg-white" style={{ borderRadius: '24px 24px 0 0' }}>
                        <div style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#003366', margin: '0 0 4px 0' }}>My Profile</h2>
                            <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>Manage your professional information and preferences</p>
                        </div>
                        <button 
                            onClick={() => setView(view === 'profile' ? 'banking' : 'profile')}
                            style={{ 
                                padding: '0.875rem 3rem', 
                                background: '#f59e0b', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '12px', 
                                fontSize: '12px', 
                                fontWeight: 900, 
                                textTransform: 'uppercase', 
                                letterSpacing: '0.1em', 
                                cursor: 'pointer',
                                boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)',
                                transition: 'all 0.2s'
                            }}
                        >
                            {view === 'profile' ? '$ Manage Banking' : 'View Profile'}
                        </button>
                    </div>

                    {view === 'profile' && (
                        <div className="p-12">
                            <div className="hf-profile-header-card !bg-slate-50/50 !border-slate-100 !py-12 !mb-12">
                                <div className="pro-avatar-huge">SJ</div>
                                <h2 className="!text-3xl !mb-2">Sarah Johnson</h2>
                                <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Registered Nurse (RN)</p>
                                <span className="shift-badge-hf confirmed !bg-green-100 !text-green-600 !px-4 !py-1.5 font-black uppercase text-[10px] tracking-widest"><ShieldCheck size={12} className="inline mr-1"/> Active</span>
                            </div>

                            <div className="hf-profile-form-grid mb-12">
                                <div className="hf-input-container">
                                    <label>First Name *</label>
                                    <div className="hf-input-wrapper">
                                        <input type="text" className="hf-input-field" defaultValue="Sarah" />
                                    </div>
                                </div>
                                <div className="hf-input-container">
                                    <label>Last Name *</label>
                                    <div className="hf-input-wrapper">
                                        <input type="text" className="hf-input-field" defaultValue="Johnson" />
                                    </div>
                                </div>
                                <div className="hf-input-container">
                                    <label>Email Address *</label>
                                    <div className="hf-input-wrapper">
                                        <Mail size={18} />
                                        <input type="email" className="hf-input-field" defaultValue="sarah.j@email.com" />
                                    </div>
                                </div>
                                <div className="hf-input-container">
                                    <label>Phone Number *</label>
                                    <div className="hf-input-wrapper">
                                        <Phone size={18} />
                                        <input type="text" className="hf-input-field" defaultValue="(555) 123-4567" />
                                    </div>
                                </div>
                                <div className="hf-input-container !col-span-2">
                                    <label>Address *</label>
                                    <div className="hf-input-wrapper">
                                        <MapPin size={18} />
                                        <input type="text" className="hf-input-field" defaultValue="456 Healthcare Ave" />
                                    </div>
                                </div>
                                <div className="hf-input-container">
                                    <label>City *</label>
                                    <input type="text" className="hf-input-field !pl-6" defaultValue="Los Angeles" />
                                </div>
                                <div className="hf-input-container">
                                    <label>State *</label>
                                    <input type="text" className="hf-input-field !pl-6" defaultValue="California" />
                                </div>
                                <div className="hf-input-container">
                                    <label>ZIP Code *</label>
                                    <input type="text" className="hf-input-field !pl-6" defaultValue="90001" />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-8 border-t border-slate-50">
                                <button className="quick-action-btn-hf orange !px-12 !h-auto !py-4 shadow-lg shadow-orange-100 uppercase font-black text-xs tracking-widest">Save Changes</button>
                                <button className="pro-header-exit-btn !px-12 !py-4 font-black text-xs uppercase tracking-widest">Cancel</button>
                            </div>
                        </div>
                    )}

                    {view === 'banking' && (
                        <div className="p-12">
                            <BankAccounts />
                        </div>
                    )}
                </div>

                {view === 'profile' && (
                    <div className="hf-item-card !p-12">
                        <h3 className="!text-2xl !mb-8 text-[#003366]">Professional Information</h3>
                        <div className="hf-profile-form-grid mb-10">
                            <div className="hf-input-container">
                                <label>Professional Role *</label>
                                <div className="hf-input-wrapper">
                                    <select className="hf-input-field !pl-6 appearance-none">
                                        <option>Registered Nurse (RN)</option>
                                    </select>
                                    <ChevronDown size={18} className="absolute right-4" />
                                </div>
                            </div>
                            <div className="hf-input-container">
                                <label>Specialization *</label>
                                <div className="hf-input-wrapper">
                                    <select className="hf-input-field !pl-6 appearance-none">
                                        <option>Emergency Care</option>
                                    </select>
                                    <ChevronDown size={18} className="absolute right-4" />
                                </div>
                            </div>
                            <div className="hf-input-container">
                                <label>Years of Experience *</label>
                                <input type="number" className="hf-input-field !pl-6" defaultValue="7" />
                            </div>
                            <div className="hf-input-container">
                                <label>License Number *</label>
                                <input type="text" className="hf-input-field !pl-6" defaultValue="RN-CA-123456" />
                            </div>
                            <div className="hf-input-container !col-span-2">
                                <label>Professional Bio</label>
                                <textarea className="hf-input-field !pl-6 !h-32 pt-4 resize-none" placeholder="Write a brief professional summary..."></textarea>
                            </div>
                        </div>
                        <button className="quick-action-btn-hf orange !px-12 !h-auto !py-4 shadow-lg shadow-orange-100 uppercase font-black text-xs tracking-widest">Update Professional Info</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
