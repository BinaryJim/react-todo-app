import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTodoAppContext } from "../../store/todo-app-store";
import "./app-header-bar.scss";

const AppHeaderBar = ({ classes, testId }) => {
  const {
    state: { todos, filter },
    actions: { setTasksFilter },
  } = useTodoAppContext();

  const openTodos = todos.filter((todo) => !todo.done);
  const todoCount = openTodos.length <= 100 ? openTodos.length : "100+";

  return (
    <header
      className={cn("app-header-bar grid-container", classes)}
      data-testid={testId}
    >
      <div className="app-header-bar__content">
        <span
          aria-label="Active todo count"
          className="app-header-bar__content__todo-count"
        >
          {todoCount}
        </span>
        <div className="app-header-bar__content__todo-filters">
          <button
            className={cn("app-header-bar__content__todo-filters__action ", {
              "app-header-bar__content__todo-filters__action--is-active":
                filter === "ALL",
            })}
            aria-label="All todos"
            disabled={filter === "ALL" ? true : false}
            onClick={() => setTasksFilter("ALL")}
          >
            All
          </button>
          <button
            className={cn("app-header-bar__content__todo-filters__action ", {
              "app-header-bar__content__todo-filters__action--is-active":
                filter === "OPEN",
            })}
            aria-label="Open todos"
            disabled={filter === "OPEN" ? true : false}
            onClick={() => setTasksFilter("OPEN")}
          >
            Open
          </button>
          <button
            className={cn("app-header-bar__content__todo-filters__action ", {
              "app-header-bar__content__todo-filters__action--is-active":
                filter === "DONE",
            })}
            aria-label="Done todos"
            disabled={filter === "DONE" ? true : false}
            onClick={() => setTasksFilter("DONE")}
          >
            Done
          </button>
        </div>
      </div>
    </header>
  );
};

AppHeaderBar.propTypes = {
  /**
   Allows the passing of additional CSS class names to the component root node 
  */
  classes: PropTypes.string,
  /**
   Allows the passing of a unique data-testid to the component root node. Used for testing purposes
  */
  testId: PropTypes.string,
};

export { AppHeaderBar };
