import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QnAWrite({ setData, data }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  //onClick에 여러기능 실행시, 한 {}안에 넣어주고 한줄끝마다 ;를 넣어 구분시켜줘야함//

  const Add = () => {
    //hint : concat 함수(추가하는부분)
    setData([
      ...data,
      {
        idx: data.length,
        title: title,
        content: content,
        createdBy: name
      }
    ]);
  };

  return (
    <>
      "QNA 작성공간 입니다. 작업중~~~~~~"
      <p>
        제 목
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder={"제목"}
        />
      </p>
      <p>
        작성자
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder={"작성자"}
        />
      </p>
      <p>
        내용
        <textarea
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          placeholder={"내용"}
        />
      </p>
      <button
        onClick={() => {
          alert(title + "//" + name + "//" + text + " 를 저장하였습니다.");
          Add();
          navigate("/Reviews");
        }}
      >
        저장
      </button>
      <button onClick={() => navigate("/Reviews")}>취소</button>
    </>
  );
}

export default QnAWrite;
