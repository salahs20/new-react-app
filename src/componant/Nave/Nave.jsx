import React from "react";
import { Link } from "react-router-dom";
import "./nave.css";
export default function Nave() {
  return (
    <nav className="navbar navbar-expand-lg h-auto">
      <div className="container">
        <Link className="navbar-brand text-white" to="">
          <h1>START FRAMEWORK</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                className="nav-link active "
                id="hover-nave"
                aria-current="page"
                to="about"
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link active "
                id="hover-nave"
                aria-current="page"
                to="protfolio"
              >
                Protfolio
              </Link>
            </li>
            <li class="nav-item">
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
      </div>
    </nav>
  );
}
