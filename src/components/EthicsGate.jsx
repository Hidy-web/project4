import React from 'react';

const EthicsGate = ({ onAgree }) => {
  const guidelines = [
    {
      category: '주도성',
      sub: '활용 목적',
      title: '생성형 AI를 쓰기 전, \'왜\' 쓰는지 말할 수 있어야 해요.',
      desc: '생성형 AI는 내 생각을 대신해주는 게 아니라, 내 생각을 도와주는 도구임을 기억하세요. 지금 하는 활동에 정말 도움이 될지 먼저 고민해요.',
      icon: '🎯'
    },
    {
      category: '주도성',
      sub: '주도적 학습',
      title: '생성형 AI에게 물어보기 전, 내 생각을 먼저 말해요.',
      desc: '막막할 때 바로 묻고 싶겠지만, 먼저 스스로 시도해 보아야 나의 성장에 도움이 돼요. 내 아이디어를 먼저 정리한 뒤 활용하세요.',
      icon: '💡'
    },
    {
      category: '주도성',
      sub: '비판적 검증',
      title: '생성형 AI가 틀릴 수 있다는 점을 알아요.',
      desc: '틀린 정보를 마치 사실인 것처럼 제시하기도 하므로, 알려준 내용은 항상 \'정말 맞을까?\' 하고 한 번 더 확인하는 습관을 가져요.',
      icon: '🔍'
    },
    {
      category: '주도성',
      sub: '사고의 확장',
      title: '생성형 AI와 함께 상상하며 내 생각을 더 크게 키워요.',
      desc: '결과물을 그대로 사용하지 않고, 나의 경험과 생각을 더하여 나만의 색깔을 담은 최종 결과물을 만들어요.',
      icon: '🚀'
    },
    {
      category: '안전성',
      sub: '안전과 관계',
      title: '나의 정보와 비밀을 말하지 않아요.',
      desc: '이름, 주소, 학교 같은 개인정보는 알려주면 안돼요. 고민이 있다면 AI보다 실제 사람(친구, 부모님, 선생님)과 대화를 나누어요.',
      icon: '🛡️'
    },
    {
      category: '투명성',
      sub: '투명성·윤리',
      title: '생성형 AI의 도움을 받았다면 정직하게 이야기해요.',
      desc: '어느 부분이 AI의 것이고 어느 부분이 나의 것인지 명확히 밝히는 것은 나 자신을 속이지 않는 정직한 태도예요.',
      icon: '✨'
    }
  ];

  return (
    <div className="ethics-gate-container">
      <div className="ethics-header">
        <h1>생성형 AI 윤리 핵심 가이드</h1>
        <p>본 활동을 시작하기 전에 아래 가이드를 꼭 읽어주세요.</p>
      </div>

      <div className="ethics-grid">
        {guidelines.map((guide, index) => (
          <div key={index} className="ethics-card">
            <div className="ethics-card-header">
              <span className="ethics-icon">{guide.icon}</span>
              <div className="ethics-badges">
                <span className="badge-primary">{guide.category}</span>
                <span className="badge-secondary">{guide.sub}</span>
              </div>
            </div>
            <h3 className="ethics-title">{guide.title}</h3>
            <p className="ethics-desc">{guide.desc}</p>
          </div>
        ))}
      </div>

      <div className="ethics-action">
        <button className="btn btn-primary ethics-agree-btn" onClick={onAgree}>
          나는 윤리 핵심가이드를 빠짐없이 읽고 이를 실천하겠습니다.
        </button>
      </div>
    </div>
  );
};

export default EthicsGate;
