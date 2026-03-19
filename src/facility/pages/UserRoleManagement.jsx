import React from 'react';
import { 
    Search, 
    Filter, 
    ChevronLeft, 
    ChevronRight, 
    ChevronsLeft, 
    ChevronsRight,
    Edit3,
    Trash2,
    Eye,
    XCircle,
    CheckCircle2,
    Clock,
    ArrowLeft
} from 'lucide-react';

const UserRoleManagement = () => {
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);

    const roles = [
        { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@example.com', facility: 'St. Mary\'s Hospital', dept: 'RN', role: 'Admin', joined: 'March 12, 2025', status: 'Active', auth: 'Approved' },
        { id: 2, name: 'Lisa Anderson', email: 'lisa.a@example.com', facility: 'St. Mary\'s Hospital', dept: 'PALS', role: 'User', joined: 'June 16, 2025', status: 'Inactive', auth: 'Pending' },
        { id: 3, name: 'Michael Chen', email: 'm.chen@example.com', facility: 'General Medical', dept: 'PN', role: 'User', joined: 'October 22, 2025', status: 'Pending', auth: 'Pending' },
        { id: 4, name: 'Emma Davis', email: 'emma@example.com', facility: 'City Hospital', dept: 'ACLS', role: 'Guest', joined: 'October 22, 2025', status: 'Active', auth: 'Pending' },
        { id: 5, name: 'James Wilson', email: 'james.w@example.com', facility: 'County Hospital', dept: 'BLS', role: 'Admin', joined: 'June 16, 2025', status: 'Inactive', auth: 'Pending', highlight: true },
        { id: 6, name: 'David Martinez', email: 'david.m@example.com', facility: 'Care Home Plus', dept: 'PN', role: 'User', joined: 'March 12, 2025', status: 'Inactive', auth: 'Approved' },
        { id: 7, name: 'Robert Taylor', email: 'robert.t@example.com', facility: 'General Medical', dept: 'RN', role: 'Guest', joined: 'August 22, 2025', status: 'Active', auth: 'Rejected' },
    ];

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };

    const handleSaveRole = () => {
        setIsEditModalOpen(false);
        setIsSuccessOpen(true);
        setTimeout(() => setIsSuccessOpen(false), 2000);
    };

    return (
        <div className="role-management-page">
            <header className="dashboard-header">
                <div className="header-info">
                    <h1>User Role Management</h1>
                    <p>Manage your facility operations</p>
                </div>
                <div className="header-actions">
                    <button className="go-back-btn"><ArrowLeft size={16} /> Go Back</button>
                </div>
            </header>

            <div className="role-management-content">
                <div className="role-banner-box">
                    <div className="banner-text">
                        <h2>Manage Facility Roles</h2>
                        <p>Manage and handle requests made by professionals</p>
                    </div>

                    <div className="role-filter-row">
                        <div className="search-box-large">
                            <Search size={20} />
                            <input type="text" placeholder="Search by facility name, role, or specialization..." />
                        </div>
                        <button className="btn-filter-large">
                            <Filter size={20} /> Filter
                        </button>
                    </div>
                </div>

                <div className="role-table-container">
                    <h3>User Role Management</h3>
                    <div className="table-responsive">
                        <table className="role-table">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Staff Name</th>
                                    <th>Facility</th>
                                    <th>Department</th>
                                    <th>Role</th>
                                    <th>Joined</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map(role => (
                                    <tr key={role.id} className={role.highlight ? 'row-highlight' : ''}>
                                        <td>
                                            <span className={`status-pill-small ${role.status.toLowerCase()}`}>
                                                {role.status}
                                            </span>
                                        </td>
                                        <td><strong>{role.name}</strong></td>
                                        <td>{role.facility}</td>
                                        <td><span className="dept-tag">{role.dept}</span></td>
                                        <td>{role.role}</td>
                                        <td>
                                            <div className="joined-cell">
                                                <span>{role.joined.split(',')[0]}</span>
                                                <small>{role.joined.split(',')[1]}</small>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`auth-badge ${role.auth.toLowerCase()}`}>
                                                {role.auth === 'Approved' && <CheckCircle2 size={14} />}
                                                {role.auth === 'Pending' && <Clock size={14} />}
                                                {role.auth === 'Rejected' && <XCircle size={14} />}
                                                {role.auth}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-btns-cell">
                                                {role.auth === 'Approved' ? (
                                                    <>
                                                        <button className="btn-table-action edit" onClick={() => handleEditClick(role)}><Edit3 size={16} /></button>
                                                        <button className="btn-table-action delete"><Trash2 size={16} /></button>
                                                    </>
                                                ) : role.auth === 'Pending' ? (
                                                    <>
                                                        <button className="btn-table-action view"><Eye size={16} /></button>
                                                        <button className="btn-table-action reject"><XCircle size={16} /></button>
                                                    </>
                                                ) : (
                                                    <button className="btn-table-action view"><Eye size={16} /></button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="table-footer-pagination">
                        <div className="rows-per-page">
                            <span>Rows per page</span>
                            <div className="select-box-mini">
                                10 <ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} />
                            </div>
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

            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="edit-role-modal">
                        <button className="modal-close" onClick={() => setIsEditModalOpen(false)}><XCircle size={24} /></button>
                        
                        <div className="modal-header">
                            <h2>Edit User Role & Permissions</h2>
                            <p>Modify role and permissions for {selectedUser?.name}</p>
                        </div>

                        <div className="user-short-info">
                            <div className="info-item">
                                <label>Name</label>
                                <span>{selectedUser?.name}</span>
                            </div>
                            <div className="info-item">
                                <label>Email</label>
                                <span>{selectedUser?.email}</span>
                            </div>
                        </div>

                        <div className="role-selection-section">
                            <label className="section-label">Select Role</label>
                            <div className="role-cards-grid">
                                <div className={`role-card ${selectedUser?.role === 'Admin' ? 'active' : ''}`}>
                                    <span className="role-tag admin">Admin</span>
                                </div>
                                <div className={`role-card ${selectedUser?.role === 'User' ? 'active' : ''}`}>
                                    <span className="role-tag user">User</span>
                                </div>
                                <div className={`role-card ${selectedUser?.role === 'Guest' ? 'active' : ''}`}>
                                    <span className="role-tag guest">Guest</span>
                                </div>
                            </div>
                        </div>

                        <div className="role-desc-box">
                            <strong>Role Description:</strong>
                            <p>Full administrative access, can manage all facility operations and user roles.</p>
                        </div>

                        <div className="permissions-section">
                            <label className="section-label">Permissions</label>
                            <div className="permissions-list">
                                {[
                                    { id: 'p1', label: 'Request Staff', desc: 'Submit staff requests', checked: true },
                                    { id: 'p2', label: 'View Professionals', desc: 'View assigned professionals', checked: true },
                                    { id: 'p3', label: 'Manage Timesheets', desc: 'Handle timesheet operations', checked: true },
                                    { id: 'p4', label: 'Approve Timesheets', desc: 'Approve submitted timesheets', checked: false },
                                    { id: 'p5', label: 'View Invoices', desc: 'Access invoice information', checked: true },
                                    { id: 'p6', label: 'Messaging', desc: 'Send and receive messages', checked: false },
                                    { id: 'p7', label: 'Facility Profile', desc: 'Edit facility details', checked: false },
                                ].map(p => (
                                    <div key={p.id} className="perm-item">
                                        <input type="checkbox" id={p.id} checked={p.checked} readOnly />
                                        <label htmlFor={p.id}>
                                            <span className="p-name">{p.label}</span>
                                            <span className="p-desc">{p.desc}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="acc-status-section">
                            <label className="section-label">Account Status</label>
                            <div className="status-toggle-btns">
                                <button className={`status-btn active-btn ${selectedUser?.status === 'Active' ? 'active' : ''}`}>Active</button>
                                <button className={`status-btn inactive-btn ${selectedUser?.status === 'Inactive' ? 'active' : ''}`}>Inactive</button>
                            </div>
                        </div>

                        <div className="modal-footer-btns">
                            <button className="btn-cancel" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                            <button className="btn-save-role" onClick={handleSaveRole}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}

            {isSuccessOpen && (
                <div className="success-overlay-fixed">
                    <div className="success-card">
                        <div className="success-icon-animated">
                            <div className="check-outer">
                                <CheckCircle2 size={48} color="#003366" />
                            </div>
                        </div>
                        <h3>User Role Successfully Updated</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserRoleManagement;
