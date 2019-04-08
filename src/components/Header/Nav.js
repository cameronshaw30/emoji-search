import React, { PureComponent } from "react";
import "./Nav.css"
import imageClient from '../../services/image-client';
import NavItem from "./NavItem";

class Nav extends PureComponent {

    render() {
        let manInRed = imageClient.getImageByName("Man In Red");
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    <img className="logo" src={manInRed} alt=""/>
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Characters By Cam</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
                            type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <NavItem name="About" navigate={this.props.navigate}/>
                            <NavItem name="Gallery" navigate={this.props.navigate}/>
                            <NavItem name="Contact" navigate={this.props.navigate}/>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
