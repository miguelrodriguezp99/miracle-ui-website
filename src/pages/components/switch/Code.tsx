const codeblock = {
  usage: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch id="check" />
  );
};

export default Demo;
`,
  disabled: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch isDisabled id="check2" />
  );
};

export default Demo;
`,
  defaultSelected: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch defaultSelected id="check3" />
  );
};

export default Demo;
`,
  customThumbIcon: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch
      thumbIcon={({ isChecked }) =>
        isChecked ? <SunIcon /> : <MoonIcon2 />
      }
      id="check4"
    />
  );
};

export default Demo;
`,
  startAndEndContent: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch
      startContent={<SunIcon />}
      endContent={<MoonIcon2 />}
      id="check5"
    />
  );
};

export default Demo;
`,
  withLabel: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch id="check6">Dark Mode</Switch>
  );
};

export default Demo;
`,
  withCustomLabel: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch
      id="check7"
      labelFontSize="20px"
      labelColor={"purple"}
      customBackgroundColor={"#E073F9"}
      customCheckedColor={"#6C237D"}
      customThumbColor={"black"}
      startContent={<SunIcon />}
      endContent={<MoonIcon2 />}
    >
      Dark Mode
    </Switch>
  );
};

export default Demo;
`,
  custom: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <Switch
      id="check8"
      labelColor={"purple"}
      customBackgroundColor={"lightgreen"}
      customCheckedColor={"#F85D5D"}
      customThumbColor={"black"}
    />
  );
};

export default Demo;
`,
  sizes: `
import { Switch } from "@miracle-ui/switch";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Switch id="check9" size="sm" />
      <Switch id="check10" size="md" />
      <Switch id="check11" size="lg" />
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
