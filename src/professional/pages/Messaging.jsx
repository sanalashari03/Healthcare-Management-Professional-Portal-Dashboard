import React, { useState } from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Search, 
    MoreHorizontal, 
    Paperclip, 
    Send, 
    Star, 
    X,
    MessageSquare,
    Plus,
    ChevronDown,
    CheckCheck,
    Clock
} from 'lucide-react';

const NewMessageModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="pro-modal-overlay">
            <div className="pro-modal-content max-w-xl p-0 overflow-hidden shadow-2xl relative">
                <button onClick={onClose} className="absolute right-8 top-8 text-slate-300 hover:text-slate-500 transition-all z-20"><X size={24}/></button>
                
                <div className="px-10 py-10 border-b border-slate-100 text-left bg-white">
                    <h2 className="text-2xl mb-1 text-[#003366] font-extrabold">New Message</h2>
                    <p className="text-sm font-bold text-slate-400">Send a message to a facility</p>
                </div>
                
                <div className="p-10 text-left bg-white">
                    <div className="hf-input-container mb-6">
                        <label>Recipient *</label>
                        <div className="hf-input-wrapper relative">
                            <select className="hf-input-field no-icon appearance-none w-full">
                                <option>Select a facility</option>
                                <option>Memorial Hospital</option>
                                <option>City Medical Center</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                        </div>
                    </div>

                    <div className="hf-input-container mb-6">
                        <label>Subject *</label>
                        <input type="text" className="hf-input-field no-icon" placeholder="Enter message subject..." />
                    </div>

                    <div className="hf-input-container mb-10">
                        <label>Message *</label>
                        <textarea className="hf-input-field no-icon !h-40 pt-4 resize-none" placeholder="Type your message..."></textarea>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                        <button className="btn-hf-ghost px-10" onClick={onClose}>Cancel</button>
                        <button className="btn-hf-primary !bg-[#ffb800] text-white px-10 border-none shadow-lg shadow-orange-100 flex items-center gap-2">
                             <Send size={18} /> Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Messaging = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedConv, setSelectedConv] = useState(1);
    const [isNewMsgOpen, setIsNewMsgOpen] = useState(false);
    const [mobileView, setMobileView] = useState('threads'); // 'threads' or 'chat'

    const handleSelectConv = (id) => {
        setSelectedConv(id);
        setMobileView('chat');
    };

    const conversations = [
        { 
            id: 1, 
            name: "Memorial Hospital", 
            sub: "Facility Manager", 
            last: "Your timesheet for Week of Feb 3-9 has been app", 
            time: "30 minutes ago", 
            unread: 1, 
            initial: "M", 
            starred: true 
        },
        { 
            id: 2, 
            name: "City Medical Center", 
            sub: "Staffing Coordinator", 
            last: "New shift opportunity available for next week. Inter", 
            time: "3 hours ago", 
            initial: "C" 
        },
        { 
            id: 3, 
            name: "Memorial Hospital", 
            sub: "HR Department", 
            last: "Your credentials have been verified. You're all set f", 
            time: "Yesterday", 
            initial: "M" 
        }
    ];

    const messages = [
        { 
            type: "sent", 
            sender: "Sarah Johnson", 
            date: "Feb 10, 2026 2:30 PM", 
            text: "Hi! I wanted to follow up on my timesheet submission for last week. Has it been reviewed?" 
        },
        { 
            type: "received", 
            sender: "Memorial Hospital", 
            date: "Feb 10, 2026 3:15 PM", 
            text: "Yes, I've reviewed and approved your timesheet. It's now with admin for final processing. You should see payment within 5 business days." 
        },
        { 
            type: "sent", 
            sender: "Sarah Johnson", 
            date: "Feb 11, 2026 9:45 AM", 
            text: "Thank you for approving my timesheet. Looking forward to next week's shifts." 
        }
    ];

    const currentConv = conversations.find(c => c.id === selectedConv) || conversations[0];

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader 
                title="Messaging" 
                subtitle="Manage your professional profile and assignments" 
            />

            <div className="pro-main-content">
                <div className="hf-item-card !p-10 !mb-8 border border-slate-100 rounded-3xl bg-white shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center bg-white text-left">
                        <div>
                            <h2 className="!text-3xl !mb-1 text-[#003366] font-black">Messages</h2>
                            <p className="text-sm font-bold text-slate-400">Communicate with facility managers</p>
                        </div>
                        <button className="btn-hf-primary !bg-[#ffb800] !border-none !px-8 !py-4 !h-auto !flex-row font-black text-xs uppercase tracking-widest text-[#003366] shadow-lg shadow-orange-100" onClick={() => setIsNewMsgOpen(true)}>
                            <Plus size={18} /> New Message
                        </button>
                    </div>
                </div>

                <div className="messaging-main-container shadow-sm border border-slate-100 rounded-3xl overflow-hidden bg-white flex h-[750px] relative">
                    {/* Left Pane: Threads */}
                    <div className={`msg-threads-pane border-r border-slate-100 w-[400px] flex flex-col ${mobileView === 'chat' ? 'is-hidden' : ''}`}>
                        <div className="msg-search-header text-left p-8 border-b border-slate-50">
                            <div className="relative mb-6">
                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                <input type="text" className="w-full !pl-12 !py-4 !bg-slate-50 border-none rounded-xl text-sm font-bold outline-none" placeholder="Search conversations..." />
                            </div>
                            <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                                <button className={`flex-1 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'all' ? 'bg-[#003366] text-white shadow-sm' : 'text-slate-400'}`} onClick={() => setActiveTab('all')}>All</button>
                                <button className={`flex-1 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'unread' ? 'bg-[#003366] text-white shadow-sm' : 'text-slate-400'}`} onClick={() => setActiveTab('unread')}>Unread (1)</button>
                                <button className={`flex-1 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'starred' ? 'bg-[#003366] text-white shadow-sm' : 'text-slate-400'}`} onClick={() => setActiveTab('starred')}><Star size={14} className="inline"/></button>
                            </div>
                        </div>
                        <div className="msg-threads-list overflow-y-auto scrollbar-thin flex-1">
                            {conversations.map(conv => (
                                <div 
                                    key={conv.id} 
                                    className={`msg-thread-item p-8 flex items-center gap-6 cursor-pointer transition-all border-b border-slate-50 hover:bg-slate-50 ${selectedConv === conv.id ? 'bg-[#eff6ff]/30 !border-l-4 !border-l-[#ffb800]' : ''}`}
                                    onClick={() => handleSelectConv(conv.id)}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-sm ${selectedConv === conv.id ? 'bg-[#003366] text-white' : 'bg-slate-100 text-[#003366]'}`}>{conv.initial}</div>
                                    <div className="flex-1 min-w-0 text-left">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-sm font-black text-[#1e293b] truncate uppercase tracking-tight">{conv.name}</h4>
                                            {conv.unread && <div className="w-5 h-5 bg-[#ffb800] text-white rounded-full flex items-center justify-center text-[10px] font-black">{conv.unread}</div>}
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-tight">{conv.sub}</p>
                                        <p className="text-[11px] text-slate-400 font-bold truncate">{conv.last}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-[9px] font-bold text-slate-300 uppercase flex items-center gap-1"><Clock size={10}/> {conv.time}</span>
                                            {conv.starred && <Star size={12} className="text-[#ffb800] fill-[#ffb800]"/>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Pane: Chat */}
                    <div className={`msg-chat-pane flex flex-col flex-1 bg-white ${mobileView === 'threads' ? 'is-hidden' : ''}`}>
                        <div className="msg-chat-header p-8 border-b border-slate-100 flex justify-between items-center bg-white shadow-sm z-10">
                            <div className="flex items-center gap-5 text-left">
                                <button className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-[#003366]" onClick={() => setMobileView('threads')}>
                                    <ChevronDown size={24} className="rotate-90" />
                                </button>
                                <div className="w-14 h-14 rounded-2xl bg-[#003366] text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-100">{currentConv.initial}</div>
                                <div>
                                    <h4 className="text-base font-black text-[#1e293b] uppercase tracking-tight">{currentConv.name}</h4>
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{currentConv.sub}</p>
                                </div>
                            </div>
                            <button className="w-12 h-12 rounded-2xl text-slate-300 hover:text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center"><MoreHorizontal size={24}/></button>
                        </div>

                        <div className="msg-chat-body flex-1 p-12 overflow-y-auto scrollbar-thin bg-slate-50/10">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex flex-col mb-12 ${msg.type === 'sent' ? 'items-end' : 'items-start'}`}>
                                    <div className={msg.type === 'sent' ? 'msg-bubble-sent' : 'msg-bubble-received'}>
                                        {msg.text}
                                    </div>
                                    <div className={`flex items-center gap-3 mt-4 px-2 ${msg.type === 'sent' ? 'text-right' : 'text-left'}`}>
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{msg.sender} • {msg.date}</span>
                                        {msg.type === 'sent' && <CheckCheck size={14} className="text-[#3b82f6]"/>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="msg-chat-footer p-10 border-t border-slate-50 bg-white">
                            <div className="msg-input-wrap relative">
                                <button className="p-3 text-slate-300 hover:text-slate-500 transition-colors"><Paperclip size={24}/></button>
                                <textarea className="msg-input-box !h-14 py-4 !resize-none" placeholder="Type your message..."></textarea>
                                <button className="btn-orange-fab shrink-0">
                                    <Send size={24} />
                                </button>
                            </div>
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-4 text-left">Press Enter to send, Shift+Enter for new line</p>
                        </div>
                    </div>
                </div>
            </div>

            <NewMessageModal isOpen={isNewMsgOpen} onClose={() => setIsNewMsgOpen(false)} />
        </div>
    );
};

export default Messaging;
