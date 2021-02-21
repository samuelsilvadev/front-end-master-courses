import React, { useState, useEffect } from "react";
import petAPI, { ANIMALS } from "@frontendmasters/pet";

import PetResults from "components/pet-results";

import useDropdown from "hooks/use-dropdown";
import { useTheme } from "hooks/theme";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [hasApiError, setApiError] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [theme, setTheme] = useTheme();

  const [animal, AnimalDropdown] = useDropdown({
    label: "Animal",
    options: ANIMALS,
    initialState: "dog",
  });

  const [breed, BreedDropdown, setBreed] = useDropdown({
    label: "Breed",
    options: breeds,
    initialState: "",
  });

  const [buttonTheme, ButtonThemeDropDown] = useDropdown({
    label: "Theme",
    options: ["red", "green", "peru", "hotpink", "darkblue"],
    initialState: theme.buttonColor,
  });

  useEffect(() => {
    setTheme({ buttonColor: buttonTheme });
  }, [buttonTheme, setTheme]);

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

  useEffect(() => {
    if (breeds.length > 0 && !breed) {
      setBreed(breeds[0]);
    }
  }, [breeds, breed, setBreed]);

  const getAnimals = async () => {
    const { animals } = await petAPI.animals({
      location,
      breed,
      type: animal,
    });

    setAnimals(animals ?? []);
  };

  const handleSetLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleAnimalSearchSubmit = (event) => {
    event.preventDefault();

    getAnimals();
  };

  return (
    <div className="search-params">
      {hasApiError && <p role="alert">Something went wront, try again!</p>}
      <form onSubmit={handleAnimalSearchSubmit}>
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
        <ButtonThemeDropDown />
        <button style={{ backgroundColor: theme.buttonColor }}>Submit</button>
      </form>
      <PetResults pets={animals} />
    </div>
  );
};

export default SearchParams;
