import React from "react";
import "./home.css";
import img4 from "../Photo/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="" id="home">
        <div className="content">
        <div className="img ">
          <img src={img4} alt="" />
        </div>
        <div className=" text-center">
          <h1>START FRAMEWORK</h1>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      </div>
    </>
  );
}
