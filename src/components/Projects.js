import { Waypoint } from "react-waypoint";
import projects from "../projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  function handleWayPointEnter() {
    document.getElementById("link-projects").classList.add("text-rose-600");
  }

  function handleWaypointLeave() {
    document.getElementById("link-projects").classList.remove("text-rose-600");
  }

  const cards = projects.map((item) => {
    return (
      <ProjectCard
        key={item.id}
        name={item.name}
        description={item.description}
        stack={item.stack}
        github={item.github}
        link={item.link}
      />
    );
  });

  return (
    <Waypoint
      onEnter={handleWayPointEnter}
      onLeave={handleWaypointLeave}
      topOffset="45%"
      bottomOffset="45%"
    >
      <section
        id="projects"
        className="text-slate-800 dark:text-slate-100 md:px-[100px] py-[90px] mt-[100px]"
      >
        <div className="max-w-[1000px] mx-auto px-6 md:p-0">
          <h1
            className="uppercase text-3xl font-bold underline
                       underline-offset-4 decoration-rose-600 decoration-4
                       tracking-wider text-center"
          >
            Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {cards}
          </div>
        </div>
      </section>
    </Waypoint>
  );
}

export default Projects;
