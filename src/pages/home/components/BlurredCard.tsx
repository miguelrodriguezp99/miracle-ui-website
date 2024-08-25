import React from "react";

type Props = {
  svg: React.ReactNode | "string";
  title: string;
  children: React.ReactNode;
};

const BlurredCard = ({ svg, title, children }: Props) => {
  return (
    <div
      className="flex flex-col relative overflow-hidden h-auto z-20
      box-border outline-none shadow-md rounded-lg transition-transform
      motion:reduce:transition-none bg-blurredbg/20 dark:bg-blurredbg/5
    text-pblack dark:text-pwhite backdrop-blur-sm backdrop-saturate-[1.8]
      border-[0.5px] border-pred/50 dark:border-pyellow/10
      py-4 px-4
  "
    >
      <div className="flex flex-col text-base">
        <div className="flex items-center text-center gap-3">
          <div className="rounded-full p-2 bg-pblack/20 dark:bg-pwhite/10 w-fit">
            {svg}
          </div>
          <h1 className="text-lg font-bold text-pblack dark:text-pwhite">
            {title}
          </h1>
        </div>
        <div className="text-pblack dark:text-pwhite/60 mt-3">{children}</div>
      </div>
    </div>
  );
};

export default BlurredCard;
