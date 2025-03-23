import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function QnAUpdate({ qna, setQna }) {
  const navigate = useNavigate();
  const { idx4 } = useParams();
  let tmp = qna.filter((info, i) => info.idx4 == idx4)[0];
  //tmp 에는 내가 선택한 위치의 [idx,title,createdBy,concat] 한줄(값)을 담고있음
  const [Title, setTitle] = useState(tmp.title);
  const [Name, setName] = useState(tmp.name);
  const [Text, setText] = useState(tmp.text);

  //onClick에 여러기능 실행시, 한 {}안에 넣어주고 한줄끝마다 ;를 넣어 구분시켜줘야함
  //...tmp1[idx], 대신 idx: data[idx].idx 를 입력 해주어도 가능함
  const Update = (i) => {
    let tmp1 = qna;
    let id = qna.indexOf(tmp);
    tmp1[id] = {
      ...tmp1[id],
      title: Title,
      text: Text,
      name: Name,
    };
    setQna(tmp1);
  };

  return (
    <>
      {"\"나의 문의글을 수정하는 공간입니다.\""}
      <hr />
      <p>
        제 목
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={Title}
        />
      </p>
      <p>
        작성자
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={Name}
        />
      </p>
      <p>
        내용
        <textarea
          type={Text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={Text}
        />
      </p>
      <button
        onClick={() => {
          alert(Title + "//" + Name + "//" + Text + " 를 수정하였습니다.");
          Update(tmp.idx4);
          navigate("/QnA");
        }}
      >
        수정완료
      </button>
      <button onClick={() => navigate("/QnA")}>취소</button>
    </>
  );
}

export default QnAUpdate;
