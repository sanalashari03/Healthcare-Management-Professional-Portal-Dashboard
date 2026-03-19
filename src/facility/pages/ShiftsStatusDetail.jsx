import React from 'react';
import { 
    ArrowLeft, 
    Search, 
    Filter, 
    Eye,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShiftsStatusDetail = () => {
    const navigate = useNavigate();

    const shifts = [
        { id: 1, reqStatus: 'Recent', facility: 'St. Mary\'s Hospital', type: 'Day Shift', dept: 'RN', date: '2026-10-15', scheduled: '07:00 AM - 03:00 PM', status: 'Open' },
        { id: 2, reqStatus: '1h ago', facility: 'St. Mary\'s Hospital', type: 'Day Shift', dept: 'PALS', date: '2024-10-14', scheduled: '08:00 AM - 04:00 PM', status: 'Cancelled' },
        { id: 3, reqStatus: '2d ago', facility: 'General Medical', type: 'Night Shift', dept: 'PN', date: '2024-10-11', scheduled: '08:00 AM - 04:00 PM', status: 'Filled' },
        { id: 4, reqStatus: '1y ago', facility: 'City Hospital', type: 'Day Shift', dept: 'ACLS', date: '2024-10-12', scheduled: '02:00 PM - 10:00 PM', status: 'Completed' },
        { id: 5, reqStatus: '1y ago', facility: 'County Hospital', type: 'Night Shift', dept: 'BLS', date: '2024-10-13', scheduled: '10:00 PM - 06:00 AM', status: 'Cancelled' },
        { id: 6, reqStatus: '2d ago', facility: 'Care Home Plus', type: 'Night Shift', dept: 'PN', date: '2024-10-09', scheduled: '08:00 AM - 04:00 PM', status: 'Draft' },
        { id: 7, reqStatus: '2d ago', facility: 'General Medical', type: 'Night Shift', dept: 'RN', date: '2024-10-08', scheduled: '12:00 PM - 08:00 PM', status: 'Completed' },
    ];

    return (
        <div className="shifts-status-page">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>Shift Management</h1>
                    <p>Shift lifecycle overview.</p>
                </div>
                <div className="header-actions">
                    <button className="go-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Go Back</button>
                </div>
            </header>

            <div className="shifts-status-content-wrapper">
                <div className="status-header-box">
                    <div className="box-left">
                        <h2>Shifts Status</h2>
                        <p>Your facility controls the full shift lifecycle:</p>
                    </div>
                    <button className="btn-add-new-shift" onClick={() => navigate('/facility/shifts')}>
                        <Plus size={18} /> Add New Shift
                    </button>

                    <div className="status-filter-row">
                        <div className="search-box-wide">
                            <Search size={20} />
                            <input type="text" placeholder="Search by facility name, role, or specialization..." />
                        </div>
                        <button className="btn-filter-dark">
                            <Filter size={20} /> Filter
                        </button>
                    </div>
                </div>

                <div className="posted-shifts-table-container">
                    <h3>Posted Shifts</h3>
                    <div className="table-responsive">
                        <table className="shifts-table">
                            <thead>
                                <tr>
                                    <th>Req Status</th>
                                    <th>Facility</th>
                                    <th>Shift Type</th>
                                    <th>Department</th>
                                    <th>Shift Date</th>
                                    <th>Scheduled</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shifts.map(shift => (
                                    <tr key={shift.id}>
                                        <td><span className="req-status-badge">{shift.reqStatus}</span></td>
                                        <td>{shift.facility}</td>
                                        <td>{shift.type}</td>
                                        <td><span className="dept-tag-light">{shift.dept}</span></td>
                                        <td>{shift.date}</td>
                                        <td>
                                            <div className="scheduled-cell">
                                                <span>{shift.scheduled}</span>
                                                <small>8h Shift</small>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`shift-status-pill ${shift.status.toLowerCase()}`}>
                                                {shift.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn-view-shift-action"><Eye size={16} /> View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="table-footer-pagination">
                        <div className="rows-per-page">
                            <span>Rows per page</span>
                            <div className="select-box-mini">10</div>
                            <span className="total-count">of 140 rows</span>
                        </div>
                        <div className="pagination">
                            <button className="page-btn"><ChevronsLeft size={18} /></button>
                            <button className="page-btn"><ChevronLeft size={18} /></button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="page-dots">...</span>
                            <button className="page-btn">10</button>
                            <button className="page-btn"><ChevronRight size={18} /></button>
                            <button className="page-btn"><ChevronsRight size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShiftsStatusDetail;
