import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ReviewDetail() {
  const { idx } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/reviews/${idx}`)
      .then((r) => r.json())
      .then(setReview)
      .catch(() => alert("리뷰를 불러오지 못했습니다."));
  }, [idx]);

  const deleteReview = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    await fetch(`http://localhost:8080/reviews/${idx}`, { method: "DELETE" });
    navigate("/reviews");
  };

  if (!review) {
    return <div style={{ padding: "2rem", textAlign: "center", color: "#aaa" }}>불러오는 중...</div>;
  }

  return (
    <div className="page-container-sm">
      <div style={{ background: "#fff", borderRadius: 10, padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>{review.title}</h2>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#888", fontSize: "0.9rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #eee" }}>
          <span>작성자: <b>{review.author}</b></span>
          <span>{review.createdAt}</span>
        </div>
        <p style={{ lineHeight: 1.8, color: "#444", whiteSpace: "pre-wrap" }}>{review.content}</p>
        <div style={{ display: "flex", gap: "0.7rem", justifyContent: "flex-end", marginTop: "2rem" }}>
          <button className="btn btn-outline" onClick={() => navigate("/reviews")}>목록</button>
          <button className="btn btn-outline" onClick={() => navigate(`/review/up/${idx}`)}>수정</button>
          <button className="btn btn-danger" onClick={deleteReview}>삭제</button>
        </div>
      </div>
    </div>
  );
}
