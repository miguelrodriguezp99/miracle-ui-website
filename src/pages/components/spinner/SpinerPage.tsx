import ComponentLayout from "../../../layout/ComponentLayout";
import { CircularProgress, Spinner } from "@miracle-ui/react";

export const SpinnerPage = () => {
  return (
    <ComponentLayout
      title="Spinner"
      description="Spinner is used to indicate an undetermined wait period or visually represent the duration of a process."
      examples={[
        {
          title: "Usage",
          component: <Spinner color="default" />,
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Label",
          component: <Spinner color="default" label="Loading..." />,
          code: `<button>Checkbox</button>`,
        },
        {
          title: "With Label Color",
          component: (
            <Spinner color="default" label="Loading..." labelColor="#d1d130" />
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
              <CircularProgress color="default" />
              <CircularProgress color="primary" />
              <CircularProgress color="secondary" />
              <CircularProgress color="success" />
              <CircularProgress color="danger" />
              <CircularProgress color="warning" />
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
