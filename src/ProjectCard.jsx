import Header from './header.jsx';

function ProjectCard({ name }) {
  return (
    <div className="w-80 h-96 bg-white border-8 border-dark-blue rounded-lg p-4 text-gold text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
      <p className="text-3xl font-bold text-gold">{name}</p>
    </div>
  );
}

export default ProjectCard;
