const codeblock = {
  usage: `
import { Clipboard } from "@miracle-ui/clipboard";

const Demo = () => {
  return (
    <Clipboard>npm install @miracle-ui/react</Clipboard>
  );
};

export default Demo;
`,
  multiline: `
import { Clipboard } from "@miracle-ui/clipboard";

const Demo = () => {
  return (
    <Clipboard>
      <span>npm install @miracle-ui/react</span>
      <span>npm install @miracle-ui/react</span>
      <span>npm install @miracle-ui/react</span>
    </Clipboard>
  );
};

export default Demo;
`,
  bordered: `
import { Clipboard } from "@miracle-ui/clipboard";

const Demo = () => {
  return (
    <Clipboard variant="bordered" color="primary">
      npm install @miracle-ui/react
    </Clipboard>
  );
};

export default Demo;
`,
  solid: `
import { Clipboard } from "@miracle-ui/clipboard";

const Demo = () => {
  return (
    <Clipboard variant="solid" color="success">
      npm install @miracle-ui/react
    </Clipboard>
  );
};

export default Demo;
`,
  customSymbol: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <Clipboard customSymbol="🚀">
      npm install @miracle-ui/react
    </Clipboard>
  );
};

export default Demo;
`,
  hiddenButton: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <Clipboard hideButton>npm install @miracle-ui/react</Clipboard>
  );
};

export default Demo;
  `,
  colors: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
      <Clipboard
        color="default"
        children="Default"
        customTextColor="#ddd"
      />
      <Clipboard
        color="primary"
        children="Primary"
        customTextColor="#ddd"
      />
      <Clipboard
        color="secondary"
        children="Secondary"
        customTextColor="#ddd"
      />
      <Clipboard
        color="success"
        children="Success"
        customTextColor="#ddd"
      />
      <Clipboard
        color="warning"
        children="Warning"
        customTextColor="#ddd"
      />
      <Clipboard
        color="danger"
        children="Danger"
        customTextColor="#ddd"
      />
    </div>
  );
};

export default Demo;
  `,
  variants: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 items-center">
      <Clipboard color="primary" children="Solid" variant="solid" />
      <Clipboard
        color="primary"
        children="Bordered"
        variant="bordered"
      />
      <Clipboard color="primary" children="Flat" variant="flat" />
      <Clipboard color="primary" children="Shadow" variant="shadow" />
    </div>
  );
};

export default Demo;
  `,
  custom: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <Clipboard
      size="md"
      customPadding="0.75rem"
      customTextColor="black"
      customTextSize="1rem"
      customBorderRadius="999999px"
      customBackgroundColor="orange"
      customRippleColor="purple"
      customSymbol="#"
    >
      npm install @miracle-ui/react
    </Clipboard>
  );
};

export default Demo;
  `,
};

export default codeblock;
