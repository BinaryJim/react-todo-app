import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTodoAppContext } from "../../store/todo-app-store";
import "./add-todo-item.scss";

const AddTodoItem = ({ classes, testId }) => {
  const {
    actions: { addTodo },
  } = useTodoAppContext();

  const [inputValue, setInputValue] = useState("");

  const handleOnInputValueChange = (e) => {
    setInputValue(e.target.value.trimStart());
  };

  const isValidInputValue = () => {
    return inputValue?.length > 0 ? true : false;
  };

  const handleOnInputKeyUp = (e) => {
    if (e.key === "Enter") {
      handleOnSubmitTodoItem();
    } else return;
  };

  const handleOnSubmitTodoItem = () => {
    if (isValidInputValue()) {
      addTodo(inputValue);
      setInputValue("");
    } else {
      return;
    }
  };

  return (
    <div className={cn("add-todo-item", classes)} data-testid={testId}>
      <input
        className="add-todo-item__input"
        type="text"
        aria-label="Todo Item Input"
        placeholder="Type a todo..."
        value={inputValue}
        onChange={handleOnInputValueChange}
        onKeyUp={handleOnInputKeyUp}
      />
      <button
        className="add-todo-item__submit"
        aria-label="Submit Todo Item"
        disabled={!isValidInputValue()}
        onClick={handleOnSubmitTodoItem}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="add-todo-item__submit__icon"
        />
      </button>
    </div>
  );
};

AddTodoItem.propTypes = {
  /**
   Allows the passing of additional CSS class names to the component root node 
  */
  classes: PropTypes.string,
  /**
   Allows the passing of a unique data-testid to the component root node. Used for testing purposes
  */
  testId: PropTypes.string,
};

export { AddTodoItem };
