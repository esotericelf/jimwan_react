import React, { useState, useRef, useEffect } from 'react';
import './ExpandableText.css';

const ExpandableList = ({ items, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const collapseTimeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (collapseTimeoutRef.current) {
            clearTimeout(collapseTimeoutRef.current);
        }
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        collapseTimeoutRef.current = setTimeout(() => {
            setIsExpanded(false);
        }, 100); // 0.1-second delay before collapsing
    };

    const handleClick = () => setIsExpanded(false); // Collapse on click

    useEffect(() => {
        return () => {
            if (collapseTimeoutRef.current) {
                clearTimeout(collapseTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="expandable-text-container">
            <div
                className="expandable-text-trigger"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            <div
                className={`expandable-text-box ${isExpanded ? 'expanded' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick} // Add onClick event
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