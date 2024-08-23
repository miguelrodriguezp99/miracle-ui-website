import codeblock from "./Code";
import ComponentLayout from "../../../layout/ComponentLayout";
import { Accordion, AccordionItem } from "@miracle-ui/react";

export const AccordionPage = () => {
  return (
    <>
      <ComponentLayout
        title="Accordion"
        description="Accordion display a list of high-level options that can expand/collapse to reveal more information."
        storybook="https://main--66685fb204b9df24515e1b9b.chromatic.com/?path=/story/components-accordion--primary"
        examples={[
          {
            title: "Usage",
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
            code: codeblock.usage,
          },
          {
            title: "With label",
            component: (
              <Accordion>
                <AccordionItem
                  label="Press here to open"
                  title="Accordion Item 1"
                  titleFontSize="16px"
                  contentFontSize="14px"
                />
                <AccordionItem
                  label="Press here to open"
                  title="Accordion Item 1"
                  titleFontSize="16px"
                  contentFontSize="14px"
                />
                <AccordionItem
                  label="Press here to open"
                  title="Accordion Item 1"
                  titleFontSize="16px"
                  contentFontSize="14px"
                />
              </Accordion>
            ),
            code: codeblock.withLabel,
          },
          {
            title: "Compact",
            component: (
              <Accordion isCompact>
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
            code: codeblock.compact,
          },
          {
            title: "Multiple selection",
            component: (
              <Accordion initialOpenIndexes={[1, 2]} selectionMode="multiple">
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
            code: codeblock.multipleSelection,
          },
          {
            title: "Splitted",
            component: (
              <Accordion variant="splitted">
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
            code: codeblock.splitted,
          },
          {
            title: "Bordered",
            component: (
              <Accordion variant="bordered">
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
            code: codeblock.bordered,
          },
          {
            title: "Shadow",
            component: (
              <Accordion variant="shadow">
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
            code: codeblock.shadow,
          },
          {
            title: "Custom",
            component: (
              <Accordion
                variant={"splitted"}
                selectionMode="unique"
                isCompact={true}
              >
                <AccordionItem
                  title="Accordion 1"
                  backgroundColor="#990000"
                  titleColor="white"
                  contentColor="white"
                />
                <AccordionItem
                  title="Accordion 2"
                  titleColor="black"
                  backgroundColor="lightgray"
                />
                <AccordionItem
                  title="Accordion 3"
                  backgroundColor="#990000"
                  contentColor="black"
                />
                <AccordionItem
                  title="Accordion 4"
                  backgroundColor="lightgray"
                  titleColor="black"
                  contentColor="black"
                />
              </Accordion>
            ),
            code: codeblock.usage,
          },
        ]}
      />
    </>
  );
};
