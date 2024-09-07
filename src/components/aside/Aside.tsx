import { components } from "../../lib/utils";
import Anchor from "../anchor/Anchor";

export default function Aside() {
  const componentArray = Object.values(components);

  return (
    <aside className="hidden md:block z-30 h-full shrink-0 py-8">
      <div className="h-[calc(100vh-3.5rem)] sticky top-[88px] left-0 group left-aside">
        <div className="relative h-[100%] overflow-hidden group-hover:overflow-y-auto transition-all duration-300">
          <div className="flex flex-col pb-4">
            <p className="text-pblack dark:text-pwhite mb-1 py-1 font-bold">
              Getting started
            </p>
            <Anchor underlined props="py-1" route="/docs/introduction">
              Introduction
            </Anchor>
            <Anchor underlined props="py-1" route="/docs/installation">
              Installation
            </Anchor>
            <Anchor underlined props="py-1" route="/docs/darkmode">
              Dark Mode
            </Anchor>
            <Anchor underlined props="py-1" route="/docs/about">
              About
            </Anchor>
          </div>

          <div className="flex flex-col pb-12">
            <p className="text-pblack dark:text-pwhite mb-1 py-1 font-bold">
              Components
            </p>
            {componentArray.map((component, index) => (
              <Anchor
                underlined
                key={index}
                route={`components/${component.title
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
                props="py-1"
              >
                {component.title}
              </Anchor>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
