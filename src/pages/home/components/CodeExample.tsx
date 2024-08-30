import { Card, CardProduct } from "@miracle-ui/card";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import codeblock from "./Code";

const CodeExample = () => {
  return (
    <>
      <div className="h-auto bg-white dark:bg-pblack relative w-full z-40 pb-20 ">
        <div className="absolute top-[45%] left-[25%] rounded-full min-h-80 min-w-80 bg-pyellow/50 blur-2xl radial"></div>
        <div className="hidden lg:flex absolute top-[50%] left-[67%] rounded-full min-h-80 min-w-80 bg-pyellow/50 blur-2xl radial"></div>

        <section className="text-pblack dark:text-pwhite text-center flex flex-col gap-10 lg:flex-row max-w-[1350px] mx-auto px-8 pt-20 ">
          <div className="flex flex-col gap-6 w-full lg:mt-12">
            <div className="text-center lg:text-start">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">
                Less code. More{" "}
                <span className="text-pred dark:text-pyellow">speed.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl pt-3">
                Spend less time writing UI code and more time building a great
                experience for your customers. Customize your components to fit
                your brand.
              </p>
            </div>

            <div className="max-h-min product mt-10 flex gap-4 flex-wrap w-full justify-center md:justify-center 2xl:justify-start">
              <Card cardWidth="none" isClickable>
                <CardProduct
                  title="Orange"
                  price="$10.00"
                  imgRoute="https://nextui.org/images/fruit-4.jpeg"
                />
              </Card>
              <div className="hidden 2xl:flex">
                <Card cardWidth="none" isClickable>
                  <CardProduct
                    title="Strawberry"
                    price="$10.00"
                    imgRoute="https://nextui.org/images/fruit-3.jpeg"
                  />
                </Card>
              </div>
              <div className="hidden md:flex">
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

          <div
            className="lg:w-[70%] flex justify-center w-full rounded-lg
            max-h-[400px] lg:max-h-[600px]"
          >
            <CopyBlock
              wrapLongLines
              customStyle={{
                textAlign: "left",
                borderRadius: "10px",
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
