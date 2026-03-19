import React from 'react';
import { X } from 'lucide-react';

const ErrorModal = ({ isOpen, onClose, title, message, actionText = "Try Again", onAction }) => {
    if (!isOpen) return null;
    
    const handleAction = () => {
        if (onAction) onAction();
        onClose();
    };

    return (
        <div className="pro-modal-overlay">
            <div className="pro-modal-content premium-confirm-modal animate-in fade-in zoom-in">
                <div className="error-modal-content">
                    <div className="error-x-icon">
                        <X size={40} strokeWidth={3} />
                    </div>
                    <h2 className="!text-slate-800 !text-2xl font-black mb-3">{title}</h2>
                    {message && <p className="text-slate-500 text-sm max-w-[300px] leading-relaxed mx-auto">{message}</p>}
                    
                    <div className="flex flex-col gap-3 w-full mt-8">
                        <button className="quick-action-btn-hf orange !flex-row !h-auto !py-4 !w-full !rounded-2xl shadow-lg shadow-orange-100" onClick={handleAction}>
                            {actionText}
                        </button>
                        <button className="pro-header-exit-btn !w-full !justify-center !py-4 !rounded-2xl !bg-white" onClick={onClose}>
                            Cancel & Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
