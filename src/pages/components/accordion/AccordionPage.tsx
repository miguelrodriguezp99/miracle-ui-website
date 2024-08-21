import { Accordion, AccordionItem } from "@miracle-ui/accordion";
import codeblock from "./Code";
import ComponentLayout from "../../../layout/ComponentLayout";

export const AccordionPage = () => {
  return (
    <>
      <ComponentLayout
        title="Accordion"
        description="Accordion display a list of high-level options that can expand/collapse to reveal more information."
        examples={[
          {
            component: (
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
            ),
            code: codeblock.primaryCode,
          },
        ]}
      />
    </>
  );
};
