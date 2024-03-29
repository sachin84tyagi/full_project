import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./_sidebar.scss";

const Sidebar = props => {
  console.log("props in side bar", props)
  return (
    <nav id="sidebar">
      {/* <div className="sidebar-header">
        <h5>Video Information</h5>
        <strong>VI</strong>
      </div> */}
      <br />

      <ul className="list-unstyled components">
        <li>
          <Link to="/backend/dashboard">
            <i className="fas fa-image"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/backend/users">
            <i className="fas fa-image"></i>
            Users
          </Link>
        </li>
        <li>
          <Link to="/backend/notificationData">
            <i className="fas fa-image"></i>
            Notification Messages
          </Link>
        </li>
        <li className="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="fas fa-home"></i>
            Home
          </a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#"> Home 1</a>
            </li>
            <li>
              <a href="#"> Home 2</a>
            </li>
            <li>
              <a href="#"> Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-briefcase"></i>
            About
          </a>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="fas fa-copy"></i>
            Pages
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-image"></i>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-question"></i>
            FAQ
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-paper-plane"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
