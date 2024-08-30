const codeblock = {
  usage: `
import { Divider } from "@miracle-ui/divider";

const Demo = () => {
  return (
    <Divider color="default" />
  );
};

export default Demo;
`,
  colors: `
import { Divider } from "@miracle-ui/divider";

const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-10 w-full">
      <Divider color="danger" />
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="danger" />
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
