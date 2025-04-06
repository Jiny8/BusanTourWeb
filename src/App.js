import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewWrite from "./pages/ReviewWrite";
import NoPage from "./pages/NoPage";
import ReviewUpdate from "./pages/ReviewUpdate";
import TourList from "./pages/TourList";
import Tourbook from "./pages/Tourbook";
import TourBuylist from "./pages/TourBuylist";
import Mypage from "./pages/Mypage";
import MypageSet from "./pages/MypageSet";
import QnA from "./pages/QnA";
import QnADetail from "./pages/QnADetail";
import QnAUpdate from "./pages/QnAUpdate";
import Login from "./pages/Login";
import TourInfo from "./pages/TourInfo";
import TourInfoDetail from "./pages/TourInfoDetail";
import './index.css';

export default function App() {
  const [data, setData] = useState([
    { idx: 0, title: "게시글제목000", content: "내용000", createdBy: "가", date: "2024-01-01" },
    { idx: 11, title: "게시글제목001", content: "내용001", createdBy: "나", date: "2024-03-15" },
    { idx: 2, title: "게시글제목002", content: "내용002", createdBy: "다", date: "2024-03-22" },
    { idx: 3, title: "게시글제목003", content: "내용003", createdBy: "라", date: "2024-04-08" },
    { idx: 4, title: "게시글제목004", content: "내용004", createdBy: "마", date: "2024-05-15" },
  ]);
  const [tour, setTour] = useState([
    {
      idxx: 0,
      name: "부산여행",
      src: "https://visitbusan.net/uploadImgs/files/cntnts/20200101173014369_ttiel",
      alt: "여행상품-부산",
      title: "여행상품-부산",
      width: "180px",
      adultPrice: 100000,
      kidPrice: 50000,
    },
    {
      idxx: 1,
      name: "경주여행",
      src: "https://i1.wp.com/www.agoda.com/wp-content/uploads/2021/02/Bulguksa-Temple-Gyeongju-si-attractions-South-Korea.jpg?ssl=1",
      alt: "여행상품-경주",
      title: "여행상품-경주",
      width: "180px",
      adultPrice: 120000,
      kidPrice: 60000,
    },
    {
      idxx: 2,
      name: "제주여행",
      src: "https://cdn.jejusori.net/news/photo/202210/409023_415016_382.jpg",
      alt: "여행상품-제주",
      title: "여행상품-제주",
      width: "180px",
      adultPrice: 140000,
      kidPrice: 70000,
    },
  ]);
  const [alltour, setAlltour] = useState([
    {
      idxx: 0,
      name: "부산여행",
      src: "https://visitbusan.net/uploadImgs/files/cntnts/20200101173014369_ttiel",
      alt: "여행상품-부산",
      title: "여행상품-부산",
    },
    {
      idxx: 1,
      name: "경주여행",
      src: "https://i1.wp.com/www.agoda.com/wp-content/uploads/2021/02/Bulguksa-Temple-Gyeongju-si-attractions-South-Korea.jpg?ssl=1",
      alt: "여행상품-경주",
      title: "여행상품-경주",
    },
    {
      idxx: 2,
      name: "제주여행",
      src: "https://cdn.jejusori.net/news/photo/202210/409023_415016_382.jpg",
      alt: "여행상품-제주",
      title: "여행상품-제주",
     
    },
    {
      idxx: 3,
      name: "백령도여행",
      src: "https://cdn.ulsanpress.net/news/photo/202206/400133_181371_033.jpg",
      alt: "여행상품-백령도",
      title: "여행상품-백령도",
   
    },
    {
      idxx: 4,
      name: "울릉도여행",
      src: "https://cdn.kbmaeil.com/news/photo/202307/962491_940240_92.jpg",
      alt: "여행상품-울릉도",
      title: "여행상품-울릉도",
   
    },
    {
      idxx: 5,
      name: "독도여행",
      src: "http://tong.visitkorea.or.kr/cms/resource/16/2653416_image2_1.jpg",
      alt: "여행상품-독도",
      title: "여행상품-독도",
     
    },
    {
      idxx: 6,
      name: "전주여행",
      src: "https://a.cdn-hotels.com/gdcs/production39/d1730/af444a07-b68c-4321-b036-d2cdc630f443.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      alt: "여행상품-전주",
      title: "여행상품-전주",
    
    },
    {
      idxx: 7,
      name: "가평-남이섬여행",
      src: "https://ak-d.tripcdn.com/images/10011g000001hdrzy89CF_Z_640_10000_R5.jpg_.webp?proc=autoorient&proc=source%2ftrip",
      alt: "여행상품-가평남이섬",
      title: "여행상품-가평남이섬",
  
    },
    {
      idxx: 8,
      name: "강릉여행",
      src: "https://a.cdn-hotels.com/gdcs/production176/d1944/48d1f12e-e7a4-4492-aac3-03f3fc440929.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      alt: "여행상품-강릉",
      title: "여행상품-강릉",
    
    },
    {
      idxx: 9,
      name: "인천여행",
      src: "https://img.khan.co.kr/news/2023/03/30/l_2023033101001318700113151.webp",
      alt: "여행상품-인천",
      title: "여행상품-인천",
   
    },
  ]);
  const [mytour, setMyTour] = useState([
    {
      idx2: 0,
      tourname: "부산여행",
      Date: "2024-01-01",
      Date2: "2024-01-03",
      ALL: 3,
      adult: 2,
      kid: 1,
      totalprice: 250000,
    },
    {
      idx2: 1,
      tourname: "제주여행",
      Date: "2024-03-15",
      Date2: "2024-03-18",
      ALL: 2,
      adult: 2,
      kid: 0,
      totalprice: 200000,
    },
  ]);
  const [position, setPosition] = useState("0");
  const [member, setMember] = useState([
    {
      idx3: 0,
      ID: "",
      PW: "",
      name: "",
      phone: "",
      address: "",
      src: "",
      alt: "",
      title: "",
      width: "",
    },
    {
      idx3: 1,
      ID: "admin",
      PW: "1234",
      name: "admin",
      phone: "010-xxxx-xxxx",
      address: "부산시 연제구 xx동",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkTlswbotlTqdaZb7hSamjj0bQRMk2TVCww&usqp=CAU",
      alt: "프로필사진",
      title: "프로필사진",
      width: "100px",
    },
    {
      idx3: 2,
      ID: "user",
      PW: "0000",
      name: "user",
      phone: "010-xxxx-xxxx",
      address: "부산시 연제구 xx동",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkTlswbotlTqdaZb7hSamjj0bQRMk2TVCww&usqp=CAU",
      alt: "프로필사진",
      title: "프로필사진",
      width: "100px",
    },
  ]);
  const [qna, setQna] = useState([
    {
      idx4: 0,
      name: "김*영",
      title: "환불요청",
      content: "환불요청합니다.",
    },
    {
      idx4: 1,
      name: "전*준",
      title: "항공권 검색",
      content: "제주항공에서 예약 검색이 되지 않습니다.",
    },
    {
      idx4: 2,
      name: "박*진",
      title: "티켓 재발급",
      content: "티켓 재발급하려면 어떻게하면 될까요??",
    },
  ]);

  const [notice, setNotice] = useState({
    tel: "070-7777-7777",
    officehours: "09:00~18:00",
    name: "(주)부산어때",
    address: "부산시 연제구 연산동",
    corporatenumber: "606-81-05296",
    account: "신한은행 (주)부산어때 110-312-04589-0",
  });

  const [tourinfo, setTourinfo] = useState([
    {
      idxx: 0,
      X:"35.1327125523986",
      Y:"129.11996768904595",
      name: "2024 갑진년 정월대보름 달맞이 축제",
      date: "2024.04",
      dateDetail: "일시 : 2024-02-24 ~ 2024-02-24",
      src: "https://visitbusan.net/upload_data/board_data/BBS_0000009/170797624559010.jpg",
      alt: "2024 갑진년 정월대보름 달맞이 축제",
      title: "2024 갑진년 정월대보름 달맞이 축제",
      DateTime: "2024년 2월 24일 토요일 / 14:00~19:00 ",
      place: "용호 별빛공원",
      text3: "- 요금 : 무료",
      content:
        "연희집단 The 광대(도는 놈 뛰는 놈 나는 놈), 판소리(소리꾼 김소진), 매직 벌룬쇼, 대붓 퍼포먼스, 한국무용, 대- 형 연날리기(스턴트연, 전통연), [본행사] : 개막식, LED달집 점등, 풍물 한마당",
      text6:
        "- 체험‧전시 : 영산 줄다리기, 풍물패 길놀이, 소원지 빛 터널, 대형 LED 보름달, 소원지 쓰기, 전통 민속놀이, 전통공예 만들기 체험, 푸드트럭 등",
    },
    {
      idxx: 1,
      X:"35.15535654920573",
      Y:"129.1220090625425",
      name: "2024 제25회 수영전통달집놀이",
      date: "2024.04",
      dateDetail:"일시 : 2024-02-24 ~ 2024-02-24",
      src: "https://visitbusan.net/upload_data/board_data/BBS_0000009/170839502514330.jpg",
      alt: "2024 제25회 수영전통달집놀이",
      title: "2024 제25회 수영전통달집놀이",
      DateTime: "2024.2.24.(토) 14:00~18:20",
      place: "광안리해변(이안테라디움광안 O/T 앞)",
      content: "소망포 새해소망쓰기, 소망연‧부적 판매,줄타기공연, 수영야류, 좌수영어방놀이, 수영농청놀이, 지신밟기,[본행사] : 고사지내기, 달집 태우기(17:58)",
      organizedBy: "수영구 / 주관 : (사)수영고적민속예술보존협회",
    },
    {
      idxx: 2,
      X:"35.154665861498145",
      Y:"129.121826533405 ",
      name: "[광안리 M 드론라이트쇼] 2월 공연 프로그램 안내",
      date: "2024.04",
      dateDetail: "일시 : 2024-02-01 ~ 2024-02-29 문의처 : 051-610-4881 홈페이지 : http://gwangallimdrone.co.kr/",
      src: "https://visitbusan.net/upload_data/board_data/BBS_0000009/170737641034162.png",
      alt: "[광안리 M 드론라이트쇼] 2월 공연 프로그램 안내",
      title: "[광안리 M 드론라이트쇼] 2월 공연 프로그램 안내",
      DateTime: "2.3.(토) : 동계 스포츠,2.10.(토) :  설날  ※ 특별공연 (1,500대) 1회 공연, 19시,2.17.(토) : 프러포즈,2.24.(토) : 미개최  ※ 2.24.(토) 공연은 당일 광안리 해변에서 열리는 제25회 수영전통달집놀이 행사 관계로 미개최됩니다.,19시,21시 (동절기 10월 ~ 2월) 20시,22시 (하절기 3월 ~ 9월) 광안리해변 매주 토요일, 2회 공연",
      text: "※ 기상상황이나 통신여건에 따라 취소 또는 지연될 수 있습니다.",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              member={member}
              position={position}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                tour={tour}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                member={member}
                position={position}
                setPosition={setPosition}
              />
            }
          />
          <Route
            path="/TourInfo"
            element={
              <TourInfo
                member={member}
                setMember={setMember}
                position={position}
                setPosition={setPosition}
                tourinfo={tourinfo}
              />
            }
          />
          <Route
            path="/TourInfoDetail/:idxx"
            element={
              <TourInfoDetail
                member={member}
                setMember={setMember}
                position={position}
                setPosition={setPosition}
                tourinfo={tourinfo}
              />
            }
          />
          <Route
            path="Tourbook/:idxx"
            element={
              <Tourbook
                tour={tour}
                setTour={setTour}
                mytour={mytour}
                setMyTour={setMyTour}
                alltour={alltour}
                setAlltour={setAlltour}
              />
            }
          />
          <Route
            path="TourBuylist/:idx2"
            element={
              <TourBuylist
                tour={tour}
                setTour={setTour}
                mytour={mytour}
                setMyTour={setMyTour}
                alltour={alltour}
                setAlltour={setAlltour}
              />
            }
          />
          <Route
            path="Mypage"
            element={
              <Mypage
                member={member}
                setMember={setMember}
                data={data}
                setData={setData}
                qna={qna}
                setQna={setQna}
                mytour={mytour}
                setMyTour={setMyTour}
                position={position}
              />
            }
          />
          <Route
            path="MypageSet"
            element={
              <MypageSet
                member={member}
                setMember={setMember}
                position={position}
              />
            }
          />
          <Route path="QnA" element={<QnA qna={qna} setQna={setQna} />} />
          <Route
            path="/QnADetail/:idx4"
            element={<QnADetail qna={qna} setQna={setQna} />}
          />
          <Route
            path="/QnA/up/:idx4"
            element={<QnAUpdate qna={qna} setQna={setQna} />}
          />
          <Route
            path="TourList"
            element={
              <TourList alltour={alltour} />
            }
          />
          <Route path="*" element={<NoPage />} />
          <Route path="/reviews" element={<Reviews data={data} />} />
          <Route
            path="/review/:idx"
            element={<ReviewDetail data={data} setData={setData} />}
          />
          <Route
            path="/review/write"
            element={<ReviewWrite data={data} setData={setData} />}
          />
          <Route
            path="/review/up/:idx"
            element={<ReviewUpdate data={data} setData={setData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}