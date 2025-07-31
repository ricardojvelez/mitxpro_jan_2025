import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders the component", () => {
    render(<Counter />);

    const title = screen.getByText("App Counter");
    const countParagraph = screen.getByText("Count: 0");
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    expect(title).toBeInTheDocument();
    expect(countParagraph).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    //Another way to test
    //expect(screen.getByText("App Counterrr")).toBeInTheDocument();
  });

  it("renders the component with snapshot", () => {
    const { container } = render(<Counter />);

    expect(container).toMatchSnapshot();
  });

  describe("when user clicks Increment", () => {
    it("should render the count with an incremented value", () => {
      render(<Counter />);

      const incrementButton = screen.getByRole("button", { name: "Increment" });
      userEvent.click(incrementButton);

      expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });
  });

  describe("when user clicks Decrement", () => {
    it("should render the count with a decremented value", () => {
      render(<Counter />);

      //Not so optimal way to find because it's not verifying the role!!! Should use getByRole ;)
      const decrementButton = screen.getByText("Decrement"); 
      userEvent.click(decrementButton);

      expect(screen.getByText("Count: -1")).toBeInTheDocument();
    });
  });
});

