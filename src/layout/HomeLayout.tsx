import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="bg-white dark:bg-background font-geist text-sm h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
