import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

const DisputeModal = ({ isOpen, onClose }) => {
    const [selectedReason, setSelectedReason] = useState('Clock-in not recorded');

    if (!isOpen) return null;

    const reasons = [
        "Clock-in not recorded",
        "Early departure forced",
        "Overtime not captured",
        "Breaktime deducted incorrectly",
        "System error",
        "Other"
    ];

    return (
        <div className="pro-modal-overlay">
            <div className="pro-modal-content premium-confirm-modal !max-w-2xl text-left">
                <button onClick={onClose} className="absolute right-6 top-6 text-slate-300 hover:text-slate-500 transition-colors z-10"><X size={24}/></button>
                
                <div className="modal-header !p-10 !pb-0">
                    <h2 className="!text-3xl font-black text-slate-800 mb-2">Dispute Time Entry</h2>
                    <p className="small-text muted-text font-black uppercase tracking-widest">Report a discrepancy for Verification</p>
                </div>
                <div className="flex-1 overflow-y-auto scrollbar-thin p-10">
                    <div className="hf-alert-box !bg-red-50 !border-red-100 !text-red-700 !mb-8">
                        <AlertCircle size={20} className="shrink-0" />
                        <div>
                            <strong>System Record Discrepancy</strong>
                            <div className="flex gap-8 mt-2">
                                <div><label className="text-[9px] uppercase font-black opacity-60 block">In</label><span className="font-black">07:00 AM</span></div>
                                <div><label className="text-[9px] uppercase font-black opacity-60 block">Out</label><span className="font-black">03:00 PM</span></div>
                                <div><label className="text-[9px] uppercase font-black opacity-60 block">Total</label><span className="font-black">8.0 hrs</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="modal-input-group">
                            <label className="font-black text-[11px] uppercase tracking-widest text-slate-500 mb-2 block">Actual Clock-In <span className="text-red-500">*</span></label>
                            <input type="text" className="modal-input-box" defaultValue="07:00 AM" />
                        </div>
                        <div className="modal-input-group">
                            <label className="font-black text-[11px] uppercase tracking-widest text-slate-500 mb-2 block">Actual Clock-Out <span className="text-red-500">*</span></label>
                            <input type="text" className="modal-input-box" defaultValue="03:00 PM" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="font-black text-[11px] uppercase tracking-widest text-slate-500 mb-4 block">Select Reason for Dispute <span className="text-red-500">*</span></label>
                        <div className="flex flex-wrap gap-2">
                            {reasons.map(reason => (
                                <button 
                                    key={reason}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border-2 ${selectedReason === reason ? 'bg-orange-50 border-orange-400 text-orange-600 shadow-md shadow-orange-100' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                                    onClick={() => setSelectedReason(reason)}
                                >
                                    {reason}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="modal-input-group mb-8">
                        <label className="font-black text-[11px] uppercase tracking-widest text-slate-500 mb-2 block">Additional Context</label>
                        <textarea className="modal-input-box min-h-[100px] resize-none" placeholder="Provide any details to help our team process this dispute..."></textarea>
                    </div>

                    <div className="flex gap-4">
                        <button className="pro-header-exit-btn !w-full !justify-center !py-4 !rounded-2xl" onClick={onClose}>Discard</button>
                        <button className="quick-action-btn-hf orange !flex-row !h-auto !py-4 !w-full !text-lg !rounded-2xl shadow-lg shadow-orange-100">
                             Submit Dispute Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisputeModal;
