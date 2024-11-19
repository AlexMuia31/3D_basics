import { Canvas } from "@react-three/fiber"


function App() {
  

  return (
   <Canvas camera={{position:[3,3,3]}}>
      <mesh>
        <boxGeometry args={[5,1,2]} /> 
        <sphereGeometry args={[2, 32, 32]} />
        <meshNormalMaterial />
      </mesh>
   </Canvas>
  )
}

export default App
