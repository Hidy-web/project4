import React, { useState } from 'react';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="app-footer">
        <div className="footer-links">
          <button className="btn-text" onClick={() => setShowTerms(true)}>이용약관</button>
          <span className="footer-divider">|</span>
          <button className="btn-text" onClick={() => setShowPrivacy(true)}>개인정보처리방침</button>
        </div>
        <div className="footer-info">
          <p>정보관리책임자: 피카츄 (pika@chu.com)</p>
          <p>Copyright © 2026 명신초. All rights reserved.</p>
        </div>
      </footer>

      {/* 이용약관 모달 */}
      {showTerms && (
        <div className="secret-modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="secret-modal terms-modal" onClick={e => e.stopPropagation()}>
            <h2>랜덤 발표자 추출 웹앱 이용약관</h2>
            <div className="modal-content-scroll">
              <p><strong>제 1 조 (목적)</strong><br />본 약관은 사용자가 '랜덤 발표자 추출 웹앱(이하 서비스)'을 이용함에 있어 서비스와 사용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
              <br/>
              <p><strong>제 2 조 (서비스의 제공)</strong><br />
              1. 본 서비스는 교육 및 이벤트 목적으로 참여자 목록을 무작위로 추출해주는 기능을 무료로 제공합니다.<br />
              2. 본 서비스는 사용자 브라우저의 로컬 스토리지를 활용하여 구동되며, 별도의 회원가입이나 로그인을 요구하지 않습니다.</p>
              <br/>
              <p><strong>제 3 조 (사용자의 의무)</strong><br />
              1. 사용자는 서비스를 이용할 때 타인의 명예를 훼손하거나 불법적인 데이터를 입력해서는 안 됩니다.<br />
              2. 서비스 내에 저장된 데이터는 전적으로 사용자의 기기(브라우저)에 보관되므로, 데이터 유실에 대한 책임은 사용자 본인에게 있습니다.</p>
              <br/>
              <p><strong>제 4 조 (서비스의 변경 및 중지)</strong><br />본 서비스는 개발자의 사정이나 유지보수 등의 이유로 예고 없이 변경되거나 중지될 수 있으며, 이로 인해 발생하는 불이익에 대해 책임지지 않습니다.</p>
              <br/>
              <p><strong>제 5 조 (면책 조항)</strong><br />
              1. 본 서비스는 입력된 데이터를 서버에 백업하지 않으므로 기기 변경, 브라우저 캐시 삭제 등으로 인한 데이터 손실에 대해 책임지지 않습니다.<br />
              2. 본 서비스를 활용한 추첨 결과로 인해 발생하는 사용자 간의 분쟁에 대해 개발자는 어떠한 책임도 지지 않습니다.</p>
              <br/>
              <p><strong>제 6 조 (윤리 가이드라인 준수)</strong><br />사용자는 본 서비스 이용 전 반드시 '생성형 AI 윤리 핵심 가이드'를 읽고 동의해야 하며, 이를 실천할 의무가 있습니다.</p>
            </div>
            <div className="modal-actions" style={{marginTop: '20px', textAlign: 'center'}}>
              <button className="btn btn-primary" onClick={() => setShowTerms(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}

      {/* 개인정보처리방침 모달 */}
      {showPrivacy && (
        <div className="secret-modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="secret-modal terms-modal" onClick={e => e.stopPropagation()}>
            <h2>랜덤 발표자 추출 웹앱 개인정보처리방침</h2>
            <div className="modal-content-scroll">
              <p><strong>1. 개인정보의 처리 목적</strong><br />본 웹앱(랜덤 발표자 추출)은 별도의 서버를 운영하지 않으며, 사용자의 개인정보를 수집하거나 외부로 전송하지 않습니다. 입력하신 학생(참여자) 이름 데이터는 오직 <strong>사용자 본인의 브라우저(로컬 스토리지)</strong> 내에만 저장되며, 추첨 기능 제공 목적으로만 사용됩니다.</p>
              <br/>
              <p><strong>2. 수집하는 개인정보 항목</strong><br />- 필수 수집 항목: 없음<br />- 브라우저 저장 항목: 참여자 이름 리스트 (서버로 전송되지 않음)</p>
              <br/>
              <p><strong>3. 개인정보의 보유 및 이용 기간</strong><br />본 웹앱은 데이터를 서버에 저장하지 않으므로, 브라우저의 캐시 및 로컬 스토리지를 삭제하면 입력하신 데이터는 즉시 파기됩니다.</p>
              <br/>
              <p><strong>4. 개인정보의 제3자 제공 및 위탁</strong><br />본 웹앱은 어떠한 외부 기관이나 제3자에게도 개인정보를 제공하거나 위탁하지 않습니다.</p>
              <br/>
              <p><strong>5. 사용자의 권리와 그 행사 방법</strong><br />사용자는 언제든지 본인의 브라우저 설정에서 로컬 스토리지를 초기화하여 입력한 데이터를 삭제할 수 있습니다.</p>
              <br/>
              <p><strong>6. 개인정보 보호책임자</strong><br />본 웹앱은 로컬 환경에서 구동되므로 별도의 보호책임자를 두지 않습니다. 앱 사용 중 발생하는 데이터 관리는 전적으로 사용자 본인에게 있습니다.</p>
            </div>
            <div className="modal-actions" style={{marginTop: '20px', textAlign: 'center'}}>
              <button className="btn btn-primary" onClick={() => setShowPrivacy(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
