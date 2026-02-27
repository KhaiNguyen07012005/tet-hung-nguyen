import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Flowers() {
  const flowers = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 60; i++) {
      temp.push([
        (Math.random() - 0.5) * 3,
        Math.random() * 3 + 1.5,
        (Math.random() - 0.5) * 3,
      ]);
    }
    return temp;
  }, []);

  return (
    <>
      {flowers.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.4} />
        </mesh>
      ))}
    </>
  );
}

function Tree() {
  const treeRef = useRef();

  useFrame(() => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={treeRef}>
      {/* Thân */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 3, 32]} />
        <meshStandardMaterial color="#5c3317" />
      </mesh>

      {/* Cành */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[0, 3, 0]}
          rotation={[
            Math.random() * 0.8 - 0.4,
            Math.random() * Math.PI * 2,
            Math.random() * 0.8 - 0.4,
          ]}
        >
          <cylinderGeometry args={[0.05, 0.1, 2, 16]} />
          <meshStandardMaterial color="#5c3317" />
        </mesh>
      ))}

      <Flowers />
    </group>
  );
}

export default function DaoTree3D() {
  return (
    <div style={{ height: "100vh", background: "#8b0000" }}>
      <Canvas camera={{ position: [0, 4, 8] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <fog attach="fog" args={["#8b0000", 10, 25]} />

        <Tree />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}