import React from "react";
import { Link } from "react-router-dom";
import "./nave.css";
export default function Nave() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  w-100 ">
        <div className="container">
          <Link className="navbar-brand  text-white" to="">
            <h1>START FRAMEWORK</h1>
          </Link>
          <ul className="navbar-nav ">
            <li className=" d-flex ">
              <Link
                className="nav-link active "
                id="hover-nave"
                aria-current="page"
                to="about"
              >
                About
              </Link>
              <Link
                className="nav-link active "
                id="hover-nave"
                aria-current="page"
                to="protfolio"
              >
                Protfolio
              </Link>
              <Link
                className="nav-link active "
                id="hover-nave"
                aria-current="page"
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
