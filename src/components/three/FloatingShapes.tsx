import { useRef } from "react";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface FloatingShapesProps {
  reduced?: boolean;
  compact?: boolean;
}

/**
 * Intentional composition: a large translucent torus off the left edge,
 * a floating polyhedron on the right, plus sparse wireframe accents.
 * Nothing sits behind the centered headline.
 */
export function FloatingShapes({ reduced = false, compact = false }: FloatingShapesProps) {
  const speed = reduced ? 0 : 1;
  const torus = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!torus.current || reduced) return;
    torus.current.rotation.z += delta * 0.06;
    torus.current.rotation.x += delta * 0.02;
  });

  return (
    <group>
      {/* LEFT — large translucent torus partly off-screen */}
      <mesh ref={torus} position={compact ? [-3.6, 0.6, -3] : [-5.4, 0.4, -2.5]}>
        <torusGeometry args={[2.6, 0.34, 24, 80]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          emissive="#5b21b6"
          emissiveIntensity={0.35}
          transparent
          opacity={0.42}
          roughness={0.15}
          metalness={0.25}
          transmission={0.5}
          thickness={1.2}
        />
      </mesh>

      {/* RIGHT — floating translucent icosahedron */}
      <Float speed={speed * 0.8} rotationIntensity={speed * 0.35} floatIntensity={speed * 0.8}>
        <mesh position={compact ? [3.2, -1.2, -3] : [5, -0.9, -2.2]}>
          <icosahedronGeometry args={[1.15, 0]} />
          <meshPhysicalMaterial
            color="#60a5fa"
            emissive="#1d4ed8"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
            roughness={0.1}
            metalness={0.4}
            transmission={0.55}
            thickness={1}
          />
        </mesh>
      </Float>

      {/* RIGHT accent — small wireframe octahedron */}
      <Float speed={speed} rotationIntensity={speed * 0.5} floatIntensity={speed * 0.6}>
        <mesh position={compact ? [2.6, 2.2, -4] : [4.1, 2.4, -4]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.45} />
        </mesh>
      </Float>

      {/* LEFT accent — small glowing sphere */}
      <Float speed={speed * 0.7} rotationIntensity={speed * 0.2} floatIntensity={speed}>
        <mesh position={compact ? [-2.8, -2.2, -4] : [-4.2, -2.3, -4]}>
          <sphereGeometry args={[0.32, 16, 16]} />
          <meshStandardMaterial
            color="#d946ef"
            emissive="#d946ef"
            emissiveIntensity={0.9}
            transparent
            opacity={0.55}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default FloatingShapes;
