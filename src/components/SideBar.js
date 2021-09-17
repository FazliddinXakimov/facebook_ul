import React, { useState } from "react";
import manutd from "./images/manutd.png";
import real from "./images/real.png";
import juventus from "./images/download.png";

import sporting from "./images/sporting.png";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: manutd, name: "Man United" },
    { id: 2, image: real, name: "Real Madrid" },
    { id: 3, image: juventus, name: "Juventus" },
    { id: 4, image: sporting, name: "Sporting" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
