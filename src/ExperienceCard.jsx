import tenzingLogo from './images/tenzing-logo.png'

function ExperienceCard({ jobTitle, company, dates, logo, bgColor, JobDescription }) {
  return (
    <div className={`${bgColor}`}>
      <div className="flex flex-row justify-left ml-8 pt-6">
        <img src={logo} alt={`${company} logo`} className="mr-20 w-32 h-auto object-contain md:flex hidden" />
        <div className="flex flex-col mr-2">
          <div className="justify-between flex flex-row">
            <div className="flex flex-col md:flex-row">
              <div className="text-xl">Job Title: {jobTitle} </div>
              <div className="text-xl px-4 hidden md:flex"> | </div>
              <div className="text-xl">Company: {company}</div>
              <div className="text-xl px-4 hidden md:flex"> | </div>
              <div className="text-xl">{dates}</div>
            </div>
            <img src={logo} alt={`${company} logo`} className="mx-2 w-32 h-auto object-contain flex md:hidden" />
          </div>

          <div className="whitespace-pre-line lg:w-5/6">
            {JobDescription}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceCard;
