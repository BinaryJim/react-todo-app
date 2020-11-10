import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTodoAppStateContext } from "../../store/todo-app-context";
import "./app-header-bar.scss";

const AppHeaderBar = ({ classes, testId }) => {
  const { todos = [] } = useTodoAppStateContext();
  const todoCount = todos.length <= 100 ? todos.length : "100+";

  return (
    <header
      className={cn("app-header-bar grid-container", classes)}
      data-testid={testId}
    >
      <div className="app-header-bar__content">
        <h1 className="app-header-bar__content__title">Todos</h1>
        <span
          aria-label="Active todo count"
          className="app-header-bar__content__todo-count"
        >
          {todoCount}
        </span>
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
