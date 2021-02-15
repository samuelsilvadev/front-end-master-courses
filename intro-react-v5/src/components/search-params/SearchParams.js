import React, { useState, useEffect } from "react";
import petAPI, { ANIMALS } from "@frontendmasters/pet";

import useDropdown from "hooks/use-dropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [hasApiError, setApiError] = useState(false);

  const [animal, AnimalDropdown] = useDropdown({
    label: "Animal",
    options: ANIMALS,
    initialState: "dog",
  });

  const [, BreedDropdown, setBreed] = useDropdown({
    label: "Breed",
    options: breeds,
    initialState: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { breeds } = await petAPI.breeds(animal);
        if (breeds) {
          const breedsNames = breeds.map(({ name }) => name);

          setBreeds(breedsNames);
        }
      } catch {
        setApiError(true);
      }
    })();

    return () => {
      setBreeds([]);
      setBreed("");
      setApiError(false);
    };
  }, [animal, setBreed]);

  const handleSetLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="search-params">
      {hasApiError && <p role="alert">Something went wront, try again!</p>}
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleSetLocation}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
