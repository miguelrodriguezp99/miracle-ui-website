import Button from "../../../components/button/Button";

const Hero = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-32 text-pblack dark:text-pwhite w-full hero">
      <div className="w-[80%] lg:w-[60%] mx-auto">
        <h1 className="text-5xl md:text-5xl lg:text-6xl text-pblack dark:text-pwhite font-bold text-center">
          Create accesible and lighter react apps{" "}
          <span className="text-pred dark:text-pyellow"> with speed.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-pblack dark:text-pwhite mt-7 text-center w-[85%] mx-auto">
          Miracle UI is a simple, modular and accessible component library that
          gives you the building blocks you need to build your React
          applications.
        </p>
      </div>

      <div className="flex items-center w-full justify-center mt-10 gap-5">
        <Button text="Get Started" route="/docs/installation" />
        <Button text="Github" blankRoute="https://github.com" />
      </div>
    </div>
  );
};

export default Hero;
