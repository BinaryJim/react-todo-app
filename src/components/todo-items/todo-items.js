import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTodoAppStore } from "../../store/todo-app-store";
import { TodoItem } from "../todo-item";

const useProcessedTodos = (filter, todos) => {
  if (!todos.length) {
    return todos;
  }

  if (filter === "DONE") return [...todos.filter((todo) => todo.done)];

  const orderedTodos = [
    ...todos.filter((todo) => todo.pinned),
    ...todos.filter((todo) => !todo.pinned),
  ];

  if (filter === "ALL") return orderedTodos;
  if (filter === "OPEN") return orderedTodos.filter((todo) => !todo.done);
};

const TodoItems = ({ classes, testId }) => {
  const {
    state,
    actions: { toggleTaskStatus, toggleTaskPin },
  } = useTodoAppStore();

  const todoItems = useProcessedTodos(state.filter, state.todos);

  return (
    <div className={cn("todo-items", classes)} data-testid={testId}>
      {todoItems.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          onDoneChange={() => toggleTaskStatus(todo.id)}
          onPinnedChange={() => toggleTaskPin(todo.id)}
          description={todo.description}
          pinned={todo.pinned}
          done={todo.done}
        />
      ))}
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
