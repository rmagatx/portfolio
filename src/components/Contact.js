import { Waypoint } from "react-waypoint";
import { BsFillEmojiSmileFill } from "react-icons/bs";

function Contact() {
  function handleWayPointEnter() {
    document.getElementById("link-contact").classList.add("text-rose-600");
  }

  function handleWaypointLeave() {
    document.getElementById("link-contact").classList.remove("text-rose-600");
  }

  return (
    <Waypoint
      onEnter={handleWayPointEnter}
      onLeave={handleWaypointLeave}
      bottomOffset="55%"
    >
      <section
        id="contact"
        className="text-slate-800 md:px-[100px]"
      >
        <div className="flex flex-col justify-center h-screen max-w-[1000px] mx-auto px-6 md:p-0">
          <h1
            className="uppercase text-3xl font-bold underline underline-offset-4 text-slate-800 dark:text-slate-100
                     decoration-rose-600 decoration-4 tracking-wider text-center"
          >
            Get In Touch
          </h1>
          <p className="max-w-[500px] mx-auto mt-10 text-center text-slate-800 dark:text-slate-400">
            Want to have a word with me or just want to say hi? My inbox is
            always open and I will try to reply back as soon as possible.
          </p>
          <a
            className="contact-button flex border-2 border-slate-800 dark:border-slate-100 text-sm text-slate-800
                     dark:text-slate-100 items-center hover:bg-slate-400 dark:hover:bg-rose-600 duration-200
                       p-4 mt-10 mx-auto"
            href="mailto:rmagatx@outlook.com"
          >
            Send A Message
            <span className="ml-2 text-lg">
              <BsFillEmojiSmileFill />
            </span>
          </a>
        </div>
      </section>
    </Waypoint>
  );
}

export default Contact;
