import { useNavigate } from "react-router-dom";

const useNav = (route: string) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${route}`);
  };

  return { handleClick };
};

export default useNav;
