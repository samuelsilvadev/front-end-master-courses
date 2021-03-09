import React, { Dispatch, FunctionComponent, useState } from "react";

type Options = {
  label: string;
  initialState: string;
  options: string[];
};

type UseDropDownReturn = [string, FunctionComponent, Dispatch<string>];

/**
 * Creates a generic Dropdown component.
 */
const useDropdown = ({
  label,
  initialState,
  options = [],
}: Options): UseDropDownReturn => {
  const [state, setState] = useState(initialState);

  const normalizedLabel = label.replace(/\s/, "").toLowerCase();
  const id = `use-dropdown-${normalizedLabel}`;

  const handleSetState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };

  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={handleSetState}
        onBlur={handleSetState}
        disabled={options.length === 0}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown, setState];
};

export default useDropdown;
