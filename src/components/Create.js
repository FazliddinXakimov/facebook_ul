import React from "react";
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
import postimg from "./images/news.jpg";
const Create = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__first-img">
          <span>
            <img src={postimg} alt="user" />
          </span>
        </div>
        <div className="create__first-input">
          <input type="text" className="create__first-inputs" />
        </div>
      </div>
      <div className="create__second">
        <span className="create__second-icon">
          <FaVideo className="redColor" />{" "}
          <span className="text">Live Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegFileImage className="greenColor" />{" "}
          <span className="text">Photo / Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegGrinAlt className="orangeColor" />{" "}
          <span className="text">Feeling</span>
        </span>
      </div>
    </div>
  );
};

export default Create;
