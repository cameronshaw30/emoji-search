import React, { PureComponent } from "react";
import { Modal } from 'react-bootstrap';

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.image = this.props.image;
    this.state = {show:false};
  }

  render() {
      let close = () => this.setState ({ show: false });
    return (
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1" >
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100" onClick={() => this.setState({ show: true })}>
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={this.image.source} alt="" />
          </a>
          <Modal show={this.state.show} centered onHide={close} size="lg" >
            <Modal.Header closeButton>
              <Modal.Title>{this.image.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img class="image" src={this.image.source} alt={this.image.name}/>
            </Modal.Body>
          </Modal>
        </div>
    );
  }
}
export default Image;
