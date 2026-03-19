import React, { useState } from 'react';
import { 
    Search, 
    LogOut, 
    MessageSquare, 
    Star, 
    Paperclip, 
    Send, 
    X,
    MoreVertical,
    ChevronDown
} from 'lucide-react';

const Messaging = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedChat, setSelectedChat] = useState(1);
    const [showNewMessage, setShowNewMessage] = useState(false);

    const conversations = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Registered Nurse',
            initials: 'S',
            color: '#3b82f6',
            snippet: 'Thank you for approving my timesheet. Looking for...',
            time: '10 minutes ago',
            unread: 0,
            starred: true
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Licensed Practical Nurse',
            initials: 'M',
            color: '#1d4ed8',
            snippet: 'Can I request a schedule change for Friday? I hav...',
            time: '2 hours ago',
            unread: 2,
            starred: false
        },
        {
            id: 3,
            name: 'James Wilson',
            role: 'Registered Nurse',
            initials: 'J',
            color: '#1d4ed8',
            snippet: 'Received the updated ICU protocols. Will review b...',
            time: 'Yesterday',
            unread: 0,
            starred: false
        },
        {
            id: 4,
            name: 'Emily Rodriguez',
            role: 'Physical Therapist',
            initials: 'E',
            color: '#1d4ed8',
            snippet: 'Equipment request submitted for rehab departmen...',
            time: '2 days ago',
            unread: 1,
            starred: true
        }
    ];

    const messages = [
        {
            id: 1,
            sender: 'Memorial Hospital',
            time: 'Feb 10, 2026 2:30 PM',
            text: 'Hi! I wanted to follow up on my timesheet submission for last week. Has it been reviewed?',
            type: 'sent'
        },
        {
            id: 2,
            sender: 'Memorial Hospital',
            time: 'Feb 10, 2026 3:15 PM',
            text: 'Yes, I\'ve reviewed and approved your timesheet. It\'s now with admin for final processing. You should see payment within 5 business days.',
            type: 'sent'
        },
        {
            id: 3,
            sender: 'Sarah Johnson',
            time: 'Feb 11, 2026 9:45 AM',
            text: 'Thank you for approving my timesheet. Looking forward to next week\'s shifts.',
            type: 'received'
        }
    ];

    return (
        <div className="messaging-page">
            {showNewMessage && <NewMessageModal onClose={() => setShowNewMessage(false)} />}
            
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Messaging</h1>
                    <p>Manage your facility operations</p>
                </div>
                <div className="header-actions">
                    <button className="exit-portal-btn"><LogOut size={16} /> Exit Portal</button>
                </div>
            </header>

            <div className="messaging-content activity-section">
                <div className="messages-banner">
                    <div className="banner-text">
                        <h2>Messages</h2>
                        <p>Communicate with your assigned professionals</p>
                    </div>
                    <button className="new-message-btn" onClick={() => setShowNewMessage(true)}>
                        <MessageSquare size={16} /> New Message
                    </button>
                </div>

                <div className="messaging-layout">
                    {/* Left Panel: Conversation List */}
                    <div className="conversations-panel">
                        <div className="search-box-container">
                            <Search size={18} className="search-icon" />
                            <input type="text" placeholder="Search conversations..." />
                        </div>
                        
                        <div className="filter-tabs-small">
                            <button 
                                className={`filter-tab ${activeTab === 'All' ? 'active' : ''}`}
                                onClick={() => setActiveTab('All')}
                            >All</button>
                            <button 
                                className={`filter-tab ${activeTab === 'Unread' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Unread')}
                            >Unread (3)</button>
                            <button 
                                className={`filter-tab ${activeTab === 'Starred' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Starred')}
                            ><Star size={16} /></button>
                        </div>

                        <div className="conversation-list">
                            {conversations.map(conv => (
                                <div 
                                    key={conv.id} 
                                    className={`conversation-item ${selectedChat === conv.id ? 'active' : ''}`}
                                    onClick={() => setSelectedChat(conv.id)}
                                >
                                    <div className="avatar" style={{ backgroundColor: conv.color }}>
                                        {conv.initials}
                                    </div>
                                    <div className="item-content">
                                        <div className="item-header">
                                            <h3>{conv.name}</h3>
                                            {conv.unread > 0 && <span className="unread-badge">{conv.unread}</span>}
                                        </div>
                                        <p className="role">{conv.role}</p>
                                        <p className="snippet">{conv.snippet}</p>
                                        <div className="item-footer">
                                            <span className="time"><ClockIcon size={12} /> {conv.time}</span>
                                            {conv.starred && <Star size={14} fill="#f97316" color="#f97316" />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Chat Window */}
                    <div className="chat-window-panel">
                        {!selectedChat ? (
                            <div className="empty-chat-state">
                                <MessageSquare size={64} color="#e2e8f0" />
                                <h3>No Conversation Selected</h3>
                                <p>Select a conversation from the list to start messaging</p>
                                <button className="start-new-btn"><MessageSquare size={16} /> Start New Conversation</button>
                            </div>
                        ) : (
                            <>
                                <div className="chat-header">
                                    <div className="chat-avatar" style={{ backgroundColor: '#1d4ed8' }}>S</div>
                                    <div className="chat-title">
                                        <h3>Sarah Johnson</h3>
                                        <p>Registered Nurse</p>
                                    </div>
                                    <button className="chat-more-btn"><MoreVertical size={20} /></button>
                                </div>

                                <div className="messages-area">
                                    {messages.map(msg => (
                                        <div key={msg.id} className={`message-bubble-wrapper ${msg.type}`}>
                                            <div className="message-bubble">
                                                <div className="message-header">
                                                    <span className="sender">{msg.sender}</span>
                                                    <span className="time">{msg.time}</span>
                                                </div>
                                                <p className="message-text">{msg.text}</p>
                                                {msg.type === 'sent' && (
                                                    <div className="message-status">
                                                        <CheckCheck size={14} className="check-icon" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    
                                    <div className="message-date-separator">
                                        <span>Feb 11, 2026 9:45 AM</span>
                                    </div>
                                    
                                    <div className="message-bubble-wrapper received">
                                        <div className="message-bubble">
                                            <div className="message-header">
                                                <span className="sender">Sarah Johnson</span>
                                                <span className="time">Feb 11, 2026 9:45 AM</span>
                                            </div>
                                            <p className="message-text">Thank you for approving my timesheet. Looking forward to next week's shifts.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-input-container">
                                    <div className="input-wrapper">
                                        <button className="attach-btn"><Paperclip size={20} /></button>
                                        <textarea placeholder="Type your message..." rows="1"></textarea>
                                        <button className="send-btn"><Send size={20} /></button>
                                    </div>
                                    <p className="input-hint">Press Enter to send, Shift+Enter for new line</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewMessageModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="new-message-modal">
                <div className="modal-header">
                    <div className="title-block">
                        <h2>New Message</h2>
                        <p>Send a message to a professional</p>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={24} /></button>
                </div>

                <div className="modal-form">
                    <div className="form-group">
                        <label>Recipient *</label>
                        <div className="select-wrapper">
                            <span>Sarah Johnson</span>
                            <ChevronDown size={18} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Subject *</label>
                        <input type="text" value="Shift" />
                    </div>
                    <div className="form-group">
                        <label>Message *</label>
                        <textarea placeholder="Type your message..." rows="6"></textarea>
                    </div>

                    <div className="modal-actions-row">
                        <button className="btn-cancel" onClick={onClose}>Cancel</button>
                        <button className="btn-send-message"><Send size={18} /> Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ClockIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const CheckCheck = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
);

export default Messaging;
