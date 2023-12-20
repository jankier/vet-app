import useMediaQuery from "../../hooks/useMediaQuery";
import vetlab_logo from "../../assets/vetlab-logo.png";
import "./Navbar.css";
import { SelectedPage } from "../../shared/types";
import { useState } from "react";
import Link from "../../components/Navbar/Link/Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbar = isTopOfPage ? "navbar" : "navbar-not-on-top";

  return (
    <div className={`${navbar}`}>
      <div className="left-side-navbar">
        <div className="logo-navbar">
          <img
            className="logo-img-navbar"
            src={vetlab_logo}
            alt="vetlab logo"
          ></img>
        </div>
      </div>
      {isAboveMediumScreen ? (
        <div className="right-side-navbar">
          <div className="navbar-list">
            <Link
              page="Home"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Services"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Our Staff"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="About Us"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Gallery"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
          </div>
        </div>
      ) : (
        <div className="right-side-navbar-sidebar">
          <button
            className="menu-button"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      )}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="sidebar-menu">
          <div className="close-menu">
            <button
              className="close-button"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <svg
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="sidebar-list">
            <Link
              page="Home"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Services"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Our Staff"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="About Us"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Gallery"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            ></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
