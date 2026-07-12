import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const FAQS = [
  { q: "여행 취소/환불 문의", a: "항공권 전체취소는 온라인/모바일 예약내역(마이페이지)에서 가능합니다. 카드환불은 약 5~7일 소요됩니다." },
  { q: "결제 방법", a: "무통장입금, ARS 카드결제, 인터넷 결제 세 가지 방식으로 결제 가능합니다." },
  { q: "e-ticket 출력", a: "예약 및 결제 후 발권 완료 시 마이페이지에서 출력 가능합니다." },
  { q: "항공시간 및 출발지 변경", a: "항공시간 및 출발지 변경은 가능하나 요금 차액이 발생할 수 있습니다." },
  { q: "기존 예약 고객정보 및 날짜 변경", a: "발권 전이라면 온라인상담을 통해 취소료 없이 변경 가능합니다. 발권 후에는 패널티가 적용됩니다." },
];

export default function QnA() {
  const [qna, setQna] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    fetch("http://localhost:8080/qna")
      .then((r) => r.json())
      .then(setQna)
      .catch(console.error);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !name.trim()) return;
    const res = await fetch("http://localhost:8080/qna/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      body: JSON.stringify({ name, title, content }),
    });
    const saved = await res.json();
    setQna((prev) => [...prev, saved]);
    setTitle(""); setName(""); setContent("");
  };

  return (
    <div className="page-container">

      {/* FAQ 아코디언 */}
      <div style={{ background: "#fff", borderRadius: 10, padding: "1.5rem 2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "2rem" }}>
        <h2 className="section-title" style={{ marginBottom: "1.2rem" }}>자주 묻는 질문 TOP 5</h2>
        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ width: "100%", textAlign: "left", padding: "1rem 0", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "1rem", fontWeight: 600, color: "#333", display: "flex", justifyContent: "space-between" }}
            >
              <span>Q. {faq.q}</span>
              <span style={{ color: "#22B8CF" }}>{openFaq === i ? "▲" : "▼"}</span>
            </button>
            {openFaq === i && (
              <div style={{ padding: "0.6rem 0 1rem 1rem", color: "#555", fontSize: "0.95rem", lineHeight: 1.7, background: "#f8fdfe", borderRadius: 6 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 문의 목록 */}
      <div className="section-header">
        <h2 className="section-title">문의 게시판</h2>
      </div>
      <div className="board-wrap" style={{ marginBottom: "2rem" }}>
        <div className="board-header">
          <span>제목</span>
          <span>작성자</span>
          <span className="board-meta date">날짜</span>
        </div>
        {qna.length === 0 && (
          <div style={{ padding: "2rem", textAlign: "center", color: "#aaa" }}>등록된 문의가 없습니다.</div>
        )}
        {qna.map((item) => (
          <Link to={`/QnADetail/${item.id}`} key={item.id} className="no-underline">
            <div className="board-row">
              <span className="board-title">{item.title}</span>
              <span className="board-meta">{item.name}</span>
              <span className="board-meta date">{item.createdAt}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* 인라인 문의 작성 */}
      <div style={{ background: "#fff", borderRadius: 10, padding: "1.5rem 2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h3 className="section-title" style={{ marginBottom: "1.2rem" }}>문의 작성</h3>
        <form onSubmit={submit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="form-group">
              <label>제목</label>
              <input className="form-input" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>작성자</label>
              <input className="form-input" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="form-group">
            <label>내용</label>
            <textarea className="form-input" placeholder="문의 내용을 입력하세요" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className="btn btn-primary">문의하기</button>
          </div>
        </form>
      </div>

    </div>
  );
}
