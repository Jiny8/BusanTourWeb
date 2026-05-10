import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";
import titleImage from "../assets/images/title.png";

const categories = [
  { title: "HOME", link: "/" },
  { title: "추천여행", link: "/TourList" },
  { title: "축제·공연", link: "/TourInfo" },
  { title: "여행리뷰", link: "/reviews" },
  { title: "QnA", link: "/QnA" },
  { title: "마이페이지", link: "/Mypage" },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        .nav-links { display: flex; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      {/* ===== NAV ===== */}
      <nav style={navStyle}>
        <div style={navInner}>
          <button style={logoBtn} onClick={() => navigate("/")}>
            <img src={titleImage} alt="부산어때" style={{ height: 52, width: "auto" }} />
          </button>

          <div className="nav-links" style={{ gap: "0.2rem", alignItems: "center" }}>
            {categories.map((c) => (
              <NavLink
                key={c.title}
                to={c.link}
                end={c.link === "/"}
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? linkActive : {}) })}
              >
                {c.title}
              </NavLink>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <button
              className="hamburger"
              style={hamburgerBtn}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="메뉴"
            >
              <span style={bar(menuOpen, 0)} />
              <span style={bar(menuOpen, 1)} />
              <span style={bar(menuOpen, 2)} />
            </button>
          </div>
        </div>

        {/* Mobile 드롭다운 */}
        {menuOpen && (
          <div style={mobileMenu}>
            {categories.map((c) => (
              <NavLink
                key={c.title}
                to={c.link}
                end={c.link === "/"}
                style={({ isActive }) => ({ ...mobileLink, ...(isActive ? mobileLinkActive : {}) })}
                onClick={() => setMenuOpen(false)}
              >
                {c.title}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* ===== Main ===== */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* ===== Footer ===== */}
      <footer style={footerStyle}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "3rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, marginBottom: "0.4rem" }}>부산어때</p>
            <p>대표: 박효진 | 주소: 부산시 연제구 연제동</p>
            <p>사업자등록번호: 606-81-05296</p>
          </div>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, marginBottom: "0.4rem" }}>고객센터</p>
            <p>전화: 070-1235-5678 (09:00~18:00)</p>
            <p>이메일: busan@example.com</p>
          </div>
        </div>
        <p style={{ textAlign: "center", borderTop: "1px solid #2e3545", paddingTop: "1rem", color: "#888", fontSize: "0.8rem" }}>
          © 2025 부산어때. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const navStyle = {
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  position: "sticky",
  top: 0,
  zIndex: 100,
};
const navInner = {
  maxWidth: 1100, margin: "0 auto", padding: "0 1.2rem", height: 68,
  display: "flex", alignItems: "center", justifyContent: "space-between",
};
const logoBtn = { background: "none", border: "none", cursor: "pointer", padding: 0 };
const linkStyle = {
  padding: "0.4rem 0.75rem", borderRadius: 8, fontSize: "0.95rem",
  fontWeight: 500, color: "#444", whiteSpace: "nowrap", transition: "background 0.15s",
};
const linkActive = { color: "#22B8CF", fontWeight: 700, background: "rgba(34,184,207,0.1)" };
const hamburgerBtn = {
  flexDirection: "column", gap: 5, background: "none", border: "none",
  cursor: "pointer", padding: "4px",
};
const bar = (open, i) => ({
  display: "block", width: 24, height: 2.5, borderRadius: 2, background: "#333",
  transition: "transform 0.2s, opacity 0.2s",
  transform: open
    ? i === 0 ? "translateY(7.5px) rotate(45deg)"
    : i === 2 ? "translateY(-7.5px) rotate(-45deg)" : "none"
    : "none",
  opacity: open && i === 1 ? 0 : 1,
});
const mobileMenu = {
  background: "#fff", borderTop: "1px solid #eee", display: "flex", flexDirection: "column",
};
const mobileLink = {
  padding: "0.9rem 1.5rem", fontSize: "1rem", color: "#333",
  borderBottom: "1px solid #f4f4f4", fontWeight: 500,
};
const mobileLinkActive = { color: "#22B8CF", fontWeight: 700, background: "rgba(34,184,207,0.07)" };
const footerStyle = {
  background: "#1e2532", color: "#ccc", padding: "2rem 1.2rem 1rem",
  fontSize: "0.85rem", lineHeight: 1.8,
};
