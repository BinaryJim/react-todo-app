import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { TodoItem } from "../todo-item";

const useProcessedTodos = (filter, todos) => {
  if (!todos.length) {
    return todos;
  }

  const orderedTodos = [
    ...todos.filter((todo) => todo.pinned),
    ...todos.filter((todo) => !todo.pinned),
  ];

  if (filter === "ALL") return orderedTodos;

  if (filter === "OPEN") return orderedTodos.filter((todo) => !todo.done);

  if (filter === "DONE") return orderedTodos.filter((todo) => todo.done);
};

const TodoItems = ({ filter = "ALL", todos, classes, testId }) => {
  const todoItems = useProcessedTodos(filter, todos);

  return (
    <div className={cn("todo-items", classes)} data-testid={testId}>
      {todoItems.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          onDoneChange={() => {}}
          onPinnedChange={() => {}}
          description={todo.description}
          pinned={todo.pinned}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export { TodoItems };
