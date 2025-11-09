function Experience({ jobTitle, company, dates }) {
  return (
    <div className="bg-slate-300 h-36">
      <div className="flex flex-row justify-center">
        <div className="p-4 text-xl">Job Title: {jobTitle} </div>
        <div className="py-4 text-xl"> | </div>
        <div className="p-4 text-xl">Company: {company}</div>
        <div className="py-4 text-xl"> | </div>
        <div className="p-4 text-xl">{dates}</div>
        
      </div>
    </div>
  );
}

export default Experience;
