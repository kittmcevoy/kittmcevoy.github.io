import tenzingLogo from './images/tenzing-logo.png'

function ExperienceCard({ jobTitle, company, dates, logo, bgColor, JobDescription }) {
  return (
    <div className={`${bgColor}`}>
      <div className="flex flex-row justify-left ml-8 pt-6">
        <img src={logo} alt={`${company} logo`} className="mr-28 w-32 h-auto object-contain " />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="text-xl">Job Title: {jobTitle} </div>
            <div className="text-xl px-4"> | </div>
            <div className="text-xl">Company: {company}</div>
            <div className="text-xl px-4"> | </div>
            <div className="text-xl">{dates}</div>
          </div>
          <div className="whitespace-pre-line w-5/6">
            {JobDescription}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceCard;
