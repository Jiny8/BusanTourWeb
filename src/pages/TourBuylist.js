import React, { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

function TourBuylist({
  alltour,
  setAlltour,
  tour,
  setTour,
  mytour,
  setMyTour,
}) {
  const navigate = useNavigate();
  const { idxx, idx2 } = useParams();
  const [tourname, setTourname] = useState("");
  const [Date, setData] = useState("");
  const [Date2, setData2] = useState("");
  const [All, setAll] = useState("");
  const [adult, setAdult] = useState("");
  const [kid, setKid] = useState("");
  const [totalprice, setTotalprice] = useState("");

  let tmp = mytour.filter((info, i) => info.idx2 == idx2)[0];
  const onRemove = (idx2) => {
    setMyTour(mytour.filter((info, i) => info.idx2 != idx2));
  };

  return (
    <>
      구매한 여행상품내역 상세보기
      <hr />
      <h1>{tmp.tourname}</h1>
      <hr />
      <p>
        <p>출국일자 {tmp.Date}</p>
        입국일자 {tmp.Date2}
        <p>인원수 {tmp.ALL}명</p>
        <p>성인 {tmp.adult}명</p>
        <p>유아 {tmp.kid}명</p>
        <hr />
        <b>결제금액 : {tmp.totalprice} 원</b>
      </p>
      <>
        <button
          onClick={() => {
            onRemove(idx2);
            navigate("/Mypage");
          }}
        >
          삭제
        </button>
        <button onClick={() => navigate("/Mypage")}>목록</button>
      </>
    </>
  );
}

export default TourBuylist;
