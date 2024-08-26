import { useNavigate, useLocation } from "react-router-dom";

const useNav = (route: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(route);
    }
  };

  return { handleClick };
};

export default useNav;
