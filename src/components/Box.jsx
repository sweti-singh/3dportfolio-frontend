import React,{useRef} from 'react'
import { useFrame } from '@react-three/fiber';

const Box = () => {
    const boxRef = useRef();
    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.01;
            boxRef.current.rotation.y += 0.01;
            boxRef.current.rotation.z += 0.01;
        }
    });

  return (
    <mesh ref={boxRef} rotation={[90,0,20]}>
       <boxGeometry attach={'geometry'} args={[3.5,3.5,3.5]}/>
       <meshNormalMaterial attach={'material'}/>
    </mesh>
  )
}

export default Box
