import { CopyBlock, tomorrowNight } from "react-code-blocks";
import codeblock from "./Code";
import { Accordion, AccordionItem } from "@miracle-ui/react";
import ThemeToggle from "../../../components/themeToggle/ThemeToggle";

const DarkExample = () => {
  return (
    <>
      {/* <div className="hidden lg:flex absolute top-[40%] left-[70%] rounded-full min-h-80 min-w-80 bg-pyellow/50 blur-2xl radial"></div> */}

      <div className="h-auto bg-white dark:bg-pblack relative z-40 pb-32">
        <div className="absolute top-[25%] left-[55%] rounded-full min-h-80 min-w-80 bg-pyellow/50 blur-[120px] radial"></div>

        <section
          className="text-pblack dark:text-pwhite h-full text-center 
          flex flex-col gap-10 lg:flex-row justify-center
          w-[100%]  pt-20"
        >
          <div className="flex flex-col gap-6 w-full lg:w-[70%]">
            <div className="text-center lg:text-start ">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">
                Dark mode is simple to{" "}
                <span className="text-pred dark:text-pyellow">implement</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl pt-3">
                Miracle UI offers a perfectly balanced dark theme by default,
                which you can easily apply to your application by adding the
                "dark" attribute to your HTML..
              </p>
            </div>

            <div className="max-h-min product mt-5 flex gap-4 flex-wrap w-full justify-center md:justify-center 2xl:justify-start">
              <div
                className="border border-1 border-black/20 dark:border-pwhite/20 rounded-md px-20 py-3
                        flex items-center justify-center min-h-[350px] text-start relative"
              >
                <div className="absolute top-0 right-0 p-4">
                  <ThemeToggle />
                </div>

                <Accordion initialOpenIndexes={[0]}>
                  <AccordionItem
                    title="Accordion Item 1"
                    titleFontSize="18px"
                    contentFontSize="16px"
                  />
                  <AccordionItem
                    title="Accordion Item 1"
                    titleFontSize="18px"
                    contentFontSize="16px"
                  />
                  <AccordionItem
                    title="Accordion Item 1"
                    titleFontSize="18px"
                    contentFontSize="16px"
                  />
                </Accordion>
              </div>
            </div>
          </div>

          <div
            className="lg:w-[50%] flex justify-center w-full rounded-lg
            max-h-[400px] lg:max-h-[675px] xl:max-h-[580px] lg:mt-10" //lg:pt-36 pt-20
          >
            <CopyBlock
              wrapLongLines
              customStyle={{
                textAlign: "left",
                borderRadius: "10px",
                overflow: "auto",
                width: "100%",
                scrollbarWidth: "thin",
                scrollbarColor: "#4B5563 #1A202C",
                paddingLeft: "1rem",
              }}
              text={codeblock.usage}
              language="jsx"
              showLineNumbers={false}
              theme={tomorrowNight}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default DarkExample;
