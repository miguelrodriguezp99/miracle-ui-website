import { Progress } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";

export const ProgressPage = () => {
  return (
    <ComponentLayout
      title="Progress"
      description="Progress is used to indicate an undetermined wait period or visually represent the duration of a process."
      examples={[
        {
          title: "Usage",
          component: <Progress color="primary" />,
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Label",
          component: (
            <Progress
              color="primary"
              label="Loading..."
              maxValue={100}
              value={30}
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Value Label",
          component: (
            <Progress
              color="primary"
              label="Monthly Sales"
              valueLabel="40.000€"
              maxValue={40000}
              value={18500}
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Percentage Label",
          component: (
            <Progress
              color="primary"
              label="Monthly Sales"
              maxValue={40000}
              value={18500}
              showPercentageLabel
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Percentage Label and Value Label",
          component: (
            <Progress
              color="primary"
              label="Monthly Sales"
              maxValue={40000}
              value={18500}
              showPercentageLabel
            />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Indeterminate",
          component: <Progress color="primary" isIndeterminate />,
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-1 gap-10 w-full place-items-center">
              <Progress color="default" />
              <Progress color="primary" />
              <Progress color="secondary" />
              <Progress color="success" />
              <Progress color="warning" />
              <Progress color="danger" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Sizes",
          component: (
            <div className="grid grid-cols-1 gap-10 w-full place-items-center">
              <Progress color="primary" size="sm" />
              <Progress color="primary" size="md" />
              <Progress color="primary" size="lg" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
