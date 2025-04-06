import React from 'react'
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import titleImage from "../assets/images/title.png"
const Layout = ({ member, position }) => {
  
  const CategoriesBlock = styled.div`  
    display: flex;
    justify-content: center;   
    margin: 0 auto;  
    padding-top: 10px;
    padding-bottom: 10px;
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
            {member[position].ID == "" ? "로그인" : "로그아웃"}
          </button>

          <span
            style={{ float: "right", padding: "1.5rem 1rem 1.5rem 1.5rem", fontWeight: "bold" }}
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
      <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.infoSection}>
          <h4 style={styles.heading}>회사 정보</h4>
          <p>대표: 박효진</p>
          <p>주소: 부산시 연제구 연제동</p>
        </div>
        <div style={styles.contactSection}>
          <h4 style={styles.heading}>문의</h4>
          <p>전화: 070-1235-5678</p>
          <p>이메일: busan@example.com</p>
        </div>
        <div style={styles.copyright}>
          <p>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

const btnStyleLogin = {
  float: "right",
  color: "white",
  background: "#22B8CF",
  padding: ".3rem 1rem",
  marginTop: "1rem",
  marginRight: "3rem",
  border: "1px #22B8CF",
  borderRadius: ".40rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  cursor: "pointer"
};

const btnStyleHome = {
  textalign: "center",
  color: "#22B8CF",
  background: "white",
  padding: "0.1rem 3rem",
  margin: "0.5rem",
  border: "1px #22B8CF",
  borderRadius: ".40rem",
  font: "2.5rem italic bold",
  lineHeight: 1,
  cursor: "pointer",
};

const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infoSection: {
    marginBottom: "20px",
  },
  contactSection: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  copyright: {
    borderTop: "1px solid #444",
    marginTop: "20px",
    paddingTop: "10px",
    fontSize: "12px",
    color: "#aaa",
  },
};

export default Layout;
