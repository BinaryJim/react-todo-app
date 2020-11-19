import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStore } from "../../store/todo-app-store";
import { TodoItems } from "./todo-items";

const config = {
  title: "Components/Todo Items",
  component: TodoItems,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <TodoItems {...args} />;

const state = {
  filter: "ALL",
  todos: [
    {
      id: 1,
      description: "Test todo item 1",
      pinned: false,
      done: false,
    },
    {
      id: 2,
      description: "Test todo item 2",
      pinned: true,
      done: false,
    },
    {
      id: 3,
      description: "Test todo item 3",
      pinned: false,
      done: false,
    },
    {
      id: 4,
      description: "Test todo item 4",
      pinned: false,
      done: true,
    },
    {
      id: 5,
      description: "Test todo item 5",
      pinned: false,
      done: true,
    },
  ],
};

const actions = {
  toggleTaskStatus: action("Task status toggled"),
  toggleTaskPin: action("Task pinned toggled"),
};

const WithAllTodosFilter = Template.bind({});
WithAllTodosFilter.args = {};
WithAllTodosFilter.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state,
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

const WithOpenTodosFilter = Template.bind({});
WithOpenTodosFilter.args = {};
WithOpenTodosFilter.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: { ...state, filter: "OPEN" },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

const WithDoneTodosFilter = Template.bind({});
WithDoneTodosFilter.args = {};
WithDoneTodosFilter.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: { ...state, filter: "DONE" },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

const WithNoTodos = Template.bind({});
WithNoTodos.args = {};
WithNoTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: { filter: "DONE", todos: [] },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

export {
  WithAllTodosFilter,
  WithOpenTodosFilter,
  WithDoneTodosFilter,
  WithNoTodos,
};
export default config;
