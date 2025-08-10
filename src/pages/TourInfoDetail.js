import React from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import Kakao from "../utils/Kakao";

function TourInfoDetail({ tourinfo, setTourinfo }) {
  const btnStyle = {
    color: "white",
    background: "#22B8CF",
    padding: ".2rem .6rem",
    margin: "0 auto",
    display : "block",
    border: "1px #22B8CF",
    borderRadius: ".40rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    float: "center",
  };
  const screenStyle = {
    padding: "3rem 3rem",
    margin: "3rem 3rem",
    float: "center",
  };
  const navigate = useNavigate();
  const { idxx } = useParams();
  let tmp = tourinfo.filter((info, i) => info.idxx == idxx)[0];

  return (
    <>
  <p>목록</p>
    <div style={screenStyle}>
      <h2>{tmp.title}</h2>
      <p>{tmp.dateDetail}</p>
      <img src={tmp.src} alt={tmp.alt} title={tmp.title} width={600} height={800}/>
      <hr />
      <p>
        <h3>{tmp.name}</h3>
      </p>
      <p>- 일시 : {tmp.DateTime}</p>
      <p>- 장소 : {tmp.place}</p>
      <p>- 공연행사 : {tmp.content}</p>
      <p>- 주최 : {tmp.organizedBy}</p>
      <p>{tmp.text5}</p>
      <p>{tmp.text6}</p>
      {/*<Kakao X={tmp.X}Y={tmp.Y}/>
        <p>
          <button style={btnStyle} onClick={() => navigate("/TourInfo")}>
            목록
          </button>
        </p>*/}
      </div>
    </>
  );
}

export default TourInfoDetail;
