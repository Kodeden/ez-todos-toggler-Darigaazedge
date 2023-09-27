import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import App from "./App";

it("renders the number of completed todos (90 at initial load) in the heading", async () => {
  render(<App />);

  // Wait for the todos to load
  await screen.findAllByRole("checkbox");

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("90 / 200 Completed");
});

it("renders the number of completed todos (91 after one todo is checked) in the heading", async () => {
  const user = userEvent.setup();
  render(<App />);

  const checkboxes = await screen.findAllByRole("checkbox");
  await user.click(checkboxes[0]);

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("91 / 200 Completed");
});
