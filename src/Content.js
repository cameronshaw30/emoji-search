import React, { PureComponent } from "react";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

class Content extends PureComponent {
  render() {
    return (
        <div>
            <Gallery />
            <About />
            <Contact />
        </div>
    );
  }
}
export default Content;
