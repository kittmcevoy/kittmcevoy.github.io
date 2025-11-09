import Header from './header.jsx';
import ExperienceCard from './ExperienceCard.jsx'

function Experience() {
  return (
    <div>
      <div className="fixed">
        <Header />
      </div>
      <div className="pt-20">
        <ExperienceCard jobTitle="DevOps Engineer" company="Tenzing" dates="September 2024 - Present"/>
      </div>
    </div >
  );
}

export default Experience;
