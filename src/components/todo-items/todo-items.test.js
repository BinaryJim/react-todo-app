import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoAppStoreContext } from "../../store/todo-app-store";
import { TodoItems } from "./todo-items";

const state = {
  filter: "ALL",
  todos: [
    {
      id: 1,
      description: "Test todo item 1",
      pinned: false,
      done: false,
    },
    {
      id: 2,
      description: "Test todo item 2",
      pinned: true,
      done: false,
    },
    {
      id: 3,
      description: "Test todo item 3",
      pinned: false,
      done: false,
    },
    {
      id: 4,
      description: "Test todo item 4",
      pinned: false,
      done: true,
    },
    {
      id: 5,
      description: "Test todo item 5",
      pinned: true,
      done: true,
    },
  ],
};

const dispatchers = {
  toggleTaskStatus: jest.fn(),
  toggleTaskPin: jest.fn(),
  removeTodo: jest.fn(),
};

const MockProvider = ({ children, state, dispatchers }) => {
  return (
    <TodoAppStoreContext.Provider
      value={{
        state,
        dispatchers,
      }}
    >
      {children}
    </TodoAppStoreContext.Provider>
  );
};

describe("TodoItems - test render", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <MockProvider state={state} dispatchers={dispatchers}>
        <TodoItems />
      </MockProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("TodoItems - filtered by all todos", () => {
  beforeEach(() => {
    render(
      <MockProvider state={state} dispatchers={dispatchers}>
        <TodoItems />
      </MockProvider>
    );
  });

  it("Should display all todo items", () => {
    expect(screen.getAllByLabelText("Todo description")).toHaveLength(5);
  });

  it("should display pinned todo items at the top of the list of todos", () => {
    expect(screen.getAllByLabelText("Todo description")[0]).toHaveTextContent(
      /^Test todo item 2$/
    );
  });
});

describe("TodoItems - filtered by open todos", () => {
  beforeEach(() => {
    render(
      <MockProvider
        state={{ ...state, filter: "OPEN" }}
        dispatchers={dispatchers}
      >
        <TodoItems />
      </MockProvider>
    );
  });

  it("Should display only open todo items", () => {
    const todos = screen.getAllByLabelText("Todo description");
    expect(todos).toHaveLength(3);
    expect(todos[0]).toHaveTextContent(/^Test todo item 2$/);
    expect(todos[1]).toHaveTextContent(/^Test todo item 1$/);
    expect(todos[2]).toHaveTextContent(/^Test todo item 3$/);
  });

  it("should display pinned todo items at the top of the list of todos", () => {
    expect(screen.getAllByLabelText("Todo description")[0]).toHaveTextContent(
      /^Test todo item 2$/
    );
  });
});

describe("TodoItems - filtered by done todos", () => {
  beforeEach(() => {
    render(
      <MockProvider
        state={{ ...state, filter: "DONE" }}
        dispatchers={dispatchers}
      >
        <TodoItems />
      </MockProvider>
    );
  });

  it("Should display only done todo items", () => {
    const todos = screen.getAllByLabelText("Todo description");
    expect(todos).toHaveLength(2);
    expect(todos[0]).toHaveTextContent(/^Test todo item 4$/);
    expect(todos[1]).toHaveTextContent(/^Test todo item 5$/);
  });

  it("should should not display pinned todo items at the top of the list of todos", () => {
    expect(screen.getAllByLabelText("Todo description")[0]).toHaveTextContent(
      /^Test todo item 4$/
    );
  });
});

describe("TodoItems - with no todos", () => {
  beforeEach(() => {
    render(
      <MockProvider state={{ ...state, todos: [] }} dispatchers={dispatchers}>
        <TodoItems />
      </MockProvider>
    );
  });

  it("Should not display any todo items", () => {
    expect(screen.queryAllByLabelText("Todo description")).toHaveLength(0);
  });

  it("should display feedback to the user that there are no todos", () => {
    expect(screen.getByLabelText("No todos message")).toHaveTextContent(
      /^You have no todos$/
    );
  });
});

describe("TodoItems - User dispatchers", () => {
  beforeEach(() => {
    render(
      <MockProvider state={state} dispatchers={dispatchers}>
        <TodoItems />
      </MockProvider>
    );
  });

  it("should allow a user to toggle the status of a specific todo item", () => {
    userEvent.click(screen.getAllByLabelText("Todo status")[0]);
    expect(dispatchers.toggleTaskStatus).toHaveBeenCalledWith(2);
  });

  it("should allow a user to toggle the status of a specific todo pin", () => {
    userEvent.click(screen.getAllByLabelText("Pinned status")[0]);
    expect(dispatchers.toggleTaskPin).toHaveBeenCalledWith(2);
  });

  it("should allow a user to delete a specific todo", () => {
    userEvent.click(screen.getAllByLabelText("Remove todo")[0]);
    expect(dispatchers.removeTodo).toHaveBeenCalledWith(2);
  });
});

describe("TodoItems - with custom class names", () => {
  it("should pass the provided class names to the component root element", () => {
    render(
      <MockProvider state={state} dispatchers={dispatchers}>
        <TodoItems testId="todo-items-component" classes="test-class" />
      </MockProvider>
    );
    expect(screen.getByTestId("todo-items-component")).toHaveClass(
      "test-class"
    );
  });
});
