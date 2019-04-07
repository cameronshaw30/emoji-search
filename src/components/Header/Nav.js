import React, { PureComponent } from "react";
import "./Nav.css"
import imageClient from '../../services/image-client';

class Nav extends PureComponent {

  render() {
    let manInRed = imageClient.getImageByName("Man In Red")
    return (
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
          <div className="container">
            <img className="logo" src={manInRed} alt="" />
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Characters By Cam</a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
export default Nav;
