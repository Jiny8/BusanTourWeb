import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MypageSet({ member, setMember, position }) {
  const navigate = useNavigate();
  const [id, setId] = useState(member[position].ID);
  const [pw, setPw] = useState(member[position].PW);
  const [name, setName] = useState(member[position].name);
  const [phone, setPhone] = useState(member[position].phone);
  const [address, setAddress] = useState(member[position].address);
  const [bank, setBank] = useState(member[position].bank);
  const [account, setAccount] = useState(member[position].account);
  const Update = () => {
    /*myinfo는 배열형태가 아님, 수정기능 구현할때 주의할것(*[] 대괄호미사용)*/
    let tmp = member;
    tmp = {
      ...tmp,
      PW: pw,
      name: name,
      phone: phone,
      address: address,
      bank: bank,
      account: account,
    };
    setMember({ ...tmp });
  };

  return (
    <div style={styles.container}>
        <div style={styles.header}></div>
      <p>
        <img
          src={member[position].src}
          alt={member[position].alt}
          title={member[position].title}
          width={member[position].width}
        />
      </p>
      <p>
        <h1>{member[position].name} 님</h1>
      </p>
      <p>아이디 {member[position].ID}</p>
      <p>
        비밀번호
        <input
          onChange={(e) => {
            setPw(e.target.value);
          }}
          value={pw}
        />
      </p>
      <p>
        연락처
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
        />
      </p>
      <p>
        주 소
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
      </p>

      <button style={styles.button} onClick={() => navigate("/Mypage")}>
        <span>취소</span>
      </button>
      <button
        style={styles.button}
        onClick={() => {
          navigate("/Mypage");
          Update();
        }}
      >
        <span>저장</span>
      </button>
    </div>
  );
}
const styles = {
  container: {
    width: "30%",
    margin: "0 auto",
    marginBottom: "2rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr 2fr",
    backgroundColor: "#f5f5f5",
    padding: "10px 15px",
    fontWeight: "bold",
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
    color: "#333",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr 2fr",
    padding: "10px 15px",
    fontSize: "14px",
    borderBottom: "1px solid #f0f0f0",
    color: "#555",
  },
  columnTitle: {
    textAlign: "left",
    padding: "2px",
  },
  columnAuthor: {
    textAlign: "center",
    padding: "2px",
  },
  columnDate: {
    textAlign: "right",
    padding: "2px",
  },
  button: {
    display: "block",
    float: "right",
    margin: "1rem",
    backgroundColor: "#22B8CF",
    color: "#fff",
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
};
export default MypageSet;
