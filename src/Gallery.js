import React, {PureComponent} from "react";
import { Modal, Button } from 'react-bootstrap';
import Image from "./Image";
import imageClient from './services/image-client';
import "./Gallery.css"

class Gallery extends PureComponent {



    render() {
        let images = imageClient.getImages().map(image => {
            return (<Image imageSource={image} />);
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
                <Modal show={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Close
                        </Button>
                        <Button variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default Gallery;