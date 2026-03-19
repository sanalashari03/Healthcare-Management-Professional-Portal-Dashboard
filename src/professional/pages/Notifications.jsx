import React from 'react';
import ProfessionalHeader from '../components/ProfessionalHeader';
import { 
    Bell, 
    Calendar, 
    ShieldAlert, 
    TrendingUp, 
    CheckCircle, 
    Clock, 
    CreditCard,
    MoreHorizontal
} from 'lucide-react';

const Notifications = () => {
    const stats = [
        { label: "Unread", value: "2", icon: <Bell size={20}/>, color: "blue" },
        { label: "Assignments", value: "3", icon: <Calendar size={20}/>, color: "blue" },
        { label: "Alerts", value: "1", icon: <ShieldAlert size={20}/>, color: "orange" },
        { label: "This Week", value: "32", icon: <TrendingUp size={20}/>, color: "green" }
    ];

    const notifications = [
        {
            id: 1,
            title: "Shift Invitation",
            message: "You've been invited for a shift, Click to view.",
            time: "2 hours ago",
            isNew: true,
            icon: <Calendar size={20}/>,
            color: "blue"
        },
        {
            id: 2,
            title: "Credential Expiring Soon",
            message: "Your ACLS certification expires in 35 days. Please renew to maintain active status.",
            time: "1 day ago",
            isNew: true,
            icon: <ShieldAlert size={20}/>,
            color: "orange"
        },
        {
            id: 3,
            title: "Timesheet Approved",
            message: "Your timesheet for Jan 25-31, 2026 has been approved by City Medical Center",
            time: "2 days ago",
            isNew: false,
            icon: <CheckCircle size={20}/>,
            color: "green"
        },
        {
            id: 4,
            title: "Payment Processed",
            message: "Payment of $1,728 has been processed for timesheet #2",
            time: "3 days ago",
            isNew: false,
            icon: <CreditCard size={20}/>,
            color: "purple"
        },
        {
            id: 5,
            title: "Shift Reminder",
            message: "Reminder: You have a shift tomorrow at Memorial Hospital - 7:00 AM",
            time: "1 week ago",
            isNew: false,
            icon: <Clock size={20}/>,
            color: "orange"
        }
    ];

    return (
        <div className="pro-dashboard">
            <ProfessionalHeader 
                title="Notifications" 
                subtitle="Manage your professional profile and assignments" 
            />

            <div className="pro-main-content">
                {/* Notifications Sub-Header Block */}
                <div className="hf-item-card !p-10 !mb-8">
                    <div className="flex justify-between items-center">
                        <div className="text-left">
                            <h2 className="!text-2xl !mb-1 text-[#003366] font-extrabold">Notifications</h2>
                            <p className="text-sm font-bold text-slate-400">Stay updated with important updates and alerts</p>
                        </div>
                        <button className="pro-header-exit-btn !px-6 !py-2.5 !h-auto !text-[11px] font-black uppercase tracking-widest !bg-white border-slate-200 hover:!bg-slate-50">
                            Mark All as Read
                        </button>
                    </div>
                </div>

                {/* Stats Summary Grid */}
                <div className="hf-noti-summary-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="hf-item-card !p-8 flex flex-col items-start text-left">
                            <div className="flex justify-between items-center w-full mb-4">
                                <span className={`!text-3xl font-black text-${stat.color === 'blue' ? 'blue-600' : stat.color === 'orange' ? 'orange-500' : 'green-600'}`}>
                                    {stat.value}
                                </span>
                            </div>
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Notifications List */}
                <div className="notifications-list-container">
                    {notifications.map(noti => (
                        <div key={noti.id} className={`hf-noti-item ${noti.isNew ? 'is-new' : ''}`}>
                            <div className={`noti-icon-wrap ${noti.color}`}>
                                {noti.icon}
                            </div>
                            <div className="noti-content-text">
                                <h4>{noti.title}</h4>
                                <p>{noti.message}</p>
                            </div>
                            <div className="noti-meta-text">
                                {noti.isNew && <span className="noti-new-badge">New</span>}
                                <span className="!text-[11px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-widest">
                                    <Clock size={12}/> {noti.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Action */}
                <div className="mt-10 mb-12 flex justify-center">
                    <button className="pro-header-exit-btn !px-10 !py-3 !h-auto !text-xs font-black uppercase tracking-widest !bg-white border-slate-200">
                        Load More Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
