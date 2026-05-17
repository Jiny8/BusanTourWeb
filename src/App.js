import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { useAuthStore } from "./stores/authStore";
import { authFetch } from "./api/authFetch";
import "./styles/global.css";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const { setUser, logout } = useAuthStore();

  // 앱 시작 시 서버에서 로그인 상태 확인
  useEffect(() => {
    authFetch("http://localhost:8080/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then((user) => setUser(user))
      .catch(() => logout());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인/회원가입은 나중에 추가 예정 */}
        <Route path="/login" element={<div style={{ padding: "2rem" }}>로그인 페이지 (추후 구현)</div>} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
