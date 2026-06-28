import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TourList() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tours")
      .then((r) => r.json())
      .then(setTours)
      .catch(console.error);
  }, []);

  return (
    <div className="page-container">
      <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>추천 여행상품</h2>
      <div className="tour-grid">
        {tours.map((item) => (
          <Link to={`/Tourbook/${item.id}`} key={item.id} className="no-underline">
            <div className="tour-card">
              <img src={item.src} alt={item.title} />
              <div className="tour-card-body">
                <p className="tour-card-title">{item.title}</p>
                <p className="tour-card-sub">성인 {item.adultPrice?.toLocaleString()}원</p>
                <p className="tour-card-sub">유아 {item.kidPrice?.toLocaleString()}원</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
