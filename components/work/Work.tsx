import WorkExperienceCard from "./WorkExperienceCard";

const Work = () => {
  const workExperiences = [
    {
      id: "we1",
      title: "Former Intern at Smart Axiata Cambodia Limited",
      description:
        "Working there allows me to gain much new work experience both the hard and soft skills. Working in a work-friendly environment allows me to boost up my overall technical skills and communication skill.",
    },
    {
      id: "we2",
      title:
        "Former Full-Time Application Developer at Smart Axiata Cambodia Limited",
      description:
        "At Smart, I was able to gain much more knowledge in the field as a developer.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl sm:text-3xl font-bold">Work</h2>
      {workExperiences.map((workExperience) => (
        <WorkExperienceCard
          key={workExperience.id}
          title={workExperience.title}
          description={workExperience.description}
        />
      ))}
    </div>
  );
};

export default Work;
