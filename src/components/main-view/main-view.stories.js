import React from "react";
import { action } from "@storybook/addon-actions";
import { TodoAppStore } from "../../store/todo-app-store";
import { MainView } from "./main-view";

const config = {
  title: "Views/Main View",
  component: MainView,
  parameters: {
    layout: "fullscreen",
  },
};

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
  removeTodo: action("Todo item removed"),
  setTasksFilter: action("Task filter action clicked"),
  addTodo: action("Todo item added"),
};

const Template = (args) => <MainView {...args} />;

const WithTodosFilterAll = Template.bind({});
WithTodosFilterAll.decorators = [
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

const WithTodosFilterOpen = Template.bind({});
WithTodosFilterOpen.decorators = [
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

const WithTodosFilterDone = Template.bind({});
WithTodosFilterDone.decorators = [
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
WithNoTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: { filter: "ALL", todos: [] },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

export {
  WithTodosFilterAll,
  WithTodosFilterOpen,
  WithTodosFilterDone,
  WithNoTodos,
};

export default config;
