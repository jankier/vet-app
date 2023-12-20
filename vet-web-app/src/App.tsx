import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import OurStaff from "./components/OurStaff/OurStaff";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <OurStaff setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
