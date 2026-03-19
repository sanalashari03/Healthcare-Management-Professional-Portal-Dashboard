import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Building2, CheckCircle2, Mail, Lock, User, Phone } from 'lucide-react';
import '../styles/FacilityAuth.css';

const FacilityAuth = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('signin'); // 'signin', 'signup', 'forgot'
    const [showSuccess, setShowSuccess] = useState(false);

    const handleBackToPortals = () => navigate('/portals');

    const toggleView = (newView) => {
        setView(newView);
        setShowSuccess(false);
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        // In a real app, this would be an API call
        setTimeout(() => {
            setShowSuccess(false);
            setView('signin');
        }, 3000);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/facility/dashboard');
    };

    return (
        <div className="facility-auth-page">
            <div className="auth-header-nav">
                <button onClick={handleBackToPortals} className="back-link">
                    <ArrowLeft size={16} /> Back to Portals
                </button>
            </div>

            <main className="auth-main">
                <div className="portal-branding">
                    <div className="portal-icon-container">
                        <Building2 size={32} color="white" />
                    </div>
                    <h1>Facility Portal</h1>
                    <p>Manage your staffing needs and workforce</p>
                </div>

                <div className="auth-card">
                    <div className="auth-tabs">
                        <button 
                            className={`auth-tab ${view === 'signin' ? 'active' : ''}`}
                            onClick={() => toggleView('signin')}
                        >
                            Sign In
                        </button>
                        <button 
                            className={`auth-tab ${view === 'signup' ? 'active' : ''}`}
                            onClick={() => toggleView('signup')}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="auth-content">
                        {view === 'signin' && (
                            <form className="auth-form" onSubmit={handleSignIn}>
                                <div className="form-header">
                                    <h2>Welcome Back</h2>
                                    <p>Sign in to access your facility portal</p>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <div className="input-wrapper">
                                        <input type="email" placeholder="your@email.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-wrapper">
                                        <input type="password" placeholder="********" required />
                                    </div>
                                </div>
                                <div className="form-options">
                                    <label className="remember-me">
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <button type="button" className="forgot-btn" onClick={() => toggleView('forgot')}>
                                        Forget Password?
                                    </button>
                                </div>
                                <button type="submit" className="submit-btn">Sign In</button>
                            </form>
                        )}

                        {view === 'signup' && (
                            <form className="auth-form" onSubmit={handleCreateAccount}>
                                <div className="form-header">
                                    <h2>Create Account</h2>
                                    <p>Sign up for a new facility account</p>
                                </div>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <div className="input-wrapper">
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <div className="input-wrapper">
                                        <input type="email" placeholder="your@email.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-wrapper">
                                        <input type="password" placeholder="********" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Facility Name</label>
                                    <div className="input-wrapper">
                                        <input type="text" placeholder="Your Healthcare Facility" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <div className="input-wrapper">
                                        <input type="tel" placeholder="(555) 123-4567" required />
                                    </div>
                                </div>
                                <button type="submit" className="submit-btn primary-btn">Create Account</button>
                            </form>
                        )}

                        {view === 'forgot' && (
                            <form className="auth-form">
                                <div className="form-header">
                                    <h2>Forgot Password?</h2>
                                    <p>Enter your registered email address and we'll send you a link to reset your password.</p>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <div className="input-wrapper">
                                        <input type="email" placeholder="your@email.com" required />
                                    </div>
                                </div>
                                <p className="helper-text">We'll send a password reset link to this email.</p>
                                <button type="submit" className="submit-btn">Send Reset Link</button>
                                <div className="auth-footer">
                                    <p>Remember your password? <button type="button" className="inline-btn" onClick={() => toggleView('signin')}>Sign In</button></p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {showSuccess && (
                    <div className="modal-overlay">
                        <div className="success-modal">
                            <div className="success-icon-wrapper">
                                <CheckCircle2 size={64} color="#003366" />
                            </div>
                            <h3>Account successfully created!</h3>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default FacilityAuth;
