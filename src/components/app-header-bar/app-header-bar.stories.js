import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStoreContext } from "../../store/todo-app-store";
import { AppHeaderBar } from "./app-header-bar";
import "../../styles/index.scss";

const config = {
  title: "Components/App Header Bar",
  component: AppHeaderBar,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <AppHeaderBar />;

const dispatchers = {
  setTasksFilter: action("Task filter action clicked"),
};

const WithZeroTodos = Template.bind({});
WithZeroTodos.args = {};
WithZeroTodos.decorators = [
  (Story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [],
          filter: "ALL",
        },
        dispatchers,
      }}
    >
      <Story />
    </TodoAppStoreContext.Provider>
  ),
];

const WithLessThanMaxThresholdTodos = Template.bind({});
WithLessThanMaxThresholdTodos.args = {};
WithLessThanMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [...Array(99).keys()],
          filter: "ALL",
        },
        dispatchers,
      }}
    >
      {story()}
    </TodoAppStoreContext.Provider>
  ),
];

const WithEqualToMaxThresholdTodos = Template.bind({});
WithEqualToMaxThresholdTodos.args = {};
WithEqualToMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [...Array(100).keys()],
          filter: "ALL",
        },
        dispatchers,
      }}
    >
      {story()}
    </TodoAppStoreContext.Provider>
  ),
];

const WithGreaterThanMaxThresholdTodos = Template.bind({});
WithGreaterThanMaxThresholdTodos.args = {};
WithGreaterThanMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [...Array(101).keys()],
          filter: "ALL",
        },
        dispatchers,
      }}
    >
      {story()}
    </TodoAppStoreContext.Provider>
  ),
];

const WithAllTodosFilter = Template.bind({});
WithAllTodosFilter.decorators = [
  (story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [],
          filter: "ALL",
        },
        dispatchers,
      }}
    >
      {story()}
    </TodoAppStoreContext.Provider>
  ),
];

const WithOpenTodosFilter = Template.bind({});
WithOpenTodosFilter.decorators = [
  (story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [],
          filter: "OPEN",
        },
        dispatchers,
      }}
    >
      {story()}
    </TodoAppStoreContext.Provider>
  ),
];

const WithDoneTodosFilter = Template.bind({});
WithDoneTodosFilter.decorators = [
  (story) => (
    <TodoAppStoreContext.Provider
      value={{
        state: {
          todos: [],
          filter: "DONE",
        },
        dispatchers,
      }}
    >
      {story()}
    </TodoAppStoreContext.Provider>
  ),
];

export {
  WithZeroTodos,
  WithLessThanMaxThresholdTodos,
  WithEqualToMaxThresholdTodos,
  WithGreaterThanMaxThresholdTodos,
  WithAllTodosFilter,
  WithOpenTodosFilter,
  WithDoneTodosFilter,
};
export default config;
