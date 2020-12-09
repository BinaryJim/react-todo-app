import React, { useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const useTodoAppStore = () => {
  // Set action types for reducer
  const actionTypes = {
    ADD_TODO: "ADD_TODO",
    SET_TASKS_FILTER: "SET_TASKS_FILTER",
    TOGGLE_TASK_STATUS: "TOGGLE_TASK_STATUS",
    TOGGLE_TASK_PIN: "TOGGLE_TASK_PIN",
    REMOVE_TODO: "REMOVE_TODO",
  };

  // Create pure reducer for todo app business logic
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

  // Set local storage key
  const localStorageKey = "bjTodoAppStorage";

  // Create React reducer, fetching initial state via localStorage if set, else defaulting to an initial state
  const [state, dispatch] = useReducer(
    tasksReducer,
    {
      filter: "ALL",
      todos: [],
    },
    (initialState) => {
      const persistedState = localStorage.getItem(localStorageKey);

      if (persistedState) {
        return JSON.parse(persistedState);
      } else {
        return initialState;
      }
    }
  );

  // Set dispatcher functions
  const dispatchers = {
    addTodo: (description) => {
      dispatch({ type: actionTypes.ADD_TODO, description });
    },
    setTasksFilter: (filter) => {
      dispatch({ type: actionTypes.SET_TASKS_FILTER, filter });
    },
    toggleTaskStatus: (id) => {
      dispatch({ type: actionTypes.TOGGLE_TASK_STATUS, id });
    },
    toggleTaskPin: (id) => {
      dispatch({ type: actionTypes.TOGGLE_TASK_PIN, id });
    },
    removeTodo: (id) => {
      dispatch({ type: actionTypes.REMOVE_TODO, id });
    },
  };

  // Listen for changes to state and update local storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return { state, dispatchers };
};

const TodoAppStoreContext = React.createContext();
const useTodoAppStoreContext = () => useContext(TodoAppStoreContext);

export { TodoAppStoreContext, useTodoAppStoreContext, useTodoAppStore };
