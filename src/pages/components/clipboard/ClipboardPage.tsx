import ComponentLayout from "../../../layout/ComponentLayout";
import { Clipboard } from "@miracle-ui/react";
import codeblock from "./Code";

export const ClipboardPage = () => {
  return (
    <ComponentLayout
      title="Clipboard"
      description="Clipboard is a React component that allows you to copy text to the clipboard."
      examples={[
        {
          title: "Usage",
          component: <Clipboard>npm install @miracle-ui/react</Clipboard>,
          code: codeblock.usage,
        },
        {
          title: "Multiline",
          component: (
            <Clipboard>
              <span>npm install @miracle-ui/react</span>
              <span>npm install @miracle-ui/react</span>
              <span>npm install @miracle-ui/react</span>
            </Clipboard>
          ),
          code: codeblock.multiline,
        },
        {
          title: "Bordered",
          component: (
            <Clipboard variant="bordered" color="primary">
              npm install @miracle-ui/react
            </Clipboard>
          ),
          code: codeblock.bordered,
        },
        {
          title: "Solid",
          component: (
            <Clipboard variant="solid" color="success">
              npm install @miracle-ui/react
            </Clipboard>
          ),
          code: codeblock.solid,
        },
        {
          title: "Custom Symbol",
          component: (
            <Clipboard customSymbol="🚀">
              npm install @miracle-ui/react
            </Clipboard>
          ),
          code: codeblock.customSymbol,
        },
        {
          title: "Hidden Button",
          component: (
            <Clipboard hideButton>npm install @miracle-ui/react</Clipboard>
          ),
          code: codeblock.hiddenButton,
        },
        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
              <Clipboard
                color="default"
                children="Default"
                customTextColor="#ddd"
              />
              <Clipboard
                color="primary"
                children="Primary"
                customTextColor="#ddd"
              />
              <Clipboard
                color="secondary"
                children="Secondary"
                customTextColor="#ddd"
              />
              <Clipboard
                color="success"
                children="Success"
                customTextColor="#ddd"
              />
              <Clipboard
                color="warning"
                children="Warning"
                customTextColor="#ddd"
              />
              <Clipboard
                color="danger"
                children="Danger"
                customTextColor="#ddd"
              />
            </div>
          ),
          code: codeblock.colors,
        },
        {
          title: "Variants",
          component: (
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 items-center">
              <Clipboard color="primary" children="Solid" variant="solid" />
              <Clipboard
                color="primary"
                children="Bordered"
                variant="bordered"
              />
              <Clipboard color="primary" children="Flat" variant="flat" />
              <Clipboard color="primary" children="Shadow" variant="shadow" />
            </div>
          ),
          code: codeblock.variants,
        },
        {
          title: "Custom",
          component: (
            <Clipboard
              size="md"
              customPadding="0.75rem"
              customTextColor="black"
              customTextSize="1rem"
              customBorderRadius="999999px"
              customBackgroundColor="orange"
              customRippleColor="purple"
              customSymbol="#"
            >
              npm install @miracle-ui/react
            </Clipboard>
          ),
          code: codeblock.custom,
        },
      ]}
    />
  );
};
