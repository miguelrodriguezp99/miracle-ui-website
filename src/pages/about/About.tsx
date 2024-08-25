import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ContentAside from "../../components/aside/ContentAside";
import BreadcrumbIcon from "../../icons/BreadcrumbIcon";
import useNav from "../../hooks/useNav";

const About = () => {
  const { handleClick } = useNav("/docs/installation");

  return (
    <>
      <div>
        <Breadcrumb title="About" />

        <section className="text-black dark:text-pwhite mt-4">
          <h1 className="text-3xl font-bold">About the Project</h1>
          <p className="text-base mt-5">
            Miracle UI is a lightweight and fast React component library built
            entirely with native CSS. Inspired by several modern component
            libraries, Miracle UI aims to provide developers with a simple yet
            powerful toolset for building responsive and interactive web
            applications.
          </p>

          <p className="text-base mt-5">
            The library is designed to be intuitive and easy to use, making it a
            great choice for both beginners and experienced developers.
          </p>

          <p className="text-base mt-5">
            Created by a single developer with educational purposes in mind,
            Miracle UI is an open-source project that anyone can use and
            contribute to. The project is a testament to the potential of
            individual effort in the open-source community, showing that even
            one person can create something valuable and impactful.
          </p>

          <p className="text-base mt-5">
            Whether you're building a small personal project or a large-scale
            application, Miracle UI offers a variety of components to help you
            get the job done. Its simplicity and flexibility make it an
            excellent choice for developers who want to focus on building
            without getting bogged down by complex configurations or heavy
            dependencies.
          </p>

          <p className="text-base mt-5">
            As an open-source library, Miracle UI encourages collaboration and
            innovation. Contributions from the community are welcomed, and users
            are free to use the library in any project they desire, be it
            personal, educational, or commercial.
          </p>
        </section>

        <div className="flex flex-row items-end justify-end mt-5">
          <button
            onClick={handleClick}
            className="border border-1 border-pblack/10 dark:border-pwhite/10 
            rounded-[4px] px-4 py-1.5 transition-all duration-200
          hover:bg-pblack/10 dark:hover:bg-pwhite/20"
          >
            <div className="flex items-center gap-2 text-center">
              <p className="text-pblack dark:text-pwhite text-[14px]">
                Installation
              </p>
              <BreadcrumbIcon />
            </div>
          </button>
        </div>
      </div>

      <ContentAside title={["About"]} />
    </>
  );
};

export default About;
