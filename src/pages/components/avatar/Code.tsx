const codeblock = {
  usage: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <Avatar />
  );
};

export default Demo;
`,
  withLabel: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <Avatar name="John Doe" />
  );
};

export default Demo;
`,
  withImage: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <Avatar avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  );
};

export default Demo;
`,
  bordered: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <Avatar bordered />
  );
};

export default Demo;
`,
  disabled: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <Avatar isDisabled />
  );
};

export default Demo;
`,
  groupHorizontal: `
import { Avatar, AvatarGroup } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <AvatarGroup animation="horizontal">
      <Avatar bordered />
      <Avatar bordered />
      <Avatar bordered />
    </AvatarGroup>
  );
};

export default Demo;
`,
  groupVertical: `
import { Avatar, AvatarGroup } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <AvatarGroup animation="vertical">
      <Avatar bordered />
      <Avatar bordered />
      <Avatar bordered />
    </AvatarGroup>
  );
};

export default Demo;
`,

  groupDisabled: `
import { Avatar, AvatarGroup } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <AvatarGroup animation="vertical" isDisabled>
      <Avatar bordered />
      <Avatar bordered />
      <Avatar bordered />
    </AvatarGroup>
  );
};

export default Demo;
`,
  sizes: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-16 items-center">
      <Avatar size="sm" name="Small" bordered />
      <Avatar size="md" name="Medium" bordered />
      <Avatar size="lg" name="Large" bordered />
    </div>
  );
};

export default Demo;
`,

  colors: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Avatar size="md" name="John Doe" color="default" />
      <Avatar size="md" name="John Doe" color="primary" />
      <Avatar size="md" name="John Doe" color="secondary" />
      <Avatar size="md" name="John Doe" color="success" />
      <Avatar size="md" name="John Doe" color="warning" />
      <Avatar size="md" name="John Doe" color="danger" />
    </div>
  );
};

export default Demo;
`,

  radius: `
import { Avatar } from "@miracle-ui/avatar";

const Demo = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center">
      <Avatar size="md" name="None" radius="none" />
      <Avatar size="md" name="Sm" radius="sm" />
      <Avatar size="md" name="Md" radius="md" />
      <Avatar size="md" name="Lg" radius="lg" />
      <Avatar size="md" name="Xl" radius="xl" />
      <Avatar size="md" name="Full" radius="full" />
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
