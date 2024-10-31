import React, { useState } from 'react';
import './Modal.css'; // Ensure you have this CSS file for styling

function Modal({ content, isList = false, children }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            {children}
            {isHovered && (
                <div className="modal-text-box">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Modal;