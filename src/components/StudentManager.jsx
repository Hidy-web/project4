import React, { useState } from 'react';

function StudentManager({ students, onAdd, onAddMultiple, onToggle, onDelete }) {
  const [singleName, setSingleName] = useState('');
  const [multiNames, setMultiNames] = useState('');
  const [isMultiMode, setIsMultiMode] = useState(false);

  const handleSingleSubmit = (e) => {
    e.preventDefault();
    onAdd(singleName);
    setSingleName('');
  };

  const handleMultiSubmit = (e) => {
    e.preventDefault();
    onAddMultiple(multiNames);
    setMultiNames('');
    setIsMultiMode(false);
  };

  return (
    <div className="student-manager">
      <h2>🧑‍🎓 학생 관리</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <button 
          className={`btn ${!isMultiMode ? 'btn-primary' : ''}`} 
          style={{ marginRight: '10px' }}
          onClick={() => setIsMultiMode(false)}
        >
          한 명씩 추가
        </button>
        <button 
          className={`btn ${isMultiMode ? 'btn-primary' : ''}`}
          onClick={() => setIsMultiMode(true)}
        >
          일괄 추가
        </button>
      </div>

      {!isMultiMode ? (
        <form onSubmit={handleSingleSubmit} className="student-input-group">
          <div>
            <input 
              type="text" 
              className="input-field" 
              placeholder="학생 이름 입력" 
              value={singleName}
              onChange={(e) => setSingleName(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">추가</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleMultiSubmit} className="student-input-group">
          <textarea 
            className="input-field" 
            placeholder="이름을 쉼표(,)나 줄바꿈으로 구분해서 입력하세요"
            rows={4}
            value={multiNames}
            onChange={(e) => setMultiNames(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary">한번에 추가</button>
        </form>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>명단 (총 {students.length}명 / 참여 {students.filter(s => s.active).length}명)</h3>
        <ul className="student-list">
          {students.map(student => (
            <li key={student.id} className={`student-item ${!student.active ? 'inactive' : ''}`}>
              <div className="student-info">
                <input 
                  type="checkbox" 
                  checked={student.active}
                  onChange={() => onToggle(student.id)}
                  title="체크 해제시 추첨에서 제외됩니다 (결석/지각)"
                />
                <span style={{ textDecoration: !student.active ? 'line-through' : 'none' }}>
                  {student.name}
                </span>
              </div>
              <div className="student-actions">
                <button onClick={() => onDelete(student.id)} title="삭제">❌</button>
              </div>
            </li>
          ))}
          {students.length === 0 && (
            <p style={{ textAlign: 'center', color: '#666' }}>학생을 추가해주세요!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default StudentManager;
