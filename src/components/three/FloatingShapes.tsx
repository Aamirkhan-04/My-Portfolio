import { Float } from "@react-three/drei";

interface FloatingShapesProps {
  reduced?: boolean;
}

export function FloatingShapes({ reduced = false }: FloatingShapesProps) {
  const speed = reduced ? 0 : 1;

  return (
    <group>
      <Float speed={speed * 1.2} rotationIntensity={speed * 0.6} floatIntensity={speed * 1.2}>
        <mesh position={[-3.2, 1.1, -1]}>
          <torusGeometry args={[0.85, 0.16, 16, 60]} />
          <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.55} />
        </mesh>
      </Float>

      <Float speed={speed * 0.9} rotationIntensity={speed * 0.5} floatIntensity={speed}>
        <mesh position={[3.4, -0.8, -1.5]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#60a5fa" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>

      <Float speed={speed * 1.4} rotationIntensity={speed * 0.8} floatIntensity={speed * 0.8}>
        <mesh position={[2.4, 1.9, -2.4]}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#d946ef"
            transparent
            opacity={0.35}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      </Float>

      <Float speed={speed} rotationIntensity={speed * 0.3} floatIntensity={speed * 1.4}>
        <mesh position={[-2.6, -1.7, -2]}>
          <sphereGeometry args={[0.45, 24, 24]} />
          <meshStandardMaterial color="#a78bfa" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

export default FloatingShapes;
