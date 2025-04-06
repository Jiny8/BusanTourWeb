import React from "react";
import { Link } from "react-router-dom";

function TourList({ alltour }) {
  return (
    <>
      <div style={styles.container}>
        {alltour.map((item) => (
          <Link to={"/Tourbook/" + item.idxx} key={item.idxx} className="no-underline">
            <div key={item.idxx} style={styles.card}>
              <img src={item.src} alt={item.title} style={styles.image} />
              <div style={styles.text}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

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
};

export default TourList;
