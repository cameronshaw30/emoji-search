import React, { PureComponent } from "react";
import manInRed from './drawings/maninred.jpg'
import "./Header.css"

class Header extends PureComponent {
  render() {
    return (
        <header class="masthead bg-primary text-white text-center">
            <div class="container">
                <img class="img-fluid mb-5 d-block mx-auto circle" src={manInRed} alt="" />
                    <h1 class="text-uppercase mb-0">Cameron Shaw</h1>
                    <hr class="star-light" />
                    <h2 class="font-weight-light mb-0">Drawings</h2>
            </div>
        </header>
    );
  }
}
export default Header;
