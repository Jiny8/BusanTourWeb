import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function MypageSet() {
  const navigate = useNavigate();
  const { user, accessToken } = useAuthStore();
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const update = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    if (!pw.trim()) { setError("새 비밀번호를 입력해주세요."); return; }
    if (pw.length < 4) { setError("비밀번호는 4자 이상 입력해주세요."); return; }
    if (pw !== pw2) { setError("비밀번호가 일치하지 않습니다."); return; }

    try {
      const res = await fetch(`http://localhost:8080/members/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify({ pw }),
      });
      if (res.ok) {
        setSuccess("비밀번호가 변경되었습니다.");
        setPw(""); setPw2("");
      } else {
        setError("수정에 실패했습니다.");
      }
    } catch {
      setError("서버 오류가 발생했습니다.");
    }
  };

  return (
    <div className="page-container-sm">
      <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>회원정보 수정</h2>

      <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        {/* 프로필 헤더 */}
        <div style={{ background: "linear-gradient(135deg,#22B8CF,#1a9aad)", padding: "1.8rem 2rem", display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", color: "#fff", fontWeight: 700, flexShrink: 0 }}>
            {user?.id?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>아이디</p>
            <h3 style={{ margin: 0, color: "#fff", fontSize: "1.3rem" }}>{user?.id}</h3>
          </div>
        </div>

        {/* 폼 */}
        <div style={{ padding: "2rem" }}>
          {error && <div className="auth-error">{error}</div>}
          {success && <div className="auth-success">{success}</div>}

          <form onSubmit={update}>
            <div className="form-group">
              <label>새 비밀번호</label>
              <input className="form-input" type="password" placeholder="4자 이상 입력"
                value={pw} onChange={(e) => setPw(e.target.value)} />
            </div>
            <div className="form-group">
              <label>비밀번호 확인</label>
              <input className="form-input" type="password" placeholder="비밀번호 재입력"
                value={pw2} onChange={(e) => setPw2(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: "0.7rem", justifyContent: "flex-end", marginTop: "0.5rem" }}>
              <button type="button" className="btn btn-outline" onClick={() => navigate("/Mypage")}>취소</button>
              <button type="submit" className="btn btn-primary">저장</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
