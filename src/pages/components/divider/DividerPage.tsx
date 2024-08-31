import { Divider } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";
import codeblock from "./Code";

export const DividerPage = () => {
  return (
    <ComponentLayout
      title="Divider"
      description="Divider is used to indicate an undetermined wait period or visually represent the duration of a process."
      storybook="https://main--66685fb204b9df24515e1b9b.chromatic.com/?path=/story/components-divider--default"
      examples={[
        {
          title: "Usage",
          component: <Divider color="default" />,
          code: codeblock.usage,
        },
        {
          title: "Custom Color",
          component: (
            <div className="grid grid-cols-1 gap-10 w-full">
              <Divider color="danger" />
              <Divider color="primary" />
              <Divider color="secondary" />
              <Divider color="success" />
              <Divider color="warning" />
              <Divider color="danger" />
            </div>
          ),
          code: codeblock.colors,
        },
      ]}
    />
  );
};
