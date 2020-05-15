import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.scss'


class index extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  headerNav">
          <h1 className="navbar-brand">Define Youry</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto list">
              <li className="nav-item ">
                <Link className="nav-link  navLink" to="/culture">
                  Culture
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navLink" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navLink" to="/business">
               Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navLink" to="/training">
               Training
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default index;
