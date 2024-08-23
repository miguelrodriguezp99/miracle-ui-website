import React from "react";

type Props = {
  children: React.ReactNode;
};

const BlurredCard = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col relative overflow-hidden h-auto z-20
    box-border outline-none shadow-md rounded-lg transition-transform
    motion:reduce:transition-none bg-blurredbg/20 dark:bg-blurredbg/5 
    text-pblack dark:text-pwhite backdrop-blur-sm backdrop-saturate-[1.8]
    border-[0.5px] border-pred/50 dark:border-pyellow/15
    py-4 px-4
  "
    >
      {children}
    </div>
  );
};

export default BlurredCard;
