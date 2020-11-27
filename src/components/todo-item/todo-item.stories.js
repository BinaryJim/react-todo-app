import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoItem } from "./todo-item";

const config = {
  title: "Components/Todo Item",
  component: TodoItem,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <TodoItem {...args} />;

const WithTodoOutstanding = Template.bind({});
WithTodoOutstanding.args = {
  id: 0,
  onDoneChange: action("Todo done status changed"),
  onPinnedChange: action("Todo pinned status changed"),
  onRemoveTodoClick: action("Todo item delete button clicked"),
  description: "Test todo item description",
  pinned: false,
  done: false,
};

const WithTodoPinned = Template.bind({});
WithTodoPinned.args = {
  ...WithTodoOutstanding.args,
  pinned: true,
};

const WithTodoDone = Template.bind({});
WithTodoDone.args = {
  ...WithTodoOutstanding.args,
  done: true,
  pinned: false,
};

const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  ...WithTodoOutstanding.args,
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam asperiores aliquid saepe deleniti architecto voluptates aspernatur quisquam reiciendis, eligendi harum pariatur optio quasi eveniet aliquam, minima sunt quos ut explicabo necessitatibus sit.",
};

export {
  WithTodoOutstanding,
  WithTodoPinned,
  WithTodoDone,
  WithLongDescription,
};
export default config;
