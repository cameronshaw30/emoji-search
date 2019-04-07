import React, { PureComponent } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer"
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;
