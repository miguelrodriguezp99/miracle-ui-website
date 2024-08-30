import { useEffect, useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

export default function ThemeToggle2() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const switchTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div>
      <button
        className="flex items-center justify-center"
        onClick={switchTheme}
      >
        {!dark && <Moon props="h-6 max-w-min fill-black" />}
        {dark && <Sun props="h-6 max-w-min fill-white" />}
      </button>
    </div>
  );
}
