import Cards from "./components/Cards";
import Hero from "./components/Hero";
import CodeExample from "./components/CodeExample";
import StarryBackground from "./components/StarryBackground";
import "./styles/home.css";
import DarkExample from "./components/DarkExample";
import AccesibilityExample from "./components/AccesibilityExample";

export default function Home() {
  return (
    <>
      <StarryBackground />
      <Hero />
      <Cards />
      <CodeExample />
      <AccesibilityExample />
      <DarkExample />
    </>
  );
}
