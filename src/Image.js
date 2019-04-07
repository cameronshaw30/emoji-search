import React, { PureComponent } from "react";


class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.imageSource = this.props.imageSource;
  }

  render() {
    return (
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={this.imageSource} alt=""/>
          </a>
        </div>
    );
  }
}
export default Image;
