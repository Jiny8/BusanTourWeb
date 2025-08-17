import React, { useState, useEffect } from "react";
import {
  useNavigate,
} from "react-router-dom";

function Login({ member, position, setPosition }) {
  function save(id, pw) {
    let member = { id: id, pw: pw };
    sessionStorage.setItem("member", JSON.stringify(member));
  }

  function load() {
    let member = JSON.parse(sessionStorage.getItem("member"));
    if (member?.id === "admin") {
      setPosition("1");
      navigate("/");
    } else if (member?.id === "user") {
      setPosition("2");
      navigate("/");
    } else {
      setPosition("0");
    }
  }
  useEffect(() => {
    //useEffect -> 단 1회만 실행되는 기능
    load();
    //load();를 해줌으로 새로고침에도 세션된 로그인의 정보를 받아올수있음음
  }, []);

  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".2rem 7rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };
  const btnStyleInput = {
    padding: "2rem 5rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 auto",
    alignItems: 'center' 
  };

  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const navigate = useNavigate();
  const connect = () => {
    const fetchIDPW = async () => {
      //"fetch" = 서버에 HTTP 요청을 보내서 데이터를 받아오는 것(자바스크립트의 fetch() 함수와 비슷한 역할)
      await fetch("http://localhost:8080/members/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ id: ID, pw: PW }),
      })
        .then((res) => {
          
          return res.json();
        })
        .then((res) => {
          console.log(res)
          if (ID == res.id && PW == res.pw) {
            //return alert은 return 이후는 실행되지않으니, setPosition("admin");은 그 전에입력해줄것!
            setPosition("1");
            save(ID, PW);
            navigate("/");
            return alert("admin(관리자)님, 반갑습니다.");
          } else {
            return alert("아이디 와 비밀번호가 일치하지않습니다.");
          }
        });
    };
    fetchIDPW();
  };
  return (
    <>
      <h2>{member[position].name}</h2>

      <p style={btnStyleInput}>
        <h3>
          아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            onChange={(e) => {
              setID(e.target.value);
            }}
            value={ID}
            placeholder={""}
            type="text"
            id="ID"
          />
        </h3>
        <h3>
          비밀번호&nbsp;&nbsp;&nbsp;
          <input
            onChange={(e) => {
              setPW(e.target.value);
            }}
            value={PW}
            placeholder={""}
            type="password"
          />
        </h3>
        <p>
          <button
            style={btnStyle}
            onClick={() => {
              connect();
            }}
          >
            로그인
          </button>
        </p>
      </p>
    </>
  );
}

export default Login;
