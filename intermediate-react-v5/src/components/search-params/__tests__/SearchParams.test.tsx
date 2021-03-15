import React from "react";
import { screen, render } from "@testing-library/react";

import SearchParams from "../SearchParams";

describe("<SearchParams>", () => {
  it("should render correctly", () => {
    render(<SearchParams />);

    expect(screen.getByLabelText("Location")).toBeVisible();
    expect(screen.getByLabelText("Animal")).toBeVisible();
    expect(screen.getByLabelText("Breed")).toBeVisible();
    expect(screen.getByLabelText("Theme")).toBeVisible();
  });

  it("should set value for animal", () => {
    render(<SearchParams />);

    const animalDropdown = screen.getByLabelText("Animal");

    expect(animalDropdown).toHaveValue("dog");
  });
});
