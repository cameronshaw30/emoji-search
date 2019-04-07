import React, { PureComponent } from "react";
import cabin from './img/portfolio/cabin.png'
import cake from './img/portfolio/cake.png'
import circus from './img/portfolio/circus.png'
import game from './img/portfolio/game.png'
import safe from './img/portfolio/safe.png'
import submarine from './img/portfolio/submarine.png'

class Popups extends PureComponent {
  render() {
    return (
    <div>
        {/*Portfolio Modals*/}

        {/*Portfolio Modal 1*/}
        <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
            <div className="portfolio-modal-dialog bg-white">
                <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                    <i className="fa fa-3x fa-times"></i>
                </a>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                            <hr className="star-dark mb-5"/>
                                <img className="img-fluid mb-5" src={cabin} alt=""/>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Portfolio Modal 2*/}
        <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
          <div className="portfolio-modal-dialog bg-white">
              <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i className="fa fa-3x fa-times"></i>
              </a>
              <div className="container text-center">
                  <div className="row">
                      <div className="col-lg-8 mx-auto">
                          <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr className="star-dark mb-5"/>
                              <img className="img-fluid mb-5" src={cake} alt=""/>
                                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i className="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*Portfolio Modal 3*/}
        <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
          <div className="portfolio-modal-dialog bg-white">
              <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i className="fa fa-3x fa-times"></i>
              </a>
              <div className="container text-center">
                  <div className="row">
                      <div className="col-lg-8 mx-auto">
                          <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr className="star-dark mb-5"/>
                              <img className="img-fluid mb-5" src={circus} alt=""/>
                                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i className="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*Portfolio Modal 4*/}
        <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
          <div className="portfolio-modal-dialog bg-white">
              <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i className="fa fa-3x fa-times"></i>
              </a>
              <div className="container text-center">
                  <div className="row">
                      <div className="col-lg-8 mx-auto">
                          <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr className="star-dark mb-5"/>
                              <img className="img-fluid mb-5" src={game} alt=""/>
                                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i className="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*// Portfolio Modal 5*/}
        <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
          <div className="portfolio-modal-dialog bg-white">
              <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i className="fa fa-3x fa-times"></i>
              </a>
              <div className="container text-center">
                  <div className="row">
                      <div className="col-lg-8 mx-auto">
                          <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr className="star-dark mb-5"/>
                              <img className="img-fluid mb-5" src={safe} alt=""/>
                                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i className="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*// Portfolio Modal 6*/}
        <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
          <div className="portfolio-modal-dialog bg-white">
              <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i className="fa fa-3x fa-times"></i>
              </a>
              <div className="container text-center">
                  <div className="row">
                      <div className="col-lg-8 mx-auto">
                          <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr className="star-dark mb-5"/>
                              <img className="img-fluid mb-5" src={submarine} alt=""/>
                                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i className="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    );
  }
}
export default Popups;
