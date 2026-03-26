import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ExperienceLightbox.css';

function ExperienceLightbox({
  isOpen,
  onClose,
  title,
  period,
  role,
  metaLine,
  items = [],
  externalUrl,
  externalLabel,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const metaText = metaLine ?? [period, role].filter(Boolean).join(' · ');

  return createPortal(
    <div
      className="experience-lightbox-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="experience-lightbox-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-lightbox-title"
      >
        <button
          type="button"
          className="experience-lightbox-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 id="experience-lightbox-title" className="experience-lightbox-heading">
          {title}
        </h2>
        {metaText ? (
          <p className="experience-lightbox-meta">{metaText}</p>
        ) : null}
        {items.length > 0 ? (
          <ul className="experience-lightbox-list">
            {items.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : null}
        {externalUrl ? (
          <a
            href={externalUrl}
            className="experience-lightbox-external"
            target="_blank"
            rel="noopener noreferrer"
          >
            {externalLabel || 'Open link'}
          </a>
        ) : null}
      </div>
    </div>,
    document.body
  );
}

export default ExperienceLightbox;
