const codeblock = {
  usage: `
import { Avatar, Badge } from "@miracle-ui/react";

const Demo = () => {
  return (
    <Badge isCircular={false} badgeContent="2" bordered>
      <Avatar radius="lg" />
    </Badge>
  );
};

export default Demo;
`,
  circular: `
import { Avatar, Badge } from "@miracle-ui/react";

const Demo = () => {
  return (
    <Badge isCircular={true} badgeContent="2" bordered>
      <Avatar radius="full" />
    </Badge>
  );
};

export default Demo;
`,
  positions: `
import { Avatar, Badge } from "@miracle-ui/react";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Badge isCircular={true} badgeContent="2" position="top-left">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" position="top-right">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" position="bottom-left">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" position="bottom-right">
        <Avatar radius="full" />
      </Badge>
    </div>
  );
};

export default Demo;
`,
  variants: `
import { Avatar, Badge } from "@miracle-ui/react";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Badge
        isCircular={true}
        badgeContent="2"
        color="primary"
        variant="faded"
      >
        <Avatar radius="full" />
      </Badge>
      <Badge
        isCircular={true}
        badgeContent="2"
        color="primary"
        variant="flat"
      >
        <Avatar radius="full" />
      </Badge>
      <Badge
        isCircular={true}
        badgeContent="2"
        color="primary"
        variant="solid"
      >
        <Avatar radius="full" />
      </Badge>
    </div>
  );
};

export default Demo;
`,
  colors: `
import { Avatar, Badge } from "@miracle-ui/react";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Badge isCircular={true} badgeContent="2" color="default">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" color="primary">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" color="secondary">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" color="success">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" color="warning">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" color="danger">
        <Avatar radius="full" />
      </Badge>
      <Badge isCircular={true} badgeContent="2" customColor="red">
        <Avatar radius="full" name="custom" />
      </Badge>
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
