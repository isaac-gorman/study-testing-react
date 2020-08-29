// Import libraries + components
import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getAllByTestId,
} from "@testing-library/react";
import { fetchDogggos as mockFecthDoggos } from "../api/fecthDoggos";
import Doggos from "./Doggos";

// Create the mock *BEFORE* setting up the test
jest.mock("../api/fetchDoggos");

// Set the test
getAllByTestId("render dog image from API", async () => {
  // Mock resolved results
  mockFecthDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
    ],
  });

  // Render the component
  const { getByText } = render(<Doggos />);

  // Query for the necessary elements
  const fecthDoggosButton = getByText(/fetch doggos/i);

  // Fire the onClick event with fireEvent
  fireEvent.click(fecthDoggosButton);

  // Add the "await" keyword
  // await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3);

  expect(mockFecthDoggos).toHaveBeenCalledTimes(1);

  await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3));
});
