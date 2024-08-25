type Props = {
  title: string;
  colors: string[];
};

const Slate = ({ title, colors }: Props) => {
  return (
    <div id={title} className="rounded-lg shadow-sm ring-1 ring-pwhite/30">
      <div className="flex items-center p-2 pb-0 text-pblack dark:text-pwhite sm:px-5">
        <div className="flex-1 pl-1 text-sm font-medium">
          <h2 className="capitalize">{title}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2 sm:px-5">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`group relative flex aspect-[3/1] sm:aspect-[4/6] w-full h-full flex-1 flex-col gap-2 text-pblack dark:text-pwhite sm:h-auto sm:w-auto [&>svg]:absolute [&>svg]:right-4 [&>svg]:top-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clipboard group-hover:opacity-100"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            </svg>
            <div
              className={`w-full flex-1 rounded-md bg-[${color}] md:rounded-lg`}
            ></div>
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <span className="hidden font-mono text-xs tabular-nums text-pblack dark:text-pwhite/60 transition-colors group-hover:text-foreground lg:flex">
                {color}
              </span>
              <span className="font-mono text-xs tabular-nums text-pblack dark:text-pwhite/60 transition-colors group-hover:text-foreground lg:hidden">
                50
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slate;
