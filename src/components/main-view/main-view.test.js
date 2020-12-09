import React from "react";
import { render } from "@testing-library/react";
import { MainView } from "./main-view";
import { TodoAppStoreContext } from "../../store/todo-app-store";

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
      done: true,
    },
  ],
};

const MockProvider = ({ children, state }) => {
  return (
    <TodoAppStoreContext.Provider
      value={{
        state,
        dispatchers: {
          toggleTaskStatus: () => {},
          toggleTaskPin: () => {},
          removeTodo: () => {},
        },
      }}
    >
      {children}
    </TodoAppStoreContext.Provider>
  );
};

describe("MainView - with todos", () => {
  describe("with todos filtered by all todos", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <MockProvider state={state}>
          <MainView />
        </MockProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("with todos filtered by open todos", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <MockProvider state={{ ...state, filter: "OPEN" }}>
          <MainView />
        </MockProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("with todos filtered by done todos", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <MockProvider state={{ ...state, filter: "DONE" }}>
          <MainView />
        </MockProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});

describe("MainView - with no todos", () => {
  describe("with todos filtered by all todos", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <MockProvider state={{ filter: "ALL", todos: [] }}>
          <MainView />
        </MockProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("with todos filtered by open todos", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <MockProvider state={{ filter: "OPEN", todos: [] }}>
          <MainView />
        </MockProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("with todos filtered by done todos", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <MockProvider state={{ filter: "DONE", todos: [] }}>
          <MainView />
        </MockProvider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
