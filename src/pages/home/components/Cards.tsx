import BlurredCard from "./BlurredCard";

const Cards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-32 max-w-[1300px] mx-auto px-7">
      <BlurredCard>
        <div className="flex flex-col text-base">
          <div className="flex items-center text-center gap-3">
            <div className="rounded-full p-2 bg-pblack/20 dark:bg-pwhite/10 w-fit">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg font-bold text-pred dark:text-pyellow">
              Fast
            </h1>
          </div>
          <div className="text-pblack dark:text-pwhite/60 mt-3">
            Spend less time writing UI code and more time building a great
            experience for your customers.
          </div>
        </div>
      </BlurredCard>
      <BlurredCard>
        <div className="flex flex-col text-base">
          <div className="flex items-center text-center gap-3">
            <div className="rounded-full p-2 bg-pblack/20 dark:bg-pwhite/10 w-fit">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg font-bold text-pred dark:text-pyellow">
              Fast
            </h1>
          </div>
          <div className="text-pblack dark:text-pwhite/60 mt-3">
            Spend less time writing UI code and more time building a great
            experience for your customers.
          </div>
        </div>
      </BlurredCard>
      <BlurredCard>
        <div className="flex flex-col text-base">
          <div className="flex items-center text-center gap-3">
            <div className="rounded-full p-2 bg-pblack/20 dark:bg-pwhite/10  w-fit">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg font-bold text-pred dark:text-pyellow">
              Fast
            </h1>
          </div>
          <div className="text-pblack dark:text-pwhite/60 mt-3">
            Spend less time writing UI code and more time building a great
            experience for your customers.
          </div>
        </div>
      </BlurredCard>
      <BlurredCard>
        <div className="flex flex-col text-base">
          <div className="flex items-center text-center gap-3">
            <div className="rounded-full p-2 bg-pblack/20 dark:bg-pwhite/10 w-fit">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg font-bold text-pred dark:text-pyellow">
              Fast
            </h1>
          </div>
          <div className="text-pblack dark:text-pwhite/60 mt-3">
            Spend less time writing UI code and more time building a great
            experience for your customers.
          </div>
        </div>
      </BlurredCard>
    </section>
  );
};

export default Cards;
