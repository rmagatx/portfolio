import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  window.onscroll = function() {
    // print "false" if direction is down and "true" if up
    // console.log(this.oldScroll > this.scrollY);

    if (this.oldScroll > this.scrollY) {
      document.getElementsByTagName("nav")[0].style.transform = "translate(0, 0)";
      document.getElementsByTagName("nav")[0].style.paddingTop = "0.8rem";
      document.getElementsByTagName("nav")[0].style.paddingBottom = "0.8rem";
      document.getElementsByTagName("nav")[0].style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    } else {
      document.getElementsByTagName("nav")[0].style.transform = "translate(0, -100px)";
      // document.getElementsByTagName("nav")[0].style.position = "absolute";
      // document.getElementsByTagName("nav")[0].style.top = "-100px";

    }

    if (this.scrollY === 0) {
      document.getElementsByTagName("nav")[0].style.boxShadow = "unset";
      document.getElementsByTagName("nav")[0].style.paddingTop = "1.5rem";
      document.getElementsByTagName("nav")[0].style.paddingBottom = "1.5rem";
    }

    this.oldScroll = this.scrollY;
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
