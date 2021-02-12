import React from "react";
import PropTypes from "prop-types";

const Pet = ({ name, type, breed }) => {
  return (
    <section>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{breed}</h2>
    </section>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  breed: PropTypes.string,
};

export default Pet;
