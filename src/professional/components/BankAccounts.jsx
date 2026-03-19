import React, { useState } from 'react';
import { CreditCard, Plus, Landmark } from 'lucide-react';
import { AddBankAccountModal, EditBankAccountModal } from './BankAccountsModals';

const BankAccounts = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const accounts = [
        {
            id: 1,
            name: "Chase Bank",
            type: "Checking Account",
            holder: "Sarah Johnson",
            number: "••••••5678",
            routing: "021000021",
            address: "New York, NY",
            isPrimary: true
        },
        {
            id: 2,
            name: "Bank of America",
            type: "Savings Account",
            holder: "Sarah Johnson",
            number: "••••••9012",
            routing: "026009593",
            address: "Los Angeles, CA",
            isPrimary: false
        }
    ];

    const handleEditClick = (acc) => {
        setEditData(acc);
        setIsEditOpen(true);
    };

    return (
        <div className="hf-bank-section text-left">
            <div className="flex justify-between items-center mb-8">
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#003366', margin: '0 0 4px 0' }}>My Bank Accounts</h2>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>View and manage your saved bank accounts</p>
                </div>
                <button 
                    onClick={() => setIsAddOpen(true)}
                    style={{ 
                        padding: '0.875rem 2.5rem', 
                        background: '#f59e0b', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '12px', 
                        fontSize: '11px', 
                        fontWeight: 900, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.1em', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.2)',
                        transition: 'all 0.2s'
                    }}
                >
                    <Plus size={18} /> Add Bank Account
                </button>
            </div>

            <div className="flex flex-col gap-6">
                {accounts.map(acc => (
                    <div key={acc.id} className={`hf-bank-card ${acc.isPrimary ? 'primary !border-[#10b981] !border-2' : ''} !rounded-2xl !p-10 shadow-sm`}>
                        {acc.isPrimary && <span className="hf-primary-label !bg-[#10b981] !right-10 !top-10">PRIMARY</span>}
                        
                        <div className="hf-bank-card-header !mb-10">
                            <div className="hf-bank-icon-box !bg-[#003366] !rounded-xl">
                                <Landmark size={24} />
                            </div>
                            <div className="hf-bank-card-title">
                                <h4 className="!text-lg !text-[#003366] !font-black">{acc.name}</h4>
                                <p className="!text-slate-400 !font-bold">{acc.type}</p>
                            </div>
                        </div>

                        <div className="hf-bank-data-grid !grid-cols-2 !gap-x-20 !gap-y-8 !mb-10">
                            <div className="hf-bank-data-cell">
                                <label className="!text-[10px] !text-slate-400 !font-black !uppercase !tracking-widest !mb-2">Account Holder Name</label>
                                <span className="!text-sm !text-[#1e293b] !font-bold">{acc.holder}</span>
                            </div>
                            <div className="hf-bank-data-cell">
                                <label className="!text-[10px] !text-slate-400 !font-black !uppercase !tracking-widest !mb-2">Account Number</label>
                                <span className="!text-sm !text-[#1e293b] !font-bold">{acc.number}</span>
                            </div>
                            <div className="hf-bank-data-cell">
                                <label className="!text-[10px] !text-slate-400 !font-black !uppercase !tracking-widest !mb-2">Routing Number</label>
                                <span className="!text-sm !text-[#1e293b] !font-bold">{acc.routing}</span>
                            </div>
                            <div className="hf-bank-data-cell">
                                <label className="!text-[10px] !text-slate-400 !font-black !uppercase !tracking-widest !mb-2">Bank Address</label>
                                <span className="!text-sm !text-[#1e293b] !font-bold">{acc.address}</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8 border-t border-slate-50">
                            <button className="pro-header-exit-btn !px-8 !py-3 !h-auto !text-[11px] font-black uppercase tracking-widest !bg-white !border-slate-100 !text-slate-500 hover:!bg-slate-50" onClick={() => handleEditClick(acc)}>
                                Edit
                            </button>
                            {!acc.isPrimary && (
                                <>
                                    <button className="pro-header-exit-btn !px-8 !py-3 !h-auto !text-[11px] font-black uppercase tracking-widest !bg-white !border-[#ffb800] !text-[#ffb800] hover:!bg-orange-50">Set as Primary</button>
                                    <button className="pro-header-exit-btn !px-8 !py-3 !h-auto !text-[11px] font-black uppercase tracking-widest !bg-white !border-red-100 !text-red-500 hover:!bg-red-50">Remove</button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <AddBankAccountModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
            <EditBankAccountModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} bankData={editData} />
        </div>
    );
};

export default BankAccounts;
