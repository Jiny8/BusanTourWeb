import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/QnA.css";

function QnA({ qna, setQna }) {

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const Add = () => {
    setQna([
      ...qna,
      {
        idx4: qna.length,
        name: name,
        title: title,
        content: content,
      },
    ]);
    setTitle("");
    setName("");
    setContent("");
  };
 
  const navigate = useNavigate();
  return (
    <>
         <div style={styles.container}>
              <div style={styles.header}>
                <span style={styles.columnTitle}>작성번호</span>
                <span style={styles.columnAuthor}>작성자</span>
                <span style={styles.columnDate}>글제목</span>
              </div>
              {qna.map((i) => (
                <Link
                  to={"/QnADetail/" + i.idx4}
                  key={i.idx4}
                  className="no-underline"
                >
                  <div key={i.idx} style={styles.row}>
                    <span style={styles.columnTitle}>{i.idx4}</span>
                    <span style={styles.columnAuthor}>{i.name}</span>
                    <span style={styles.columnDate}>{i.title}</span>
                  </div>
                </Link>
              ))}
         </div>

      <div style={styles.containerWrite}>
      <h2 style={styles.headerWrite}>문의글작성 </h2>
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
            alert("문의글을 저장하였습니다.");
            Add();
            navigate("/QnA");
          }}
        >
          작성완료
        </button>
      </div>
    </div>
     
    </>
  );
}

const styles = {
  btnStyle: {
    color: "white",
    background: "#22B8CF",
    padding: ".3rem .6rem",
    margin: "2rem",
    border: "1px #22B8CF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  },
  btnStyleInput: {
    padding: "0rem 2rem",
  },
  container: {
    width: "80%",
    margin: "20px auto",
    marginBottom: "2rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  containerWrite: {
    width: "78%",
    margin: "20px auto",
    marginBottom: "2rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0px 20px 20px 20px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  headerWrite: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
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
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    boxSizing: "border-box",
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

export default QnA;