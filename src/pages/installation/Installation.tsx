import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ContentAside from "../../components/aside/ContentAside";
import BreadcrumbIcon from "../../icons/BreadcrumbIcon";
import codeblock from "./Code";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import { Clipboard } from "@miracle-ui/clipboard";
import Button from "../../components/button/Button";

const Installation = () => {
  return (
    <>
      <div>
        <Breadcrumb title="Installation" />

        <section
          id="Automatic Installation"
          className="text-black dark:text-pwhite mt-4"
        >
          <h1 className="text-3xl font-bold">Installation</h1>

          <h2 className="mt-3 text-xl font-bold">Requirements</h2>
          <ul className="list-disc ml-5">
            <li className="text-sm mt-2">React 18 or later</li>
          </ul>

          <div className="h-[0.5px] bg-black/30 dark:bg-pwhite/30 my-5"></div>

          <h1 className="text-2xl font-bold">Automatic Installation</h1>

          <p className="text-base mt-2 text-pblack dark:text-pwhite">
            Using the CLI is now the easiest way to start a NextUI project. You
            can initialize your project and add components directly via the CLI:
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              npm install -g miracle-ui/cli
            </Clipboard>
          </div>

          <p className="mt-3 text-base">
            In your project you can now run the command:
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              miracle-ui init
            </Clipboard>
          </div>

          <p className="mt-3 text-base">
            This command will create a CSS file and import it automatically in
            your main/index file
          </p>

          <p className="mt-3 text-base">Start the local server:</p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              npm run dev
            </Clipboard>
          </div>

          <p className="mt-3 text-base">
            Once your MiracleUI project is ready, you can adad individual
            components using the CLI. For example, yo add a button component
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              miracle-ui add button
            </Clipboard>
          </div>

          <p className="mt-3 text-base">
            This command adds the Button component to your project and manages
            all related dependencies
          </p>

          <p className="mt-3 text-base">
            You can also add multiple components at once:
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              miracle-ui add button input
            </Clipboard>
          </div>

          <p className="mt-3 text-base">
            Or you can add the main library{" "}
            <span className="bg-gray-500 dark:bg-[#2a2d30] px-2 py-1 rounded-[4px] ml-1 mr-1">
              @nextui-org/react
            </span>{" "}
            by running the following command:
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              miracle-ui add --all
            </Clipboard>
          </div>
        </section>

        <div className="h-[0.5px] bg-black/30 dark:bg-pwhite/30 my-10"></div>

        <section
          id="Manual Installation"
          className="text-black dark:text-pwhite"
        >
          <h1 className="text-2xl font-bold ">Manual Installation</h1>

          <p className="text-base mt-3 text-pblack dark:text-pwhite">
            If you prefer not to use the CLI, you may try either global
            installation or individual installation to set up MiracleUI in your
            project:
          </p>

          <p className="text-base mt-3 text-pblack dark:text-pwhite">
            The first step is to create a CSS file and copy this content into
            it:
          </p>

          <CopyBlock
            wrapLongLines
            customStyle={{
              maxHeight: "500px",
              marginTop: "1rem",
              overflow: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#4B5563 #1A202C",
              paddingLeft: "1rem",
            }}
            text={codeblock.primaryCode}
            language="css"
            showLineNumbers={false}
            theme={tomorrowNight}
          />

          <p className="text-base mt-3 text-pblack dark:text-pwhite">
            After creating the CSS file, import it into your main/index file.
          </p>

          <p className="text-base mt-3 text-pblack dark:text-pwhite">
            Now you can install individual components by running the following
            command:
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              npm install @miracle-ui/button
            </Clipboard>
          </div>

          <p className="text-base mt-2 text-pblack dark:text-pwhite">
            Or you can just install all the components at once using the react
            package:
          </p>

          <div className="mt-3">
            <Clipboard
              fullWidth
              customBorderRadius="6px"
              customPadding="4px 12px"
              customBackgroundColor="#1d1f21"
              customTextSize="14px"
            >
              npm install @miracle-ui/react
            </Clipboard>
          </div>
        </section>

        <div className="flex flex-row items-end justify-end mt-5">
          {/* <button
            onClick={() => handleClick()}
            className="border border-1 border-pblack/10 dark:border-pwhite/10 
            rounded-[4px] px-4 py-1.5 transition-all duration-200
          hover:bg-pblack/10 dark:hover:bg-pwhite/20"
          >
            <div className="flex items-center gap-2 text-center">
              <p className="text-pblack dark:text-pwhite text-[14px]">
                Dark Mode
              </p>
              <BreadcrumbIcon />
            </div>
          </button> */}
          <Button
            text="Dark Mode"
            route="/docs/darkmode"
            endContent={<BreadcrumbIcon />}
          />
        </div>
      </div>

      <ContentAside title={["Automatic Installation", "Manual Installation"]} />
    </>
  );
};

export default Installation;
