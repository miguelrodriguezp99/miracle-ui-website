type AccesibilityCardProps = {
  svg: React.ReactNode;
  children?: React.ReactNode;
};

export const AccesibilityCard = ({ svg, children }: AccesibilityCardProps) => {
  return (
    <div
      className="select-none flex flex-col relative overflow-hidden h-auto box-border outline-none shadow-md py-2 lg:py-6
                rounded-lg transition-transform border-transparent backdrop-blur-lg backdrop-saturate-[1.8]
              bg-pwhite dark:bg-pblack/75 border-[0.5px] dark:border-pyellow/10 items-center justify-center"
    >
      <div className="flex p-3 w-full justify-start items-center shrink-0 rounded-lg gap-3 text-center h-full font-bold text-[16px]">
        {svg}
        {children}
      </div>
    </div>
  );
};
