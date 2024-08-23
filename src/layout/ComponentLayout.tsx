import { Clipboard, Tab, Tabs } from "@miracle-ui/react";
import { CopyBlock, tomorrowNight } from "react-code-blocks";

type Example = {
  title: string;
  component: React.ReactNode;
  code: string;
};

type Props = {
  title: string;
  description: string;
  examples: Example[];
  storybook?: string;
};

export default function ComponentLayout({
  title,
  description,
  examples,
  storybook,
}: Props) {
  return (
    <>
      <div className="text-black dark:text-pwhite relative">
        <div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">{title}</p>
            <p className="text-base">{description}</p>
          </div>
          <div className="space-x-2 pt-4">
            <button>Docs</button>
            <button>API Reference</button>
            <a
              href={storybook}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              Storybook
            </a>
          </div>

          <div className="h-[0.5px] bg-black/30 dark:bg-pwhite/30 my-8"></div>

          <section>
            <p id="installation" className="text-3xl font-bold">
              Installation
            </p>
            <div className="ml-[-12px] mt-3">
              <Tabs variant="underlined">
                <Tab title="NPM">
                  <div className="mt-3 rounded-md ml-[12px]">
                    <Clipboard
                      customBorderRadius="6px"
                      customPadding="4px 12px"
                      customBackgroundColor="#1d1f21"
                      customTextSize="14px"
                    >
                      npm install @miracle-ui/{title.toLowerCase()}
                    </Clipboard>
                  </div>
                </Tab>

                <Tab title="CLI">
                  <div className="mt-3 rounded-md ml-[12px]">
                    <Clipboard
                      customBorderRadius="6px"
                      customPadding="4px 12px"
                      customBackgroundColor="#1d1f21"
                      customTextSize="14px"
                    >
                      miracle-ui add {title.toLowerCase()}
                    </Clipboard>
                  </div>
                </Tab>
              </Tabs>
            </div>

            <div className="w-full border border-1 border-orange-400/20 bg-orange-500/5 mt-5 rounded-md">
              <p className="px-3 py-4">
                The above command is for individual installation only. You may
                skip this step if
                <span className="bg-gray-500 dark:bg-[#2a2d30] px-2 py-1 rounded-[4px] ml-1 mr-1">
                  @nextui-org/react
                </span>
                is already installed globally.
              </p>
            </div>
          </section>

          <div className="h-[0.5px] bg-black/30 dark:bg-pwhite/30 my-8"></div>

          <section>
            {examples.map((example, index) => (
              <div key={index}>
                <p id={example.title} className="text-3xl font-bold mt-8">
                  {example.title}
                </p>
                <div key={index} className="mt-3 w-full">
                  <div className="ml-[-12px]">
                    <Tabs variant="underlined">
                      <Tab title="Preview">
                        <div
                          className="ml-3 border border-1 border-black/20 dark:border-pwhite/20 rounded-md px-20 py-5 mt-5
                        flex items-center justify-center min-h-[350px]"
                        >
                          {example.component}
                        </div>
                      </Tab>

                      <Tab title="Code">
                        <div
                          className="ml-3 border border-1 border-pwhite/20 rounded-md mt-5 
                        flex align-middle justify-center min-h-[350px]"
                        >
                          <CopyBlock
                            wrapLongLines
                            customStyle={{
                              maxHeight: "500px",
                              overflow: "auto",
                              width: "100%",
                              scrollbarWidth: "thin",
                              scrollbarColor: "#4B5563 #1A202C",
                              paddingLeft: "1rem",
                            }}
                            text={example.code}
                            language="jsx"
                            showLineNumbers={false}
                            theme={tomorrowNight}
                          />
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="hidden bg-red-100 text-sm xl:block top-0 left-0 h-fit text-pblack dark:text-pwhite">
        <div className="fixed">
          <p>On this page</p>
          <div className="flex flex-col">
            <a
              href="#installation"
              className="pt-2 text-pblack/60 hover:text-pblack dark:text-pwhite/60 dark:hover:text-pwhite cursor-pointer transition-colors duration-300"
            >
              Installation
            </a>
            {examples.map((example, index) => (
              <a
                href={`#${example.title}`}
                key={index}
                className="pt-2 text-pblack/60 hover:text-pblack dark:text-pwhite/60 dark:hover:text-pwhite cursor-pointer transition-colors duration-300"
              >
                {example.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
