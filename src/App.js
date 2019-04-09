import React, {PureComponent} from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer"
import "./App.css";
import Nav from "./components/Header/Nav";

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.navListener = this.navListener.bind(this);
        this.state = {};
    }

    navListener(contentName) {
        this.setState({
            scrollTo: contentName
        });
    }

    handleScroll(componentReference) {
        let targetPosition = componentReference.offsetTop - 126;

        if (window.pageYOffset !== targetPosition) {
            window.scroll({
                top: targetPosition,
                left: 0,
                behavior: 'smooth'
            });
        }
        this.setState({
            scrollTo: ""
        });
    }

    render() {
        return (
            <div>
                <Nav navigate={this.navListener}/>
                <Content scrollTo={this.state.scrollTo} onScroll={this.handleScroll.bind(this)}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
