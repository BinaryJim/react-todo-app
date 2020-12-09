import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTodoAppStoreContext } from "../../store/todo-app-store";
import { TodoItem } from "../todo-item";
import "./todo-items.scss";

const TodoItems = ({ classes, testId }) => {
  const {
    state,
    dispatchers: { toggleTaskStatus, toggleTaskPin, removeTodo },
  } = useTodoAppStoreContext();

  const processedTodos = useMemo(() => {
    if (!state.todos.length) {
      return state.todos;
    }

    if (state.filter === "DONE") {
      return [...state.todos.filter((todo) => todo.done)];
    }

    const orderedTodos = [
      ...state.todos.filter((todo) => todo.pinned),
      ...state.todos.filter((todo) => !todo.pinned),
    ];

    if (state.filter === "ALL") {
      return orderedTodos;
    }

    if (state.filter === "OPEN") {
      return orderedTodos.filter((todo) => !todo.done);
    }
  }, [state.filter, state.todos]);

  const outputTodos = () => {
    return processedTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        onDoneChange={() => toggleTaskStatus(todo.id)}
        onPinnedChange={() => toggleTaskPin(todo.id)}
        onRemoveTodoClick={() => removeTodo(todo.id)}
        description={todo.description}
        pinned={todo.pinned}
        done={todo.done}
      />
    ));
  };

  const outputNoTodosMessage = () => {
    return (
      <span className="todo-items__no-todos-msg" aria-label="No todos message">
        You have no todos
      </span>
    );
  };

  return (
    <div className={cn("todo-items", classes)} data-testid={testId}>
      {processedTodos.length ? outputTodos() : outputNoTodosMessage()}
    </div>
  );
};

TodoItems.propTypes = {
  /**
   Allows the passing of additional CSS class names to the component root node 
  */
  classes: PropTypes.string,
  /**
   Allows the passing of a unique data-testid to the component root node. Used for testing purposes
  */
  testId: PropTypes.string,
};

export { TodoItems };
