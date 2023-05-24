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

test("remove food", () => {
  render(<App />);
  const select = screen.getByTestId("food-categorys");

  fireEvent.change(select, { target: { value: "bbqs" } });

  fireEvent.click(screen.getAllByTestId("order-btn")[0]);

  const noteBtn = screen.getByTestId("note-btn");

  fireEvent.click(noteBtn);

  const articleContainer = screen.queryByText("food-article");

  fireEvent.click(screen.getAllByTestId("remove-food")[0]);

  expect(articleContainer).toBeNull();
});

test("Not logged in", () => {
  render(<App />);
  const noteBtn = screen.getByTestId("note-btn");

  fireEvent.click(noteBtn);

  const creditBtn = screen.queryByText("add-credit");

  expect(creditBtn).toBeNull();
});

test("Logged in", () => {
  render(<App />);
  //tryck på logga in knappen i navbar
  //skriv in värdet "Isac" som username och "password" för password
  //tryck på logga in knappen

  const noteBtn = screen.getByTestId("note-btn");

  fireEvent.click(noteBtn);

  const creditBtn = screen.queryByText("add-credit");

  expect(creditBtn).toBeVisible();
});
