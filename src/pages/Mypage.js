import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function Mypage() {
  const navigate = useNavigate();
  const { user, accessToken } = useAuthStore();
  const [reviews, setReviews] = useState([]);
  const [qnaList, setQnaList] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:8080/reviews?memberId=${user.id}`)
      .then((r) => r.json()).then(setReviews).catch(console.error);
    fetch(`http://localhost:8080/qna?memberId=${user.id}`)
      .then((r) => r.json()).then(setQnaList).catch(console.error);
    fetch("http://localhost:8080/bookings", {
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    }).then((r) => r.json()).then((d) => setBookings(Array.isArray(d) ? d : [])).catch(console.error);
  }, [user, accessToken]);

  return (
    <div className="page-container">

      {/* 프로필 헤더 */}
      <div style={{ background: "#fff", borderRadius: 12, padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#22B8CF,#1a9aad)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#fff", fontWeight: 700, flexShrink: 0 }}>
          {user?.id?.charAt(0).toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: "1.4rem" }}>{user?.id} 님</h2>
          <p style={{ color: "#888", margin: "0.3rem 0 0", fontSize: "0.9rem" }}>
            {user?.id === "admin" ? "관리자" : "일반 회원"}
          </p>
        </div>
        <button className="btn btn-outline" onClick={() => navigate("/MypageSet")}>
          회원정보 수정
        </button>
      </div>

      {user?.id === "admin" ? (
        <div style={{ background: "#fff", borderRadius: 10, padding: "2rem", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <p style={{ color: "#888" }}>관리자 계정입니다.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>

          <Section title="내 구매정보" count={bookings.length}>
            {bookings.length === 0
              ? <Empty text="예약 내역이 없습니다." />
              : bookings.map((b) => (
                  <Link to={`/TourBuylist/${b.id}`} key={b.id} className="no-underline">
                    <div style={listItem}>
                      {b.tourName}
                      <span style={badge}>{b.startDate}</span>
                    </div>
                  </Link>
                ))}
          </Section>

          <Section title="내 리뷰글" count={reviews.length}>
            {reviews.length === 0
              ? <Empty text="작성한 리뷰가 없습니다." />
              : reviews.map((r) => (
                  <Link to={`/review/${r.id}`} key={r.id} className="no-underline">
                    <div style={listItem}>
                      {r.title}
                      <span style={badge}>{r.createdAt}</span>
                    </div>
                  </Link>
                ))}
          </Section>

          <Section title="내 문의글" count={qnaList.length}>
            {qnaList.length === 0
              ? <Empty text="작성한 문의글이 없습니다." />
              : qnaList.map((q) => (
                  <Link to={`/QnADetail/${q.id}`} key={q.id} className="no-underline">
                    <div style={listItem}>{q.title}</div>
                  </Link>
                ))}
          </Section>

        </div>
      )}
    </div>
  );
}

function Section({ title, count, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: 10, padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{title}</h3>
        <span style={{ background: "#e8f9fc", color: "#22B8CF", borderRadius: 20, padding: "0.15rem 0.6rem", fontSize: "0.8rem", fontWeight: 700 }}>
          {count}
        </span>
      </div>
      {children}
    </div>
  );
}

function Empty({ text }) {
  return <p style={{ color: "#bbb", fontSize: "0.9rem", textAlign: "center", padding: "1rem 0" }}>{text}</p>;
}

const listItem = {
  padding: "0.7rem 0.5rem", borderBottom: "1px solid #f4f4f4",
  fontSize: "0.95rem", color: "#333", display: "flex", justifyContent: "space-between",
  alignItems: "center", cursor: "pointer", borderRadius: 6, transition: "background 0.15s",
};
const badge = { fontSize: "0.78rem", color: "#aaa", whiteSpace: "nowrap", marginLeft: "0.5rem" };
