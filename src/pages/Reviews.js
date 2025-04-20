import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Reviews({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.columnTitle}>제목</span>
          <span style={styles.columnAuthor}>작성자</span>
          <span style={styles.columnDate}>작성일</span>
        </div>
        {data.map((post) => (
          <Link
            to={"/review/" + post.idx}
            key={post.idx}
            className="no-underline"
          >
            <div key={post.idx} style={styles.row}>
              <span style={styles.columnTitle}>{post.title}</span>
              <span style={styles.columnAuthor}>{post.createdBy}</span>
              <span style={styles.columnDate}>{post.date}</span>
            </div>
          </Link>
        ))}
        <div>
          <button
            style={styles.button}
            onClick={() => {
              navigate("/review/write");
            }}
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    marginBottom: "2rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr 2fr",
    backgroundColor: "#f5f5f5",
    padding: "10px 15px",
    fontWeight: "bold",
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
    color: "#333",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr 2fr",
    padding: "10px 15px",
    fontSize: "14px",
    borderBottom: "1px solid #f0f0f0",
    color: "#555",
  },
  columnTitle: {
    textAlign: "left",
    padding: "2px",
  },
  columnAuthor: {
    textAlign: "center",
    padding: "2px",
  },
  columnDate: {
    textAlign: "right",
    padding: "2px",
  },
  button: {
    display: "block",
    float: "right",
    margin: "1rem",
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

export default Reviews;