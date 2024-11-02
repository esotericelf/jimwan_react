import React, { useState, useEffect } from 'react';
import './TypingEffect.css'; // Ensure you create this CSS file for styling

function TypingEffect({ text, speed = 100, className = '', loop = false }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        } else if (loop) {
            const timeoutId = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, 2000); // 2-second pause before restarting

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed, loop]);

    const words = displayedText.split(' ').map((word, i) => {
        if (word.length > 0) {
            const lastCharIndex = word.length - 1;
            return (
                <span key={i}>
                    {word.slice(0, lastCharIndex)}
                    <span className="glow">{word[lastCharIndex]}</span>
                    <span>&nbsp;</span> {/* Ensure space is rendered */}
                </span>
            );
        }
        return <span key={i}>&nbsp;</span>; // Render space for empty words
    });

    return <div className={`${className} typing-effect`}>{words}</div>;
}

export default TypingEffect;