import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ChatList from "./components/chat_list";
import GameIcon from "./components/game_icon";
import GamePlay from "./components/game_play";
import MenuBtn from "./components/menu_btn";
import MsgForm from "./components/msg_form";
import SideBar from "./components/side_btn";
import UserCamera from "./components/user_camera";

function App() {
  // 채팅기록
  const [chatList, setChatList] = useState([
    { id: 0, username: "user1", user_msg: "님이 입장하셨습니다" },
    { id: 1, username: "user2", user_msg: "님이 입장하셨습니다" },
    { id: 2, username: "user3", user_msg: "님이 입장하셨습니다" },
    { id: 3, username: "user3", user_msg: "님이 입장하셨습니다" },
  ]);

  const [gameIcon, setGameIcon] = useState([
    "./img/g1.svg",
    "./img/g2.svg",
    "./img/g3.svg",
    "./img/g4.svg",
    "./img/g5.svg",
    "./img/g6.svg",
    "./img/g7.svg",
    "./img/g8.svg",
    "./img/g9.svg",
    "./img/g10.svg",
    "./img/g11.svg",
    "./img/g5.svg",
    "./img/g6.svg",
    "./img/g7.svg",
    "./img/g8.svg",
  ]);

  const [titles, setTitles] = useState([
    "옵션",
    "채팅",
    "분위기",
    "술게임",
    "담타",
    "BGM",
    "인트로",
    "주사위",
    "채팅",
    "분위기",
    "술게임",
    "담타",
    "BGM",
    "인트로",
    "주사위",
    "인트로",
    "주사위",
    "채팅",
  ]);
  // 사용자 카메라 확대 togle 로직
  const [zoomAvailable, setZoomAvailable] = useState(true);
  const setZoomFlag = () => {
    setZoomAvailable(!zoomAvailable);
  };

  return (
    <div className="wrap">
      <section className="left-part">
        <div className="side-bar">
          {titles.map((title) => (
            <SideBar title={title} />
          ))}
        </div>
        <div className="side-bar-right">
          <div className="part1">
            <MenuBtn name="랜덤 참가" imgUrl={"./img/Vector-2.svg"} />
            <MenuBtn name="방 만들기" imgUrl={"./img/Vector-3.svg"} />
            <MenuBtn name="코드로 참가" imgUrl={"./img/Vector.svg"} />
            <MenuBtn name="나가기" imgUrl={"./img/Vector-1.svg"} />
          </div>
          <div className="part2">
            <div className="chat-box">
              <ChatList chatList={chatList} />
            </div>
            {/* 입력창 컴포넌트 */}
            <div className="msg-box">
              <MsgForm />
            </div>
          </div>
        </div>
      </section>
      <section className="right-part">
        <div className=" part3">
          <UserCamera zoomAvailable={zoomAvailable} setZoomFlag={setZoomFlag} />
          <UserCamera zoomAvailable={zoomAvailable} setZoomFlag={setZoomFlag} />
          <UserCamera zoomAvailable={zoomAvailable} setZoomFlag={setZoomFlag} />
          <UserCamera zoomAvailable={zoomAvailable} setZoomFlag={setZoomFlag} />
        </div>
        <div className="part4">
          <div className="main-box">
            <div className="game-list">
              {gameIcon.map((iconUrl) => (
                <GameIcon key={iconUrl} iconUrl={iconUrl} />
              ))}
            </div>
            <div className="game-play">
              <GamePlay ex={"./img/gameEx.svg"} />
              <div className="description">
                <h3>술게임 옵션</h3>
                <div className="more">
                  1. 스프래시: "게임 중 선배가 걸렸을 경우 선배 양 옆의 n명이
                  술을 먹는 룰" 2. 야자타임: "특정 시간을 정해놓고 그 시간동안
                  선/후배 간에 말을 자유롭게 놓을 수 있다" 3. 나이먹기: "술을 한
                  잔씩 마실 때마다 한 살씩 올라가며 x살 때 졸업을 해야 탈출이
                  가능하다. 나이가 됐는데 또 마시게 되면 0살이 된다" 4. 연좌제:
                  " 게임 시작 전에 병뚜껑 제비뽑기를 하여 가장 높은 숫자를
                  뽑은사람을 제외한 모든 사람이 술을 마시는 게임이다. 5. 가성:
                  "말할 때 무조건 고음으로 하고 실패시 벌주를 마신다." 6. 금지어
                  게임: 특정 단어를 외치면 마시는 게임"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
