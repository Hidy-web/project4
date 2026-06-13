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
      <h2>Student List</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <button 
          className={`btn ${!isMultiMode ? 'btn-primary' : 'btn-secondary'}`} 
          style={{ marginRight: '10px' }}
          onClick={() => setIsMultiMode(false)}
        >
          Single Add
        </button>
        <button 
          className={`btn ${isMultiMode ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setIsMultiMode(true)}
        >
          Bulk Add
        </button>
      </div>

      {!isMultiMode ? (
        <form onSubmit={handleSingleSubmit} className="student-input-group">
          <div>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Enter student name" 
              value={singleName}
              onChange={(e) => setSingleName(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">Add</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleMultiSubmit} className="student-input-group">
          <textarea 
            className="input-field" 
            placeholder="Enter names separated by commas or newlines"
            rows={4}
            value={multiNames}
            onChange={(e) => setMultiNames(e.target.value)}
          />
            <button type="submit" className="btn btn-secondary">Add All</button>
        </form>
      )}

      <div style={{ marginTop: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--graphite)' }}>
          Total: {students.length} / Active: {students.filter(s => s.active).length}
        </h3>
        <ul className="student-list">
          {students.map(student => (
            <li key={student.id} className={`student-item ${!student.active ? 'inactive' : ''}`}>
              <div className="student-info">
                <input 
                  type="checkbox" 
                  checked={student.active}
                  onChange={() => onToggle(student.id)}
                  title="Toggle participation status"
                  style={{ accentColor: 'var(--carbon-dark)', width: '16px', height: '16px' }}
                />
                <span style={{ textDecoration: !student.active ? 'line-through' : 'none' }}>
                  {student.name}
                </span>
              </div>
              <div className="student-actions">
                <button onClick={() => onDelete(student.id)} title="Delete">Remove</button>
              </div>
            </li>
          ))}
          {students.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--silver-fog)', padding: '24px 0' }}>No students added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default StudentManager;
