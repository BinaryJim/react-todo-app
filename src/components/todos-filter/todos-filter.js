import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTodoAppStore } from "../../store/todo-app-store";
import "./todos-filter.scss";

const TodosFilter = ({ classes, testId }) => {
  const {
    state: { filter },
    actions: { setTasksFilter },
  } = useTodoAppStore();
  return (
    <div className={cn("todos-filter", classes)} data-testid={testId}>
      <button
        className={cn("todos-filter__action", {
          "todos-filter__action--is-active": filter === "ALL",
        })}
        aria-label="All todos"
        disabled={filter === "ALL" ? true : false}
        onClick={() => setTasksFilter("ALL")}
      >
        All
      </button>
      <button
        className={cn("todos-filter__action", {
          "todos-filter__action--is-active": filter === "OPEN",
        })}
        aria-label="Open todos"
        disabled={filter === "OPEN" ? true : false}
        onClick={() => setTasksFilter("OPEN")}
      >
        Open
      </button>
      <button
        className={cn("todos-filter__action", {
          "todos-filter__action--is-active": filter === "DONE",
        })}
        aria-label="Done todos"
        disabled={filter === "DONE" ? true : false}
        onClick={() => setTasksFilter("DONE")}
      >
        Done
      </button>
    </div>
  );
};

TodosFilter.propTypes = {
  /**
   Allows the passing of additional CSS class names to the component root node 
  */
  classes: PropTypes.string,
  /**
   Allows the passing of a unique data-testid to the component root node. Used for testing purposes
  */
  testId: PropTypes.string,
};

export { TodosFilter };
