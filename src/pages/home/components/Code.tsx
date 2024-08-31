const codeblock = {
  usage: `
import { Card, CardProduct } from "@miracle-ui/react";

const Demo = () => {
return (
    <Card cardWidth="none" isClickable>
        <CardProduct
        title="Orange"
        price="$10.00"
        imgRoute="https://imageroute0"
        />
    </Card>
    <Card cardWidth="none" isClickable>
        <CardProduct
        title="Strawberry"
        price="$10.00"
        imgRoute="https://imageroute1"
        />
    </Card>
    <Card cardWidth="none" isClickable>
        <CardProduct
        title="Strawberry"
        price="$10.00"
        imgRoute="imageroute2"
        />
    </Card>
    );
};

export default Demo;
  `,
  darkmode: `
import { Accordion, AccordionItem } from "@miracle-ui/accordion";
  
const Demo = () => {
  return (
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
  );
};

export default Demo;
    `,
};

export default codeblock;
