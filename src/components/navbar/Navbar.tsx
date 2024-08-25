import useNav from "../../hooks/useNav";
import Logo from "../../icons/Logo";
import Anchor from "../anchor/Anchor";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function Navbar() {
  const { handleClick } = useNav("/");
  return (
    <nav className="flex items-center justify-center sticky top-0 z-50 backdrop-blur">
      <header className="flex w-[1550px] px-14 justify-between items-center h-14">
        <div className="flex gap-5">
          <div
            onClick={handleClick}
            className="flex items-center justify-center gap-2 text-pblack dark:text-pwhite text-[16px] font-bold cursor-pointer"
          >
            <span className="hidden lg:flex">
              <Logo />
            </span>
            Miracle UI
          </div>
          <Anchor route="/docs/introduction">Docs</Anchor>
          <Anchor route="/components/Accordion">Components</Anchor>
          <Anchor route="/docs/examples">Examples</Anchor>
          <Anchor route="/docs/colors">Colors</Anchor>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </header>
    </nav>
  );
}
