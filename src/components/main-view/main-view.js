import React from "react";
import PropTypes from "prop-types";
import { AppHeaderBar } from "../app-header-bar";
import { AddTodoItem } from "../add-todo-item";
import { TodoItems } from "../todo-items";
import "./main-view.scss";

const MainView = () => {
  return (
    <section className="main-view">
      <AppHeaderBar classes="main-view__app-header-bar" />
      <div className="main-view__container grid-container">
        <AddTodoItem classes="main-view__container__add-todo-item" />
        <TodoItems classes="main-view__container__todo-items" />
      </div>
    </section>
  );
};

export { MainView };
