import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";

function useLayer(count: number, spreadZ: number, offsetZ: number) {
  return useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 11;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spreadZ + offsetZ;
    }
    return arr;
  }, [count, spreadZ, offsetZ]);
}

/** Two depth layers: fine distant stars + larger glowing near points. */
export function Particles({ count = 400, reduced = false }: { count?: number; reduced?: boolean }) {
  const far = useRef<Points>(null);
  const near = useRef<Points>(null);

  const farPos = useLayer(Math.round(count * 0.72), 8, -6);
  const nearPos = useLayer(Math.round(count * 0.28), 4, -1);

  useFrame((_, delta) => {
    if (reduced) return;
    if (far.current) far.current.rotation.y += delta * 0.008;
    if (near.current) near.current.rotation.y -= delta * 0.015;
  });

  return (
    <group>
      <points ref={far}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[farPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.026} color="#9fb4c7" transparent opacity={0.55} sizeAttenuation />
      </points>

      <points ref={near}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nearPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color="#c4b5fd" transparent opacity={0.75} sizeAttenuation />
      </points>
    </group>
  );
}

export default Particles;
