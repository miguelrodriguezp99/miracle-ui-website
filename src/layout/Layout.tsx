import Navbar from "../components/navbar/Navbar";
import Aside from "../components/aside/Aside";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div className="bg-white dark:bg-background font-geist text-sm">
      <Navbar />
      <div className="mx-auto px-8">
        <div
          className="max-w-[1350px] flex-1 items-start mx-auto
          md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 
          lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 "
        >
          <Aside />
          <main className="relative py-8 xl:grid xl:grid-cols-[1fr_300px] overflow-auto gap-8">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
