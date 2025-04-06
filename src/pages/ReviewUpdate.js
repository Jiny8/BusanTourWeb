import React, { useState } from "react";
import { useParams,useNavigate,
} from "react-router-dom";

function ReviewUpdate({ setData, data }) {
  const navigate = useNavigate();
  const { idx } = useParams();
  let tmp = data.filter((info, i) => info.idx == idx)[0];
  //tmp 에는 내가 선택한 위치의 [idx,title,createdBy,concat] 한줄(값)을 담고있음
  const [title, setTitle] = useState(tmp.title);
  const [name, setName] = useState(tmp.createdBy);
  const [content, setContent] = useState(tmp.content);

  //onClick에 여러기능 실행시, 한 {}안에 넣어주고 한줄끝마다 ;를 넣어 구분시켜줘야함
  //...tmp1[idx], 대신 idx: data[idx].idx 를 입력 해주어도 가능함
  const Update = (i) => {
    let tmp1 = data;
    let id = data.indexOf(tmp);
    tmp1[id] = {
      ...tmp1[id],
      title: title,
      content: content,
      createdBy: name,
    };
    setData(tmp1);
  };

  return (
    <>
      리뷰글 수정하는 공간 입니다.
      <hr />
      <p>
        제 목
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </p>
      <p>
        작성자
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </p>
      <p>
        내용
        <textarea
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
      </p>
      <button
        onClick={() => {
          alert(title + "//" + name + "//" + content + " 를 수정하였습니다.");
          Update(tmp.idx);
          navigate("/Reviews");
        }}
      >
        수정완료
      </button>
      <button onClick={() => navigate("/Reviews")}>취소</button>
    </>
  );
}

export default ReviewUpdate;
