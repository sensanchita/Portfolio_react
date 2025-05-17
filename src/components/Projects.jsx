import React from 'react'

 function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React and CSS.</p>
          <a href="https://github.com/sensanchita/Portfolio_react" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        {/* <div className="project">
          <h3>Weather App</h3>
          <p>Uses OpenWeatherMap API to show weather data.</p>
          <a href="https://github.com/your-username/weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div> */}
      </div>
    </section>
  );
}
export default Projects;