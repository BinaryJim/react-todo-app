import React from "react";
import { TodoAppStore } from "../../store/todo-app-store";
import { MainView } from "../main-view";
import "../../styles/index.scss";

const state = {
  filter: "ALL",
  todos: [],
};

const actions = {
  addTodo: () => {},
  setTasksFilter: () => {},
  toggleTaskStatus: () => {},
  toggleTaskPin: () => {},
  removeTodo: () => {},
};

const App = () => {
  return (
    <TodoAppStore.Provider
      value={{
        state,
        actions,
      }}
    >
      <MainView />
    </TodoAppStore.Provider>
  );
};

export { App };
