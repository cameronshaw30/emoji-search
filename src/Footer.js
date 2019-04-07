import React, { PureComponent } from "react";
import "./Footer.css"

class Footer extends PureComponent {
  render() {
    return (
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">Glasgow, Scotland</p>
                        </div>
                        <div className="col-md-6 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/cammyshaw" target="_blank">
                                        <i className="fab fa-fw fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://twitter.com/CameronShaw" target="_blank">
                                        <i className="fab fa-fw fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/cameron-shaw-71855424/" target="_blank">
                                        <i className="fab fa-fw fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright py-4 text-center text-white">
              <div className="container">
                  <small>Copyright &copy; Cameron Shaw 2019</small><br/>
                  <small>Created by using the Freelance theme from&nbsp;
                      <a href="http://startbootstrap.com">Start Bootstrap</a></small>
              </div>
            </div>

            {/*Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
            <div className="scroll-to-top d-lg-none position-fixed ">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
            </div>
        </div>
    );
  }
}
export default Footer;
