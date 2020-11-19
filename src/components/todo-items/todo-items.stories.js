import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoItems } from "./todo-items";

const config = {
  title: "Components/Todo Items",
  component: TodoItems,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <TodoItems {...args} />;

const WithAllTodosFilter = Template.bind({});
WithAllTodosFilter.args = {
  filter: "ALL",
  todos: [
    {
      id: "1",
      description: "Test todo item 1",
      pinned: false,
      done: false,
    },
    {
      id: "2",
      description: "Test todo item 2",
      pinned: true,
      done: false,
    },
    {
      id: "3",
      description: "Test todo item 3",
      pinned: false,
      done: false,
    },
    {
      id: "4",
      description: "Test todo item 4",
      pinned: false,
      done: true,
    },
    {
      id: "5",
      description: "Test todo item 5",
      pinned: false,
      done: true,
    },
  ],
};

const WithOpenTodosFilter = Template.bind({});
WithOpenTodosFilter.args = {
  filter: "OPEN",
  todos: [...WithAllTodosFilter.args.todos],
};

const WithDoneTodosFilter = Template.bind({});
WithDoneTodosFilter.args = {
  filter: "DONE",
  todos: [...WithAllTodosFilter.args.todos],
};

const WithNoTodos = Template.bind({});
WithNoTodos.args = {
  filter: "ALL",
  todos: [],
};

export {
  WithAllTodosFilter,
  WithOpenTodosFilter,
  WithDoneTodosFilter,
  WithNoTodos,
};
export default config;
