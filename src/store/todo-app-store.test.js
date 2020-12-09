it.todo("Write intigration test for store");
/*
import { tasksReducer } from "./todo-app-store";

const getInitialState = () => {
  return {
    filter: "ALL",
    todos: [
      {
        id: 1,
        description: "Default todo 1",
        pinned: false,
        done: true,
      },
      {
        id: 2,
        description: "Default todo 2",
        pinned: true,
        done: false,
      },
      {
        id: 3,
        description: "Default todo 3",
        pinned: false,
        done: false,
      },
    ],
  };
};

describe("tasksReducer", () => {
  describe("adding a todo", () => {
    let initialState = getInitialState();
    let state;

    beforeAll(() => {
      state = tasksReducer(initialState, {
        type: "ADD_TODO",
        description: "Test todo",
      });
    });

    it("should append a new todo to the todo array", () => {
      expect(state.todos).toHaveLength(4);
    });

    it("should not mutate the original state", () => {
      expect(initialState).toEqual(getInitialState());
    });

    it("should add the description of todo", () => {
      expect(state.todos[3].description).toBe("Test todo");
    });

    it("should set the todo pinned status to false", () => {
      expect(state.todos[3].pinned).toBe(false);
    });

    it("should set the todo done status to false", () => {
      expect(state.todos[3].done).toBe(false);
    });

    it("should assign a id value to the todo", () => {
      expect(typeof state.todos[3].id).toBe("string");
    });
  });

  describe("setting todo filter", () => {
    let initialState = getInitialState();
    let state;

    beforeAll(() => {
      state = tasksReducer(initialState, {
        type: "SET_TASKS_FILTER",
        filter: "OPEN",
      });
    });

    it("should change the value of the state filter equal to the passed value", () => {
      expect(state.filter).toBe("OPEN");
    });

    it("should not mutate the original state", () => {
      expect(initialState).toEqual(getInitialState());
    });
  });

  describe("toggling todo status", () => {
    let initialState = getInitialState();
    let state;

    beforeAll(() => {
      state = tasksReducer(initialState, {
        type: "TOGGLE_TASK_STATUS",
        id: 3,
      });
    });

    it("should toggle the todo status value of the todo equal to the provided ID", () => {
      expect(state.todos[2].done).toBe(true);
    });

    it("should not mutate the original state", () => {
      expect(initialState).toEqual(getInitialState());
    });
  });

  describe("toggling todo pin", () => {
    let initialState = getInitialState();
    let state;

    beforeAll(() => {
      state = tasksReducer(initialState, {
        type: "TOGGLE_TASK_PIN",
        id: 1,
      });
    });

    it("should toggle the todo pinned value of the todo equal to the provided ID", () => {
      expect(state.todos[0].pinned).toBe(true);
    });

    it("should not mutate the original state", () => {
      expect(initialState).toEqual(getInitialState());
    });
  });

  describe("removing a todo", () => {
    let initialState = getInitialState();
    let state;

    beforeAll(() => {
      state = tasksReducer(initialState, {
        type: "REMOVE_TODO",
        id: 2,
      });
    });

    it("should remove the todo equal to the value of the provided todo ID", () => {
      expect(state.todos).toHaveLength(2);
      expect(state.todos[0].description).not.toBe("Default todo 2");
      expect(state.todos[1].description).not.toBe("Default todo 2");
    });

    it("should not mutate the original state", () => {
      expect(initialState).toEqual(getInitialState());
    });
  });

  describe("passing an invalid action", () => {
    it("should throw an error", () => {
      let initialState = getInitialState();
      expect(() => {
        tasksReducer(initialState, {
          type: "INVALID_ACTION",
        });
      }).toThrowError(/^Unhandled action type: INVALID_ACTION$/);
    });
  });
});
*/
