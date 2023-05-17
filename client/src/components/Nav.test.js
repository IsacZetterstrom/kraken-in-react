import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("choose a food category", () => {
  render(<App />);

  const select = screen.getByTestId("food-categorys");

  fireEvent.change(select, { target: { value: "bbqs" } });

  const foodContainer = screen.getByTestId("foods-container");

  expect(foodContainer).toBeDefined();
});
