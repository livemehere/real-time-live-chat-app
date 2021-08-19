import { useState } from "react";
import "./App.css";
import ChatList from "./components/chat_list";
import MenuBtn from "./components/menu_btn";
import MsgForm from "./components/msg_form";
import SideBar from "./components/side_btn";
import UserCamera from "./components/user_camera";

function App() {
  // 채팅기록
  const [chatList, setChatList] = useState([
    { id: 0, username: "kong", user_msg: "hi" },
    { id: 1, username: "kong", user_msg: "hi2" },
    { id: 2, username: "kong", user_msg: "hi3" },
    { id: 3, username: "kong", user_msg: "hi4" },
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
          <SideBar />
          <SideBar />
          <SideBar />
          <SideBar />
        </div>
        <div className="side-bar-right">
          <div className="part1">
            <MenuBtn name="랜덤 참가" />
            <MenuBtn name="방 만들기" />
            <MenuBtn name="코드로 참가" />
            <MenuBtn name="나가기" />
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
          <div className="main-box">MAIN</div>
        </div>
      </section>
    </div>
  );
}

export default App;
