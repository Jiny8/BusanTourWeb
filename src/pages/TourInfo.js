import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

function TourInfo({ tourinfo, setNotice, member, setMember, position }) {
  const navigate = useNavigate();
  const [tempTourInfo, setTempTourInfo] = useState(tourinfo);
  
  const [btnColor, setBtnColor] = useState();
  const month = [
    "전체",
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  //(버튼색상)기본 #6CC0FF, 선택 #368AFF

  const divGroupStyle = {
    position: "static",
  };
  const divStyle = {
    display: "inline-block",
    margin: "2rem 2rem",
    padding: "10px",
  };
  const onClick = (month) => {
    month==0 ?
    setTempTourInfo(
      tourinfo
    ):
    setTempTourInfo(
      tourinfo.filter((info, i) => info.date.split(".")[1] * 1 == month)
    );
    
  };

  return (
    <>
      {month.map((m, i) => (
        <button
          key={i}
          style={{
            color: "white",
            background: (i)==btnColor ? "#368AFF" : "#6CC0FF",
            padding: ".2rem .6rem",
            margin: ".5rem",
            border: "1px #6CC0FF",
            borderRadius: ".40rem",
            fontSize: "1rem",
            lineHeight: 1.5,
            float: "center",
          }}
          onClick={() => {
            onClick(i);
            setBtnColor(i);
          }}
        >
          <span>{m}</span>
        </button>
      ))}

     <div style={divGroupStyle}>
        {tempTourInfo.map((i) => (
          <div key={i.idxx} style={divStyle}>
        
            <Link to={"/TourInfoDetail/" + i.idxx} key={i.idxx}>
              <p />
              <img src={i.src} alt={i.alt} title={i.title} width={180} height={200}/>
              <p />
              <p />
              <div style={{width:180}}>
              {i.name}
              </div>
              <p />
            </Link>
        
          </div>
        ))}
      
      </div>
    </>
  );
}

export default TourInfo;
