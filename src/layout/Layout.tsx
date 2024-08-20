import { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import Aside from "../components/aside/Aside";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background font-geist text-sm">
      <Navbar />
      <div className="w-[1400px] mx-auto px-8">
        <div
          className="mx-auto items-start 
        md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 
        lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 "
        >
          <Aside />
          <main className="relative py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
