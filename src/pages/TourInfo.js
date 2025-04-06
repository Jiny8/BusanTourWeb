import React, { useState, useEffect } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

function TourInfo({ tourinfo, setNotice, member, setMember, position }) {
  const navigate = useNavigate();
  const [tempTourInfo, setTempTourInfo] = useState(tourinfo);
  const [datas, setDatas] = useState(tourinfo);
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

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textAlign: "center",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    text: {
      padding: "15px",
    },
    title: {
      fontSize: "18px",
      margin: "10px 0 5px",
      color: "#333",
    },
    description: {
      fontSize: "14px",
      color: "#666",
    },
  };
  //(버튼색상)기본 #22B8CF, 선택 #368AFF
  async function getDatas() {
    fetch(
      "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=ZlHtWroJ5vtZoCdZ24%2FYg25%2B%2F6l4ZCjrp19iGdmsJKQOng6tH28umr0KycuccrDvDy8ANWGyQHAO3iTL7Hdqyw%3D%3D&listYN=Y&arrange=A&contentTypeId=15&areaCode=6&sigunguCode=&cat1=&cat2=&cat3=&_type=json",
      {
        method: "GET",
      }
    )
      .then((res) => {
        //fetch를 통해 받아온 res객체 안에
        //ok 프로퍼티가 있음
        if (!res.ok) {
          throw Error("could not fetch the data that resource");
        }
        return res.json();
      })
      .then((data) => {
        setDatas(data.response.body.items.item);
      })
      .catch((err) => {
        console.log(err.message);
        //에러시 Loading메세지 사라지고
        //에러메세지만 보이도록 설정
      });
  }
  useEffect(() => {
    getDatas();
  }, []);
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
    <div style={styles.container}>
        {datas.map((item) => (
          <Link to={"/Tourbook/" + item.idxx} key={item.idxx} className="no-underline">
            <div key={item.idxx} style={styles.card}>
              <img src={item.firstimage} alt={item.title} style={styles.image} />
              <div style={styles.text}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/*month.map((m, i) => (
        <button
          key={i}
          style={{
            color: "white",
            background: (i)==btnColor ? "#368AFF" : "#22B8CF",
            padding: ".2rem .6rem",
            margin: ".5rem",
            border: "1px #22B8CF",
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
        ))*/}

     {/*<div style={divGroupStyle}>
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
      
        </div>*/}
    </>
  );
}


export default TourInfo;
