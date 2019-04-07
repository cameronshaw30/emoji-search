import React, {PureComponent} from "react";
import { Modal, Button } from 'react-bootstrap';
import Image from "./Image";
import imageClient from './services/image-client';
import "./Gallery.css"

class Gallery extends PureComponent {
    render() {
        let images = imageClient.getImages().map(image => {
            return (<Image image={image} />);
        });
        return (
            <section className="portfolio" id="gallery">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Gallery</h2>
                    <hr className="star-dark mb-5"/>
                    <div className="row">
                        {images}
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;