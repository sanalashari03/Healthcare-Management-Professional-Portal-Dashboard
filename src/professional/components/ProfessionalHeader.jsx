import React from 'react';
import { Bell, MessageSquare, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessionalHeader = ({ title, subtitle }) => {
    const navigate = useNavigate();

    return (
        <header className="pro-header">
            <div className="pro-header-left">
                <div className="pro-user-status">
                    <img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=f59e0b&color=fff" alt="Sarah Johnson" className="pro-avatar-img" />
                    <span className="pro-status-dot online"></span>
                </div>
                <div className="pro-header-titles">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>

            <div className="pro-header-right">
                <div className="pro-icon-actions">
                    <button className="pro-icon-btn">
                        <Bell size={20} />
                        <span className="pro-badge">3</span>
                    </button>
                    <button className="pro-icon-btn">
                        <MessageSquare size={20} />
                        <span className="pro-badge">5</span>
                    </button>
                </div>
                
                <button className="pro-header-exit-btn" onClick={() => navigate('/portals')}>
                    <LogOut size={16} />
                    Exit Portal
                </button>
            </div>
        </header>
    );
};

export default ProfessionalHeader;
