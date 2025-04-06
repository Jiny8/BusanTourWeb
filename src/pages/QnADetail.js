import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function QnADetail({ qna, setQna }) {
  const navigate = useNavigate();
  const { idx4 } = useParams();
  //useParams()는 객체호출하는 기능 >> 예시, {idx: 0, title:"z"}객체에서 idx를 꺼내쓸수있다.//
  //tmp 에서 필터 작업후, [0]를 해준이유는 필터,참인값 =>> {[idx:0 ...]}에서 (0번째)값을 선택하기위함//
  let tmp = qna.filter((info, i) => info.idx4 == idx4)[0];
  const onRemove = (idx4) => {
    setQna(qna.filter((info, i) => info.idx4 != idx4));
  };
  //filter설명: onRemove = (idx)에서 (idx)안은 매게체 이다.
  //사용시, filter((info, i) => info.idx 으로 사용한다. info는 i(번째)를 도는 "한 줄"을 의미한다.

  return (
    <>
      QnADetail 문의글 상세보기
      <hr />
      <h1>{tmp.title}</h1>
      <hr />
      <p>{tmp.name}</p>
      <p>{tmp.content}</p>
      <>
        <button onClick={() => navigate("/QnA/up/" + tmp.idx4)}>수정</button>
        <button
          onClick={() => {
            onRemove(idx4);
            navigate("/QnA");
          }}
        >
          삭제
        </button>
        <button onClick={() => navigate("/QnA")}>목록</button>
      </>
    </>
  );
}

export default QnADetail;
