import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=ZlHtWroJ5vtZoCdZ24%2FYg25%2B%2F6l4ZCjrp19iGdmsJKQOng6tH28umr0KycuccrDvDy8ANWGyQHAO3iTL7Hdqyw%3D%3D&listYN=Y&arrange=A&contentTypeId=15&areaCode=6&sigunguCode=&cat1=&cat2=&cat3=&_type=json";

export default function TourInfo({ tourinfo }) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => setDatas(data.response.body.items.item || []))
      .catch(() => setDatas(tourinfo || []))
      .finally(() => setLoading(false));
  }, []);

  const handleClick = (item, i) => {
    // 공공API 데이터는 상세 미지원, 정적 데이터(idxx 존재)만 상세 이동
    if (item.idxx !== undefined) {
      navigate(`/TourInfoDetail/${item.idxx}`);
    }
  };

  return (
    <div className="page-container">
      <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>축제 · 공연</h2>
      <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
        부산의 다양한 축제와 공연을 만나보세요.
      </p>

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem", color: "#aaa" }}>불러오는 중...</div>
      ) : (
        <div className="tour-grid">
          {datas.map((item, i) => (
            <div
              key={item.contentid || item.idxx || i}
              className="tour-card"
              onClick={() => handleClick(item, i)}
              style={{ cursor: item.idxx !== undefined ? "pointer" : "default" }}
            >
              <img
                src={item.firstimage || item.src || "https://via.placeholder.com/300x160?text=No+Image"}
                alt={item.title}
                onError={(e) => { e.target.src = "https://via.placeholder.com/300x160?text=No+Image"; }}
              />
              <div className="tour-card-body">
                <p className="tour-card-title">{item.title}</p>
                {item.addr1 && <p className="tour-card-sub">{item.addr1}</p>}
                {item.date && <p className="tour-card-sub">{item.date}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
