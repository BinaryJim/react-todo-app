import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoAppStore = React.createContext();
const useTodoAppStore = () => useContext(TodoAppStore);

const actionTypes = {
  ADD_TODO: "ADD_TODO",
  SET_TASKS_FILTER: "SET_TASKS_FILTER",
  TOGGLE_TASK_STATUS: "TOGGLE_TASK_STATUS",
  TOGGLE_TASK_PIN: "TOGGLE_TASK_PIN",
  REMOVE_TODO: "REMOVE_TODO",
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            description: action.description,
            pinned: false,
            done: false,
          },
        ],
      };
    case actionTypes.SET_TASKS_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case actionTypes.TOGGLE_TASK_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          }
          return todo;
        }),
      };
    case actionTypes.TOGGLE_TASK_PIN:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, pinned: !todo.pinned };
          }
          return todo;
        }),
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { TodoAppStore, useTodoAppStore, tasksReducer };
