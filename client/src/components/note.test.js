import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("toggle note", () => {
  render(<App />);
  const select = screen.getByTestId("note-btn");

  fireEvent.click(select);

  const noteContainer = screen.getByTestId("note-container");

  expect(noteContainer).toBeDefined();
});

test("check totalSum", () => {
  render(<App />);

  const select = screen.getByTestId("note-btn");

  fireEvent.click(select);

  const totalSum = screen.getByTestId("food-price");

  expect(totalSum).toBeDefined();
});
