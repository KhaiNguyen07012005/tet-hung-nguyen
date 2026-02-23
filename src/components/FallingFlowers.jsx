import { useEffect } from "react";
import "./FallingFlowers.css";

function FallingFlowers() {
  useEffect(() => {
    const container = document.querySelector(".flower-container");

    for (let i = 0; i < 25; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = 5 + Math.random() * 5 + "s";
      flower.style.opacity = Math.random();
      container.appendChild(flower);
    }
  }, []);

  return <div className="flower-container"></div>;
}

export default FallingFlowers;