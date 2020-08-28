// Overarching Testing Steps
// Part 1) Create test, and pull in the relavent matchers from the react testing library
// Part 2) Update the prop by passing a user input. Do this by utalizing the rerender function

import React from "react";
import { render } from "@testing-library/react";
import DoggoImages from "./DoggoImages";

test("renders dog images from API", () => {
  // Part 1.a) Render the component with an empty array
  const { getAllByTestId, rerender } = render(<Doggos images={[]} />);

  // Part 1.b) Assert that their are no Dog images being rendered yet
  expect(getAllByTestId(/doggo images/i)).toHaveLength(0);

  // Part 2.a) Rerender the component with dummy data passed in as the new props
  rerender(<DoggoImages images={doggoUrls} />);

  // Part 2.b) Assert that we now have dog images rendering!
  expect(getAllByTestId(/doggo images/i)).toHaveLength(3);
});
