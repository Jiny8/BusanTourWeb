import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QnAUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/qna/${id}`)
      .then((r) => r.json())
      .then((d) => { setTitle(d.title); setName(d.name); setContent(d.content); })
      .catch(() => alert("문의글을 불러오지 못했습니다."));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/qna/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, title, content }),
    }).catch(() => alert("수정에 실패했습니다."));
    navigate("/QnA");
  };

  return (
    <div className="page-container-sm">
      <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>문의글 수정</h2>
      <div style={{ background: "#fff", borderRadius: 10, padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>제목</label>
            <input className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>작성자</label>
            <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>내용</label>
            <textarea className="form-input" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: "0.7rem", justifyContent: "flex-end" }}>
            <button type="button" className="btn btn-outline" onClick={() => navigate("/QnA")}>취소</button>
            <button type="submit" className="btn btn-primary">수정 완료</button>
          </div>
        </form>
      </div>
    </div>
  );
}
