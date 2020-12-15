import React from "react";
import "./footer.css";
import logo from "../../../assets/logo.png";
/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="container-fluid footer-top-area">
      <div className="row">
        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-widget">
            <a href="/">
              <img src={logo} alt="Image" style={{ width: "150px" }} />
            </a>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
           
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-widget contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Hotline: </span>
                <a href="tel:822456974">+91 XXXXXXX</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>Email: </span>
                <a href="mailto:info@wisdompolicy.com">info@xxxxx.com</a>
              </li>
              <li>
                <i className="fa fa-map-marker"></i>
                <span>Address: </span> XXXXXXX, Noida (U.P.)
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-widget">
            <h3>Service Links</h3>
            <ul>
              <li>
                <a href="/#">Lorem ipsum dolor</a>
              </li>
              <li>
                <a href="/#">Lorem ipsum dolor</a>
              </li>
              <li>
                <a href="/#">Lorem ipsum dolor</a>
              </li>
              <li>
                <a href="/#">Lorem ipsum dolor</a>
              </li>
              <li>
                <a href="/#">Lorem ipsum dolor</a>
              </li>
              <li>
                <a href="/#">Lorem ipsum dolor</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-widget">
            <h3>Newsletter</h3>
            <p className="newsletter-p" style={{paddingLeft:"0px"}}>
              Subscribe now to receive latest news.
            </p>
            <div className="subscribe-wrap">
              <form className="newsletter-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  required=""
                />
                <button className="btn btn-brown mt-2" type="button">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="social-area">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
