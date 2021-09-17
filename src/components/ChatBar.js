import React from "react";
import imagee from "./images/case.jpg";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, name: "Fazliddin" },
    { id: 2, name: "Fazliddin" },
    { id: 3, name: "Fazliddin" },
    { id: 4, name: "Fazliddin" },
    { id: 5, name: "Fazliddin" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={imagee} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
