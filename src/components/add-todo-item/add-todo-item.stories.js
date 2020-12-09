import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppContext } from "../../store/todo-app-store";
import { AddTodoItem } from "./add-todo-item";
import "../../styles/index.scss";

const config = {
  title: "Components/Add Todo Item",
  component: AddTodoItem,
  decorators: [
    FullWidthDecorator,
    (Story) => (
      <TodoAppContext.Provider
        value={{
          actions: {
            addTodo: action("Dispatch: AddTodo"),
          },
        }}
      >
        <Story />
      </TodoAppContext.Provider>
    ),
  ],
};

const Template = (args) => <AddTodoItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
export default config;
