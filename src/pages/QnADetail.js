import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QnADetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qna, setQna] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/qna/${id}`)
      .then((r) => r.json())
      .then(setQna)
      .catch(() => alert("문의글을 불러오지 못했습니다."));
  }, [id]);

  const onRemove = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    await fetch(`http://localhost:8080/qna/${id}`, { method: "DELETE" });
    navigate("/QnA");
  };

  if (!qna) {
    return <div style={{ padding: "2rem", textAlign: "center", color: "#aaa" }}>불러오는 중...</div>;
  }

  return (
    <div className="page-container-sm">
      <div style={{ background: "#fff", borderRadius: 10, padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>{qna.title}</h2>
        <div style={{ color: "#888", fontSize: "0.9rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #eee" }}>
          작성자: <b>{qna.name}</b> &nbsp;|&nbsp; {qna.createdAt}
        </div>
        <p style={{ lineHeight: 1.8, color: "#444", whiteSpace: "pre-wrap" }}>{qna.content}</p>
        <div style={{ display: "flex", gap: "0.7rem", justifyContent: "flex-end", marginTop: "2rem" }}>
          <button className="btn btn-outline" onClick={() => navigate("/QnA")}>목록</button>
          <button className="btn btn-outline" onClick={() => navigate(`/QnA/up/${qna.id}`)}>수정</button>
          <button className="btn btn-danger" onClick={onRemove}>삭제</button>
        </div>
      </div>
    </div>
  );
}
