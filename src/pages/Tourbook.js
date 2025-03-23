import React, { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

function Tourbook({ alltour, setAlltour, tour, setTour, mytour, setMyTour }) {
  const navigate = useNavigate();
  const { idxx, idx2 } = useParams();
  // const [tourname, setTourname] = useState("");
  const [Date, setData] = useState("");
  const [Date2, setData2] = useState("");
  const [All, setAll] = useState("");
  const [adult, setAdult] = useState("");
  const [kid, setKid] = useState("");
  const [totalprice, setTotalprice] = useState("");
  const Add = () => {
    setMyTour([
      ...mytour,
      {
        idx2: mytour.length,
        tourname: tmp.name,
        Date: Date,
        Date2: Date2,
        ALL: All,
        adult: adult,
        kid: kid,
        totalprice: totalprice,
      },
    ]);
    console.log([
      ...mytour,
      {
        idx2: mytour.length,
        tourname: tmp.name,
        Date: Date,
        Date2: Date2,
        ALL: All,
        adult: adult,
        kid: kid,
        totalprice: totalprice,
      },
    ]);
  };

  let tmp2 = mytour.filter((info, i) => info.idx2 == idx2)[0];
  let tmp = alltour.filter((info, i) => info.idxx == idxx)[0];
  const onRemove = (idxx) => {
    setAlltour(alltour.filter((info, i) => info.idxx != idxx));
  };
  const ak = Number(adult) + Number(kid);
  /*Price = (idxx, k)함수에서 k 는 kid의 e.target.value를 가져온 것. */
  const Price = (idxx, k, a) => {
    let ppp =
      Number(alltour[idxx].adultPrice) * Number(a) +
      Number(alltour[idxx].kidPrice) * Number(k);
    console.log(
      alltour[idxx].adultPrice +
        " " +
        adult +
        "/" +
        alltour[idxx].kidPrice +
        " " +
        kid
    );
    setTotalprice(ppp);
  };

  return (
    <>
      여행상품 상세보기
      <hr />
      <h1>{tmp.name}</h1>
      <hr />
      <p>
        <img src={tmp.src} alt={tmp.alt} title={tmp.title} width={tmp.width} />
      </p>
      <p>
        <p>
          출국일자
          <input
            onChange={(e) => {
              setData(e.target.value);
            }}
            value={Date}
            placeholder={""}
            type="date"
          />
        </p>
        입국일자
        <input
          onChange={(e) => {
            setData2(e.target.value);
          }}
          value={Date2}
          placeholder={""}
          type="date"
        />
        <p>
          인원수
          <input
            onChange={(e) => {
              setAll(e.target.value);
            }}
            value={ak}
          />
          명
        </p>
        <p>
          성인
          <input
            onChange={(e) => {
              setAdult(e.target.value);
              Price(idxx, kid, e.target.value);
            }}
            value={adult}
            placeholder={""}
            type="number"
          />
          명
        </p>
        <p>
          유아
          <input
            onChange={(e) => {
              setKid(e.target.value);
              Price(idxx, e.target.value, adult);
            }}
            value={kid}
            placeholder={""}
            type="number"
          />
          명
        </p>
        <hr />
        <b>총 예상금액 : {totalprice} 원</b>
      </p>
      <>
        <button
          onClick={() => {
            navigate("/");
            Add(idx2);
          }}
        >
          예약완료
        </button>
        <button
          onClick={() => {
            onRemove(idxx);
            navigate("/Reviews");
          }}
        >
          삭제
        </button>
        <button onClick={() => navigate("/")}>목록</button>
      </>
    </>
  );
}

export default Tourbook;
