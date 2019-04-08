import React, {PureComponent} from "react";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

class Content extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
        this.reference = React.createRef();
    }

    handleScroll() {
        if(this.props.isVisible) {
            window.scrollTo(0, this.reference.current.offsetHeight - 50);
        }
    }

    componentDidMount() {
        console.log(this.reference);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.visible !== prevState.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    render() {
        return (
            <div ref={this.reference}>
                <Gallery isVisible={this.state.visible === "Gallery"} scroll={this.handleScroll}/>
                <About isVisible={this.state.visible === "About"} scroll={this.handleScroll}/>
                <Contact isVisible={this.state.visible === "Contact"} scroll={this.handleScroll}/>
            </div>
        );
    }
}

export default Content;
