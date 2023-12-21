import "./Footer.css";
import logo from "../../assets/vetlab-logo.png";
import bayer_logo from "../../assets/bayer-logo.png";
import hills_logo from "../../assets/hills-logo.png";
import royal_canin_logo from "../../assets/royal-canin-logo.png";
import scan_vet_logo from "../../assets/scan-vet-logo.png";
import vet_expert_logo from "../../assets/vet-expert-logo.png";
import zoo_plus_logo from "../../assets/zoo-plus-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-content">
          <div className="first-section">
            <div className="logo-footer">
              <img className="logo-img-footer" src={logo} alt="logo"></img>
            </div>
            <p>
              Choose vetlab for a partnership in your pet's health journey.
              We're here to celebrate the joy of having a happy, healthy pet by
              your side.
            </p>
            <p>© 2023 vetlab. All rights reserved.</p>
          </div>
          <div className="second-section">
            <span>Social Media</span>
            <div className="social-media-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="currentColor"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="currentColor"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M16.5,5c-6.341,0 -11.5,5.159 -11.5,11.5v15c0,6.341 5.159,11.5 11.5,11.5h15c6.341,0 11.5,-5.159 11.5,-11.5v-15c0,-6.341 -5.159,-11.5 -11.5,-11.5zM34,12c1.105,0 2,0.895 2,2c0,1.104 -0.895,2 -2,2c-1.105,0 -2,-0.896 -2,-2c0,-1.105 0.895,-2 2,-2zM24,14c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10zM24,17c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="third-section">
            <span>Contact</span>
            <p>vetlab@gmail.com</p>
            <p>+48 612 328 419</p>
          </div>
        </div>
        <div className="footer-partners">
          <img src={vet_expert_logo} alt="vet expert logo" />
          <img src={scan_vet_logo} alt="scan vet logo" />
          <img src={hills_logo} alt="hills logo" />
          <img src={royal_canin_logo} alt="royal canin logo" />
          <img src={bayer_logo} alt="bayer logo" />
          <img src={zoo_plus_logo} alt="zoo plus logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
