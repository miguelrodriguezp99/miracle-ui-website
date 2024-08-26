import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="font-geist text-sm">
      <Navbar />
      <div className="px-8">
        <div className="bg-white dark:bg-background font-geist text-sm h-full max-w-[1350px] mx-auto">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
