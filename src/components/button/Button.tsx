import useNav from "../../hooks/useNav";

type Props = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  text: string;
  route?: string;
  blankRoute?: string;
};

const Button = ({
  text,
  route = "/",
  blankRoute,
  startContent,
  endContent,
}: Props) => {
  const { handleClick } = useNav(route);
  return (
    <a
      href={blankRoute || undefined}
      target={blankRoute ? "_blank" : undefined}
      rel={blankRoute ? "noopener noreferrer" : undefined}
      onClick={blankRoute ? undefined : handleClick}
      className="border border-1 border-pblack/10 dark:border-pwhite/10 
        hover:bg-pblack/10 dark:hover:bg-pwhite/10 px-4 py-1.5 rounded-[4px] 
        transition-all duration-200 w-fit cursor-pointer text-pblack dark:text-pwhite text-[14px]
        flex items-center gap-2 text-center text-nowrap"
    >
      {startContent}
      {text}
      {endContent}
    </a>
  );
};

export default Button;
