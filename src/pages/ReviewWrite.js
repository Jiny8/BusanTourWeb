import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/reviews/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author: name, content }),
    }).catch(() => alert("저장에 실패했습니다."));
    navigate("/reviews");
  };

  return (
    <div className="page-container-sm">
      <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>리뷰 작성</h2>
      <div style={{ background: "#fff", borderRadius: 10, padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>제목</label>
            <input className="form-input" type="text" placeholder="제목을 입력하세요"
              value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>작성자</label>
            <input className="form-input" type="text" placeholder="이름을 입력하세요"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>내용</label>
            <textarea className="form-input" placeholder="내용을 입력하세요"
              value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>
          <div style={{ display: "flex", gap: "0.7rem", justifyContent: "flex-end" }}>
            <button type="button" className="btn btn-outline" onClick={() => navigate("/reviews")}>취소</button>
            <button type="submit" className="btn btn-primary">작성 완료</button>
          </div>
        </form>
      </div>
    </div>
  );
}
