import React, {PureComponent} from "react";
import Gallery from "./Gallery";
import About from "./About";
import Header from "./Header";

class Content extends PureComponent {

    constructor(props) {
        super(props);
        this.reference = React.createRef();
    }

    render() {
        return (
            <div ref={this.reference}>
                <Header isVisible={this.props.scrollTo === "Home"} scroll={this.props.onScroll}/>
                <Gallery isVisible={this.props.scrollTo === "Gallery"} scroll={this.props.onScroll} />
                <About isVisible={this.props.scrollTo === "About"} scroll={this.props.onScroll} />
            </div>
        );
    }
}

export default Content;
