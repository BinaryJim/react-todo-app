import React, { useContext } from "react";

const TodoAppStore = React.createContext();
const useTodoAppStore = () => useContext(TodoAppStore);

export { TodoAppStore, useTodoAppStore };
