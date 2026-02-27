// import { useEffect } from "react";
// import "./FallingFlowers.css";

// function FallingFlowers() {
//   useEffect(() => {
//     const container = document.querySelector(".flower-container");

//     for (let i = 0; i < 25; i++) {
//       const flower = document.createElement("div");
//       flower.className = "flower";
//       flower.style.left = Math.random() * 100 + "vw";
//       flower.style.animationDuration = 5 + Math.random() * 5 + "s";
//       flower.style.opacity = Math.random();
//       container.appendChild(flower);
//     }
//   }, []);

//   return <div className="flower-container"></div>;
// }

// export default FallingFlowers;
import { useEffect, useRef } from "react";

function FallingFlowers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flowers = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 1 + 0.5
    }));

    function drawFlower(x, y, size) {
      ctx.fillStyle = "gold";
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowers.forEach((f) => {
        f.y += f.speed;
        if (f.y > canvas.height) {
          f.y = 0;
          f.x = Math.random() * canvas.width;
        }
        drawFlower(f.x, f.y, f.size);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="flower-canvas"></canvas>;
}

export default FallingFlowers;