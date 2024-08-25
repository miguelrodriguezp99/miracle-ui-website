const codeblock = {
  usage: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
    <Accordion>
      <AccordionItem
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        ratione vero doloremque. Maxime fugiat quod, eius aspernatur ab corporis
        nostrum."
      />
      <AccordionItem
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione vero doloremque. Maxime fugiat quod, eius aspernatur ab corporis
            nostrum."
      />
      <AccordionItem
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione vero doloremque. Maxime fugiat quod, eius aspernatur ab corporis
            nostrum."
      />
    </Accordion>
  );
};

export default Demo;
`,
  withLabel: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,
  compact: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,
  multipleSelection: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,
  splitted: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,
  bordered: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,
  shadow: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,

  custom: `
import { Accordion, AccordionItem } from "@miracle-ui/react";

const Demo = () => {
  return (
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
  );
};

export default Demo;`,
};

export default codeblock;
