import React, { useState, useRef, useEffect } from 'react';
import './ExpandableText.css';
// ... existing imports ...

// ... existing imports ...

const ExpandableList = ({ items, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState); // Toggle expansion on click
    };

    return (
        <div className="expandable-text-container">
            <div
                className="expandable-text-trigger"
                onClick={handleToggle} // Toggle on click
            >
                {children}
            </div>
            <div
                className={`expandable-text-box ${isExpanded ? 'expanded' : ''}`}
            >
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpandableList;