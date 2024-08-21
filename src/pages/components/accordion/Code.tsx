const codeblock = {
  primaryCode: `
import { Accordion, AccordionItem } from "@miracle-ui/react";
import { Tab, Tabs } from "@miracle-ui/tabs";
import { atomOneDark, CopyBlock } from "react-code-blocks";

export const AccordionPage = () => {
  return (
    <div className="text-pwhite ">
      <div className="space-y-2">
        <p className="text-3xl font-bold">Accordion</p>
        <p className="text-base">
          Accordion display a list of high-level options that can
          expand/collapse to reveal more information.
        </p>
      </div>
      <div className="space-x-2 pt-4">
        <button>Docs</button>
        <button>API Reference</button>
      </div>

      <div className="pt-8 w-fit">
        <div className="ml-[-12px]">
          <Tabs variant="underlined">
            <Tab title="Preview">
              <div
                className="ml-3 border border-1 border-pwhite/20 rounded-md px-4 py-12 mt-10 
                flex align-middle justify-center"
              >
                <div className="w-[75%]">
                  <Accordion>
                    <AccordionItem
                      title="Accordion Item 1"
                      titleFontSize="16px"
                      contentFontSize="14px"
                    />
                    <AccordionItem
                      title="Accordion Item 1"
                      titleFontSize="16px"
                      contentFontSize="14px"
                    />
                    <AccordionItem
                      title="Accordion Item 1"
                      titleFontSize="16px"
                      contentFontSize="14px"
                    />
                  </Accordion>
                </div>
              </div>
            </Tab>
            <Tab title="Code">
              <div
                className="ml-3 border border-1 border-pwhite/20 rounded-md px-4 py-12 mt-10 
                flex align-middle justify-center"
              >
                <CopyBlock
                  language="go"
                  showLineNumbers={false}
                  theme={atomOneDark}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
`,
};

export default codeblock;
