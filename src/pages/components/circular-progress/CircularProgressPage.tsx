import ComponentLayout from "../../../layout/ComponentLayout";
import { CircularProgress } from "@miracle-ui/react";

export const CircularProgressPage = () => {
  return (
    <ComponentLayout
      title="Circular Progress"
      description="Circular progress indicators are utilized to indicate an undetermined wait period or visually represent the duration of a process."
      examples={[
        {
          title: "Usage",
          component: <CircularProgress color="primary" />,
          code: `<button>Checkbox</button>`,
        },

        {
          title: "With Label",
          component: <CircularProgress color="primary" label="Loading..." />,
          code: `<button>Checkbox</button>`,
        },

        {
          title: "Disabled",
          component: (
            <CircularProgress color="primary" label="Loading..." isDisabled />
          ),
          code: `<button>Checkbox</button>`,
        },

        {
          title: "Sizes",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <CircularProgress color="primary" size="sm" />
              <CircularProgress color="primary" size="md" />
              <CircularProgress color="primary" size="lg" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },

        {
          title: "Custom Color",
          component: (
            <CircularProgress color="primary" size="sm" customColor="red" />
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
