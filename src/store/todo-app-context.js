import React, { useContext } from "react";

const TodoAppStateContext = React.createContext();
const TodoAppPreferencesContext = React.createContext();
const TodoAppDispatchContext = React.createContext();

const useTodoAppStateContext = () => useContext(TodoAppStateContext);
const useTodoAppPreferencesContext = () =>
  useContext(TodoAppPreferencesContext);
const useTodoAppDispatchContext = () => useContext(TodoAppDispatchContext);

export {
  TodoAppStateContext,
  TodoAppPreferencesContext,
  TodoAppDispatchContext,
  useTodoAppStateContext,
  useTodoAppPreferencesContext,
  useTodoAppDispatchContext,
};
