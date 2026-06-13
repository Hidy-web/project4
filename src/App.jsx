import React, { useState, useEffect } from 'react';
import StudentManager from './components/StudentManager';
import SlotMachine from './components/SlotMachine';
import TeacherSecretMenu from './components/TeacherSecretMenu';
import './index.css';

function App() {
  // 상태 관리
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('randomPicker_students');
    if (saved) return JSON.parse(saved);
    return []; // 요구사항에 따라 빈 목록에서 시작
  });

  const [secretList, setSecretList] = useState([]);

  // 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('randomPicker_students', JSON.stringify(students));
  }, [students]);

  const addStudent = (name) => {
    if (!name.trim()) return;
    const newStudent = { id: Date.now() + Math.random(), name: name.trim(), active: true };
    setStudents([...students, newStudent]);
  };

  const addMultipleStudents = (namesString) => {
    const names = namesString.split(/[\n,]+/).map(n => n.trim()).filter(n => n);
    const newStudents = names.map(name => ({
      id: Date.now() + Math.random(),
      name,
      active: true
    }));
    setStudents([...students, ...newStudents]);
  };

  const toggleStudentStatus = (id) => {
    setStudents(students.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="header-title">Random Picker</h1>
      
      <div className="panel">
        <StudentManager 
          students={students} 
          onAdd={addStudent}
          onAddMultiple={addMultipleStudents}
          onToggle={toggleStudentStatus}
          onDelete={deleteStudent}
        />
      </div>

      <div className="panel">
        <SlotMachine 
          students={students} 
          secretList={secretList}
          setSecretList={setSecretList}
        />
      </div>

      <TeacherSecretMenu 
        students={students}
        secretList={secretList}
        setSecretList={setSecretList}
      />
    </div>
  );
}

export default App;
