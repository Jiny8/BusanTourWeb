import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TourInfo from "./pages/TourInfo";
import TourInfoDetail from "./pages/TourInfoDetail";
import TourList from "./pages/TourList";
import Tourbook from "./pages/Tourbook";
import TourBuylist from "./pages/TourBuylist";
import NoPage from "./pages/NoPage";
import { useAuthStore } from "./stores/authStore";
import { authFetch } from "./api/authFetch";
import "./styles/global.css";

const tourinfo = [
  {
    idxx: 0, X: "35.1327125523986", Y: "129.11996768904595",
    name: "2024 갑진년 정월대보름 달맞이 축제", date: "2024.04",
    dateDetail: "일시 : 2024-02-24 ~ 2024-02-24",
    src: "https://visitbusan.net/upload_data/board_data/BBS_0000009/170797624559010.jpg",
    alt: "2024 갑진년 정월대보름 달맞이 축제", title: "2024 갑진년 정월대보름 달맞이 축제",
    DateTime: "2024년 2월 24일 토요일 / 14:00~19:00", place: "용호 별빛공원",
    content: "연희집단 The 광대, 판소리, 매직 벌룬쇼, 대붓 퍼포먼스, 한국무용, 대형 연날리기",
  },
  {
    idxx: 1, X: "35.15535654920573", Y: "129.1220090625425",
    name: "2024 제25회 수영전통달집놀이", date: "2024.04",
    dateDetail: "일시 : 2024-02-24 ~ 2024-02-24",
    src: "https://visitbusan.net/upload_data/board_data/BBS_0000009/170839502514330.jpg",
    alt: "2024 제25회 수영전통달집놀이", title: "2024 제25회 수영전통달집놀이",
    DateTime: "2024.2.24.(토) 14:00~18:20", place: "광안리해변",
    content: "소망포 새해소망쓰기, 줄타기공연, 수영야류, 달집 태우기",
    organizedBy: "수영구 / 주관 : (사)수영고적민속예술보존협회",
  },
  {
    idxx: 2, X: "35.154665861498145", Y: "129.121826533405",
    name: "[광안리 M 드론라이트쇼] 2월 공연 프로그램 안내", date: "2024.04",
    dateDetail: "일시 : 2024-02-01 ~ 2024-02-29",
    src: "https://visitbusan.net/upload_data/board_data/BBS_0000009/170737641034162.png",
    alt: "[광안리 M 드론라이트쇼] 2월 공연 프로그램 안내",
    title: "[광안리 M 드론라이트쇼] 2월 공연 프로그램 안내",
    DateTime: "매주 토요일 19시, 21시", place: "광안리해변",
    content: "드론 라이트쇼 / 기상상황에 따라 취소될 수 있습니다.",
  },
];

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const { setUser, logout } = useAuthStore();

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="TourInfo" element={<TourInfo tourinfo={tourinfo} />} />
          <Route path="TourInfoDetail/:idxx" element={<TourInfoDetail tourinfo={tourinfo} />} />
          <Route path="TourList" element={<TourList />} />
          <Route path="Tourbook/:idxx" element={<Tourbook />} />
          <Route path="TourBuylist/:id" element={<TourBuylist />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
