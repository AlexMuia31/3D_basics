import { Canvas } from "@react-three/fiber"


function App() {
  

  return (
   <Canvas camera={{position:[3,3,3]}}>
      <mesh>
        <boxGeometry args={[5,1,0.2]} /> 
        <meshBasicMaterial color={0x00ff00}/>
      </mesh>
   </Canvas>
  )
}

export default App