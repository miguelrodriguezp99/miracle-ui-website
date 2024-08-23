import Button from "../../components/button/Button";
import BlurredCard from "./components/BlurredCard";
import StarryBackground from "./components/StarryBackground";

export default function Home() {
  return (
    <>
      <div className="relative ">
        <StarryBackground />
      </div>
      <div className="max-w-[1300px] mx-auto mt-20 text-pblack dark:text-pwhite w-full">
        <div className="w-[60%] mx-auto">
          <h1 className="text-6xl text-pblack dark:text-pwhite font-bold text-center">
            Create accesible and lighter react apps{" "}
            <span className="text-pred dark:text-pyellow"> with speed.</span>
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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-44 pb-20">
        <BlurredCard>
          <div className="flex flex-col text-base">
            <div className="flex items-center text-center gap-3">
              <div className="rounded-full p-2 dark:bg-pwhite/20 w-fit">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                  className="text-pred dark:text-pyellow"
                >
                  <path
                    d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
              <h1 className="text-lg font-bold text-pred dark:text-pyellow">
                Fast
              </h1>
            </div>
            <div className="text-pblack/80 dark:text-pwhite/60 mt-3">
              Spend less time writing UI code and more time building a great
              experience for your customers.
            </div>
          </div>
        </BlurredCard>
        <BlurredCard>
          <div className="flex flex-col text-base">
            <div className="flex items-center text-center gap-3">
              <div className="rounded-full p-2 bg-pwhite/20 w-fit">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                  className="text-pred dark:text-pyellow"
                >
                  <path
                    d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
              <h1 className="text-lg font-bold dark:text-pyellow">Fast</h1>
            </div>
            <div className="text-pblack/80 dark:text-pwhite/60 mt-3">
              Spend less time writing UI code and more time building a great
              experience for your customers.
            </div>
          </div>
        </BlurredCard>
        <BlurredCard>
          <div className="flex flex-col text-base">
            <div className="flex items-center text-center gap-3">
              <div className="rounded-full p-2 bg-pwhite/20 w-fit">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                  className="text-pred dark:text-pyellow"
                >
                  <path
                    d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
              <h1 className="text-lg font-bold dark:text-pyellow">Fast</h1>
            </div>
            <div className="text-pblack/80 dark:text-pwhite/60 mt-3">
              Spend less time writing UI code and more time building a great
              experience for your customers.
            </div>
          </div>
        </BlurredCard>
        <BlurredCard>
          <div className="flex flex-col text-base">
            <div className="flex items-center text-center gap-3">
              <div className="rounded-full p-2 bg-pwhite/20 w-fit">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                  className="text-pred dark:text-pyellow"
                >
                  <path
                    d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
              <h1 className="text-lg font-bold dark:text-pyellow">Fast</h1>
            </div>
            <div className="text-pblack/80 dark:text-pwhite/60 mt-3">
              Spend less time writing UI code and more time building a great
              experience for your customers.
            </div>
          </div>
        </BlurredCard>
      </section>
    </>
  );
}
