import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function QnADetail({ qna, setQna }) {
  const navigate = useNavigate();
  const { idx4 } = useParams();
  //useParams()는 객체호출하는 기능 >> 예시, {idx: 0, title:"z"}객체에서 idx를 꺼내쓸수있다.//
  //tmp 에서 필터 작업후, [0]를 해준이유는 필터,참인값 =>> {[idx:0 ...]}에서 (0번째)값을 선택하기위함//
  let tmp = qna.filter((info) => info.idx4 == idx4)[0];
  const onRemove = (idx4) => {
    setQna(qna.filter((info) => info.idx4 != idx4));
  };
  //filter설명: onRemove = (idx)에서 (idx)안은 매게체 이다.
  //사용시, filter((info, i) => info.idx 으로 사용한다. info는 i(번째)를 도는 "한 줄"을 의미한다.

  return (
  <>
    <div style={styles.container}>
    <h6 style={styles.header}>{tmp.title}</h6>
    <div style={styles.meta}>
      <span style={styles.author}>작성자: {tmp.createdBy}</span>
      <span style={styles.date}>작성일: 2025-01-23</span>
    </div>
    <div style={styles.content}>
      <p>{tmp.content}</p>
    </div>

    <div style={{ display: "inline" }}>
      <button
        style={styles.button}
        onClick={() => navigate("/QnA/up/" + tmp.idx4)}
      >
        수정
      </button>
      <button
        style={styles.button}
        onClick={() => {
          onRemove(idx4);
          navigate("/QnA");
        }}
      >
        삭제
      </button>
      <button style={styles.button} onClick={() => navigate("/QnA")}>
        목록
      </button>
    </div>
  </div>
  </>
  );
}

const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0px 20px 60px 20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px",
  },
  author: {
    fontWeight: "bold",
  },
  date: {
    fontStyle: "italic",
  },
  content: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    margin: "1rem",
  },
  button: {
    display: "block",
    float: "right",
    marginRight: "1rem",
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

export default QnADetail;
