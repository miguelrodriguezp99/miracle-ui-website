const codeblock = {
  usage: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <Progress color="primary" />
  );
};

export default Demo;
`,
  withLabel: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <Progress
      color="primary"
      label="Loading..."
      maxValue={100}
      value={30}
    />
  );
};

export default Demo;
`,
  withLabelValue: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <Progress
      color="primary"
      label="Monthly Sales"
      valueLabel="40.000€"
      maxValue={40000}
      value={18500}
    />
  );
};

export default Demo;
`,
  withPercentageLabel: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <Progress
      color="primary"
      label="Monthly Sales"
      maxValue={40000}
      value={18500}
      showPercentageLabel
    />
  );
};

export default Demo;
`,
  withPercentageLabelAndValue: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <Progress
      color="primary"
      label="Monthly Sales"
      maxValue={40000}
      value={18500}
      showPercentageLabel
    />
  );
};

export default Demo;
`,
  indeterminate: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <Progress color="primary" isIndeterminate />
  );
};

export default Demo;
`,
  colors: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-10 w-full place-items-center">
      <Progress color="default" />
      <Progress color="primary" />
      <Progress color="secondary" />
      <Progress color="success" />
      <Progress color="warning" />
      <Progress color="danger" />
    </div>
  );
};

export default Demo;
`,
  sizes: `
import { Progress } from "@miracle-ui/progress";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-10 w-full place-items-center">
      <Progress color="primary" size="sm" />
      <Progress color="primary" size="md" />
      <Progress color="primary" size="lg" />
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
