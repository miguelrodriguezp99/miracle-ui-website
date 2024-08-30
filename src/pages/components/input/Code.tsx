const codeblock = {
  usage: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <Input size="medium" variant="flat" type="text" text="Email" />
  );
};

export default Demo;
`,
  placeholder: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <Input
      size="medium"
      variant="flat"
      type="text"
      text="Email"
      placeholder="Enter your email"
    />
  );
};

export default Demo;
`,
  disabled: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <Input
      size="medium"
      variant="flat"
      type="text"
      text="Email"
      isDisabled
    />
  );
};

export default Demo;
`,
  readonly: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <Input
      size="medium"
      variant="flat"
      type="text"
      text="Email"
      readOnly
    />
  );
};

export default Demo;
`,
  variants: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Input size="medium" variant="flat" type="text" text="Flat" />
      <Input size="medium" variant="bordered" type="text" text="Flat" />
      <Input size="medium" variant="faded" type="text" text="Flat" />
      <Input
        size="medium"
        variant="underlined"
        type="text"
        text="Flat"
      />
    </div>
  );
};

export default Demo;
`,
  colors: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="default"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="primary"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="secondary"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="success"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="warning"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="danger"
      />
    </div>
  );
};

export default Demo;
`,
  sizes: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Input
        size="small"
        variant="flat"
        type="text"
        text="Flat"
        color="default"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="default"
      />
      <Input
        size="large"
        variant="flat"
        type="text"
        text="Flat"
        color="default"
      />
    </div>
  );
};

export default Demo;
`,
  customs: `
import { Input } from "@miracle-ui/input";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Input
        size="medium"
        variant="underlined"
        type="text"
        text="Flat"
        color="default"
        textColor="yellow"
        underlineColor="red"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="default"
        textColor="yellow"
      />
      <Input
        size="medium"
        variant="flat"
        type="text"
        text="Flat"
        color="default"
        placeholder="Enter your email"
        placeholderColor="yellow"
        textColor="aquamarine"
      />
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
