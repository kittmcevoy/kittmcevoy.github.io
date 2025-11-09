import Header from './header.jsx';
import ProjectCard from './ProjectCard.jsx'
function Projects() {
  return (
    <div>
      <Header />
      <div className="py-12 flex flex-row justify-evenly">
        <ProjectCard name="Wellington Canoe Polo Website" description="Wellington Canoe Polo's Website" />
        <ProjectCard name="Project 2" />
        <ProjectCard name="Project 3" />
      </div>
      <div className="py-12 flex flex-row justify-evenly">
        <ProjectCard name="Project 1" />
        <ProjectCard name="Project 2" />
        <ProjectCard name="Project 3" />
      </div>
      
    </div>
  );
}

export default Projects;
