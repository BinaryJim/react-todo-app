import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStoreContext } from "../../store/todo-app-store";
import { AddTodoItem } from "./add-todo-item";
import "../../styles/index.scss";

const config = {
  title: "Components/Add Todo Item",
  component: AddTodoItem,
  decorators: [
    FullWidthDecorator,
    (Story) => (
      <TodoAppStoreContext.Provider
        value={{
          dispatchers: {
            addTodo: action("Dispatch: AddTodo"),
          },
        }}
      >
        <Story />
      </TodoAppStoreContext.Provider>
    ),
  ],
};

const Template = (args) => <AddTodoItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
export default config;
