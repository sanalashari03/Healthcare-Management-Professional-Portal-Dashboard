import React from 'react';
import { X, Info, Lock } from 'lucide-react';

export const AddBankAccountModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="pro-modal-overlay">
            <div className="pro-modal-content hf-modal-bank p-0 overflow-hidden shadow-2xl relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-8 top-8 text-slate-300 hover:text-slate-500 transition-all z-20"><X size={24}/></button>

                {/* Header Section */}
                <div className="px-10 py-10 border-b border-slate-100 text-left bg-white">
                    <h2 className="text-2xl mb-1 text-[#003366] font-extrabold">Add Bank Account</h2>
                    <p className="text-sm font-bold text-slate-400">Securely add your banking details for direct deposit</p>
                </div>

                {/* Body Section */}
                <div className="p-10 bg-white flex-1 overflow-y-auto scrollbar-thin">
                    {/* Information Box */}
                    <div className="hf-alert-box mb-8 !bg-[#eff6ff] !border-[#dbeafe] flex items-start gap-4 p-6 rounded-2xl">
                        <div className="shrink-0 mt-1">
                            <Info size={22} className="text-[#2563eb]" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-[#1e40af] font-extrabold text-base mb-1">Secure Banking Information</h4>
                            <p className="text-[#3b82f6] font-bold text-xs leading-relaxed">Your banking information is encrypted and stored securely. We use bank-level security to protect your sensitive data.</p>
                        </div>
                    </div>

                    {/* Bank Name and Account Type */}
                    <div className="hf-form-grid-2 mb-6">
                        <div className="hf-input-container">
                            <label className="text-left">Bank Name *</label>
                            <input type="text" className="hf-input-field no-icon" placeholder="e.g., Chase Bank" />
                        </div>
                        <div className="hf-input-container">
                            <label className="text-left">Account Type *</label>
                            <div className="hf-input-wrapper">
                                <select className="hf-input-field no-icon appearance-none">
                                    <option>Select account type</option>
                                    <option>Checking</option>
                                    <option>Savings</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Account Holder Name */}
                    <div className="hf-input-container mb-2">
                        <label className="text-left">Account Holder Name *</label>
                        <input type="text" className="hf-input-field no-icon" placeholder="Full name as it appears on account" />
                    </div>
                    <p className="text-[11px] font-bold text-slate-400 mb-6 text-left">Must match the name on your bank account</p>

                    {/* Account Numbers */}
                    <div className="hf-form-grid-2 mb-6">
                        <div className="hf-input-container">
                            <label className="text-left">Account Number *</label>
                            <div className="hf-input-wrapper">
                                <Lock size={16} />
                                <input type="password" title="Account Number" className="hf-input-field" placeholder="Enter account number" />
                            </div>
                        </div>
                        <div className="hf-input-container">
                            <label className="text-left">Confirm Account Number *</label>
                            <div className="hf-input-wrapper">
                                <Lock size={16} />
                                <input type="password" title="Confirm Account Number" className="hf-input-field" placeholder="Re-enter account number" />
                            </div>
                        </div>
                    </div>

                    {/* Routing and Address */}
                    <div className="hf-form-grid-2 mb-2">
                        <div className="hf-input-container">
                            <label className="text-left">Routing Number *</label>
                            <input type="text" className="hf-input-field no-icon" placeholder="9-digit routing number" />
                        </div>
                        <div className="hf-input-container">
                            <label className="text-left">Bank Address</label>
                            <input type="text" className="hf-input-field no-icon" placeholder="City, State" />
                        </div>
                    </div>
                    <p className="text-[11px] font-bold text-slate-400 mb-6 text-left">9-digit number found on your check</p>

                    {/* Checkbox */}
                    <div className="flex items-center gap-3 mb-4">
                        <input type="checkbox" id="primary-deposit" className="w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                        <label htmlFor="primary-deposit" className="text-sm font-bold text-slate-500 cursor-pointer">Set as primary account for direct deposit</label>
                    </div>

                    <hr className="hf-bank-modal-line" />

                    <div className="flex justify-end gap-3 pt-6 border-t border-slate-50">
                        <button className="btn-hf-ghost px-10" onClick={onClose}>Cancel</button>
                        <button className="btn-hf-primary px-10 py-4 shadow-lg shadow-orange-100 uppercase font-black text-xs tracking-widest text-white !bg-[#ffb800] !border-none">Save Bank Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EditBankAccountModal = ({ isOpen, onClose, bankData }) => {
    if (!isOpen) return null;

    return (
        <div className="pro-modal-overlay">
            <div className="pro-modal-content hf-modal-bank p-0 overflow-hidden shadow-2xl relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-8 top-8 text-slate-300 hover:text-slate-500 transition-all z-20"><X size={24}/></button>

                {/* Header Section */}
                <div className="px-10 py-10 border-b border-slate-100 text-left bg-white">
                    <h2 className="text-2xl mb-1 text-[#003366] font-extrabold">Edit Bank Account</h2>
                    <p className="text-sm font-bold text-slate-400">Update your banking details for direct deposit</p>
                </div>

                {/* Body Section */}
                <div className="p-10 bg-white overflow-y-auto scrollbar-thin">
                    <div className="hf-modal-grid mb-6 flex gap-6">
                        <div className="hf-input-container flex-1">
                            <label className="text-left">Bank Name *</label>
                            <input type="text" className="hf-input-field no-icon" defaultValue={bankData?.name} placeholder="e.g., Chase Bank" />
                        </div>
                        <div className="hf-input-container flex-1">
                            <label className="text-left">Account Type *</label>
                            <div className="hf-input-wrapper relative">
                                <select className="hf-input-field no-icon appearance-none w-full" defaultValue={bankData?.type}>
                                    <option>Checking Account</option>
                                    <option>Savings Account</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hf-input-container mb-2">
                        <label className="text-left">Account Holder Name *</label>
                        <input type="text" className="hf-input-field no-icon" defaultValue={bankData?.holder} placeholder="Full name as it appears on account" />
                    </div>
                    <p className="text-xs font-bold text-slate-400 mb-8 text-left">Must match the name on your bank account</p>

                    <div className="hf-modal-grid mb-6 flex gap-6">
                        <div className="hf-input-container flex-1">
                            <label className="text-left">Account Number *</label>
                            <div className="hf-input-wrapper relative flex items-center">
                                <Lock size={16} className="absolute left-4 text-slate-300" />
                                <input type="password" title="Account Number" className="hf-input-field pl-12" defaultValue="12345678" placeholder="Enter account number" />
                            </div>
                        </div>
                        <div className="hf-input-container flex-1">
                            <label className="text-left">Confirm Account Number *</label>
                            <div className="hf-input-wrapper relative flex items-center">
                                <Lock size={16} className="absolute left-4 text-slate-300" />
                                <input type="password" title="Confirm Account Number" className="hf-input-field pl-12" defaultValue="12345678" placeholder="Re-enter account number" />
                            </div>
                        </div>
                    </div>

                    <div className="hf-modal-grid mb-2 flex gap-6">
                        <div className="hf-input-container flex-1">
                            <label className="text-left">Routing Number *</label>
                            <input type="text" className="hf-input-field no-icon" defaultValue={bankData?.routing} placeholder="9-digit routing number" />
                        </div>
                        <div className="hf-input-container flex-1">
                            <label className="text-left">Bank Address</label>
                            <input type="text" className="hf-input-field no-icon" defaultValue={bankData?.address} placeholder="City, State" />
                        </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 mb-8 text-left">9-digit number found on your check</p>

                    <div className="flex justify-end gap-3 pt-6 border-t border-slate-50">
                        <button className="btn-hf-ghost px-10" onClick={onClose}>Cancel</button>
                        <button className="btn-hf-primary px-10 py-4 shadow-lg shadow-orange-100 uppercase font-black text-xs tracking-widest text-white !bg-[#ffb800] !border-none">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
