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
      <div className="glass-panel secret-modal" onClick={e => e.stopPropagation()}>
        <h2>🤫 비밀 메뉴 (교사용)</h2>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>
          다음에 나올 발표자를 미리 순서대로 지정할 수 있습니다. 쉼표(,)로 구분하세요.<br/>
          (예: 홍길동, 김철수)
        </p>
        
        <textarea 
          className="input-field"
          style={{ width: '100%', marginBottom: '15px' }}
          rows="3"
          placeholder="지정할 학생 이름 입력"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button className="btn" onClick={() => setIsOpen(false)}>취소</button>
          <button className="btn btn-primary" onClick={handleSave}>저장 및 닫기</button>
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '15px', color: '#888' }}>
          단축키 `Ctrl + Shift + S` 로 열고 닫을 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default TeacherSecretMenu;
