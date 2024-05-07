import React, { useEffect, useState } from "react";
import "../css/about.css";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios("http://localhost:8080/api/v1/portfolio/about");
      setAbout(data.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        {about.map((about) => {
          return (
            <>
              <p>{about.title}</p>
              <p>{about.description}</p>
            </>
          );
        })}
      </div>
      <div className="about-image">
        <img src="/women.png" />
      </div>
    </div>
  );
};

export default About;
