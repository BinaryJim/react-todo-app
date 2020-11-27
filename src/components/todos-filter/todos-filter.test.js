import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoAppStore } from "../../store/todo-app-store";
import { TodosFilter } from "./todos-filter";

const actions = {
  setTasksFilter: jest.fn(),
};

const MockProvider = ({ children, filter = "ALL", actions }) => {
  return (
    <TodoAppStore.Provider
      value={{
        state: { filter },
        actions,
      }}
    >
      {children}
    </TodoAppStore.Provider>
  );
};

describe("TodosFilter - test render", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <MockProvider actions={actions}>
        <TodosFilter />
      </MockProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("TodosFilter - with all todos filter", () => {
  beforeEach(() => {
    render(
      <MockProvider actions={actions}>
        <TodosFilter />
      </MockProvider>
    );
  });

  it("should indicate to the user that the todos are filtered by all todos", () => {
    expect(screen.getByLabelText("All todos")).toHaveClass(
      "todos-filter__action--is-active"
    );
    expect(screen.getByLabelText("Open todos")).not.toHaveClass(
      "todos-filter__action--is-active"
    );
    expect(screen.getByLabelText("Done todos")).not.toHaveClass(
      "todos-filter__action--is-active"
    );
  });

  it("should not respond to user clicks on the all todos filter button", () => {
    userEvent.click(screen.getByLabelText("All todos"));
    expect(actions.setTasksFilter).not.toHaveBeenCalled();
  });

  it("should respond to user clicks on the open todos filter button", () => {
    userEvent.click(screen.getByLabelText("Open todos"));
    expect(actions.setTasksFilter).toHaveBeenCalledTimes(1);
  });

  it("should respond to user clicks on the done todos filter button", () => {
    userEvent.click(screen.getByLabelText("Done todos"));
    expect(actions.setTasksFilter).toHaveBeenCalledTimes(1);
  });
});

describe("TodosFilter - with open todos filter", () => {
  beforeEach(() => {
    render(
      <MockProvider filter="OPEN" actions={actions}>
        <TodosFilter />
      </MockProvider>
    );
  });

  it("should indicate to the user that the todos are filtered by open todos", () => {
    expect(screen.getByLabelText("Open todos")).toHaveClass(
      "todos-filter__action--is-active"
    );
    expect(screen.getByLabelText("All todos")).not.toHaveClass(
      "todos-filter__action--is-active"
    );
    expect(screen.getByLabelText("Done todos")).not.toHaveClass(
      "todos-filter__action--is-active"
    );
  });

  it("should not respond to user clicks on the open todos filter button", () => {
    userEvent.click(screen.getByLabelText("Open todos"));
    expect(actions.setTasksFilter).not.toHaveBeenCalled();
  });

  it("should respond to user clicks on the all todos filter button", () => {
    userEvent.click(screen.getByLabelText("All todos"));
    expect(actions.setTasksFilter).toHaveBeenCalledTimes(1);
  });

  it("should respond to user clicks on the done todos filter button", () => {
    userEvent.click(screen.getByLabelText("Done todos"));
    expect(actions.setTasksFilter).toHaveBeenCalledTimes(1);
  });
});

describe("TodosFilter - with done todos filter", () => {
  beforeEach(() => {
    render(
      <MockProvider filter="DONE" actions={actions}>
        <TodosFilter />
      </MockProvider>
    );
  });

  it("should indicate to the user that the todos are filtered by done todos", () => {
    expect(screen.getByLabelText("Done todos")).toHaveClass(
      "todos-filter__action--is-active"
    );
    expect(screen.getByLabelText("All todos")).not.toHaveClass(
      "todos-filter__action--is-active"
    );
    expect(screen.getByLabelText("Open todos")).not.toHaveClass(
      "todos-filter__action--is-active"
    );
  });

  it("should not respond to user clicks on the done todos filter button", () => {
    userEvent.click(screen.getByLabelText("Done todos"));
    expect(actions.setTasksFilter).not.toHaveBeenCalled();
  });

  it("should respond to user clicks on the all todos filter button", () => {
    userEvent.click(screen.getByLabelText("All todos"));
    expect(actions.setTasksFilter).toHaveBeenCalledTimes(1);
  });

  it("should respond to user clicks on the open todos filter button", () => {
    userEvent.click(screen.getByLabelText("Open todos"));
    expect(actions.setTasksFilter).toHaveBeenCalledTimes(1);
  });
});
