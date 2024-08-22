import codeblock from "./Code";
import ComponentLayout from "../../../layout/ComponentLayout";
import { Accordion, AccordionItem } from "../../../components/accordion";

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
