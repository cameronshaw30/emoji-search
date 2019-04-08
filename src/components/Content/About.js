import React, { PureComponent } from "react";
import "./About.css"

class About extends PureComponent {

    constructor(props) {
        super(props);
        this.reference = React.createRef();
        this.scroll = this.props.scroll.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isVisible) {
            this.props.scroll(this.reference.current);
        }
    }

    render() {
        return (
            <section className="bg-primary text-white mb-0" id="about" ref={this.reference}>
                <div className="container">
                    <h2 className="text-center text-uppercase text-white">About</h2>
                    <hr className="star-light mb-5"/>
                    <div className="row">
                        <div className="col-lg-12 ml-auto">
                            <p className="lead">This site contains a selection of drawings drawn by myself over the
                                years. I will be adding to it as I go.
                                I either draw and colour the pictures straight onto my iPad or I draw them with
                                pencil/paper then trace it on my iPad.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
