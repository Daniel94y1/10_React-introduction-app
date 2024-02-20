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
