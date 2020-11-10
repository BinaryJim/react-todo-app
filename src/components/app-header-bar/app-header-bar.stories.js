import React from "react";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStateContext } from "../../store/todo-app-context";
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
    <TodoAppStateContext.Provider
      value={{
        todos: [],
      }}
    >
      <Story />
    </TodoAppStateContext.Provider>
  ),
];

const WithLessThanMaxThresholdTodos = Template.bind({});
WithLessThanMaxThresholdTodos.args = {};
WithLessThanMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStateContext.Provider
      value={{
        todos: [...Array(99).keys()],
      }}
    >
      {story()}
    </TodoAppStateContext.Provider>
  ),
];

const WithGreaterThanMaxThresholdTodos = Template.bind({});
WithGreaterThanMaxThresholdTodos.args = {};
WithGreaterThanMaxThresholdTodos.decorators = [
  (story) => (
    <TodoAppStateContext.Provider
      value={{
        todos: [...Array(101).keys()],
      }}
    >
      {story()}
    </TodoAppStateContext.Provider>
  ),
];

export {
  WithZeroTodos,
  WithLessThanMaxThresholdTodos,
  WithGreaterThanMaxThresholdTodos,
};
export default config;
