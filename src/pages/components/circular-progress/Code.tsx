const codeblock = {
  usage: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <CircularProgress color="primary" />
  );
};

export default Demo;
`,
  withLabel: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <CircularProgress color="primary" label="Loading..." />
  );
};

export default Demo;
`,
  disabled: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <CircularProgress color="primary" label="Loading..." isDisabled />
  );
};

export default Demo;
`,
  sizes: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <CircularProgress color="primary" size="sm" />
      <CircularProgress color="primary" size="md" />
      <CircularProgress color="primary" size="lg" />
    </div>
  );
};

export default Demo;
`,
  customColor: `
import { CircularProgress } from "@miracle-ui/circular-progress";

const Demo = () => {
  return (
    <CircularProgress color="primary" size="sm" customColor="red" />
  );
};

export default Demo;
`,
};

export default codeblock;
