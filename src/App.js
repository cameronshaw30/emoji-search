import React, { PureComponent } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer"
import "./App.css";

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.navListener = this.navListener.bind(this);
        this.state = {
            visible: "Gallery"
        };
    }

    navListener(contentName) {
        this.setState({
            visible: contentName
        });
    }

    render() {
        return (
            <div>
                <Header navigate={this.navListener}/>
                <Content visible={this.state.visible}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
