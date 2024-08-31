import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import ContentAside from "../../../components/aside/ContentAside";
import BreadcrumbIcon from "../../../icons/BreadcrumbIcon";
import { Tab, Tabs } from "@miracle-ui/react";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import ThemeToggle from "../../../components/themeToggle/ThemeToggle";
import codeblock from "./Code";
import Button from "../../../components/button/Button";

const DarkMode = () => {
  return (
    <>
      <div>
        <Breadcrumb title="Dark mode" />

        <section className="text-black dark:text-pwhite mt-4">
          <h1 className="text-3xl font-bold">Enabling dark mode.</h1>
          <p className="text-base mt-2 text-pblack/60 dark:text-pwhite/60">
            To enable the dark mode, you need to add a dark class to the html.{" "}
            <br /> In this page I will show you how to do it.
          </p>

          <p className="text-base mt-4 text-pblack dark:text-pwhite">
            You can use a button to toggle the dark mode if you want to give the
            user the option to switch between light and dark mode. If this is
            your case, you can use a Theme Toggle component.
          </p>

          <div className="ml-[-12px] mt-5 mb-10">
            <Tabs variant="underlined">
              <Tab title="Preview">
                <div
                  className={`ml-3 border border-1 border-black/20 dark:border-pwhite/20 rounded-md px-20 py-5 mt-2
                        flex items-center justify-center min-h-[150px]`}
                >
                  <div>
                    <ThemeToggle />
                  </div>
                </div>
              </Tab>

              <Tab title="Code">
                <div
                  className={`ml-3 border border-1 border-black/20 dark:border-pwhite/20 rounded-md mt-2
                            flex align-middle justify-center min-h-[150px] max-h-[350px] `}
                >
                  <CopyBlock
                    wrapLongLines
                    customStyle={{
                      maxHeight: "500px",
                      minHeight: "auto",
                      overflow: "auto",
                      width: "100%",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#4B5563 #1A202C",
                      paddingLeft: "1rem",
                    }}
                    text={codeblock.primaryCode}
                    language="jsx"
                    showLineNumbers={false}
                    theme={tomorrowNight}
                  />
                </div>
              </Tab>
              <Tab title="Moon Icon">
                <div
                  className={`ml-3 border border-1 border-black/20 dark:border-pwhite/20 rounded-md mt-2
                            flex align-middle justify-center min-h-[150px] max-h-[350px] `}
                >
                  <CopyBlock
                    wrapLongLines
                    customStyle={{
                      maxHeight: "500px",
                      minHeight: "auto",
                      overflow: "auto",
                      width: "100%",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#4B5563 #1A202C",
                      paddingLeft: "1rem",
                    }}
                    text={codeblock.moonIcon}
                    language="jsx"
                    showLineNumbers={false}
                    theme={tomorrowNight}
                  />
                </div>
              </Tab>
              <Tab title="Sun Icon">
                <div
                  className={`ml-3 border border-1 border-black/20 dark:border-pwhite/20 rounded-md mt-2
                            flex align-middle justify-center min-h-[150px] max-h-[350px] `}
                >
                  <CopyBlock
                    wrapLongLines
                    customStyle={{
                      maxHeight: "500px",
                      minHeight: "auto",
                      overflow: "auto",
                      width: "100%",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#4B5563 #1A202C",
                      paddingLeft: "1rem",
                    }}
                    text={codeblock.sunIcon}
                    language="jsx"
                    showLineNumbers={false}
                    theme={tomorrowNight}
                  />
                </div>
              </Tab>
            </Tabs>
          </div>

          <p className="text-base mt-4 text-pblack dark:text-pwhite">
            In case you want to enable the dark mode by default, you can add the
            dark class to the html tag. Also if you dont want to give the user
            the option to switch between light and dark mode, you can remove the
            ThemeToggle component and use the class dark in the html tag.
          </p>
          <p className="text-base mt-2 text-pblack dark:text-pwhite">
            You can use the following code to enable the dark mode by default.
          </p>

          <div className="max-h-[200px] mt-5">
            <CopyBlock
              wrapLongLines
              customStyle={{
                maxHeight: "200px",
                overflow: "auto",
                width: "100%",
                scrollbarWidth: "thin",
                scrollbarColor: "#4B5563 #1A202C",
                paddingLeft: "1rem",
              }}
              text={codeblock.setDarkMode}
              language="jsx"
              showLineNumbers={false}
              theme={tomorrowNight}
            />
          </div>
        </section>

        <div className="flex flex-row items-end justify-end mt-5">
          <Button
            text="About"
            route="/docs/about"
            endContent={<BreadcrumbIcon />}
          />
        </div>
      </div>

      <ContentAside title={["Introduction", "FAQ"]} />
    </>
  );
};

export default DarkMode;
