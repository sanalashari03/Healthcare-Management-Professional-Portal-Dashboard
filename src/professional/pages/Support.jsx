import React, { useState } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Phone, 
    Mail, 
    MessageSquare, 
    ChevronRight, 
    HelpCircle, 
    Send,
    LifeBuoy,
    BookOpen,
    Video,
    FileText,
    CreditCard,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const Support = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "How do I submit my timesheet?", a: "To submit your timesheet, go to the 'My Timesheets' page, confirm your active hours, and click the 'Submit Timesheet' button at the bottom of the page." },
        { q: "When will I receive payment?", a: "Payments are typically processed within 3-5 business days after your timesheet has been approved by the facility manager." },
        { q: "How do I upload new credentials?", a: "Go to 'My Credentials', click on the 'Add New' button, and follow the prompts to upload your certifications or licenses." },
        { q: "Can I cancel a confirmed shift?", a: "Yes, you can cancel a shift from the 'Shifts' page, but please note that late cancellations may affect your reliability score." },
        { q: "How do I update my profile information?", a: "You can update your personal and professional details in the 'My Profile' section." },
        { q: "What happens when my certification expires?", a: "You will receive notifications 30 days before expiration. If not renewed, you may be temporarily restricted from accepting new shifts." }
    ];

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader 
                title="Support" 
                subtitle="Manage your professional profile and assignments" 
            />

            <div className="pro-main-content">
                {/* Support Center Banner */}
                <div className="support-center-banner">
                    <div className="support-icon-box">
                        <HelpCircle size={32} />
                    </div>
                    <div className="text-left">
                        <h2 className="!text-2xl !mb-1 text-[#003366] font-extrabold">Support Center</h2>
                        <p className="text-sm font-bold text-slate-400">Get help and find answers to your questions</p>
                    </div>
                </div>

                <div className="support-main-layout">
                    {/* Sidebar: Contact & Quick Links */}
                    <div className="support-sidebar">
                        <div className="hf-contact-card text-left">
                            <h3 className="!text-xl !mb-8 text-[#003366] font-extrabold">Contact Us</h3>
                            
                            <div className="contact-method-item text-left">
                                <div className="contact-icon-wrap">
                                    <Phone size={20} />
                                </div>
                                <div className="contact-info-text">
                                    <h4>Phone</h4>
                                    <p>(484) 254-4877</p>
                                    <p className="!text-[10px] opacity-60">Mon-Fri, 8AM-6PM PST</p>
                                </div>
                            </div>

                            <div className="contact-method-item text-left">
                                <div className="contact-icon-wrap green">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-info-text">
                                    <h4>Email</h4>
                                    <p>support@edmsolutions.com</p>
                                    <p className="!text-[10px] opacity-60">Response within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-method-item text-left">
                                <div className="contact-icon-wrap purple">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="contact-info-text">
                                    <h4>Live Chat</h4>
                                    <p>Available 24/7</p>
                                    <button className="quick-action-btn-hf orange !px-6 !py-2 !h-auto !text-[11px] mt-2 uppercase font-black tracking-widest">Start Chat</button>
                                </div>
                            </div>
                        </div>

                        <div className="quick-links-card text-left">
                            <h3 className="!text-xl !mb-6 text-[#003366] font-extrabold flex items-center gap-3">
                                <FileText size={20} className="text-blue-500"/> Quick Links
                            </h3>
                            <div className="quick-link-item"><span>User Guide</span> <ChevronRight size={16}/></div>
                            <div className="quick-link-item"><span>Video Tutorials</span> <ChevronRight size={16}/></div>
                            <div className="quick-link-item"><span>Policies & Guidelines</span> <ChevronRight size={16}/></div>
                            <div className="quick-link-item"><span>Payment Information</span> <ChevronRight size={16}/></div>
                        </div>
                    </div>

                    {/* Main Content: Support Form */}
                    <div className="support-request-form text-left">
                        <h3 className="!text-xl !mb-8 text-[#003366] font-extrabold flex items-center gap-3">
                            <BookOpen size={20} className="text-orange-500"/> Submit a Support Request
                        </h3>

                        <div className="hf-form-grid-2 mb-6">
                            <div className="hf-input-container">
                                <label>Your Name *</label>
                                <input type="text" className="hf-input-field !pl-6" defaultValue="Sarah Johnson" />
                            </div>
                            <div className="hf-input-container">
                                <label>Email Address *</label>
                                <input type="email" className="hf-input-field !pl-6" defaultValue="sarah.j@email.com" />
                            </div>
                        </div>

                        <div className="hf-input-container mb-6">
                            <label>Category *</label>
                            <div className="relative">
                                <select className="hf-input-field !pl-6 appearance-none">
                                    <option>Select a category</option>
                                    <option>Technical Issue</option>
                                    <option>Payment Query</option>
                                    <option>Shift Management</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                            </div>
                        </div>

                        <div className="hf-input-container mb-6">
                            <label>Subject *</label>
                            <input type="text" className="hf-input-field !pl-6" placeholder="Brief description of your issue" />
                        </div>

                        <div className="hf-input-container mb-8">
                            <label>Message *</label>
                            <textarea className="hf-input-field !pl-6 !h-32 pt-4 resize-none" placeholder="Please provide details about your issue or question..."></textarea>
                        </div>

                        <button className="quick-action-btn-hf orange !w-full !h-auto !py-4 shadow-lg shadow-orange-100 flex justify-center items-center gap-2 uppercase font-black text-xs tracking-widest">
                            <Send size={16} /> Submit Request
                        </button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section-hf text-left">
                    <h3 className="!text-2xl !mb-8 text-[#003366] font-extrabold">Frequently Asked Questions</h3>
                    <div className="flex flex-col">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item-hf">
                                <button 
                                    className="faq-header-hf"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span>{faq.q}</span>
                                    {openFaq === index ? <ChevronUp size={18} className="text-slate-300"/> : <ChevronDown size={18} className="text-slate-300"/>}
                                </button>
                                {openFaq === index && (
                                    <div className="pb-6 text-sm text-slate-500 font-bold leading-relaxed animate-in fade-in duration-300">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
