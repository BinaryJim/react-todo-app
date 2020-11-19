import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./todo-item.scss";

const TodoItem = ({
  done,
  pinned,
  description,
  onDoneChange,
  onPinnedChange,
  classes,
  testId,
}) => {
  const rootClassNames = cn("todo-item", classes, {
    "todo-item--is-done": done,
  });

  return (
    <div className={rootClassNames} data-testid={testId}>
      <label className="todo-item__status">
        <input
          className="todo-item__status__input"
          type="checkbox"
          checked={done}
          onChange={onDoneChange}
          aria-label="Todo status"
        />
        <span className="todo-item__status__indicator"></span>
      </label>
      <p className="todo-item__description" aria-label="Todo description">
        {description}
      </p>
      {!done && (
        <label className="todo-item__pin">
          <input
            className="todo-item__pin__input"
            type="checkbox"
            checked={pinned}
            onChange={onPinnedChange}
            aria-label="Pinned status"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="todo-item__pin__indicator"
          />
        </label>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  /**
   The status of the todo (i.e done or todo) 
  */
  done: PropTypes.bool.isRequired,
  /**
   If the specific todo item is pinned
  */
  pinned: PropTypes.bool.isRequired,
  /**
   The description of the specific todo item 
  */
  description: PropTypes.string.isRequired,
  /**
   Callback function for when a user changes the status of the todo item 
  */
  onDoneChange: PropTypes.func.isRequired,
  /**
   Callback function for when a user changes the pinned status of the todo item 
  */
  onPinnedChange: PropTypes.func.isRequired,
  /**
   Allows the passing of additional CSS class names to the component root node 
  */
  classes: PropTypes.string,
  /**
   Allows the passing of a unique data-testid to the component root node. Used for testing purposes
  */
  testId: PropTypes.string,
};

export { TodoItem };
