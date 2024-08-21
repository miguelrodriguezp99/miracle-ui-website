import ComponentLayout from "../../../layout/ComponentLayout";

export const CheckboxPage = () => {
  return (
    <ComponentLayout
      title="Checkbox"
      description="Accordion display a list of high-level options that can expand/collapse to reveal more information."
      examples={[
        {
          component: (
            <div className="w-full">
              <button>Checkbox</button>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
