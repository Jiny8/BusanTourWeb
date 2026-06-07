import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [PW2, setPW2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!ID.trim() || !PW.trim()) { setError("아이디와 비밀번호를 입력해주세요."); return; }
    if (ID.length < 3) { setError("아이디는 3자 이상 입력해주세요."); return; }
    if (PW.length < 4) { setError("비밀번호는 4자 이상 입력해주세요."); return; }
    if (PW !== PW2) { setError("비밀번호가 일치하지 않습니다."); return; }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/members/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: ID, pw: PW }),
      });
      if (res.ok) {
        setSuccess("회원가입이 완료되었습니다! 로그인해주세요.");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        const msg = await res.text();
        setError(msg || "회원가입에 실패했습니다.");
      }
    } catch {
      setError("서버에 연결할 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>회원가입</h2>
        <p className="auth-subtitle">부산어때와 함께 여행을 시작하세요</p>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={submit}>
          <div className="form-group">
            <label>아이디</label>
            <input
              className="form-input"
              type="text"
              placeholder="3자 이상 입력"
              value={ID}
              onChange={(e) => setID(e.target.value)}
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              className="form-input"
              type="password"
              placeholder="4자 이상 입력"
              value={PW}
              onChange={(e) => setPW(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>비밀번호 확인</label>
            <input
              className="form-input"
              type="password"
              placeholder="비밀번호 재입력"
              value={PW2}
              onChange={(e) => setPW2(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ marginTop: "0.5rem" }}>
            {loading ? "처리 중..." : "회원가입"}
          </button>
        </form>

        <div className="auth-footer">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
