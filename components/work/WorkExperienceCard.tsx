import PropTypes from "prop-types";
import { FunctionComponent } from "react";

const workExperienceCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

type WorkExperienceCardProps = PropTypes.InferProps<
  typeof workExperienceCardPropTypes
>;

const WorkExperienceCard: FunctionComponent<WorkExperienceCardProps> = (
  props
) => {
  const { title, description } = props;
  return (
    <div className="pt-4">
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-200">{description}</p>
    </div>
  );
};

WorkExperienceCard.propTypes = workExperienceCardPropTypes;

export default WorkExperienceCard;
