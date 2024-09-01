import Button from "../../../components/button/Button";

const Hero = () => {
  return (
    <div className="mt-20 sm:mt-32 text-pblack dark:text-pwhite w-full hero ">
      <div className="w-[100%] lg:w-[60%] mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-6xl text-pblack dark:text-pwhite font-bold text-center">
          Create accesible and lighter react apps{" "}
          <span className="text-pred dark:text-pyellow"> with speed.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-pblack dark:text-pwhite mt-7 text-center w-[75%] mx-auto">
          Miracle UI is a simple, modular, and accessible component library,
          built entirely with pure CSS and no dependencies.
        </p>
      </div>

      <div className="flex items-center w-full justify-center mt-10 gap-5">
        <Button text="Get Started" route="/docs/installation" />
        <Button
          text="Github"
          blankRoute="https://github.com/miguelrodriguezp99/miracle-ui"
        />
      </div>
    </div>
  );
};

export default Hero;
