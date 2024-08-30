const codeblock = {
  usage: `
import { Spinner } from "@miracle-ui/spinner";

const Demo = () => {
  return (
    <Spinner color="default" />
  );
};

export default Demo;
`,
  withLabel: `
import { Spinner } from "@miracle-ui/spinner";

const Demo = () => {
  return (
    <Spinner color="default" label="Loading..." />
  );
};

export default Demo;
`,
  withLabelColor: `
import { Spinner } from "@miracle-ui/spinner";

const Demo = () => {
  return (
    <Spinner color="default" label="Loading..." labelColor="#d1d130" />
  );
};

export default Demo;
`,
  colors: `
import { Spinner } from "@miracle-ui/spinner";

const Demo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
      <Spinner color="default" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
