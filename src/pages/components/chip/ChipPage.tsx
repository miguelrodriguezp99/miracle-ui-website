import { UserIcon } from "../../../icons/UserIcon";
import ComponentLayout from "../../../layout/ComponentLayout";
import { Chip } from "@miracle-ui/react";
import codeblock from "./Code";

export const ChipPage = () => {
  return (
    <ComponentLayout
      title="Chip"
      description="A Chip is a small block of essential information that represent an input, attribute, or action."
      storybook="https://main--66685fb204b9df24515e1b9b.chromatic.com/?path=/story/components-chip--default"
      examples={[
        {
          title: "Usage",
          component: <Chip>My Chip</Chip>,
          code: codeblock.usage,
        },
        {
          title: "Start Content",
          component: <Chip startContent={<UserIcon />}>My Chip</Chip>,
          code: codeblock.startContent,
        },
        {
          title: "End Content",
          component: <Chip endContent={<UserIcon />}>My Chip</Chip>,
          code: codeblock.endContent,
        },
        {
          title: "Clossable",
          component: (
            <Chip
              onClose={() => {
                alert("Close");
              }}
            >
              My Chip
            </Chip>
          ),
          code: codeblock.Clossable,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
              <Chip color="default" children="Default" />
              <Chip color="primary" children="Primary" />
              <Chip color="secondary" children="Secondary" />
              <Chip color="success" children="Success" />
              <Chip color="warning" children="Warning" />
              <Chip color="danger" children="Danger" />
            </div>
          ),
          code: codeblock.colors,
        },
        {
          title: "Variants",
          component: (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
              <Chip color="primary" children="Solid" variant="solid" />
              <Chip color="primary" children="Bordered" variant="bordered" />
              <Chip color="primary" children="Faded" variant="faded" />
              <Chip color="primary" children="Flat" variant="flat" />
              <Chip color="primary" children="Ghost" variant="ghost" />
              <Chip color="primary" children="Light" variant="light" />
              <Chip color="primary" children="Shadow" variant="shadow" />
            </div>
          ),
          code: codeblock.variants,
        },
        {
          title: "Custom",
          component: (
            <Chip
              color="default"
              customFontSize="18px"
              customHeight="30px"
              onClose={() => console.log("Hi")}
            >
              My Chip
            </Chip>
          ),
          code: codeblock.custom,
        },
      ]}
    />
  );
};
