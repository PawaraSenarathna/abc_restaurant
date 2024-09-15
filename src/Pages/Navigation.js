import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      {/* <div className="row">
        <div className="col-2">
          <img src="Images/Logo1.png" className="w-50"/>
        </div>
        <div className="col-10 d-flex justify-content-between">
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>Menu</div>
          <div>Make A Resavation</div>
        </div>
      </div> */}
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#home">
            <img src="Images/Logo1.png" className="w-15" />
          </a>
          <div class="" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reservation">
                  Make a Reservation
                </a>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to={'/feedback'}>Add Review</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
