import PropTypes, { InferProps } from "prop-types";
import { FunctionComponent } from "react";

const mainSectionPropTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

type MainSectionProps = PropTypes.InferProps<typeof mainSectionPropTypes>;

const MainSection: FunctionComponent<MainSectionProps> = (mainSectionProps) => {
  const { children } = mainSectionProps;
  return (
    <main className="max-w-3xl w-full mx-auto py-8 bg-opacity-60 flex-col">
      {children}
    </main>
  );
};

MainSection.propTypes = mainSectionPropTypes;

export default MainSection;
