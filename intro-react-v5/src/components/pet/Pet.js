import React from "react";
import PropTypes from "prop-types";

const DEFAULT_IMG_PLACEHOLDER = "http://placecorgi.com/300/300";

const Pet = ({ id, name, breed, medias, location, type }) => {
  return (
    <a href={`/details/${id}`} className="pet">
      <section>
        <picture className="image-container">
          <img src={medias?.[0]?.small ?? DEFAULT_IMG_PLACEHOLDER} alt={name} />
        </picture>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${type} - ${breed} - ${location}`}</h2>
        </div>
      </section>
    </a>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  medias: PropTypes.arrayOf(
    PropTypes.shape({
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
      full: PropTypes.string,
    })
  ),
};

export default Pet;
