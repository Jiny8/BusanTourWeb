import React from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

function Mypage({
  member,
  setMember,
  data,
  setData,
  qna,
  setQna,
  mytour,
  setMyTour,
  position,
  notice,
}) {
  const navigate = useNavigate();
  
  return (
    <>
        <img
          src={member[position].src}
          alt={member[position].alt}
          title={member[position].title}
          width={member[position].width}
        />
        <button style={styles.btnStyleMy} onClick={() => navigate("/MypageSet")}>
            <span>회원정보</span>
          </button>
        <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.columnTitle}>나의 여행리뷰</span>
          <span style={styles.columnDate}>작성일</span>
        </div>
          {member[position].name === "admin" ? (
            <span></span>
          ) : (
            <span>
              <p>
                  {data.map((i) => (
                    <div key={i.idx}>
                      <Link to={"/review/" + i.idx} key={i.idx} className="no-underline">
                        <div key={i.idx} style={styles.row}>
                         <span style={styles.columnTitle}>{i.title}</span>
                         <span style={styles.columnDate}>{i.date}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
              </p>
            </span>
          )}
          </div>

          <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.columnTitle}>나의 문의글</span>
          <span style={styles.columnDate}>작성일</span>
        </div>
          {member[position].name === "admin" ? (
            <span></span>
          ) : (
            <span>
              {qna.map((i) => (
             <Link to={"/QnADetail/" + i.idx4} key={i.idx4} className="no-underline">
              <div key={i.idx4} style={styles.row}>
              <span style={styles.columnTitle}>{i.title}</span>
              <span style={styles.columnDate}>{i.date}</span>
              </div>
            </Link>
                ))}
            </span>
          )}
          </div>
    </>
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
  btnStyleMy: {
    color: "white",
    background: "#22B8CF",
    padding: ".3rem .6rem",
    margin: ".2rem",
    border: "1px #22B8CF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  },
};

export default Mypage;