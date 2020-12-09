import React from "react";
import {
  TodoAppStoreContext,
  useTodoAppStore,
} from "../../store/todo-app-store";
import { MainView } from "../main-view";
import "../../styles/index.scss";

const App = () => {
  const { state, dispatchers } = useTodoAppStore();

  return (
    <TodoAppStoreContext.Provider
      value={{
        state,
        dispatchers,
      }}
    >
      <MainView />
    </TodoAppStoreContext.Provider>
  );
};

export { App };
