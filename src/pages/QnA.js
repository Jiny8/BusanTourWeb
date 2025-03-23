import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function QnA({ qna, setQna }) {
  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".3rem .6rem",
    margin: "2rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  };
  const btnStyleInput = {
    padding: "0rem 2rem",
  };

  const [Title, setTitle] = useState("");
  const [Name, setName] = useState("");
  const [Text, setText] = useState("");
  const Add = () => {
    setQna([
      ...qna,
      {
        idx4: qna.length,
        name: Name,
        title: Title,
        text: Text,
      },
    ]);
    setTitle("");
    setName("");
    setText("");
  };
  const [top5, setTop5] = useState([
    {
      as: false,
      answer:
        "◐ 항공권 취소 및 카드환불 항공권 전체취소는 온라인/모바일 예약내역(마이페이지)에서 예약확인 후 탑승 전 항공권에 해당 취소가 가능합니다. 항공권 취소 후 카드환불은 약 5~7일 소요되며(카드사 영업일 기준), 환불문의는 카드사로 문의 해주시길 바랍니다.",
    },
    {
      as: false,
      answer:
        "◐ 예약 후 결제는 항공결제와 나머지 상품결제로 두 번 나누어서 결제됩니다. 항공은 예약후 바로 결제가 가능하십니다.(단 확정된 좌석일 경우) 나머지 숙박,렌트카,입장권 부분은 담당자가 가능여부 확인 후 확정전화 드린 이후에 결제 가능하십니다. 결제는 무통장입금과 ARS 카드결제, 인터넷을 통한 결제, 세가지 방식으로 결제가 가능합니다. 세가지 방식중 한가지를 택하신 후 결제해주시면 됩니다.",
    },
    {
      as: false,
      answer:
        "◐ e-ticket(전자항공권)의 경우 예약 및 결제 후 발권담당자가 발권을 완료 한 후에 고객님의 마이페이지 내에서 출력 하실 수 있습니다.",
    },
    {
      as: false,
      answer:
        "◐ 항공시간 및 출발지 변경은 가능하며 항공요금 차액으로 인해 상품가가 변동될 수 있습니다. 리턴 항공은 20시경으로 작업해야 일정을 소화하는데 무리가 없으며 첫날 일정이 있는 상품의 경우 다른 분들과 비슷하게 첫날 항공시간을 작업해야 첫날 일정을 무리없이 소화하실 수 있습니다.",
    },
    {
      as: false,
      answer:
        "◐ 발권 전이라면 재예약을 해주시거나 온라인상담을 통해 요청하시면 원하시는 날짜에 좌석이 있을경우 취소료 없이 예약 변경이 가능합니다. 다만 동일요금 기간이 아닐경우 요금이 변동될 수도 있습니다. 발권후에는 요금에 따른 패널티가 적용됩니다. 영문스펠링이 틀렸을경우 정확한 영문스펠링을 알려주시거나 여권사본을 보내주시어 변경요청을 해주시면 해당항공사로 요청하여 항공사에서 변경처리가되면 영문스펠링을 변경적용해드릴 수 있습니다. 항공사에 따라 영문스펠링 변경이 안되거나 최대 변경스펠링제한수가 있을 수 있습니다.",
    },
  ]);
  const navigate = useNavigate();
  return (
    <>
      <h3>★자주 묻는 질문 Top5 ★ </h3>
      <ol>
        <li
          onClick={() => {
            let tmp = top5;
            tmp[0] = { ...top5[0], as: !top5[0].as };
            setTop5([...tmp]);
          }}
        >
          여행 취소/환불 문의
        </li>
        <p>{top5[0].as && <p>{top5[0].answer}</p>}</p>
        <li
          onClick={() => {
            let tmp = top5;
            tmp[1] = { ...top5[1], as: !top5[1].as };
            setTop5([...tmp]);
          }}
        >
          결제방법
        </li>
        <p>{top5[1].as && <p>{top5[1].answer}</p>}</p>

        <li
          onClick={() => {
            let tmp = top5;
            tmp[2] = { ...top5[2], as: !top5[2].as };
            setTop5([...tmp]);
          }}
        >
          e-ticket 출력{" "}
        </li>
        <p>{top5[2].as && <p>{top5[2].answer}</p>}</p>

        <li
          onClick={() => {
            let tmp = top5;
            tmp[3] = { ...top5[3], as: !top5[3].as };
            setTop5([...tmp]);
          }}
        >
          항공시간 및 출발지 변경이 가능할까요?{" "}
        </li>
        <p>{top5[3].as && <p>{top5[3].answer}</p>}</p>
        <li
          onClick={() => {
            let tmp = top5;
            tmp[4] = { ...top5[4], as: !top5[4].as };
            setTop5([...tmp]);
          }}
        >
          기존예약 고객정보 및 날짜 변경
        </li>
        <p>{top5[4].as && <p>{top5[4].answer}</p>}</p>
      </ol>
      <hr color="#6CC0FF" />
      <h3>○문의게시판○</h3>
      {console.log(qna)}
      <ul>
        {qna.map((i) => (
          <li key={i.idx4}>
            <Link to={"/QnADetail/" + i.idx4} key={i.idx4}>
              작성번호{i.idx4}_:_{i.name}_{i.title}
            </Link>
          </li>
        ))}
      </ul>

      <h4 style={btnStyleInput}>
        제 목
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={Title}
          placeholder={"제목"}
        />
      </h4>
      <h4 style={btnStyleInput}>
        작성자
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={Name}
          placeholder={"작성자"}
        />
      </h4>
      <h4 style={btnStyleInput}>
        내 용
        <textarea
          type={Text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={Text}
          placeholder={"내용"}
        />
      </h4>
      <button
        style={btnStyle}
        onClick={() => {
          alert(Title + "//" + Name + "//" + Text + " 를 저장하였습니다.");
          Add();
          navigate("/QnA");
        }}
      >
        문의하기
      </button>
    </>
  );
}

export default QnA;
