import React, { PureComponent } from "react";
import manInRed from './drawings/maninred.jpg'
import "./Header.css"
import Nav from './Nav';

class Header extends PureComponent {
  render() {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container">
                <img className="img-fluid mb-5 d-block mx-auto circle" src={manInRed} alt="" />
                    <h1 className="text-uppercase mb-0">Cameron Shaw</h1>
                    <hr className="star-light" />
                    <h2 className="font-weight-light mb-0">Drawings</h2>
            </div>
            <Nav />
        </header>
    );
  }
}
export default Header;
