import React from 'react';
import { Check, X } from 'lucide-react';

const SuccessModal = ({ 
    isOpen, 
    onClose, 
    title = "Successfully Submitted", 
    message = "Your request has been processed successfully.", 
    actionText = "Done" 
}) => {
    if (!isOpen) return null;

    return (
        <div 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                backgroundColor: 'rgba(15, 23, 42, 0.65)', 
                backdropFilter: 'blur(8px)', 
                zIndex: 99999, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '20px' 
            }}
            onClick={onClose}
        >
            <div 
                style={{ 
                    backgroundColor: '#ffffff', 
                    width: '100%', 
                    maxWidth: '400px', 
                    borderRadius: '32px', 
                    padding: '48px', 
                    textAlign: 'center', 
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
                    border: '1px solid #f1f5f9',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button Top Right */}
                <button 
                    onClick={onClose}
                    style={{ 
                        position: 'absolute', 
                        top: '24px', 
                        right: '24px', 
                        background: 'none', 
                        border: 'none', 
                        color: '#cbd5e1', 
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex'
                    }}
                >
                    <X size={20} />
                </button>

                {/* Orange Circle with Check */}
                <div 
                    style={{ 
                        width: '96px', 
                        height: '96px', 
                        backgroundColor: '#f59e0b', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 32px auto', 
                        boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.3)' 
                    }}
                >
                    <Check size={48} color="white" strokeWidth={4} />
                </div>
                
                {/* Title */}
                <h2 
                    style={{ 
                        fontSize: '24px', 
                        fontWeight: 900, 
                        color: '#1e293b', 
                        lineHeight: 1.2, 
                        marginBottom: '12px',
                        fontFamily: 'Inter, sans-serif'
                    }}
                >
                    {title}
                </h2>
                
                {/* Message */}
                <p 
                    style={{ 
                        fontSize: '14px', 
                        fontWeight: 600, 
                        color: '#64748b', 
                        lineHeight: 1.6, 
                        marginBottom: '40px',
                        fontFamily: 'Inter, sans-serif'
                    }}
                >
                    {message}
                </p>
                
                {/* Action Button */}
                <div style={{ marginTop: '16px' }}>
                    <button 
                        onClick={onClose}
                        style={{ 
                            width: '100%', 
                            padding: '16px', 
                            backgroundColor: '#f1f5f9', 
                            color: '#475569', 
                            borderRadius: '16px', 
                            fontWeight: 900, 
                            fontSize: '12px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.15em', 
                            border: 'none', 
                            cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    >
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
