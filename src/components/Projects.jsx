import React, { useEffect, useState } from "react";
import "../css/project.css";
import axios from "axios";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [project, setProject] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios("http://localhost:8080/api/v1/portfolio/project");
      console.log(data)
      setProject(data.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="project-container" style={{ height: "100%" }}>
      <p>Projects</p>
      <span style={{color:'white', fontSize:'2rem',fontFamily:'Roboto'}}>
      Skills : FullStack | MERN STACK | Redux | React | Typescript | Node | Threejs | ReactQuery | Zustand | Chakra UI | Material UI | Sass | Frontend Developer
      </span>
      {project.map((project) => {
        return (
          <div className="content">
            <div className="description">
              <div className="description-container">
                <p>{project.project_name}</p>
                <ul className="list-style">
                  {project.description.map((desc) => {
                    return <li>{desc}</li>;
                  })}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>See a Demo</button>
                </a>
              </div>
              <div className="image">
                <img src={project.pictures[currentIndex]} alt={project.project_name}/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
