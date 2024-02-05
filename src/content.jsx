import PropTypes from "prop-types";

export const Content = ({
  section1,
  exercises1,
  section2,
  exercises2,
  section3,
  exercises3,
}) => {
  return (
    <div>
      <p>
        {section1}
        {exercises1}
      </p>
      <p>
        {section2}
        {exercises2}
      </p>
      <p>
        {section3}
        {exercises3}
      </p>
    </div>
  );
};

Content.propTypes = {
  section1: PropTypes.string.isRequired,
  exercises1: PropTypes.number.isRequired,
  section2: PropTypes.string.isRequired,
  exercises2: PropTypes.number.isRequired,
  section3: PropTypes.string.isRequired,
  exercises3: PropTypes.number.isRequired,
};
