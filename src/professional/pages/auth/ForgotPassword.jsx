import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, ArrowLeft } from 'lucide-react';
import '../../styles/ProfessionalAuth.css';

const ForgotPassword = () => {
    const navigate = useNavigate();

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
                <div className="auth-form-container">
                    <form className="auth-form">
                        <div className="form-info">
                            <h3>Forgot Password?</h3>
                            <p>Enter your registered email address and we'll send you a link to reset your password.</p>
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="your@email.com" />
                        </div>
                        <p className="form-note">We'll send a password reset link to this email.</p>
                        <button type="submit" className="pro-submit-btn">
                            Send Reset Link
                        </button>
                        <div className="form-footer">
                            Remember your password? <Link to="/professional/auth">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
