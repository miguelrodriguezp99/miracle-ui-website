const codeblock = {
  usage: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <Button color="default" variant="bordered" radius="md" />
  );
};

export default Demo;
`,
  disabled: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <Button color="default" variant="bordered" radius="md" isDisabled />
  );
};

export default Demo;
`,
  disabledRipple: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <Button color="default" variant="bordered" radius="md" disabledRipple />
  );
};

export default Demo;
`,
  startContent: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <Button
      color="danger"
      startContent={<UserIcon />}
      variant="bordered"
      radius="md"
    >
      Delete user
    </Button>
  );
};

export default Demo;
`,
  endContent: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <Button color="success" startContent={<CameraIcon />} radius="md">
      Take a photo
    </Button>
  );
};

export default Demo;
`,
  iconOnly: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <Button color="success" radius="md" isIconOnly={true}>
      <CameraIcon />
    </Button>
  );
};

export default Demo;
`,
  colors: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
      <Button color="default" children="Default" whiteText />
      <Button color="primary" children="Primary" />
      <Button color="secondary" children="Secondary" />
      <Button color="success" children="Success" />
      <Button color="warning" children="Warning" />
      <Button color="danger" children="Danger" />
    </div>
  );
};

export default Demo;
`,

  variants: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
      <Button color="primary" children="Solid" variant="solid" />
      <Button color="primary" children="Bordered" variant="bordered" />
      <Button color="primary" children="Faded" variant="faded" />
      <Button color="primary" children="Flat" variant="flat" />
      <Button color="primary" children="Ghost" variant="ghost" />
      <Button color="primary" children="Light" variant="light" />
      <Button color="primary" children="Shadow" variant="shadow" />
    </div>
  );
};

export default Demo;
`,
  customVariants: `
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Button
        children="Button"
        variant="solid"
        customColor="aquamarine"
        blackText
        customRippleColor="purple"
        radius="md"
      />
      <Button
        children="Button"
        variant="solid"
        customColor="orange"
        blackText
        customRippleColor="purple"
        radius="sm"
      />
    </div>
  );
};

export default Demo;
`,

  buttonGroup: `
import { Button, ButtonGroup } from "@miracle-ui/button";

const Demo = () => {
  return (
    <ButtonGroup>
      <Button label="One" radius="none" color="primary" size="md" />
      <Button label="Two" radius="none" color="primary" size="md" />
      <Button label="Three" radius="none" color="primary" size="md" />
    </ButtonGroup>
  );
};

export default Demo;
`,
};

export default codeblock;
