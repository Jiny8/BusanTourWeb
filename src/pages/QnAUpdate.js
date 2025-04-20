import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function QnAUpdate({ qna, setQna }) {
  const navigate = useNavigate();
  const { idx4 } = useParams();
  let tmp = qna.filter((info) => info.idx4 == idx4)[0];
  //tmp 에는 내가 선택한 위치의 [idx,title,createdBy,concat] 한줄(값)을 담고있음
  const [title, setTitle] = useState(tmp.title);
  const [name, setName] = useState(tmp.name);
  const [content, setContent] = useState(tmp.content);

  //onClick에 여러기능 실행시, 한 {}안에 넣어주고 한줄끝마다 ;를 넣어 구분시켜줘야함
  //...tmp1[idx], 대신 idx: data[idx].idx 를 입력 해주어도 가능함
  const Update = () => {
    let tmp1 = qna;
    let id = qna.indexOf(tmp);
    tmp1[id] = {
      ...tmp1[id],
      title: title,
      name: name,
      content: content,
    };
    setQna(tmp1);
  };

  return (
    <div style={styles.container}>
    <h2 style={styles.header}>문의글 수정</h2>
    <div style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="title" style={styles.label}>
        제 목
        </label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            style={styles.textarea}
          />
        </div>
        <div style={{ display: "inline" }}>
        <button
          style={styles.button}
          onClick={() => {
            alert("문의글을 수정하였습니다.");
            Update(tmp.idx4);
            navigate("/QnA");
          }}
        >
          수정완료
        </button>
        <button
          style={styles.button} onClick={() => navigate("/QnA")}
        >
          취소
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
  buttonRed: {
    display: "block",
    float: "right",
    marginRight: "1rem",
    backgroundColor: "#FF0000",
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
export default QnAUpdate;
