import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Reviews(props) {
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
    margin: "15px",
  };
  const divStyle = {
    display: "block",
    margin: "5rem 5rem",
    padding: "10px",
  };
  const navigate = useNavigate();

  return (
    <div style={divGroupStyle}>
      
      {props.data.map((i) => (
        <div style={divStyle} key={i.idx}>
          <Link to={"/review/" + i.idx} key={i.idx}>
          <div style={{display: "inline-block"}}>
             {i.createdBy}
           </div>
            {i.title}
           <br/>{i.date}{i.contents}
          </Link>
          <p/>
          <hr color="#E4E4E4" />
        </div>
      ))}  
    
      <p>
        <button style={btnStyle} onClick={() => navigate("/review/write")}>
          글쓰기
        </button>
      </p>
    </div>
  );
}

export default Reviews;
