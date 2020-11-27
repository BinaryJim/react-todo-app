import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStore } from "../../store/todo-app-store";
import { AddTodoItem } from "./add-todo-item";
import "../../styles/index.scss";

const config = {
  title: "Components/Add Todo Item",
  component: AddTodoItem,
  decorators: [
    FullWidthDecorator,
    (Story) => (
      <TodoAppStore.Provider
        value={{
          actions: {
            addTodo: action("Dispatch: AddTodo"),
          },
        }}
      >
        <Story />
      </TodoAppStore.Provider>
    ),
  ],
};

const Template = (args) => <AddTodoItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
export default config;
