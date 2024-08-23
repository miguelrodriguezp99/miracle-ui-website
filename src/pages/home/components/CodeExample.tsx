import { Card, CardProduct } from "@miracle-ui/card";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import codeblock from "./Code";

const CodeExample = () => {
  return (
    <>
      <div className="h-dvh bg-white dark:bg-pblack relative w-full z-40 ">
        <div className="absolute top-[45%] left-[25%] rounded-full min-h-80 min-w-80 bg-pyellow/50 blur-2xl radial"></div>
        <section className="text-pblack dark:text-pwhite h-full text-center flex flex-col gap-5 lg:flex-row justify-center w-[85%] lg:w-[70%] mx-auto">
          <div className="flex flex-col gap-6 w-full lg:w-[80%]">
            <div className="text-start pt-[350px] sm:pt-[350px] md:pt-72 lg:pt-44 codetext">
              <h1 className="text-5xl md:text-5xl lg:text-6xl">
                Less code. More{" "}
                <span className="text-pred dark:text-pyellow">speed.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl pt-3">
                Spend less time writing UI code and more time building a great
                experience for your customers. Customize your components to fit
                your brand.
              </p>
            </div>

            <div className="max-h-min product mt-10 flex gap-4 flex-wrap w-full justify-center  md:justify-center 2xl:justify-start">
              <Card cardWidth="none" isClickable>
                <CardProduct
                  title="Orange"
                  price="$10.00"
                  imgRoute="https://nextui.org/images/fruit-4.jpeg"
                />
              </Card>
              <div className="hidden sm:flex">
                <Card cardWidth="none" isClickable>
                  <CardProduct
                    title="Strawberry"
                    price="$10.00"
                    imgRoute="https://nextui.org/images/fruit-3.jpeg"
                  />
                </Card>
              </div>
              <div className="hidden lg:flex">
                <Card cardWidth="none" isClickable>
                  <CardProduct
                    title="Strawberry"
                    price="$10.00"
                    imgRoute="https://nextui.org/images/fruit-8.jpeg"
                  />
                </Card>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] pt-20 justify-center w-full lg:pt-44 min-h-[500px] lg:min-h-[300px] max-h-[700px] pb-10 items-start">
            <CopyBlock
              wrapLongLines
              customStyle={{
                textAlign: "left",
                height: "100%",
                overflow: "auto",
                width: "100%",
                scrollbarWidth: "thin",
                scrollbarColor: "#4B5563 #1A202C",
                paddingLeft: "1rem",
              }}
              text={codeblock.usage}
              language="jsx"
              showLineNumbers={false}
              theme={tomorrowNight}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CodeExample;
