import { Waypoint } from "react-waypoint";

function Stack() {
  function handleWayPointEnter() {
    document.getElementById("link-stack").classList.add("text-rose-600");
  }

  function handleWaypointLeave() {
    document.getElementById("link-stack").classList.remove("text-rose-600");
  }

  return (
    <Waypoint
      onEnter={handleWayPointEnter}
      onLeave={handleWaypointLeave}
      topOffset="45%"
      bottomOffset="45%"
    >
      <section
        id="stack"
        className="text-slate-800 dark:text-slate-100 md:px-[100px] py-[90px]"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <div className="max-w-[900px] mx-auto px-6 md:p-0">
          <h1
            className="uppercase text-3xl font-bold underline
                        underline-offset-4 decoration-rose-600 decoration-4
                        tracking-wider text-center"
          >
            Tech Stack
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 mt-14">
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-html5-plain colored text-8xl"></i>
              <p className="pt-6">HTML</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-css3-plain colored text-8xl"></i>
              <p className="pt-6">CSS</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-javascript-plain colored text-8xl"></i>
              <p className="pt-6">JavaScript</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-php-plain colored text-8xl"></i>
              <p className="pt-6">PHP</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-dot-net-plain colored text-8xl"></i>
              <p className="pt-6">ASP.NET</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-ruby-plain colored text-8xl"></i>
              <p className="pt-6">Ruby</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-rails-plain colored text-8xl"></i>
              <p className="pt-6">Rails</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-react-original colored text-8xl"></i>
              <p className="pt-6">React</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-wordpress-plain text-8xl"></i>
              <p className="pt-6">WordPress</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-bootstrap-plain colored text-8xl"></i>
              <p className="pt-6">Bootstrap</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-materialui-plain colored text-8xl"></i>
              <p className="pt-6">MUI</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-tailwindcss-plain colored text-8xl"></i>
              <p className="pt-6">Tailwind</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-git-plain colored text-8xl"></i>
              <p className="pt-6">Git</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-jira-plain colored text-8xl"></i>
              <p className="pt-6">Jira</p>
            </div>
            <div className="text-center hover:scale-110 duration-200">
              <i className="devicon-confluence-original colored text-8xl"></i>
              <p className="pt-6">Confluence</p>
            </div>
          </div>
        </div>
      </section>
    </Waypoint>
  );
}

export default Stack;
