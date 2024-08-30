import { Checkbox } from "@miracle-ui/checkbox";
import ComponentLayout from "../../../layout/ComponentLayout";
import { CheckboxGroup } from "@miracle-ui/react";
import codeblock from "./Code";

export const CheckboxPage = () => {
  return (
    <ComponentLayout
      title="Checkbox"
      description="Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected."
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
          code: codeblock.usage,
        },
        {
          title: "No Label",
          component: <Checkbox text="" size="sm" textSize="16px" />,
          code: codeblock.noLabel,
        },
        {
          title: "Disabled",
          component: (
            <Checkbox text="Disabled" isDisabled size="sm" textSize="16px" />
          ),
          code: codeblock.disabled,
        },
        {
          title: "Default Checked",
          component: (
            <Checkbox text="Checked" isChecked size="sm" textSize="16px" />
          ),
          code: codeblock.defaultChecked,
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
          code: codeblock.colors,
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
          code: codeblock.radius,
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
          code: codeblock.sizes,
        },
        {
          title: "Checkbox Group",
          component: (
            <CheckboxGroup>
              <Checkbox key={1} />
              <Checkbox key={2} />
              <Checkbox key={3} />
            </CheckboxGroup>
          ),
          code: codeblock.checkboxGroup,
        },
        {
          title: "Horizontal",
          component: (
            <CheckboxGroup direction="horizontal">
              <Checkbox key={1} />
              <Checkbox key={2} />
              <Checkbox key={3} />
            </CheckboxGroup>
          ),
          code: codeblock.checkboxGroupHorizontal,
        },
        {
          title: "Gap",
          component: (
            <CheckboxGroup gap="lg">
              <Checkbox key={1} />
              <Checkbox key={2} />
              <Checkbox key={3} />
            </CheckboxGroup>
          ),
          code: codeblock.checkboxGroupGap,
        },
      ]}
    />
  );
};
