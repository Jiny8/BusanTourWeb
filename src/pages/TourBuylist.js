import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function TourBuylist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/bookings/${id}`)
      .then((r) => r.json())
      .then(setBooking)
      .catch(() => alert("예약 정보를 불러오지 못했습니다."));
  }, [id]);

  const onRemove = async () => {
    if (!window.confirm("예약을 취소하시겠습니까?")) return;
    await fetch(`http://localhost:8080/bookings/${id}`, {
      method: "DELETE",
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
    navigate("/Mypage");
  };

  if (!booking) {
    return <div style={{ padding: "3rem", textAlign: "center", color: "#aaa" }}>불러오는 중...</div>;
  }

  return (
    <div className="page-container-sm">
      <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>예약 상세</h2>

      <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <div style={{ background: "linear-gradient(135deg,#22B8CF,#1a9aad)", padding: "1.5rem 2rem", color: "#fff" }}>
          <p style={{ fontSize: "0.85rem", opacity: 0.85 }}>예약번호 #{booking.id}</p>
          <h3 style={{ margin: "0.3rem 0 0", fontSize: "1.4rem" }}>{booking.tourName}</h3>
        </div>

        <div style={{ padding: "1.5rem 2rem" }}>
          {[
            { label: "출국일자", value: booking.startDate },
            { label: "입국일자", value: booking.endDate },
            { label: "총 인원", value: `${booking.totalPeople}명` },
            { label: "성인", value: `${booking.adults}명` },
            { label: "유아", value: `${booking.kids}명` },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #f8f8f8" }}>
              <span style={{ color: "#888", fontSize: "0.9rem" }}>{label}</span>
              <span style={{ fontWeight: 600 }}>{value}</span>
            </div>
          ))}

          <div style={{ borderTop: "2px solid #f0f0f0", marginTop: "1.2rem", paddingTop: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, color: "#555" }}>결제 금액</span>
            <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#22B8CF" }}>
              {booking.totalPrice?.toLocaleString()}원
            </span>
          </div>
        </div>

        <div style={{ padding: "0 2rem 1.5rem", display: "flex", gap: "0.7rem", justifyContent: "flex-end" }}>
          <button className="btn btn-outline" onClick={() => navigate("/Mypage")}>목록</button>
          <button className="btn btn-danger" onClick={onRemove}>예약 취소</button>
        </div>
      </div>
    </div>
  );
}
