import useNav from "../../hooks/useNav";

type Props = {
  text: string;
  route?: string;
  blankRoute?: string;
};

const Button = ({ text, route = "/", blankRoute }: Props) => {
  const { handleClick } = useNav(route);
  return (
    <a
      href={blankRoute ? route : undefined}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="border border-1 border-pblack/10 dark:border-pwhite/10 
      hover:bg-pblack/10 dark:hover:bg-pwhite/20 px-4 py-1.5 rounded-[4px] 
        transition-all duration-200 w-fit cursor-pointer text-pblack dark:text-pwhite text-[14px]
        flex items-center gap-2 text-center"
    >
      {text}
    </a>
  );
};

export default Button;