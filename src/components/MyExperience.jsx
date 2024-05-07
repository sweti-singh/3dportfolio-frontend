import React, { useEffect, useState } from "react";
import "../css/project.css";
import '../css/experience.css';
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { OrbitControls } from "@react-three/drei";
import axios from "axios";

const MyExperience = () => {
  const [experience, setExperience] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios(`${import.meta.env.VITE_URL}/api/v1/portfolio/experience`);
      setExperience(data.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="project-container">
      <p>Experience</p>
      {experience.map((item) => {
        return (
          <div className="content">
            <div className="description">
              <div className="description-container">
                <div className="experience">
                <p>{item.Company}</p>
                <p>{item.work_experience}</p>
                </div>
                <p>{item.designation}</p>
                <ul className="list-style">
                {item.work.map((specificWork)=> {
                    return <li>{specificWork}</li>
                    })}
                    </ul>
                    <p>{`Skills : ${item.skills.map((skill,index)=> {return `${skill }`})}`}</p>
                {/* <div className='description'>
                 abchncjkfjkjjkkjkj
           </div> */}
              </div>
              <div className="animation">
                <Canvas>
                  <OrbitControls/>
                  <Box/>
                  <ambientLight intensity={0.5}/>
                  <directionalLight intensity={1} position={[-2,5,2]}/>
                </Canvas>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyExperience;
