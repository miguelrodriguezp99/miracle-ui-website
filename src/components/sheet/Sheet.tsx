import { useState, useEffect } from "react";
import SheetIcon from "../../icons/SheetIcon";
import Logo from "../../icons/Logo";
import { components } from "../../lib/utils";
import SheetAnchor from "./components/SheetAnchor";

export default function Sheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const componentArray = Object.values(components);

  const toggleSheet = () => {
    if (isOpen) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="text-pblack dark:text-pwhite">
      <button onClick={toggleSheet}>
        <SheetIcon />
      </button>

      {isOpen && (
        <div
          className={`fixed inset-0 h-screen w-screen backdrop-blur-sm transition-opacity duration-300 ${
            isAnimating ? "opacity-100 bg-black/90" : "opacity-0 bg-black/0"
          }`}
          onClick={toggleSheet}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed sheet inset-y-0 left-0 min-h-dvh bg-white dark:bg-background z-50 p-6 pr-0 border-r-[1px] border-pblack dark:border-pwhite/15 sm:max-w-sm w-3/4 shadow-lg transform transition-transform ease-in-out duration-300 ${
              isAnimating ? "translate-x-0" : "-translate-x-[100%]"
            }`}
          >
            <button
              onClick={toggleSheet}
              className="absolute right-4 top-4 rounded-sm opacity-70 
            ring-offset-background dark:ring-offset-pwhite 
              transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 
              focus:ring-offset-2 disabled:pointer-events-none"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <a className="flex items-center gap-2 font-bold">
              <Logo />
              <span>Miracle UI</span>
            </a>

            <div className="relative overflow-auto my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="h-full w-full ">
                <div className="flex flex-col space-y-3 text-base">
                  <SheetAnchor route="/docs/installation">
                    Installation
                  </SheetAnchor>
                  <SheetAnchor
                    toggleSheet={toggleSheet}
                    route="/docs/components"
                  >
                    Components
                  </SheetAnchor>
                  <SheetAnchor toggleSheet={toggleSheet} route="/docs/examples">
                    Examples
                  </SheetAnchor>
                  <SheetAnchor toggleSheet={toggleSheet} route="/colors">
                    Colors
                  </SheetAnchor>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-3 pt-6 text-base text-pblack/70 dark:text-pwhite/60">
                    <h4 className="text-base font-bold text-pblack dark:text-pwhite">
                      Getting started
                    </h4>
                    <SheetAnchor
                      toggleSheet={toggleSheet}
                      route="/docs/installation"
                    >
                      Installation
                    </SheetAnchor>
                    <SheetAnchor
                      toggleSheet={toggleSheet}
                      route="/docs/components"
                    >
                      Components
                    </SheetAnchor>
                    <SheetAnchor
                      toggleSheet={toggleSheet}
                      route="/docs/examples"
                    >
                      Examples
                    </SheetAnchor>
                    <SheetAnchor toggleSheet={toggleSheet} route="/colors">
                      Colors
                    </SheetAnchor>
                  </div>

                  <div className="flex flex-col space-y-3 pt-6 text-base">
                    <h4 className="text-base font-bold">Components</h4>
                    {componentArray.map((component, index) => (
                      <SheetAnchor
                        toggleSheet={toggleSheet}
                        key={index}
                        route={`/components/${component.title}`}
                        props="text-pblack/70 dark:text-pwhite/60"
                      >
                        {component.title}
                      </SheetAnchor>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
