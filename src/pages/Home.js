import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Home.css";
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const SLIDE_IMAGES = [
  img1, img2, img3, img4
];

export default function Home() {
  const [tour, setTour] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/tours/featured")
      .then((r) => r.json())
      .then(setTour)
      .catch(console.error);
  }, []);

  return (
    <>
      {/* 슬라이더 */}
      <div className="slider">
        {SLIDE_IMAGES.map((src, i) => (
          <div key={i} className="slide">
            <img src={src} alt={`슬라이드${i + 1}`} />
          </div>
        ))}
      </div>

      {/* 추천 투어 TOP3 */}
      <div className="home-featured">
        <h2 className="subtitle-highlight">대표 여행상품 TOP 3</h2>
        <div className="tour-grid">
          {tour.map((item) => (
            <Link to={`/Tourbook/${item.id}`} key={item.id} className="no-underline">
              <div className="tour-card">
                <img src={item.src} alt={item.title} />
                <div className="tour-card-body">
                  <p className="tour-card-title">{item.title}</p>
                  <p className="tour-card-sub">
                    성인 {item.adultPrice?.toLocaleString()}원 / 유아 {item.kidPrice?.toLocaleString()}원
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="more-btn-card" onClick={() => navigate("/TourList")}>
            추천 여행<br />더보기 ▶
          </div>
        </div>
      </div>
    </>
  );
}
