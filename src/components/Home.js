import { Link } from "react-scroll";
import { Waypoint } from "react-waypoint";
import Typed from "react-typed";
import { MdWavingHand } from "react-icons/md";

// Hero Section
function Home() {
  function handleWayPointEnter() {
    document.getElementById("link-home").classList.add("text-rose-600");
  }

  function handleWaypointLeave() {
    document.getElementById("link-home").classList.remove("text-rose-600");
  }

  return (
    <Waypoint
      onEnter={handleWayPointEnter}
      onLeave={handleWaypointLeave}
      topOffset="55%"
    >
      <main id="home" className="md:px-[100px]">
        <div className="flex flex-col max-w-[1000px] h-screen justify-center mx-auto px-6 md:p-0">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
          >
            <p className="text-rose-600">Hello, I'm</p>
            <h1 className="font-bold text-4xl sm:text-6xl text-slate-800 dark:text-slate-100 py-3">
              Remelson Magat.
            </h1>
            <h2 className="hidden lg:block font-bold text-6xl text-slate-600 dark:text-slate-400 py-3">
              I'm{" "}
              <Typed
                strings={[
                  "an IT Graduate.",
                  "an aspiring Web Developer.",
                ]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
            </h2>
            <p className="break-words max-w-[600px] pt-3">
              I'm a graduate of{" "}
              <a
                className="link-school text-rose-600"
                href="https://www.rrc.ca/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Red River College Polytechnic (RRC Polytech)
              </a>{" "}
              in the{" "}
              <a
                className="link-course text-rose-600"
                href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Business Information Technology (BIT)
              </a>{" "}
              program. I specialize in building and designing exceptional
              digital experiences. Currently, I'm focused on creating responsive
              static and dynamic web pages.
            </p>
            <div>
              <button
                className="contact-button flex border-2 border-slate-800 dark:border-slate-100 items-center
                         hover:bg-slate-400 dark:hover:bg-rose-600 duration-200 p-4 mt-10"
              >
                <Link
                  className="flex hover:cursor-pointer text-sm font-medium text-slate-800 dark:text-slate-100"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Say Hello
                  <span className="ml-2 text-lg">
                    <MdWavingHand />
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Waypoint>
  );
}

export default Home;
