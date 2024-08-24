const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t-[0.5px] border-t-pblack/30 dark:border-t-pwhite/10 relative bg-white dark:bg-pblack z-40">
      <div className="max-w-[1350px] mx-auto  flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="px-2 py-1 text-balance text-center text-sm leading-loose md:text-left text-pblack dark:text-pwhite/60">
          Built by{" "}
          <a
            href="https://github.com/miguelrodriguezp99"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer underline underline-offset-4"
          >
            Miguel Rodríguez
          </a>
          . Source code available on{" "}
          <a
            href="https://github.com/miguelrodriguezp99/miracle-ui"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer underline underline-offset-4"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
