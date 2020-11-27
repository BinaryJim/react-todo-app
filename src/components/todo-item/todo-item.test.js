import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "./todo-item";

describe("TodoItem - test render", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <TodoItem
        done={false}
        pinned={false}
        description="Test todo item description"
        onDoneChange={() => {}}
        onPinnedChange={() => {}}
        onRemoveTodoClick={() => {}}
        testId="Test todo item"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("TodoItem - incomplete, non pinned todo item", () => {
  const onTodoStatusChange = jest.fn();
  const onTodoPinnedStatusChange = jest.fn();
  const handleOnRemoveTodoClick = jest.fn();

  beforeEach(() => {
    render(
      <TodoItem
        done={false}
        pinned={false}
        description="Test todo item description"
        onDoneChange={onTodoStatusChange}
        onPinnedChange={onTodoPinnedStatusChange}
        onRemoveTodoClick={handleOnRemoveTodoClick}
        testId="Test todo item"
      />
    );
  });

  it("should indicate to the user that the todo item is incomplete", () => {
    expect(screen.getByLabelText("Todo status")).not.toBeChecked();
    expect(screen.getByTestId("Test todo item")).not.toHaveClass(
      "todo-item--is-done"
    );
  });

  it("should inidicate to the user that the todo item is not pinned", () => {
    expect(screen.getByLabelText("Pinned status")).not.toBeChecked();
  });

  it("should output the todo description", () => {
    expect(screen.getByLabelText("Todo description")).toHaveTextContent(
      /^Test todo item description$/
    );
  });

  it("should fire the appropriate callback function on change of the todo's status", () => {
    userEvent.click(screen.getByLabelText("Todo status"));
    expect(onTodoStatusChange).toHaveBeenCalledTimes(1);
  });

  it("should fire the appropriate callback function of change of the todo's pinned status", () => {
    userEvent.click(screen.getByLabelText("Pinned status"));
    expect(onTodoPinnedStatusChange).toHaveBeenCalledTimes(1);
  });

  it("should fire the appropriate callback function on click of the remove todo button", () => {
    userEvent.click(screen.getByLabelText("Remove todo"));
    expect(handleOnRemoveTodoClick).toHaveBeenCalledTimes(1);
  });
});

describe("TodoItem - incomplete, pinned todo item", () => {
  const onTodoStatusChange = jest.fn();
  const onTodoPinnedStatusChange = jest.fn();
  const handleOnRemoveTodoClick = jest.fn();

  beforeEach(() => {
    render(
      <TodoItem
        done={false}
        pinned={true}
        description="Test todo item description"
        onDoneChange={onTodoStatusChange}
        onPinnedChange={onTodoPinnedStatusChange}
        onRemoveTodoClick={handleOnRemoveTodoClick}
        testId="Test todo item"
      />
    );
  });

  it("should indicate to the user that the todo item is incomplete", () => {
    expect(screen.getByLabelText("Todo status")).not.toBeChecked();
    expect(screen.getByTestId("Test todo item")).not.toHaveClass(
      "todo-item--is-done"
    );
  });

  it("should inidicate to the user that the todo item is pinned", () => {
    expect(screen.getByLabelText("Pinned status")).toBeChecked();
  });

  it("should output the todo description", () => {
    expect(screen.getByLabelText("Todo description")).toHaveTextContent(
      /^Test todo item description$/
    );
  });

  it("should fire the appropriate callback function on change of the todo's status", () => {
    userEvent.click(screen.getByLabelText("Todo status"));
    expect(onTodoStatusChange).toHaveBeenCalledTimes(1);
  });

  it("should fire the appropriate callback function of change of the todo's pinned status", () => {
    userEvent.click(screen.getByLabelText("Pinned status"));
    expect(onTodoPinnedStatusChange).toHaveBeenCalledTimes(1);
  });

  it("should fire the appropriate callback function on click of the remove todo button", () => {
    userEvent.click(screen.getByLabelText("Remove todo"));
    expect(handleOnRemoveTodoClick).toHaveBeenCalledTimes(1);
  });
});

describe("TodoItem - complete todo item", () => {
  const onTodoStatusChange = jest.fn();
  const onTodoPinnedStatusChange = jest.fn();
  const handleOnRemoveTodoClick = jest.fn();

  beforeEach(() => {
    render(
      <TodoItem
        done={true}
        pinned={false}
        description="Test todo item description"
        onDoneChange={onTodoStatusChange}
        onPinnedChange={onTodoPinnedStatusChange}
        onRemoveTodoClick={handleOnRemoveTodoClick}
        testId="Test todo item"
      />
    );
  });

  it("should indicate to the user that the todo item is complete", () => {
    expect(screen.getByLabelText("Todo status")).toBeChecked();
    expect(screen.getByTestId("Test todo item")).toHaveClass(
      "todo-item--is-done"
    );
  });

  it("should not output the pinned status toggle", () => {
    expect(screen.queryByLabelText("Pinned status")).not.toBeInTheDocument();
  });

  it("should output the todo description", () => {
    expect(screen.getByLabelText("Todo description")).toHaveTextContent(
      /^Test todo item description$/
    );
  });

  it("should fire the appropriate callback function on change of the todo's status", () => {
    userEvent.click(screen.getByLabelText("Todo status"));
    expect(onTodoStatusChange).toHaveBeenCalledTimes(1);
  });

  it("should fire the appropriate callback function on click of the remove todo button", () => {
    userEvent.click(screen.getByLabelText("Remove todo"));
    expect(handleOnRemoveTodoClick).toHaveBeenCalledTimes(1);
  });
});

describe("TodoItem - with custom class names", () => {
  it("Should pass the provided class names to the component root element", () => {
    render(
      <TodoItem
        done={false}
        pinned={false}
        description="Test todo item description"
        onDoneChange={() => {}}
        onPinnedChange={() => {}}
        onRemoveTodoClick={() => {}}
        classes="test-class"
        testId="Test todo item"
      />
    );
    expect(screen.getByTestId("Test todo item")).toHaveClass("test-class");
  });
});
