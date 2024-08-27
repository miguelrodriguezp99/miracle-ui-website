import { Checkbox } from "@miracle-ui/checkbox";
import ComponentLayout from "../../../layout/ComponentLayout";

export const CheckboxPage = () => {
  return (
    <ComponentLayout
      title="Checkbox"
      description="Accordion display a list of high-level options that can expand/collapse to reveal more information."
      examples={[
        {
          title: "Usage",
          component: (
            <Checkbox
              text="Accept terms and conditions"
              size="sm"
              textSize="16px"
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "No Label",
          component: <Checkbox text="" size="sm" textSize="16px" />,
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Disabled",
          component: (
            <Checkbox text="Disabled" isDisabled size="sm" textSize="16px" />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Default Checked",
          component: (
            <Checkbox text="Checked" isChecked size="sm" textSize="16px" />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-2 gap-10">
              <Checkbox
                text="Default"
                isChecked
                size="sm"
                textSize="16px"
                color="default"
              />
              <Checkbox
                text="Primary"
                isChecked
                size="sm"
                textSize="16px"
                color="primary"
              />
              <Checkbox
                text="Secondary"
                isChecked
                size="sm"
                textSize="16px"
                color="secondary"
              />
              <Checkbox
                text="Success"
                isChecked
                size="sm"
                textSize="16px"
                color="success"
              />
              <Checkbox
                text="Warning"
                isChecked
                size="sm"
                textSize="16px"
                color="warning"
              />
              <Checkbox
                text="Danger"
                isChecked
                size="sm"
                textSize="16px"
                color="danger"
              />
              <Checkbox
                text="Custom"
                isChecked
                size="sm"
                textSize="16px"
                customColor="red"
              />
              <Checkbox
                text="Custom"
                isChecked
                size="sm"
                textSize="16px"
                customColor="darkorange"
                textColor
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Radius",
          component: (
            <div className="grid grid-cols-2 gap-10">
              <Checkbox
                text="None"
                isChecked
                size="md"
                textSize="16px"
                color="default"
                radius="none"
              />
              <Checkbox
                text="Small"
                isChecked
                size="md"
                textSize="16px"
                color="default"
                radius="sm"
              />
              <Checkbox
                text="Medium"
                size="md"
                isChecked
                textSize="16px"
                color="default"
                radius="md"
              />
              <Checkbox
                text="Full"
                size="md"
                isChecked
                textSize="16px"
                color="default"
                radius="full"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Sizes",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Checkbox
                text="Small"
                isChecked
                size="sm"
                textSize="16px"
                color="default"
                radius="none"
              />
              <Checkbox
                text="Medium"
                isChecked
                size="md"
                textSize="16px"
                color="default"
                radius="sm"
              />
              <Checkbox
                text="Large"
                isChecked
                size="lg"
                textSize="24px"
                color="default"
                radius="sm"
              />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
