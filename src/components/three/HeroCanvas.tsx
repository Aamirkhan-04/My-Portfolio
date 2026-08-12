import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { Group } from "three";
import { FloatingShapes } from "./FloatingShapes";
import { Particles } from "./Particles";
import { SceneLights } from "./SceneLights";
import { useIsTouchDevice, useReducedMotion } from "@/hooks/useReducedMotion";

function ParallaxRig({ children, enabled }: { children: React.ReactNode; enabled: boolean }) {
  const group = useRef<Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!group.current || !enabled) return;
    const targetX = (state.pointer.x * viewport.width) / 40;
    const targetY = (state.pointer.y * viewport.height) / 40;
    group.current.position.x += (targetX - group.current.position.x) * Math.min(1, delta * 2);
    group.current.position.y += (targetY - group.current.position.y) * Math.min(1, delta * 2);
    group.current.rotation.y += delta * 0.03;
  });

  return <group ref={group}>{children}</group>;
}

export function HeroCanvas() {
  const reduced = useReducedMotion();
  const isTouch = useIsTouchDevice();
  const particleCount = isTouch ? 150 : 420;

  return (
    <Canvas
      className="pointer-events-none"
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={isTouch ? [1, 1.25] : [1, 1.75]}
      gl={{ antialias: !isTouch, alpha: true, powerPreference: "high-performance" }}
    >
      <SceneLights />
      <ParallaxRig enabled={!isTouch && !reduced}>
        <FloatingShapes reduced={reduced} />
        <Particles count={particleCount} reduced={reduced} />
      </ParallaxRig>
    </Canvas>
  );
}

export default HeroCanvas;
