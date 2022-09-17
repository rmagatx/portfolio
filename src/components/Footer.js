function Footer() {
  return (
    <footer className="md:px-[100px]">
      <div className="text-center text-xs sm:text-sm max-w-[900px] mx-auto px-6 md:p-0 mb-5">
        Inspired by{" "}
        <a
          className="link-inspired text-rose-600"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Britanny Chiang
        </a>{" "}
        &amp; Built by{" "}
        <a
          className="link-built text-rose-600"
          href="https://www.linkedin.com/in/remelson-magat-42aa9b203/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Remelson Magat
        </a>
      </div>
    </footer>
  );
}

export default Footer;
