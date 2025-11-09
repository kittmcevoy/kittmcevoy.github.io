import Header from './header.jsx';
import ExperienceCard from './ExperienceCard.jsx'
import TenzingLogo from './images/tenzing-logo.png'
import GeeksLogo from './images/geeks-logo.png'
import CricHQLogo from './images/CricHQ-logo.png'
import VUWLogo from './images/VUW-logo.png'


const GeeksJobDescription=`
In this role I actively use skills in troubleshooting, customer service and sales, with a commitment to continuous learning and technical upskilling, to give customers the best possible experience with technology.
•	Software and hardware troubleshooting on PC and Mac.
•	Installing and maintaining small business and home networks. 
•	Computer rebuilds and system clean-ups and providing recommendations on technology based on customer needs.
•	Removal of viruses and malware, optimizing internet, Wi-Fi and email technology.

`

const CricHQJobDescription=`
In this role, I actively contributed to the development and maintenance of full-stack web applications. I utilised a variety of cutting-edge technologies, including React.js, Ruby on Rails, Node.js, and MySQL.
•	I helped in the transformation of a legacy front-end codebase into a modern architecture built around React, resulting in improved maintainability and performance for a website with 500,000 monthly hits.
•	Collaborated with cross-functional agile teams to enhance website performance, improve user experience, and boost SEO effectiveness. 
•	Proficiently utilized MySQL to manage and manipulate databases, demonstrating a strong command of SQL queries and database administration.
•	Benefitted from invaluable mentorship from senior developers, enhancing my skills and knowledge.

`

const VUWJobDescription=`
I tutored NWEN243 in the Computer Science program, offering comprehensive sessions on networking concepts, aiding problem-solving, and evaluating assignments with constructive feedback for student academic growth.

`

function Experience() {
  return (
    <div>
      <div className="fixed">
        <Header />
      </div>
      <div className="pt-20">
        <ExperienceCard
          jobTitle="DevOps Engineer"
          company="Tenzing"
          dates="September 2024 - Present"
          logo={TenzingLogo}
          bgColor={"bg-white"}
          JobDescription={GeeksJobDescription}
        />

        <ExperienceCard
          jobTitle="Mobile technician"
          company="Geeks On Wheels"
          dates="February 2024 - September 2024"
          logo={GeeksLogo}
          bgColor={"bg-slate-200"}
          JobDescription={GeeksJobDescription}
        />

        <ExperienceCard
          jobTitle="Intern Software Engineer"
          company="CricHQ"
          dates="November 2021 - November 2023"
          logo={CricHQLogo}
          bgColor={"bg-white"}
          JobDescription={CricHQJobDescription}
        />

        <ExperienceCard
          jobTitle="Tutor"
          company="Victoria University of Wellington "
          dates="2022 - 2023"
          logo={VUWLogo}
          bgColor={"bg-slate-200"}
          JobDescription={VUWJobDescription}
        />

      </div>
    </div >
  );
}

export default Experience;
