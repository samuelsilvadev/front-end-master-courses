import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

import useDropdown from "hooks/use-dropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds] = useState([]);

  const [, AnimalDropdown] = useDropdown({
    label: "Animal",
    options: ANIMALS,
    initialState: "",
  });

  const [, BreedDropdown] = useDropdown({
    label: "Breed",
    options: breeds,
    initialState: "",
  });

  const handleSetLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="search-params">
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
