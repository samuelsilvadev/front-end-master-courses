import React from "react";

import type { Animal } from "@frontendmasters/pet";

import Pet from "components/pet";

type Props = {
  pets: Animal[];
};

const PetResults = ({ pets = [] }: Props): JSX.Element => {
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

export default PetResults;
