import { useEffect, useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

export default function ThemeToggle() {
  // Inicializar el estado de "dark" basado en las preferencias del sistema
  const [dark, setDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Aplicar el tema basado en el estado inicial
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Manejar cambios en las preferencias del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Función para manejar el cambio de tema manualmente
  const darkModeHandler = () => {
    setDark(!dark);
  };

  return (
    <div>
      <button
        className="flex items-center justify-center"
        onClick={() => darkModeHandler()}
      >
        {!dark && <Moon props="h-6 max-w-min fill-black" />}
        {dark && <Sun props="h-6 max-w-min fill-white" />}
      </button>
    </div>
  );
}
