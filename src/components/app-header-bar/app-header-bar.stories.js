import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStore } from "../../store/todo-app-store";
import { AppHeaderBar } from "./app-header-bar";
import "../../styles/index.scss";

const config = {
  title: "Components/App Header Bar",
  component: AppHeaderBar,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <AppHeaderBar />;

const actions = {
  setTasksFilter: action("Task filter action clicked"),
};

const WithZeroTodos = Template.bind({});
WithZeroTodos.args = {};
WithZeroTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [],
          filter: "ALL",
        },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

const WithLessThanMaxThresholdTodos = Template.bind({});
WithLessThanMaxThresholdTodos.args = {};
WithLessThanMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [...Array(99).keys()],
          filter: "ALL",
        },
        actions,
      }}
    >
      {story()}
    </TodoAppStore.Provider>
  ),
];

const WithEqualToMaxThresholdTodos = Template.bind({});
WithEqualToMaxThresholdTodos.args = {};
WithEqualToMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [...Array(100).keys()],
          filter: "ALL",
        },
        actions,
      }}
    >
      {story()}
    </TodoAppStore.Provider>
  ),
];

const WithGreaterThanMaxThresholdTodos = Template.bind({});
WithGreaterThanMaxThresholdTodos.args = {};
WithGreaterThanMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [...Array(101).keys()],
          filter: "ALL",
        },
        actions,
      }}
    >
      {story()}
    </TodoAppStore.Provider>
  ),
];

const WithAllTodosFilter = Template.bind({});
WithAllTodosFilter.decorators = [
  (story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [],
          filter: "ALL",
        },
        actions,
      }}
    >
      {story()}
    </TodoAppStore.Provider>
  ),
];

const WithOpenTodosFilter = Template.bind({});
WithOpenTodosFilter.decorators = [
  (story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [],
          filter: "OPEN",
        },
        actions,
      }}
    >
      {story()}
    </TodoAppStore.Provider>
  ),
];

const WithDoneTodosFilter = Template.bind({});
WithDoneTodosFilter.decorators = [
  (story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [],
          filter: "DONE",
        },
        actions,
      }}
    >
      {story()}
    </TodoAppStore.Provider>
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
