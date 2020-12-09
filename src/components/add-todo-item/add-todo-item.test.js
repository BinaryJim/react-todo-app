import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoAppStoreContext } from "../../store/todo-app-store";
import { AddTodoItem } from "./add-todo-item";

const MockProvider = ({ children, callback }) => {
  return (
    <TodoAppStoreContext.Provider
      value={{
        dispatchers: {
          addTodo: callback,
        },
      }}
    >
      {children}
    </TodoAppStoreContext.Provider>
  );
};

describe("AddTodoItem - test render", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <MockProvider callback={() => {}}>
        <AddTodoItem />
      </MockProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("AddTodoItem - default render", () => {
  const handleOnSubmitTodo = jest.fn();

  beforeEach(() => {
    render(
      <MockProvider callback={handleOnSubmitTodo}>
        <AddTodoItem />
      </MockProvider>
    );
  });

  it("should set the value of the todo input to an empty string", () => {
    expect(screen.getByLabelText("Todo Item Input")).toHaveValue("");
  });

  it("should set the add todo item button to disabled", () => {
    expect(screen.getByLabelText("Submit Todo Item")).toBeDisabled();
  });

  it("should not allow a user to submit a todo via a click of the Submit Todo Item button", () => {
    userEvent.click(screen.getByLabelText("Submit Todo Item"));
    expect(handleOnSubmitTodo).not.toHaveBeenCalled();
  });

  it("should not allow a user to submit a todo by press of the enter key, when focus is on the todo input", () => {
    userEvent.type(screen.getByLabelText("Todo Item Input"), "{enter}");
    expect(handleOnSubmitTodo).not.toHaveBeenCalled();
  });
});

describe("AddTodoItem - submitting a todo", () => {
  describe("with a valid string", () => {
    const handleOnSubmitTodo = jest.fn();

    beforeEach(() => {
      render(
        <MockProvider callback={handleOnSubmitTodo}>
          <AddTodoItem />
        </MockProvider>
      );
      userEvent.type(
        screen.getByLabelText("Todo Item Input"),
        "Test todo item"
      );
    });

    it("should set the value of the todo input equal to the input passed by a user", () => {
      expect(screen.getByLabelText("Todo Item Input")).toHaveValue(
        "Test todo item"
      );
    });

    it("should not set the add todo item button to disabled", () => {
      expect(screen.getByLabelText("Submit Todo Item")).not.toBeDisabled();
    });

    it("should allow a user to submit the todo on press of the enter key, when focus is on the todo item input", () => {
      userEvent.type(screen.getByLabelText("Todo Item Input"), "{enter}");
      expect(handleOnSubmitTodo).toHaveBeenCalledWith("Test todo item");
    });

    it("should allow a user to submit a todo via a click of the Submit Todo Item button", () => {
      userEvent.click(screen.getByLabelText("Submit Todo Item"));
      expect(handleOnSubmitTodo).toHaveBeenCalledWith("Test todo item");
    });

    it("should set the value of the todo input to an empty string on submission of a todo via the Submit Todo item button", () => {
      userEvent.click(screen.getByLabelText("Submit Todo Item"));
      expect(screen.getByLabelText("Todo Item Input")).toHaveValue("");
    });

    it("should set the value of the todo input to an empty string on submission of a todo via press of the enter key, when focus is on the todo item input", () => {
      userEvent.type(screen.getByLabelText("Todo Item Input"), "{enter}");
      expect(screen.getByLabelText("Todo Item Input")).toHaveValue("");
    });
  });

  describe("with empty string", () => {
    const handleOnSubmitTodo = jest.fn();

    beforeEach(() => {
      render(
        <MockProvider callback={handleOnSubmitTodo}>
          <AddTodoItem />
        </MockProvider>
      );
      userEvent.type(screen.getByLabelText("Todo Item Input"), "");
    });

    it("should set the value of the todo input to an empty string", () => {
      expect(screen.getByLabelText("Todo Item Input")).toHaveValue("");
    });

    it("should set the Submit Todo Item button to disabled", () => {
      expect(screen.getByLabelText("Submit Todo Item")).toBeDisabled();
    });

    it("should not allow a user to submit a todo via a click of the Submit Todo Item button", () => {
      userEvent.click(screen.getByLabelText("Submit Todo Item"));
      expect(handleOnSubmitTodo).not.toHaveBeenCalled();
    });

    it("should not allow a user to submit a todo by press of the enter key, when focus is on the todo input", () => {
      userEvent.type(screen.getByLabelText("Todo Item Input"), "{enter}");
      expect(handleOnSubmitTodo).not.toHaveBeenCalled();
    });
  });

  describe("with string of spaces", () => {
    const handleOnSubmitTodo = jest.fn();

    beforeEach(() => {
      render(
        <MockProvider callback={handleOnSubmitTodo}>
          <AddTodoItem />
        </MockProvider>
      );
      userEvent.type(screen.getByLabelText("Todo Item Input"), "     ");
    });

    it("should set the value of the todo input to an empty string", () => {
      expect(screen.getByLabelText("Todo Item Input")).toHaveValue("");
    });

    it("should set the Submit Todo Item button to disabled", () => {
      expect(screen.getByLabelText("Submit Todo Item")).toBeDisabled();
    });

    it("should not allow a user to submit a todo via a click of the Submit Todo Item button", () => {
      userEvent.click(screen.getByLabelText("Submit Todo Item"));
      expect(handleOnSubmitTodo).not.toHaveBeenCalled();
    });

    it("should not allow a user to submit a todo by press of the enter key, when focus is on the todo input", () => {
      userEvent.type(screen.getByLabelText("Todo Item Input"), "{enter}");
      expect(handleOnSubmitTodo).not.toHaveBeenCalled();
    });
  });
});

describe("AddTodoItem - with custom class names", () => {
  it("Should pass the provided class names to the component root element", () => {
    render(
      <MockProvider callback={() => {}}>
        <AddTodoItem classes="test-class" testId="add-todo-item-component" />
      </MockProvider>
    );
    expect(screen.getByTestId("add-todo-item-component")).toHaveClass(
      "test-class"
    );
  });
});
