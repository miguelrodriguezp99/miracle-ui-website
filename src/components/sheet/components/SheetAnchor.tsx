import { useNavigate } from "react-router-dom";

type Props = {
  children: string;
  underlined?: boolean;
  props?: string;
  route?: string;
  toggleSheet?: () => void;
};

export default function SheetAnchor({
  children,
  props,
  route,
  toggleSheet,
}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route && toggleSheet) {
      toggleSheet();
      return navigate(route);
    } else if (route) {
      return navigate(route);
    }
    navigate(`/${children.toLowerCase()}`);
  };

  return (
    <a onClick={handleClick} className={`cursor-pointer ${props}`}>
      {children}
    </a>
  );
}
