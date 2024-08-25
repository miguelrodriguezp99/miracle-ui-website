import { Button } from "@miracle-ui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/react";
import { useState } from "react";
import { AccesibilityCard } from "./AccesibilityCard";
import Hamburguer from "../../../icons/Hamburguer";
import Developer from "../../../icons/Developer";
import AlignmentIcon from "../../../icons/AlignmentIcon";
import CollisionIcon from "../../../icons/CollisionIcon";
import AccesibleIcon from "../../../icons/AccesibleIcon";
import Compossable from "../../../icons/Compossable";
import MoonIcon from "../../../icons/MoonIcon";

const AccesibilityExample = () => {
  type DropdownPositions =
    | "top"
    | "top-start"
    | "top-end"
    | "left"
    | "left-start"
    | "left-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end";

  const [state, setState] = useState<DropdownPositions>("bottom");

  const handleChange = (position: DropdownPositions) => {
    setState(position);
  };

  return (
    <>
      <section className="text-pblack dark:text-pwhite text-center flex flex-col gap-10 lg:flex-row w-[90%] lg:max-w-[1350px] mx-auto pb-20 pt-20 relative">
        <div className="flex flex-col gap-6 w-full items-center lg:items-start">
          <div className="lg:text-start w-[100%] md:w-[65%]">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">
              Built-in{" "}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-pred dark:text-pyellow font-bold">
              Accessibility
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl pt-3 text-pblack dark:text-pwhite">
              Miracle UI components are developed using React Aria, making
              exceptional accessibility a primary focus from the ground up.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-5 relative">
            <div className="absolute top-[5%] left-[13%] rounded-full min-h-80 min-w-80 bg-pyellow/50 blur-3xl radial brightness-[0.2]"></div>
            <div className="lg:w-[50%] grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-4 lg:h-[50%] mt-24">
              <AccesibilityCard svg={<Developer />}>
                Developer experience
              </AccesibilityCard>
              <AccesibilityCard svg={<AlignmentIcon />}>
                Alignment control
              </AccesibilityCard>
              <AccesibilityCard svg={<CollisionIcon />}>
                Collision aware
              </AccesibilityCard>
              <AccesibilityCard svg={<AccesibleIcon />}>
                Accessible
              </AccesibilityCard>
              <AccesibilityCard svg={<Compossable />}>
                Composable
              </AccesibilityCard>
              <AccesibilityCard svg={<MoonIcon />}>
                Light and Dark UI
              </AccesibilityCard>
            </div>
            <div
              className="border border-1 border-black/20 dark:border-pwhite/20 rounded-md px-20 py-3
                        flex items-center justify-center min-h-[400px] text-start relative lg:w-[50%]"
            >
              <div className={`absolute top-0 p-5 right-0 z-40`}>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      radius="sm"
                      variant="bordered"
                      color="default"
                      blackText={false}
                      isIconOnly
                    >
                      <Hamburguer />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    width={150}
                    position={"bottom-end"}
                    offset={5}
                    aria-label="Static Actions"
                  >
                    <DropdownItem
                      onClick={() => handleChange("top")}
                      key="new"
                      variant={state === "top" ? "flat" : "solid"}
                    >
                      Top
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleChange("bottom")}
                      key="copy"
                      variant={state === "bottom" ? "flat" : "solid"}
                    >
                      Bottom
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleChange("left")}
                      key="edit"
                      variant={state === "left" ? "flat" : "solid"}
                    >
                      Left
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleChange("right")}
                      key="edit"
                      variant={state === "right" ? "flat" : "solid"}
                    >
                      Right
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    radius="sm"
                    variant="bordered"
                    color="default"
                    blackText={false}
                  >
                    Open Menu
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  position={state}
                  offset={5}
                  aria-label="Static Actions"
                >
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccesibilityExample;
