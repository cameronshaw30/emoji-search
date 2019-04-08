import React, {PureComponent} from "react";
import "./Nav.css"
import imageClient from '../../services/image-client';
import NavItem from "./NavItem";

class Nav extends PureComponent {


    constructor(props) {
        super(props);
        this.handleNavigate = this.handleNavigate.bind(this);
    }

    handleNavigate(e) {
        this.props.navigate(e.target.getAttribute("value"));
    }

    render() {
        let manInRed = imageClient.getImageByName("Man In Red").source;
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    <img className="logo" src={manInRed} alt="" value="Home" onClick={this.handleNavigate}/>
                    <span className="navbar-brand" value="Home" onClick={this.handleNavigate}>Characters By Cam</span>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
                            type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <NavItem name="About" navigate={this.handleNavigate}/>
                            <NavItem name="Gallery" navigate={this.handleNavigate}/>
                            <NavItem name="Contact" navigate={this.handleNavigate}/>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
