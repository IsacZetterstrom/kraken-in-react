import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("choose a food category", () => {
  render(<App />);

  const select = screen.getByTestId("food-categorys");

  fireEvent.change(select, { target: { value: "bbqs" } });

  const foodContainer = screen.getByTestId("foods-container");

  expect(foodContainer).toBeDefined();
});

test("ordered food", () => {
  render(<App />);
  const select = screen.getByTestId("food-categorys");

  fireEvent.change(select, { target: { value: "bbqs" } });

  fireEvent.click(screen.getAllByTestId("order-btn")[0]);

  const noteBtn = screen.getByTestId("note-btn");

  fireEvent.click(noteBtn);

  const articleContainer = screen.getByTestId("food-article");

  expect(articleContainer).toBeDefined();
});
