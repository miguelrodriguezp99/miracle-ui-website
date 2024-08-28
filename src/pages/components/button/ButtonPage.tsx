import { Button, ButtonGroup } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";
import { UserIcon } from "../../../icons/UserIcon";
import { CameraIcon } from "../../../icons/CameraIcon";

export const ButtonPage = () => {
  return (
    <ComponentLayout
      title="Button"
      description="Buttons allow users to perform actions and choose with a single tap."
      examples={[
        {
          title: "Usage",
          component: <Button color="default" variant="bordered" radius="md" />,
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Disabled",
          component: (
            <Button color="default" variant="bordered" radius="md" isDisabled />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Disabled Ripple",
          component: (
            <Button
              color="default"
              variant="bordered"
              radius="md"
              disabledRipple
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Start Content",
          component: (
            <Button
              color="danger"
              startContent={<UserIcon />}
              variant="bordered"
              radius="md"
            >
              Delete user
            </Button>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With End Content",
          component: (
            <Button color="success" startContent={<CameraIcon />} radius="md">
              Take a photo
            </Button>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Icon Only",
          component: (
            <Button color="success" radius="md" isIconOnly={true}>
              <CameraIcon />
            </Button>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
              <Button color="default" children="Default" whiteText />
              <Button color="primary" children="Primary" />
              <Button color="secondary" children="Secondary" />
              <Button color="success" children="Success" />
              <Button color="warning" children="Warning" />
              <Button color="danger" children="Danger" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Variants",
          component: (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
              <Button color="primary" children="Solid" variant="solid" />
              <Button color="primary" children="Bordered" variant="bordered" />
              <Button color="primary" children="Faded" variant="faded" />
              <Button color="primary" children="Flat" variant="flat" />
              <Button color="primary" children="Ghost" variant="ghost" />
              <Button color="primary" children="Light" variant="light" />
              <Button color="primary" children="Shadow" variant="shadow" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Custom Variants",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Button
                children="Button"
                variant="solid"
                customColor="aquamarine"
                blackText
                customRippleColor="purple"
                radius="md"
              />
              <Button
                children="Button"
                variant="solid"
                customColor="orange"
                blackText
                customRippleColor="purple"
                radius="sm"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Button Group",
          component: (
            <ButtonGroup>
              <Button label="One" radius="none" color="primary" size="md" />
              <Button label="Two" radius="none" color="primary" size="md" />
              <Button label="Three" radius="none" color="primary" size="md" />
            </ButtonGroup>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
