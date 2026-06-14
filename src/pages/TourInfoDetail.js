import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Kakao from "../utils/Kakao";

export default function TourInfoDetail({ tourinfo }) {
  const { idxx } = useParams();
  const navigate = useNavigate();

  const item = tourinfo.find((info) => String(info.idxx) === String(idxx));

  if (!item) {
    return (
      <div className="page-container" style={{ textAlign: "center", padding: "3rem" }}>
        <p style={{ color: "#aaa" }}>정보를 찾을 수 없습니다.</p>
        <button className="btn btn-primary" style={{ marginTop: "1rem" }} onClick={() => navigate("/TourInfo")}>
          목록으로
        </button>
      </div>
    );
  }

  return (
    <div className="page-container-sm" style={{ paddingBottom: "3rem" }}>
      <h2 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>{item.title}</h2>
      <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "1.2rem" }}>{item.dateDetail}</p>

      <img
        src={item.src}
        alt={item.alt}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "1.5rem" }}
      />

      <hr className="divider" />

      <h3 style={{ marginBottom: "1rem" }}>{item.name}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "#444", lineHeight: 1.8 }}>
        <p>- 일시 : {item.DateTime}</p>
        <p>- 장소 : {item.place}</p>
        <p>- 공연행사 : {item.content}</p>
        {item.organizedBy && <p>- 주최 : {item.organizedBy}</p>}
      </div>

      <Kakao X={item.X} Y={item.Y} />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="btn btn-primary" onClick={() => navigate("/TourInfo")}>
          목록으로
        </button>
      </div>
    </div>
  );
}
