import Button from "../../components/button/Button";
import StarryBackground from "./components/StarryBackground";

export default function Home() {
  return (
    <>
      <div className="relative">
        <StarryBackground />
      </div>
      <div className="max-w-[1300px] mx-auto mt-20 text-pblack dark:text-pwhite w-full">
        <div className="w-[60%] mx-auto">
          <h1 className="text-6xl text-pblack dark:text-pwhite font-bold text-center">
            Create accesible and lighter react apps with speed.
          </h1>
          <p className="text-2xl text-pblack dark:text-pwhite mt-7 text-center w-[85%] mx-auto">
            Miracle UI is a simple, modular and accessible component library
            that gives you the building blocks you need to build your React
            applications.
          </p>
        </div>

        <div className="flex items-center w-full justify-center mt-10 gap-5">
          <Button text="Get Started" route="/docs/installation" />
          <Button text="Github" blankRoute="https://github.com" />
        </div>
      </div>
    </>
  );
}
