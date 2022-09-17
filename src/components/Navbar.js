import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Spin as Hamburger } from "hamburger-react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

function Navbar() {
  // Light & Dark Mode Function
  function handleDarkModeOnClick() {
    document.getElementsByClassName("light-mode-switch")[0].style.display =
      "none";
    document.getElementsByClassName("dark-mode-switch")[0].style.display =
      "block";
    document.getElementsByClassName("light-mode-switch")[1].style.display =
      "none";
    document.getElementsByClassName("dark-mode-switch")[1].style.display =
      "block";

    localStorage.theme = "dark";

    document.documentElement.classList.add("dark");
  }

  function handleLightModeOnClick() {
    document.getElementsByClassName("light-mode-switch")[0].style.display =
      "block";
    document.getElementsByClassName("dark-mode-switch")[0].style.display =
      "none";
    document.getElementsByClassName("light-mode-switch")[1].style.display =
      "block";
    document.getElementsByClassName("dark-mode-switch")[1].style.display =
      "none";

    localStorage.theme = "light";
    document.documentElement.removeAttribute("class");
  }

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      document.getElementsByClassName("light-mode-switch")[0].style.display =
        "none";
      document.getElementsByClassName("dark-mode-switch")[0].style.display =
        "block";
      document.getElementsByClassName("light-mode-switch")[1].style.display =
        "none";
      document.getElementsByClassName("dark-mode-switch")[1].style.display =
        "block";
    } else {
      document.documentElement.removeAttribute("class");
      document.getElementsByClassName("light-mode-switch")[0].style.display =
        "block";
      document.getElementsByClassName("dark-mode-switch")[0].style.display =
        "none";
      document.getElementsByClassName("light-mode-switch")[1].style.display =
        "block";
      document.getElementsByClassName("dark-mode-switch")[1].style.display =
        "none";
    }
  }, []);

  // Hamburger Function
  const [isOpen, setOpen] = useState(false);

  function handleHamburgerOnClick() {
    if (isOpen) {
      setOpen(false);
      document.body.style.overflow = "unset";
      document.getElementsByClassName("side-navbar")[0].style = "width: 0%";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
      document.getElementsByClassName("side-navbar")[0].style = "width: 100%";
    }
  }

  function handleMenuOnClick() {
    if (isOpen) {
      document.getElementsByClassName("hamburger-react")[0].click();
    }
  }

  window.onresize = function () {
    if (isOpen && window.screen.width > 639) {
      document.getElementsByClassName("hamburger-react")[0].click();
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="flex justify-between items-center fixed bg-slate-300/80 dark:bg-[#0A192F]/80
                   backdrop-blur-sm duration-200 w-full top-0 z-[9999] p-6"
      >
        <div className="z-[-1]" data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
          <h1
            className="text-2xl font-bold text-rose-600 border-2 border-rose-600 bg-transparent
                     hover:text-slate-100 hover:border-slate-100 hover:bg-rose-600 duration-200 p-1"
          >
            <Link
              className="hover:cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
              onClick={handleMenuOnClick}
            >
              RM
            </Link>
          </h1>
        </div>
        <div
          className="sm:flex hidden"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <ul className="flex uppercase text-sm text-slate-800 dark:text-slate-100 items-center">
            <li id="link-home" className="mr-4">
              <Link
                className="hover:cursor-pointer hover:text-rose-600 duration-200"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li id="link-stack" className="mx-4">
              <Link
                className="hover:cursor-pointer hover:text-rose-600 duration-200"
                to="stack"
                smooth={true}
                duration={500}
              >
                Stack
              </Link>
            </li>
            <li id="link-projects" className="mx-4">
              <Link
                className="hover:cursor-pointer hover:text-rose-600 duration-200 "
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li id="link-contact" className="link-contact ml-4">
              <Link
                className="hover:cursor-pointer hover:text-rose-600 duration-200 "
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Dark & Light Mode */}
          <div className="flex items-center text-3xl ml-4">
            <span>|</span>
            <button
              className="text-rose-600 border-rose-600 ml-4"
              type="button"
            >
              <IoIosSunny
                className="light-mode-switch"
                onClick={handleDarkModeOnClick}
              />
              <IoIosMoon
                className="dark-mode-switch"
                onClick={handleLightModeOnClick}
              />
            </button>
          </div>
        </div>
        {/* Mobile Sidebar  */}
        <div className="sm:hidden text-rose-600">
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
            <Hamburger onToggle={handleHamburgerOnClick} />
          </div>
          <aside
            className="side-navbar fixed right-0 top-0 text-rose-600 bg-slate-400 dark:bg-[#112240]
                       duration-200 h-screen w-[0px] z-[-1]"
          >
            <nav className="flex flex-col justify-center uppercase text-lg text-center h-screen">
              <ul>
                <li className="bg-slate-300 dark:bg-[#0A192F] rounded-md duration-200 mx-10 my-3 p-2">
                  <Link
                    className="hover:cursor-pointer"
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuOnClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="bg-slate-300 dark:bg-[#0A192F] rounded-md duration-200 mx-10 my-3 p-2">
                  <Link
                    className="hover:cursor-pointer"
                    to="stack"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuOnClick}
                  >
                    Stack
                  </Link>
                </li>
                <li className="bg-slate-300 dark:bg-[#0A192F] rounded-md duration-200 mx-10 my-3 p-2">
                  <Link
                    className="hover:cursor-pointer"
                    to="projects"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuOnClick}
                  >
                    Projects
                  </Link>
                </li>
                <li className="bg-slate-300 dark:bg-[#0A192F] rounded-md duration-200 mx-10 my-3 p-2">
                  <Link
                    className="hover:cursor-pointer"
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuOnClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* Mobile Social Media & Contact */}
              <div className="flex items-center mx-auto mt-5">
                <ul className="flex text-4xl">
                  <li className="mr-4">
                    <a
                      href="https://github.com/rmagatx"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      <AiOutlineGithub />
                    </a>
                  </li>
                  <li className="mr-4">
                    <a
                      href="https://www.linkedin.com/in/remelson-magat-42aa9b203/"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      <AiOutlineLinkedin />
                    </a>
                  </li>
                </ul>
                {/* Dark & Light Mode */}
                <div className="flex items-center text-4xl">
                  <span>|</span>
                  <button
                    className="text-rose-600 border-rose-600 ml-4"
                    type="button"
                  >
                    <IoIosSunny
                      className="light-mode-switch"
                      onClick={handleDarkModeOnClick}
                    />
                    <IoIosMoon
                      className="dark-mode-switch"
                      onClick={handleLightModeOnClick}
                    />
                  </button>
                </div>
              </div>
            </nav>
          </aside>
        </div>
      </nav>
      {/* Desktop Social Media and Contact */}
      <div
        className="md:block fixed bottom-0 left-6 text-3xl text-right hidden z-[9999]"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="500"
      >
        <ul className="flex flex-col text-slate-800 dark:text-slate-400 mb-5">
          <li className="hover:text-rose-600 hover:-translate-y-1 duration-200 pb-2">
            <a
              href="https://github.com/rmagatx"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li className="hover:text-rose-600 hover:-translate-y-1 duration-200 mt-2">
            <a
              href="https://www.linkedin.com/in/remelson-magat-42aa9b203/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
        </ul>
        <div
          className="border-[1px] h-[150px] w-[2px] rounded-t-xl border-slate-800
                   bg-slate-800 dark:border-[#94A3B8] dark:bg-[#94A3B8] duration-200 mx-auto"
        ></div>
      </div>
    </>
  );
}

export default Navbar;
