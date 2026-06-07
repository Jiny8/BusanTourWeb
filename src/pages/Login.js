import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function Login() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const setUser = useAuthStore((s) => s.setUser);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const connect = async (e) => {
    e.preventDefault();
    if (!ID.trim() || !PW.trim()) { setError("아이디와 비밀번호를 입력해주세요."); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/members/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id: ID, pw: PW }),
      });
      if (!res.ok) { setError("아이디 또는 비밀번호가 일치하지 않습니다."); return; }
      const data = await res.json();
      setAccessToken(data.token);
      setUser(data.user);
      navigate("/");
    } catch {
      setError("서버에 연결할 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>부산어때</h2>
        <p className="auth-subtitle">여행의 시작, 부산어때</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={connect}>
          <div className="form-group">
            <label>아이디</label>
            <input
              className="form-input"
              type="text"
              placeholder="아이디 입력"
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
              placeholder="비밀번호 입력"
              value={PW}
              onChange={(e) => setPW(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ marginTop: "0.5rem" }}>
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <div className="auth-footer">
          계정이 없으신가요? <Link to="/register">회원가입</Link>
        </div>
      </div>
    </div>
  );
}
