import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./add-todo-item.scss";

const AddTodoItem = () => {
  return (
    <div className="add-todo-item">
      <input
        className="add-todo-item__input"
        type="text"
        placeholder="Type a todo..."
      />
      <button className="add-todo-item__submit">
        <FontAwesomeIcon
          icon={faPlus}
          className="add-todo-item__submit__icon"
        />
      </button>
    </div>
  );
};

export { AddTodoItem };
