import React, {PureComponent} from "react";
import Image from "./Image";
import imageClient from './services/image-client';
import "./Gallery.css"

class Gallery extends PureComponent {

    render() {
        let images = imageClient.getImages();
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