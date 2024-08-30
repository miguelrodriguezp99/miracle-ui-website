const codeblock = {
  usage: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <Chip>My Chip</Chip>
  );
};

export default Demo;
`,
  startContent: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <Chip startContent={<UserIcon />}>My Chip</Chip>
  );
};

export default Demo;
`,
  endContent: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <Chip endContent={<UserIcon />}>My Chip</Chip>
  );
};

export default Demo;
`,
  Clossable: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <Chip
      onClose={() => {
        alert("Close");
      }}
    >
      My Chip
    </Chip>
  );
};

export default Demo;
`,
  colors: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
      <Chip color="default" children="Default" />
      <Chip color="primary" children="Primary" />
      <Chip color="secondary" children="Secondary" />
      <Chip color="success" children="Success" />
      <Chip color="warning" children="Warning" />
      <Chip color="danger" children="Danger" />
    </div>
  );
};

export default Demo;
`,
  variants: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
      <Chip color="primary" children="Solid" variant="solid" />
      <Chip color="primary" children="Bordered" variant="bordered" />
      <Chip color="primary" children="Faded" variant="faded" />
      <Chip color="primary" children="Flat" variant="flat" />
      <Chip color="primary" children="Ghost" variant="ghost" />
      <Chip color="primary" children="Light" variant="light" />
      <Chip color="primary" children="Shadow" variant="shadow" />
    </div>
  );
};

export default Demo;
`,
  custom: `
import { Chip } from "@miracle-ui/chip";

const Demo = () => {
  return (
    <Chip
      color="default"
      customFontSize="18px"
      customHeight="30px"
      onClose={() => console.log("Hi")}
    >
      My Chip
    </Chip>
  );
};

export default Demo;
`,
};

export default codeblock;
