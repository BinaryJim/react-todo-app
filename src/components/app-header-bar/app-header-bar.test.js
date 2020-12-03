import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoAppStore } from "../../store/todo-app-store";
import { AppHeaderBar } from "./app-header-bar";

const actions = {
  setTasksFilter: jest.fn(),
};

const MockProvider = ({ children, todoItems, filter, actions }) => {
  return (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: todoItems,
          filter,
        },
        actions,
      }}
    >
      {children}
    </TodoAppStore.Provider>
  );
};

describe("AppHeaderBar - test render", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <MockProvider todoItems={[]} filter="ALL" actions={actions}>
        <AppHeaderBar />
      </MockProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("AppHeaderBar - display of todo count", () => {
  it("should dispay the todo count equal to only the value of open todos", () => {
    render(
      <MockProvider
        todoItems={[
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
        ]}
        filter="ALL"
        actions={actions}
      >
        <AppHeaderBar />
      </MockProvider>
    );

    expect(screen.getByLabelText("Active todo count")).toHaveTextContent(/^3$/);
  });
});

describe("AppHeaderBar - truncation of todo count", () => {
  describe("with todos less than the maximum defined threshold", () => {
    beforeEach(() => {
      render(
        <MockProvider
          todoItems={[...Array(99).keys()]}
          filter="ALL"
          actions={actions}
        >
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
        <MockProvider
          todoItems={[...Array(100).keys()]}
          filter="ALL"
          actions={actions}
        >
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
        <MockProvider
          todoItems={[...Array(101).keys()]}
          filter="ALL"
          actions={actions}
        >
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
});

describe("AppHeaderBar - with custom class names", () => {
  it("Should pass the provided class names to the component root element", () => {
    render(
      <MockProvider todoItems={[]} filter="ALL" actions={actions}>
        <AppHeaderBar classes="test-class" testId="app-header-bar-component" />
      </MockProvider>
    );
    expect(screen.getByTestId("app-header-bar-component")).toHaveClass(
      "test-class"
    );
  });
});

describe("AppHeaderBar - todos filter", () => {
  describe("with filter set to all todos", () => {
    beforeEach(() => {
      render(
        <MockProvider todoItems={[]} filter="ALL" actions={actions}>
          <AppHeaderBar />
        </MockProvider>
      );
    });

    it("should indicate to the user that the todos are filtered by all todos", () => {
      expect(screen.getByLabelText("All todos")).toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
      expect(screen.getByLabelText("Open todos")).not.toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
      expect(screen.getByLabelText("Done todos")).not.toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
    });

    it("should not respond to user clicks on the all todos filter button", () => {
      userEvent.click(screen.getByLabelText("All todos"));
      expect(actions.setTasksFilter).not.toHaveBeenCalled();
    });

    it("should respond to user clicks on the open todos filter button", () => {
      userEvent.click(screen.getByLabelText("Open todos"));
      expect(actions.setTasksFilter).toHaveBeenCalledWith("OPEN");
    });

    it("should respond to user clicks on the done todos filter button", () => {
      userEvent.click(screen.getByLabelText("Done todos"));
      expect(actions.setTasksFilter).toHaveBeenCalledWith("DONE");
    });
  });

  describe("with filter set to open todos", () => {
    beforeEach(() => {
      render(
        <MockProvider todoItems={[]} filter="OPEN" actions={actions}>
          <AppHeaderBar />
        </MockProvider>
      );
    });

    it("should indicate to the user that the todos are filtered by all todos", () => {
      expect(screen.getByLabelText("Open todos")).toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
      expect(screen.getByLabelText("All todos")).not.toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
      expect(screen.getByLabelText("Done todos")).not.toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
    });

    it("should not respond to user clicks on the open todos filter button", () => {
      userEvent.click(screen.getByLabelText("Open todos"));
      expect(actions.setTasksFilter).not.toHaveBeenCalled();
    });

    it("should respond to user clicks on the all todos filter button", () => {
      userEvent.click(screen.getByLabelText("All todos"));
      expect(actions.setTasksFilter).toHaveBeenCalledWith("ALL");
    });

    it("should respond to user clicks on the done todos filter button", () => {
      userEvent.click(screen.getByLabelText("Done todos"));
      expect(actions.setTasksFilter).toHaveBeenCalledWith("DONE");
    });
  });

  describe("with filter set to done todos", () => {
    beforeEach(() => {
      render(
        <MockProvider todoItems={[]} filter="DONE" actions={actions}>
          <AppHeaderBar />
        </MockProvider>
      );
    });

    it("should indicate to the user that the todos are filtered by done todos", () => {
      expect(screen.getByLabelText("Done todos")).toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
      expect(screen.getByLabelText("All todos")).not.toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
      expect(screen.getByLabelText("Open todos")).not.toHaveClass(
        "app-header-bar__content__todo-filters__action--is-active"
      );
    });

    it("should not respond to user clicks on the done todos filter button", () => {
      userEvent.click(screen.getByLabelText("Done todos"));
      expect(actions.setTasksFilter).not.toHaveBeenCalled();
    });

    it("should respond to user clicks on the all todos filter button", () => {
      userEvent.click(screen.getByLabelText("All todos"));
      expect(actions.setTasksFilter).toHaveBeenCalledWith("ALL");
    });

    it("should respond to user clicks on the open todos filter button", () => {
      userEvent.click(screen.getByLabelText("Open todos"));
      expect(actions.setTasksFilter).toHaveBeenCalledWith("OPEN");
    });
  });
});
