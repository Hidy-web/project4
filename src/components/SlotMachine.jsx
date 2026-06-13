import React, { useState } from 'react';

function SlotMachine({ students, secretList, setSecretList }) {
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [displayNames, setDisplayNames] = useState([]);

  const activeStudents = students.filter(s => s.active);

  const startDraw = () => {
    if (activeStudents.length < count) {
      alert(`Not enough active students (${activeStudents.length} available).`);
      return;
    }

    setIsSpinning(true);
    setResults([]);
    
    // 초기 디스플레이 설정
    setDisplayNames(Array(count).fill('?'));

    // 진짜 결과 결정
    let finalResults = [];
    let currentSecretList = [...secretList];
    
    for (let i = 0; i < count; i++) {
      if (currentSecretList.length > 0) {
        const secretName = currentSecretList.shift();
        const studentObj = activeStudents.find(s => s.name === secretName);
        if (studentObj) {
          finalResults.push(studentObj);
        } else {
          finalResults.push({ id: `secret-${i}`, name: secretName });
        }
      } else {
        // 무작위 추출 (중복 없이)
        const available = activeStudents.filter(s => !finalResults.find(r => r.id === s.id));
        if (available.length > 0) {
          const randomIndex = Math.floor(Math.random() * available.length);
          finalResults.push(available[randomIndex]);
        }
      }
    }

    // 비밀 목록 업데이트 (사용된 것 제거)
    setSecretList(currentSecretList);

    // 슬롯머신 애니메이션 효과
    let spins = 0;
    const maxSpins = 30; // 애니메이션 프레임 수
    const interval = setInterval(() => {
      spins++;
      
      // 스피닝 중에는 무작위 이름 표시
      const currentDisplays = Array(count).fill('').map(() => {
        return activeStudents[Math.floor(Math.random() * activeStudents.length)].name;
      });
      setDisplayNames(currentDisplays);

      if (spins >= maxSpins) {
        clearInterval(interval);
        setIsSpinning(false);
        setResults(finalResults);
        setDisplayNames(finalResults.map(r => r.name));
      }
    }, 50); // 50ms 마다 변경
  };

  return (
    <div className="slot-machine-container">
      <div className="draw-controls" style={{ marginBottom: '20px' }}>
        <div className="count-selector">
          <label>Number of draws:</label>
          <input 
            type="number" 
            min="1" 
            max={Math.max(1, activeStudents.length)} 
            value={count} 
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="input-field"
            disabled={isSpinning}
          />
        </div>
      </div>

      <div className="slots-wrapper">
        {displayNames.length > 0 ? (
          displayNames.map((name, index) => (
            <div key={index} className={`slot ${!isSpinning && results.length > 0 ? 'highlight' : ''}`}>
              <div className="slot-inner">
                {name}
              </div>
            </div>
          ))
        ) : (
          <div className="slot">
            <div className="slot-inner">?</div>
          </div>
        )}
      </div>

      <button 
        className="draw-btn" 
        onClick={startDraw} 
        disabled={isSpinning || activeStudents.length === 0}
      >
        {isSpinning ? 'Drawing...' : 'Start Draw'}
      </button>
    </div>
  );
}

export default SlotMachine;
