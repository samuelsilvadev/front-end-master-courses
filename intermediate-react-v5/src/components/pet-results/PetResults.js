import React from "react";
import PropTypes from "prop-types";

import Pet from "components/pet";

const PetResults = ({ pets = [] }) => {
  return (
    <ul className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(({ id, name, type, breeds, photos, contact }) => (
          <Pet
            key={id}
            id={id}
            type={type}
            name={name}
            breed={breeds?.primary}
            medias={photos}
            location={`${contact.address.city}, ${contact.address.state}`}
          />
        ))
      )}
    </ul>
  );
};

PetResults.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      animal: PropTypes.string,
      breeds: PropTypes.shape({
        primary: PropTypes.string,
      }),
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          small: PropTypes.string,
          medium: PropTypes.string,
          large: PropTypes.string,
          full: PropTypes.string,
        })
      ),
      contact: PropTypes.shape({
        address: PropTypes.shape({
          city: PropTypes.string,
          state: PropTypes.string,
        }),
      }),
    })
  ),
};

export default PetResults;
