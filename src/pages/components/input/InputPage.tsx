import { Input } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";

export const InputPage = () => {
  return (
    <ComponentLayout
      title="Divider"
      description="Divider is used to indicate an undetermined wait period or visually represent the duration of a process."
      examples={[
        {
          title: "Usage",
          component: (
            <Input size="medium" variant="flat" type="text" text="Email" />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Placeholder",
          component: (
            <Input
              size="medium"
              variant="flat"
              type="text"
              text="Email"
              placeholder="Enter your email"
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Disabled",
          component: (
            <Input
              size="medium"
              variant="flat"
              type="text"
              text="Email"
              isDisabled
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Readonly",
          component: (
            <Input
              size="medium"
              variant="flat"
              type="text"
              text="This is a readonly input"
              readOnly
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Variants",
          component: (
            <div className="grid grid-cols-1 gap-5">
              <Input size="medium" variant="flat" type="text" text="Flat" />
              <Input size="medium" variant="bordered" type="text" text="Flat" />
              <Input size="medium" variant="faded" type="text" text="Flat" />
              <Input
                size="medium"
                variant="underlined"
                type="text"
                text="Flat"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },

        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-1 gap-5">
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="default"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="primary"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="secondary"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="success"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="warning"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="danger"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Sizes",
          component: (
            <div className="grid grid-cols-1 gap-5">
              <Input
                size="small"
                variant="flat"
                type="text"
                text="Flat"
                color="default"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="default"
              />
              <Input
                size="large"
                variant="flat"
                type="text"
                text="Flat"
                color="default"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Customs",
          component: (
            <div className="grid grid-cols-1 gap-5">
              <Input
                size="medium"
                variant="underlined"
                type="text"
                text="Flat"
                color="default"
                textColor="yellow"
                underlineColor="red"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="default"
                textColor="yellow"
              />
              <Input
                size="medium"
                variant="flat"
                type="text"
                text="Flat"
                color="default"
                placeholder="Enter your email"
                placeholderColor="yellow"
                textColor="aquamarine"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
