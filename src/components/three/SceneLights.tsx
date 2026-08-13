export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 6]} intensity={0.9} color="#a78bfa" />
      <pointLight position={[-6, -2, 2]} intensity={28} color="#3b82f6" />
      <pointLight position={[6, 3, -3]} intensity={16} color="#d946ef" />
      <pointLight position={[0, -4, 3]} intensity={12} color="#22d3ee" />
    </>
  );
}

export default SceneLights;
