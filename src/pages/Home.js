import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ tour }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="slider">
        <div className="slide">
          <img
            src="https://www.busan.go.kr/comm/getImage?srvcId=MEDIA&upperNo=17500&fileTy=MEDIA&fileNo=1"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1600px"
          />
        </div>
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110556317_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1600px"
          />
        </div>
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110556661_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1600px"
          />
        </div>
        <div className="slide">
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20220413144137777_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="1600px"
          />
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.blueCard}>
          <h3
            className="subtitle-highlight"
            style={{ margintLeft: "2rem", padding: 50, textAlign: "center" }}
          >
            대표
            <br />
            여행상품
            <br />
            TOP3
          </h3>
        </div>
        {tour.map((item) => (
          <Link
            to={"/Tourbook/" + item.idxx}
            key={item.idxx}
            className="no-underline"
          >
            <div key={item.idxx} style={styles.card}>
              <img src={item.src} alt={item.title} style={styles.image} />
              <div style={styles.text}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
        <div style={styles.blueCard}>
          <h3
            className="subtitle-highlight"
            style={{
              margintLeft: "2rem",
              padding: 60,
              textAlign: "center",
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/TourList");
            }}
          >
            추천
            <br />
            더보기
            <br />
            ▶▶
          </h3>
        </div>
      </div>

      <p />
      <p />
    </>
  );
}

const btnStyle = {
  float: "right",
  color: "white",
  background: "#22B8CF",
  marginTop: "1rem",
  border: "1px #22B8CF",
  borderRadius: ".40rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  cursor: "pointer",
  padding: 50,
  textAlign: "center",
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  },
  blueCard: {
    backgroundColor: "#22B8CF",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  text: {
    padding: "15px",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0 5px",
    color: "#333",
  },
  description: {
    fontSize: "14px",
    color: "#666",
  },
  button: {
    display: "block",
    float: "right",
    margin: "1rem 2rem 1rem 1rem",
    backgroundColor: "#22B8CF",
    color: "#fff",
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
};

export default Home;
