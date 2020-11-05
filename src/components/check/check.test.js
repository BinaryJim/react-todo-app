import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Check } from "./check";

describe("Check - default state", () => {
  const handleOnChange = jest.fn();

  beforeEach(() => {
    render(<Check label="checkbox" onChange={handleOnChange} />);
  });

  it("Should be set to unchecked", () => {
    expect(screen.getByLabelText("checkbox")).not.toBeChecked();
  });

  it("Should not be set to disabled", () => {
    expect(screen.getByLabelText("checkbox")).not.toBeDisabled();
  });

  it("Should react to a user click", () => {
    userEvent.click(screen.getByLabelText("checkbox"));
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});

describe("Check - checked state", () => {
  const handleOnChange = jest.fn();

  beforeEach(() => {
    render(
      <Check
        label="checkbox"
        onChange={handleOnChange}
        checked={true}
        disabled={false}
      />
    );
  });

  it("Should be set to checked", () => {
    expect(screen.getByLabelText("checkbox")).toBeChecked();
  });
});

describe("Check - unchecked state", () => {
  const handleOnChange = jest.fn();

  beforeEach(() => {
    render(
      <Check
        label="checkbox"
        onChange={handleOnChange}
        checked={false}
        disabled={false}
      />
    );
  });

  it("Should not be set to checked", () => {
    expect(screen.getByLabelText("checkbox")).not.toBeChecked();
  });
});

describe("Check - disabled state", () => {
  const handleOnChange = jest.fn();

  beforeEach(() => {
    render(
      <Check label="checkbox" onChange={handleOnChange} disabled={true} />
    );
  });

  it("Should not react to a user click", () => {
    userEvent.click(screen.getByLabelText("checkbox"));
    expect(handleOnChange).not.toHaveBeenCalled();
  });
});

describe("Check - with custom class names", () => {
  beforeEach(() => {
    render(
      <Check
        classes="test-class"
        label="checkbox"
        onChange={() => {}}
        testId="check-label"
      />
    );
  });

  it("Should pass the provided class names to the root label element", () => {
    expect(screen.getByTestId("check-label")).toHaveClass("test-class");
  });
});
