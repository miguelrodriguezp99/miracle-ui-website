import { Divider } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";

export const DividerPage = () => {
  return (
    <ComponentLayout
      title="Divider"
      description="Divider is used to indicate an undetermined wait period or visually represent the duration of a process."
      examples={[
        {
          title: "Usage",
          component: <Divider color="default" />,
          code: `<button>Checkbox</button>`,
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
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
