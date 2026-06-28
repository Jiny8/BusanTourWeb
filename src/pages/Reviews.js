import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Reviews() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((r) => r.json())
      .then(setData)
      .catch(() => alert("불러오지 못했습니다."));
  }, [location]);

  return (
    <div className="page-container">
      <h2 className="section-title" style={{ marginBottom: "1.2rem" }}>여행 리뷰</h2>

      <div className="board-wrap">
        <div className="board-header">
          <span>제목</span>
          <span>작성자</span>
          <span className="board-meta date">작성일</span>
        </div>

        {data.length === 0 && (
          <div style={{ padding: "2rem", textAlign: "center", color: "#aaa" }}>
            첫 번째 리뷰를 작성해보세요!
          </div>
        )}

        {data.map((post) => (
          <Link to={`/review/${post.id}`} key={post.id} className="no-underline">
            <div className="board-row">
              <span className="board-title">{post.title}</span>
              <span className="board-meta">{post.author}</span>
              <span className="board-meta date">{post.createdAt}</span>
            </div>
          </Link>
        ))}

        <div style={{ padding: "0.8rem 1.2rem", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "flex-end" }}>
          <button className="btn btn-primary" onClick={() => navigate("/review/write")}>
            + 글쓰기
          </button>
        </div>
      </div>
    </div>
  );
}
