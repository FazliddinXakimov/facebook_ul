import React from "react";
import manutd from "./images/manutd.png";
import real from "./images/real.png";
import juventus from "./images/download.png";

import sporting from "./images/sporting.png";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: manutd, name: "Man United" },
    { id: 2, image: real, name: "Real Madrid" },
    { id: 3, image: juventus, name: "Juventus" },
    { id: 4, image: sporting, name: "Sporting" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
