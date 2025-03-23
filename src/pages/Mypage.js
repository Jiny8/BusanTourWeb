import React from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

function Mypage({
  member,
  setMember,
  data,
  setData,
  qna,
  setQna,
  mytour,
  setMyTour,
  position,
  notice,
}) {
  const navigate = useNavigate();
  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".3rem .6rem",
    margin: ".2rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  };

  return (
    <>
      <p
        style={{
          display: "block",
          flexWrap: "wrap",
          padding: "2rem 13rem",
          justifyContent: "center",
        }}
      >
        <img
          src={member[position].src}
          alt={member[position].alt}
          title={member[position].title}
          width={member[position].width}
        />
        <p>
          <h2> {member[position].name}</h2>
          <button style={btnStyle} onClick={() => navigate("/MypageSet")}>
            <span>회원정보</span>
          </button>
          {member[position].name === "admin" ? (
            <span></span>
          ) : (
            <span>
              <p>
                <hr />내 구매정보 보기
                <ul>
                  {mytour.map((i) => (
                    <li key={i.idx2}>
                      <Link to={"/TourBuylist/" + i.idx2} key={i.idx2}>
                        {i.tourname}
                      </Link>
                    </li>
                  ))}
                </ul>
              </p>
              <p>
                <hr />내 리뷰글 보기
                <ul>
                  {data.map((i) => (
                    <li key={i.idx}>
                      <Link to={"/review/" + i.idx} key={i.idx}>
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </p>
              <p>
                <hr />내 문의글 보기
                <ul>
                  {qna.map((i) => (
                    <li key={i.idx4}>
                      <Link to={"/QnADetail/" + i.idx4} key={i.idx4}>
                        작성번호{i.idx4}_:_{i.name}_{i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </p>
            </span>
          )}
        </p>
      </p>
    </>
  );
}

export default Mypage;
