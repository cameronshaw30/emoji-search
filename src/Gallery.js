import React, {PureComponent} from "react";
import Image from "./Image";
import "./Gallery.css"
import amigo from './drawings/amigo.jpg'
import burger from './drawings/burger.jpg'
import cat from './drawings/cat.jpg'
import coffee from './drawings/coffee.jpg'
import ginger from './drawings/ginger.jpg'
import glen from './drawings/glen.jpg'
import hornet from './drawings/hornet.jpg'
import manInRed from './drawings/maninred.jpg'

class Gallery extends PureComponent {

    constructor(props) {
        super(props);
        this.getImages = this.getImages.bind(this);
    }

    getImages() {
        return [amigo, burger, cat, coffee, ginger, glen, hornet, manInRed];
    }

    render() {
        let images = this.getImages();
        return (
            <section className="portfolio" id="gallery">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Gallery</h2>
                    <hr className="star-dark mb-5"/>
                    <div className="row">
                        <Image imageSource={images[0]} />
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[1]} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[2]} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[3]} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[4]} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[5]} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[6]} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div
                                        className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={images[7]} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Gallery;