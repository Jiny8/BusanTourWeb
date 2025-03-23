import React from 'react'
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import titleImage from "../assets/images/title.png"
const Layout = ({ member, position, setPosition, notice }) => {
  const btnStyle = {
    color: "black",
    background: "white",
    padding: ".2rem .7rem",
    margin: ".3rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    font: "1rem italic bold",
    lineHeight: 1,
  };
  const btnStyleLogin = {
    float: "right",
    color: "white",
    background: "#6CC0FF",
    padding: ".3rem 1rem",
    marginTop: "1rem",
    marginRight: "3rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };
  const btnStyleHome = {
    textalign: "center",
    color: "#6CC0FF",
    background: "white",
    padding: "0.1rem 3rem",
    margin: "0.5rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    font: "2.5rem italic bold",
    lineHeight: 1,
  };

  const CategoriesBlock = styled.div`  
    display: flex;
    justify-content: center;   
    margin: 0 auto;  
    padding-top: 10px; /* 위쪽 패딩 */
    padding-bottom: 10px; /* 아래쪽 패딩 */
    @media screen and (max-width: 768px) {    
      width: 100%;    
      overflow-x: auto;  
    }`; 
    const Category = styled(NavLink)`  
      font-size: 1.125rem;  
      cursor: pointer;  
      white-space: pre;
      text-decoration: none;  
      color: inherit;  
      padding-bottom: 0.25rem;   
      &:hover {    
        color: #495057;
      }
      &.active {    
        font-weight: 600;    
        border-bottom: 2px solid #22b8cf;    
        color: #22b8cf;    
        &:hover {      
          color: #3bc9db;    
        }  
      }
      & + & {    
        margin-left: 6rem;  
      }`;
  const navigate = useNavigate();
  const [logname, setLogname] = useState("로그인");

  const Categories = () => {  
    const categories = [
      { title:"HOME", link:"/" },
      { title:"추천여행", link:"/TourList" },
      { title:"축제.공연", link:"/TourInfo" },
      { title:"여행리뷰", link:"/Reviews" },
      { title:"QnA", link:"/QnA" },
      { title:"마이페이지", link: "mypage"}
    ];

    return (    
      <CategoriesBlock>      
        {categories.map(c => (        
          <Category 
            key={c.name} 
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={`${c.link}`} >
              <span>{c.title}</span>
            </Category>
        ))}    
      </CategoriesBlock>  
    );
  }
  useEffect(() => {
    //let member = JSON.parse(sessionStorage.getItem("member"));
  }, []);

  const login = () => {
    if (position == 0) {
      navigate("/login");
      return alert("로그인 정보가 없습니다. 로그인 완료해주세요.");
    } else if (position != 0) {
      navigate("/Mypage");
    }
  };

  const logout = () => {
    let member = JSON.parse(sessionStorage.getItem("member"));
    member?.id === "admin" || member?.id === "user"
      ? sessionStorage.removeItem("member")
      : navigate("/login");
  };

  return (
    <>
      <nav>
        <p>
          <button
            style={btnStyleLogin}
            onClick={() => {
              logout();
            }}
          >
            <span>{member[position].ID == "" ? "로그인" : "로그아웃"}</span>
          </button>

          <span
            style={{ float: "right", padding: "0.5rem", fontWeight: "bold" }}
          >
            {member[position].name}
          </span>
        </p>
        <span>
          <button style={btnStyleHome} onClick={() => navigate("/")}>
            <img src={titleImage} alt="부산어때" width={300} height={120}/>
          </button>
        </span>
        <div>
            <Categories />
        </div>
      </nav>
      <div>
      </div>
      <Outlet />
      {/* <Outlet /> 의 아래 작성된 내용은 홈페이지의 하단*/}
      <hr color="#6CC0FF" />
      <ul>
        <h3>
          대표전화 {notice.tel}
          {" ( "}콜센터 {notice.officehours}
          {"  )"}
        </h3>
        <p>
          사업자 : {notice.name}
          {"  ("} {notice.corporatenumber}
          {"  )"}
        </p>
        <p> 소재지 : {notice.address}</p>
        <p> 입금계좌 : {notice.account}</p>
      </ul>
    </>
  );
};

export default Layout;
