export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} color="#8b5cf6" />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#3b82f6" />
      <pointLight position={[5, 3, -4]} intensity={18} color="#d946ef" />
    </>
  );
}

export default SceneLights;
