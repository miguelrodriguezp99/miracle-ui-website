import { useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="">
      <button
        className="flex items-center justify-center"
        onClick={() => darkModeHandler()}
      >
        {dark && <Moon props="h-6 max-w-min fill-white" />}
        {!dark && <Sun props="h-6 max-w-min fill-white" />}
      </button>
    </div>
  );
}
