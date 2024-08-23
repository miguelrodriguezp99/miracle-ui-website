/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "../styles/StarryBackground.css";

const StarryBackground = () => {
  const COLORS = [
    "var(--star-1)",
    "var(--star-2)",
    "var(--star-3)",
    "var(--star-4)",
  ];

  const generateSpaceLayer = (
    size: string,
    selector: string,
    totalStars: number,
    duration: string
  ) => {
    const layer = [];
    for (let i = 0; i < totalStars; i++) {
      const color = COLORS[~~(Math.random() * COLORS.length)];
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }
    const container = document.querySelector(selector) as HTMLElement;
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
    container.style.setProperty("--space-layer", layer.join(","));
  };

  useEffect(() => {
    generateSpaceLayer("2px", ".space-1", 250, "25s");
    generateSpaceLayer("3px", ".space-2", 100, "20s");
    generateSpaceLayer("6px", ".space-3", 25, "15s");
  }, []);

  return (
    <div className="container">
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </div>
  );
};

export default StarryBackground;
