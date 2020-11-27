import React from "react";
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

const WithZeroTodos = Template.bind({});
WithZeroTodos.args = {};
WithZeroTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          todos: [],
        },
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
        },
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
        },
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
        },
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
};
export default config;
