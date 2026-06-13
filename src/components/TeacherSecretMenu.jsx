import React, { useState, useEffect } from 'react';

function TeacherSecretMenu({ students, secretList, setSecretList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // 단축키 설정 (Ctrl + Shift + S)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + Shift + S
      if (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 메뉴가 열릴 때 현재 상태 동기화
  useEffect(() => {
    if (isOpen) {
      setInputValue(secretList.join(', '));
    }
  }, [isOpen, secretList]);

  const handleSave = () => {
    const names = inputValue.split(',').map(n => n.trim()).filter(n => n);
    setSecretList(names);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="secret-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="secret-modal" onClick={e => e.stopPropagation()}>
        <h2>Admin Override</h2>
        <p style={{ fontSize: '14px', color: 'var(--graphite)', marginBottom: '24px' }}>
          Pre-determine the sequence of draws. Separate names with commas.<br/>
          (e.g., John, Jane)
        </p>
        
        <textarea 
          className="input-field"
          style={{ width: '100%', marginBottom: '24px', fontFamily: 'var(--font-family)' }}
          rows="3"
          placeholder="Enter sequence..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
          <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
        <p style={{ fontSize: '12px', marginTop: '24px', color: 'var(--silver-fog)' }}>
          Press `Ctrl + Shift + S` to toggle.
        </p>
      </div>
    </div>
  );
}

export default TeacherSecretMenu;
