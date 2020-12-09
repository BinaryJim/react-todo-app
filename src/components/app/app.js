import React from "react";
import { TodoAppContext, useTodoAppStore } from "../../store/todo-app-store";
import { MainView } from "../main-view";
import "../../styles/index.scss";

const App = () => {
  const { state, actions } = useTodoAppStore();

  return (
    <TodoAppContext.Provider
      value={{
        state,
        actions,
      }}
    >
      <MainView />
    </TodoAppContext.Provider>
  );
};

export { App };
