import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, CheckCircle, ArrowLeft } from 'lucide-react';
import '../../styles/ProfessionalAuth.css';

const ProfessionalAuth = () => {
    const [activeTab, setActiveTab] = useState('signin');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            setActiveTab('signin');
        }, 3000);
    };

    return (
        <div className="pro-auth-wrapper">
            <div className="pro-auth-nav">
                <button className="back-btn" onClick={() => navigate('/portals')}>
                    <ArrowLeft size={18} /> Back to Portals
                </button>
            </div>

            <div className="pro-auth-header">
                <div className="pro-icon-circle">
                    <User size={32} color="white" />
                </div>
                <h1>Professional Portal</h1>
                <p>Access your assignments and credentials</p>
            </div>

            <div className="pro-auth-card">
                <div className="pro-auth-tabs">
                    <button 
                        className={`auth-tab ${activeTab === 'signin' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signin')}
                    >
                        Sign In
                    </button>
                    <button 
                        className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                <div className="auth-form-container">
                    {activeTab === 'signin' ? (
                        <form className="auth-form">
                            <div className="form-info">
                                <h3>Welcome Back</h3>
                                <p>Sign in to access your facility portal</p>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="your@email.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="********" />
                            </div>
                            <div className="form-options">
                                <Link to="/professional/forgot-password">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="pro-submit-btn" onClick={(e) => { e.preventDefault(); navigate('/professional/dashboard'); }}>
                                Sign In
                            </button>
                        </form>
                    ) : (
                        <form className="auth-form" onSubmit={handleSignUp}>
                            <div className="form-info">
                                <h3>Create Account</h3>
                                <p>Sign up for a new professional account</p>
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="your@email.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="********" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="(555) 123-4567" />
                            </div>
                            <button type="submit" className="pro-submit-btn">
                                Create Account
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {showSuccess && (
                <div className="success-overlay">
                    <div className="success-modal">
                        <div className="check-circle-anim">
                            <CheckCircle size={64} color="#f97316" />
                        </div>
                        <h2>Account successfully created!</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfessionalAuth;
