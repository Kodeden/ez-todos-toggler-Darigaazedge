import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import App from "./App";

it("renders the number of completed todos (0 at initial load) in the heading", async () => {
  render(<App />);

  // Wait for the todos to load
  await screen.findAllByTestId("todos");

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Todos completed: 0 / 200");
});

it("renders the number of completed todos (1 after one todo is checked) in the heading", async () => {
  const user = userEvent.setup();
  render(<App />);

  const todo = await screen.findAllByTestId("todos");

  const todoItem = todo[0];
  const checkbox = within(todoItem).getByTestId("checkboxButton");
  user.click(checkbox);

  await waitFor(() => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Todos completed: 1 / 200"
    );
  });

  // Hint: use userEvent.click() to check a todo
  // Hint: use screen.getByRole("heading") to get the heading
  // Hint: use expect().toHaveTextContent() to check the heading text
});
