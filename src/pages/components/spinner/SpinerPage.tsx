import ComponentLayout from "../../../layout/ComponentLayout";
import { Spinner } from "@miracle-ui/react";
import codeblock from "./Code";

export const SpinnerPage = () => {
  return (
    <ComponentLayout
      title="Spinner"
      description="Spinner is used to indicate an undetermined wait period or visually represent the duration of a process."
      examples={[
        {
          title: "Usage",
          component: <Spinner color="default" />,
          code: codeblock.usage,
        },
        {
          title: "With Label",
          component: <Spinner color="default" label="Loading..." />,
          code: codeblock.withLabel,
        },
        {
          title: "With Label Color",
          component: (
            <Spinner color="default" label="Loading..." labelColor="#d1d130" />
          ),
          code: codeblock.withLabelColor,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
              <Spinner color="default" />
              <Spinner color="primary" />
              <Spinner color="secondary" />
              <Spinner color="success" />
              <Spinner color="danger" />
              <Spinner color="warning" />
            </div>
          ),
          code: codeblock.colors,
        },
      ]}
    />
  );
};
