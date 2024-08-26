import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  children: string;
  underlined?: boolean;
  props?: string;
  route?: string;
};

export default function Anchor({ children, underlined, props, route }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname
    .toLowerCase()
    .includes(`/${children.toLowerCase()}`);

  const handleClick = () => {
    if (route) {
      return navigate(route);
    }
    navigate(`/${children.toLowerCase()}`);
  };

  return (
    <a
      onClick={handleClick}
      className={`cursor-pointer transition-color duration-300 items-center hidden sm:flex
        ${
          isActive
            ? "text-pblack dark:text-pwhite"
            : "text-pblack/60 hover:text-pblack/80 dark:text-pwhite/60 dark:hover:text-pwhite/80"
        }
        ${underlined && "hover:underline"}
        ${props}
        `}
    >
      {children}
    </a>
  );
}
