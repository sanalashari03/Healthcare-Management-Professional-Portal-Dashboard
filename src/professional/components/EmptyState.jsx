import React from 'react';

const EmptyState = ({ icon: Icon, title, description, actionText, onAction }) => {
    return (
        <div className="empty-state-container">
            <div className="empty-state-icon">
                {Icon && <Icon size={64} strokeWidth={1.5} />}
            </div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            {actionText && (
                <button className="pro-btn-primary empty-state-cta !px-10 !py-4" onClick={onAction}>
                    {actionText}
                </button>
            )}
        </div>
    );
};

export default EmptyState;
