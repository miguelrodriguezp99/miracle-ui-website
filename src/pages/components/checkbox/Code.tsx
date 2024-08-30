const codeblock = {
  usage: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <Checkbox
      text="Accept terms and conditions"
      size="sm"
      textSize="16px"
    />
  );
};

export default Demo;
`,
  noLabel: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <Checkbox text="" size="sm" textSize="16px" />
  );
};

export default Demo;
`,
  disabled: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <Checkbox text="Disabled" isDisabled size="sm" textSize="16px" />
  );
};

export default Demo;
`,
  defaultChecked: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <Checkbox text="Checked" isChecked size="sm" textSize="16px" />
  );
};

export default Demo;
`,
  colors: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Checkbox
        text="Default"
        isChecked
        size="sm"
        textSize="16px"
        color="default"
      />
      <Checkbox
        text="Primary"
        isChecked
        size="sm"
        textSize="16px"
        color="primary"
      />
      <Checkbox
        text="Secondary"
        isChecked
        size="sm"
        textSize="16px"
        color="secondary"
      />
      <Checkbox
        text="Success"
        isChecked
        size="sm"
        textSize="16px"
        color="success"
      />
      <Checkbox
        text="Warning"
        isChecked
        size="sm"
        textSize="16px"
        color="warning"
      />
      <Checkbox
        text="Danger"
        isChecked
        size="sm"
        textSize="16px"
        color="danger"
      />
      <Checkbox
        text="Custom"
        isChecked
        size="sm"
        textSize="16px"
        customColor="red"
      />
      <Checkbox
        text="Custom"
        isChecked
        size="sm"
        textSize="16px"
        customColor="darkorange"
        textColor
      />
    </div>
  );
};

export default Demo;
`,
  radius: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Checkbox
        text="None"
        isChecked
        size="md"
        textSize="16px"
        color="default"
        radius="none"
      />
      <Checkbox
        text="Small"
        isChecked
        size="md"
        textSize="16px"
        color="default"
        radius="sm"
      />
      <Checkbox
        text="Medium"
        size="md"
        isChecked
        textSize="16px"
        color="default"
        radius="md"
      />
      <Checkbox
        text="Full"
        size="md"
        isChecked
        textSize="16px"
        color="default"
        radius="full"
      />
    </div>
  );
};

export default Demo;
`,
  sizes: `
import { Checkbox } from "@miracle-ui/checkbox";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Checkbox
        text="Small"
        isChecked
        size="sm"
        textSize="16px"
        color="default"
        radius="none"
      />
      <Checkbox
        text="Medium"
        isChecked
        size="md"
        textSize="16px"
        color="default"
        radius="sm"
      />
      <Checkbox
        text="Large"
        isChecked
        size="lg"
        textSize="24px"
        color="default"
        radius="sm"
      />
    </div>
  );
};

export default Demo;
`,

  checkboxGroup: `
import { Checkbox } from "@miracle-ui/checkbox";
import { CheckboxGroup } from "@miracle-ui/checkbox-group";


const Demo = () => {
  return (
    <CheckboxGroup>
      <Checkbox key={1} />
      <Checkbox key={2} />
      <Checkbox key={3} />
    </CheckboxGroup>
  );
};

export default Demo;
`,
  checkboxGroupHorizontal: `
import { Checkbox } from "@miracle-ui/checkbox";
import { CheckboxGroup } from "@miracle-ui/checkbox-group";


const Demo = () => {
  return (
    <CheckboxGroup direction="horizontal">
      <Checkbox key={1} />
      <Checkbox key={2} />
      <Checkbox key={3} />
    </CheckboxGroup>
  );
};

export default Demo;
`,

  checkboxGroupGap: `
import { Checkbox } from "@miracle-ui/checkbox";
import { CheckboxGroup } from "@miracle-ui/checkbox-group";


const Demo = () => {
  return (
    <CheckboxGroup gap="lg">
      <Checkbox key={1} />
      <Checkbox key={2} />
      <Checkbox key={3} />
    </CheckboxGroup>
  );
};

export default Demo;
`,
};

export default codeblock;
