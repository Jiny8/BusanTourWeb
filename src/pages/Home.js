import React from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import "../styles/Home.css";

function Home({ tour }) {
  const navigate = useNavigate();
  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".3rem 1rem",
    margin: "2rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  };
  const divGroupStyle = {
    position: "static",
  };
  const divStyle = {
    display: "inline-block",
    margin: "10px",
  };
  return (
    <>
      <div className="slider">
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110556661_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1200px"
          />
        </div>
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110556317_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1200px"
          />
        </div>
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20220413144137777_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1200px"
          />
        </div>
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110601843_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1200px"
          />
        </div>
      </div>
      <p />
      <h3>* 대표 여행상품 TOP3</h3>
      <div style={divGroupStyle}>
        {tour.map((i) => (
          <div style={divStyle} key={i.idxx}>
            <Link to={"/Tourbook/" + i.idxx} key={i.idxx}>
              <p />
              <img src={i.src} alt={i.alt} title={i.title} width={i.width} />
              <p />
              <p />
              {i.name}
              <p />
            </Link>
          </div>
        ))}
      </div>
      <button
        style={btnStyle}
        onClick={() => {
          navigate("/TourList");
        }}
      >
        추천 더보기 ▶▶
      </button>
      <p />
      <p />
    </>
  );
}

export default Home;
