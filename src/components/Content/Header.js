import React, {PureComponent} from "react";
import "./Header.css"
import imageClient from '../../services/image-client';

class Header extends PureComponent {

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
        let manInRed = imageClient.getImageByName("Man In Red");
        return (
            <header className="masthead bg-primary text-white text-center" ref={this.reference}>
                <div className="container">
                    <img className="img-fluid mb-5 d-block mx-auto circle" src={manInRed} alt=""/>
                    <h1 className="text-uppercase mb-0">Cameron Shaw</h1>
                    <hr className="star-light"/>
                    <h2 className="font-weight-light mb-0">Drawings</h2>
                </div>
            </header>
        );
    }
}

export default Header;
