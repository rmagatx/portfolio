import { GoLinkExternal } from "react-icons/go";
import { FcFolder } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";

function ProjectCard(props) {
  const stack = props.stack.map((item) => {
    return (
      <li
        key={item}
        className="rounded-[15px] bg-rose-600 text-[12px] text-sm text-slate-100 px-[10px]
                   py-[5px] mx-[5px] first:ml-0 last:mr-0"
      >
        {item}
      </li>
    );
  });

  return (
    <div
      className="card-project relative rounded-md bg-slate-400 dark:bg-[#112240] shadow-xl
                 hover:-translate-y-2 duration-200 min-h-[350px] p-8"
    >
      <div className="flex items-center justify-between">
        <div className="text-5xl text-rose-600">
          <FcFolder />
        </div>
        <div className="flex text-xl">
          <a
            className="mr-1 text-slate-800 dark:text-slate-100 hover:text-rose-600 dark:hover:text-rose-600
                       duration-200"
            href={props.github}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <FaGithubAlt />
          </a>
          <a
            className="ml-1 text-slate-800 dark:text-slate-100 hover:text-rose-600 dark:hover:text-rose-600
                       duration-200"
            href={props.link}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <GoLinkExternal />
          </a>
        </div>
      </div>
      <h2 className="card-name text-2xl font-bold text-slate-800 dark:text-slate-100 duration-200 mt-5">
        {props.name}
      </h2>
      <p className="break-words text-sm dark:text-slate-400 min-h-[150px] mt-3">
        {props.description}
      </p>
      <ul className="flex flex-wrap">{stack}</ul>
    </div>
  );
}

export default ProjectCard;
