import { SelectedPage } from "../../shared/types";
import "./Home.css";
import vetlab_logo from "../../assets/vetlab-logo.png";
import home_img from "../../assets/home-img.png";
import home_img1 from "../../assets/home-img1.png";
import home_img2 from "../../assets/home-img2.png";
import home_img3 from "../../assets/home-img3.png";

import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <div id="home" className="home">
      <motion.div
        className="home-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="left-side-home">
          <div className="home-text">
            <div className="home-logo">
              <img src={vetlab_logo} alt="vetlab logo"></img>
              <span>veterinary clinic</span>
              <span>Caring Beyond Treatment,</span>
              <span> Healing Beyond Words.</span>
            </div>
            <button className="appointment-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="calendar-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              Schedule an appointment
            </button>
          </div>
        </div>
        <div className="right-side-home">
          <div className="right-side-img">
            <img src={home_img} alt="home page image no.0"></img>
          </div>
          <div className="right-side-img1">
            <img src={home_img1} alt="home page image no.1"></img>
          </div>
          <div className="right-side-img2">
            <img src={home_img2} alt="home page image no.2"></img>
          </div>
          <div className="right-side-img3">
            <img src={home_img3} alt="home page image no.3"></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
