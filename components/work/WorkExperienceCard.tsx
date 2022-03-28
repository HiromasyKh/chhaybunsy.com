type WorkExperienceCardProps = {
  title: string;
  description: string;
};

const WorkExperienceCard = (props: WorkExperienceCardProps) => {
  const { title, description } = props;
  return (
    <div className="pt-4">
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-200">{description}</p>
    </div>
  );
};

export default WorkExperienceCard;
