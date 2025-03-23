import React from "react";
import { useParams, useNavigate } from "react-router-dom";
//props기능 >> { data, setData } 또는 (props) (>>이경우, props.이름)로 사용가능!//
function ReviewDetail(props) {
  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".2rem .6rem",
    margin: "0 auto",
    display : "block",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    float: "center",
  };
  const divGroupStyle = {
    position: "static",
    margin: "5rem"
  };
  const navigate = useNavigate();
  const { idx } = useParams();
  //useParams()는 객체호출하는 기능 >> 예시, {idx: 0, title:"z"}객체에서 idx를 꺼내쓸수있다.//
  let tmp = props.data.filter((info, i) => info.idx == idx)[0];
  //tmp 에서 filter필터 작업후, [0]를 해준이유는 필터,참인값 =>> {[idx:0 ...]}에서 (0번째)값을 선택하기위함//
  const onRemove = (idx) => {
    props.setData(props.data.filter((info, i) => info.idx != idx));
  };
  //filter설명: onRemove = (idx)에서 (idx)안은 매게체 이다.
  //사용시, filter((info, i) => info.idx 으로 사용한다. info는 i(번째)를 도는 "한 줄"을 의미한다.

  return (
    <>
      <div style={divGroupStyle}>
        <h3>{tmp.title}</h3>
        <p>{tmp.createdBy}</p>
        <p>{tmp.date}</p>
        <p>{tmp.contents}</p>
      </div>
      <div style={{display: "inline"}}>
          <button style={btnStyle}onClick={() => navigate("/review/up/" + tmp.idx)}>수정</button>
          <button
          style={btnStyle}
            onClick={() => {
              onRemove(idx);
              navigate("/Reviews");
            }}
          >
            삭제
          </button>
          <button style={btnStyle}onClick={() => navigate("/Reviews")}>목록</button>
      </div>
    </>
  );
}

export default ReviewDetail;
