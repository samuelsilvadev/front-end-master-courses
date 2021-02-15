import React, { useState } from "react";

/**
 * Creates a generic Dropdown component.
 *
 * @param {Object} options
 * @param {string} options.label
 * @param {string} options.initialState
 * @param {Array} options.options
 *
 * @returns {[string, Node, function]}
 */
const useDropdown = ({ label, initialState, options = [] } = {}) => {
  const [state, setState] = useState(initialState);

  const normalizedLabel = label.replace(/\s/, "").toLowerCase();
  const id = `use-dropdown-${normalizedLabel}`;

  const handleSetState = (event) => {
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
