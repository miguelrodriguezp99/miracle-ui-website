import useNav from "../../hooks/useNav";
import Logo from "../../icons/Logo";
import Anchor from "../anchor/Anchor";
import Sheet from "../sheet/Sheet";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function Navbar() {
  const { handleClick } = useNav("/");
  return (
    <nav className="flex items-center justify-center sticky top-0 z-50 backdrop-blur">
      <div className="flex w-[1550px] px-4 sm:px-8 md:px-8 justify-between items-center h-14">
        <div className="flex sm:hidden">
          <Sheet />
        </div>
        <div className="gap-5 sm:flex">
          <div
            onClick={handleClick}
            className="flex items-center justify-center gap-2 text-pblack dark:text-pwhite text-[16px] font-bold cursor-pointer "
          >
            <Logo />
            Miracle UI
          </div>
          <Anchor route="/docs/introduction">Docs</Anchor>
          <Anchor route="/components/Accordion">Components</Anchor>
          {/* <Anchor route="/docs/examples">Examples</Anchor> */}
          <Anchor route="/colors">Colors</Anchor>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
