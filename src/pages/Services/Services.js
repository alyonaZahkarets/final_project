import React, { useState } from 'react';
import data from './data.json';

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Filters = ({ filters, selectedFilter, onFilterSelect }) => {
  return (
    <div className="filters">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`filter-button ${selectedFilter === filter.id ? 'selected' : ''}`}
          onClick={() => onFilterSelect(filter.id)}
        >
          {filter.name}
        </button>
      ))}
      <button
        className={`filter-button ${selectedFilter === null ? 'selected' : ''}`}
        onClick={() => onFilterSelect(null)}
      >
        All
      </button>
    </div>
  );
};

const ProjectsSection = ({ filterId, projects }) => {
  const filteredProjects = filterId === null ? projects : projects.filter(project => project.filter_id === filterId);
  const latestProjects = filteredProjects.slice(-3);

  return (
    <div className="projects-section">
      <h2>{filteredProjects.length === 0 ? 'No projects found' : 'Latest Projects'}</h2>
      <Projects projects={latestProjects} />
    </div>
  );
};

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filters = [
    { id: 1, name: 'Filter 1', color: '#37806B' },
    { id: 2, name: 'Filter 2', color: '#37806B' },
    { id: 3, name: 'Filter 3', color: '#37806B' },
  ];

  const projects = data;

  const handleFilterSelect = filterId => {
    setSelectedFilter(filterId === selectedFilter ? null : filterId);
  };

  return (
    <div className="app">
      <Filters filters={filters} selectedFilter={selectedFilter} onFilterSelect={handleFilterSelect} />
      <ProjectsSection filterId={selectedFilter} projects={projects} />
    </div>
  );
};

export default App;