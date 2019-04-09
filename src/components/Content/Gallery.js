import React, {PureComponent} from "react";
import Image from "./Image";
import imageClient from '../../services/image-client';
import "./Gallery.css"

class Gallery extends PureComponent {

    constructor(props) {
        super(props);
        this.reference = React.createRef();
        this.scroll = this.props.scroll;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isVisible) {
            this.props.scroll(this.reference.current);
        }
    }

    render() {
        let images = imageClient.getImages().map(image => {
            return (<Image key={image.name} image={image} />);
        });
        return (
            <section className="portfolio" id="gallery" ref={this.reference}>
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