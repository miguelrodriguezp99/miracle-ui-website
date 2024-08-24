import { Button } from "@miracle-ui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/react";

const AccesibilityExample = () => {
  return (
    <>
      <section className="text-pblack dark:text-pwhite text-center flex flex-col gap-10 lg:flex-row w-[60%] lg:w-[75%] mx-auto pt-12 pb-20">
        <div
          className="flex flex-col gap-6 w-full lg:mt-20 items-center md:items-start
           codetext" // pt-[350px] sm:pt-[350px] md:pt-36 lg:pt-46
        >
          <div className="text-start lg:text-start w-[65%]">
            <h1 className="text-5xl md:text-5xl lg:text-6xl">Built-in </h1>
            <h1 className="text-5xl md:text-5xl lg:text-6xl text-pred dark:text-pyellow">
              Accessibility{" "}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl pt-3 text-pblack/80 dark:text-pwhite/60">
              Miracle UI components are developed using React Aria, making
              exceptional accessibility a primary focus from the ground up.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="lg:w-[50%] bg-red-100">cards</div>{" "}
            <div
              className="border border-1 border-black/20 dark:border-pwhite/20 rounded-md px-20 py-3
                        flex items-center justify-center min-h-[400px] text-start relative lg:w-[50%]"
            >
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    radius="md"
                    variant="bordered"
                    color="default"
                    blackText={false}
                  >
                    Open Menu
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  position={"bottom"}
                  offset={5}
                  aria-label="Static Actions"
                >
                  <DropdownItem color="success" key="new">
                    New file
                  </DropdownItem>
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
