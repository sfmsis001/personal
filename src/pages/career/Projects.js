import React from "react";

const Projects = () => {
  const githubLink = "https://github.com/sfmsis001"; // Replace with your actual GitHub projects link

  return (
    <div>
      <h1>My Projects</h1>
      <p>Here are some of my projects. Click the button below to view them on GitHub.</p>
      <button 
        onClick={() => window.open(githubLink, "_blank")} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        View on GitHub
      </button>
    </div>
  );
};

export default Projects;
