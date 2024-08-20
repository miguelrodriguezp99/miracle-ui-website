import Anchor from "../anchor/Anchor";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center sticky top-0 z-50 backdrop-blur">
      <header className="flex w-[1550px] px-14 justify-between items-center h-14">
        <div className="flex gap-5">
          <div className="text-pwhite text-[16px] font-bold">Miracle UI</div>
          <Anchor>Docs</Anchor>
          <Anchor>Components</Anchor>
          <Anchor>Examples</Anchor>
          <Anchor>Colors</Anchor>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </header>
    </nav>
  );
}
