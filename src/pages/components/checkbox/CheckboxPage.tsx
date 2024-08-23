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
            <div className="w-full">
              <Checkbox text="Im a label" size="sm" textSize="16px" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
