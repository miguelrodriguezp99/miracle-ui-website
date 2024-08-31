import { Accordion, AccordionItem } from "@miracle-ui/react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ContentAside from "../../components/aside/ContentAside";
import BreadcrumbIcon from "../../icons/BreadcrumbIcon";
import Button from "../../components/button/Button";

const Introduction = () => {
  return (
    <>
      <div>
        <Breadcrumb title="Introduction" />

        <section className="text-black dark:text-pwhite mt-4">
          <h1 className="text-3xl font-bold">Introduction</h1>
          <p className="text-base mt-2 text-pblack/60 dark:text-pwhite/60">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>

          <p className="text-base mt-5">
            Miracle UI is a collection of components created for React with
            native CSS, meaning they don't rely on third-party libraries. This
            makes the components much lighter and faster.
          </p>

          <p className="text-base mt-5">
            This project is created by a single person with{" "}
            <span className="font-bold">learning objectives in mind.</span>{" "}
            Anyone interested in using it is free to do so. The code is open
            source and available on GitHub.
          </p>

          <p className="text-base mt-5">
            Use Miracle UI components to create web applications and have fun!
          </p>
        </section>

        <section id="faq" className="mt-12 text-pblack dark:text-pwhite">
          <h1 className="text-2xl font-bold">FAQ</h1>
          <Accordion>
            <AccordionItem
              titleFontSize="14px"
              contentFontSize="14px"
              title="Is it worth installing the @miracle-ui/react package?"
              content="This package is primarily recommended for testing or learning purposes. If you're looking for optimal performance and lightweight functionality, we suggest using the individual packages instead."
            />
            <AccordionItem
              titleFontSize="14px"
              contentFontSize="14px"
              title="Is Miracle UI a lightweight component library?"
              content="Yes, Miracle UI is designed to be lightweight and fast, as it does not rely on third-party libraries. This ensures that the components are both efficient and quick to load."
            />
            <AccordionItem
              titleFontSize="14px"
              contentFontSize="14px"
              title="Can Miracle UI be used with other frameworks?"
              content="No, Miracle UI is specifically built for React and is not intended for use with other frameworks or libraries."
            />
            <AccordionItem
              titleFontSize="14px"
              contentFontSize="14px"
              title="Is the project still under active development?"
              content="Yes, Miracle UI is actively being developed, with plans to add more components and features in the future. Community contributions are also highly encouraged."
            />
          </Accordion>
        </section>

        <div className="flex flex-row items-end justify-end mt-5">
          {/* <button
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
          </button> */}
          <Button
            text="Installation"
            route="/docs/installation"
            endContent={<BreadcrumbIcon />}
          />
        </div>
      </div>

      <ContentAside title={["Introduction", "FAQ"]} />
    </>
  );
};

export default Introduction;
