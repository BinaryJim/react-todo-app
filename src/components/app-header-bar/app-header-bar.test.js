import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoAppStateContext } from "../../store/todo-app-context";
import { AppHeaderBar } from "./app-header-bar";

const MockProvider = ({ children, todoItems }) => {
  return (
    <TodoAppStateContext.Provider
      value={{
        todos: todoItems,
      }}
    >
      {children}
    </TodoAppStateContext.Provider>
  );
};

describe("AppHeaderBar - test render", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <MockProvider todoItems={[]}>
        <AppHeaderBar />
      </MockProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("AppHeaderBar - display of todo count", () => {
  describe("with todos less than the maximum defined threshold", () => {
    beforeEach(() => {
      render(
        <MockProvider todoItems={[...Array(99).keys()]}>
          <AppHeaderBar />
        </MockProvider>
      );
    });

    it("should display the todo count equal to the total value of todos", () => {
      expect(screen.getByLabelText("Active todo count")).toHaveTextContent(
        /^99$/
      );
    });
  });

  describe("with todos equal to the maximum defined threshold", () => {
    beforeEach(() => {
      render(
        <MockProvider todoItems={[...Array(100).keys()]}>
          <AppHeaderBar />
        </MockProvider>
      );
    });

    it("should display the todo count equal to the total value of todos", () => {
      expect(screen.getByLabelText("Active todo count")).toHaveTextContent(
        /^100$/
      );
    });
  });

  describe("with todos greater than the maximum defined threshold", () => {
    beforeEach(() => {
      render(
        <MockProvider todoItems={[...Array(101).keys()]}>
          <AppHeaderBar />
        </MockProvider>
      );
    });

    it("should display the todo count equal to the maximum threshold appended with a '+'", () => {
      expect(screen.getByLabelText("Active todo count")).toHaveTextContent(
        /^100\+$/
      );
    });
  });

  describe("AppHeaderBar - with custom class names", () => {
    it("Should pass the provided class names to the component root element", () => {
      render(
        <MockProvider todoItems={[]}>
          <AppHeaderBar
            classes="test-class"
            testId="app-header-bar-component"
          />
        </MockProvider>
      );
      expect(screen.getByTestId("app-header-bar-component")).toHaveClass(
        "test-class"
      );
    });
  });
});
