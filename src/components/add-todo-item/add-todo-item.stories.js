import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppDispatchContext } from "../../store/todo-app-context";
import { AddTodoItem } from "./add-todo-item";
import "../../styles/index.scss";

const config = {
  title: "Components/Add Todo Item",
  component: AddTodoItem,
  decorators: [
    FullWidthDecorator,
    (story) => (
      <TodoAppDispatchContext.Provider
        value={{
          addTodo: action("Dispatch: AddTodo"),
        }}
      >
        {story()}
      </TodoAppDispatchContext.Provider>
    ),
  ],
};

const Template = (args) => <AddTodoItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
export default config;
