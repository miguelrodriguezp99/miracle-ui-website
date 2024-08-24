import { components } from "../../lib/utils";
import Anchor from "../anchor/Anchor";

export default function Aside() {
  const componentArray = Object.values(components);

  return (
    <aside className="hidden md:block z-30 h-full shrink-0 py-8 ">
      <div className="sticky top-[88px] left-0">
        <div className="flex flex-col pb-4 ">
          <p className="text-pblack dark:text-pwhite mb-1 py-1 px-2 font-bold">
            Getting started
          </p>
          <Anchor underlined props="py-1 px-2" route="/docs/introduction">
            Introduction
          </Anchor>
          <Anchor underlined props="py-1 px-2" route="/docs/installation">
            Installation
          </Anchor>
          <Anchor underlined props="py-1 px-2" route="/docs/about">
            About the project
          </Anchor>
        </div>

        <div className="flex flex-col">
          <p className="text-pblack dark:text-pwhite mb-1 py-1 px-2 font-bold">
            Components
          </p>
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
      </div>
    </aside>
  );
}
