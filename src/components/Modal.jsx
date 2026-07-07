import { useEffect, useCallback } from 'react';
import './Modal.css';
import haiLogo from '../assets/hailogo.png';

export default function Modal({ isOpen, onClose, iframeSrc }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} id="apply-modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        {/* Modal Header Branding */}
        <div className="modal-header-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', background: 'var(--color-white)' }}>
          <img src={haiLogo} alt="MyHAI Logo" style={{ height: '36px', width: 'auto' }} />
          <span className="myhai-logo__text" style={{ fontSize: '28px', color: 'var(--color-dark)', textTransform: 'uppercase', fontWeight: '700', fontFamily: 'var(--font-heading)', letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center' }}>
            MY<span style={{ color: 'var(--color-primary)' }}>HAI</span>
          </span>
        </div>

        <iframe
          src={iframeSrc}
          title="Application Form"
          className="modal-iframe"
          frameBorder="0"
          style={{ height: 'calc(100vh - 69px)' }}
        />
      </div>
    </div>
  );
}
