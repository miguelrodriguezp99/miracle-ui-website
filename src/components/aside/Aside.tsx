import { components } from "../../lib/utils";
import Anchor from "../anchor/Anchor";

export default function Aside() {
  const componentArray = Object.values(components);

  return (
    <aside className="z-30 h-[calc(100vh-3.5rem)] shrink-0 py-6">
      <div className="flex flex-col pb-4">
        <p className="text-pwhite mb-1 py-1 px-2 font-bold">Getting started</p>
        <Anchor underlined props="py-1 px-2">
          Introduction
        </Anchor>
        <Anchor underlined props="py-1 px-2">
          Installation
        </Anchor>
        <Anchor underlined props="py-1 px-2">
          About the project
        </Anchor>
      </div>

      <div className="flex flex-col">
        <p className="text-pwhite mb-1 py-1 px-2 font-bold">Components</p>
        {componentArray.map((component, index) => (
          <Anchor
            underlined
            key={index}
            route={`components/${component.title}`}
            props="py-1 px-2"
          >
            {component.title}
          </Anchor>
        ))}
      </div>
    </aside>
  );
}