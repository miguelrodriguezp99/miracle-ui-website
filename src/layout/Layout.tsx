import { ReactNode } from "react";
import Background from "../components/Background";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Background children={children} />
    </>
  );
}
