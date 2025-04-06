import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReviewWrite({ setData, data }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  //onClick에 여러기능 실행시, 한 {}안에 넣어주고 한줄끝마다 ;를 넣어 구분시켜줘야함//
  const add = () => {
    //hint : concat 함수(추가하는부분)
    setData([
      ...data,
      {
        idx: data.length,
        title: title,
        content: content,
        createdBy: name,
      },
    ]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>여행 후기</h2>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>
            제목
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>
            작성자
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="작성자 이름을 입력하세요"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={styles.textarea}
          />
        </div>
        <button
          style={styles.button}
          onClick={() => {
            alert("리뷰를 저장하였습니다.\n참여해주셔서 감사합니다.");
            add();
            navigate("/Reviews");
          }}
        >
          작성 완료
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0px 20px 20px 20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
  },
  button: {
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

export default ReviewWrite;
