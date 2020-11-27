import React from "react";
import { action } from "@storybook/addon-actions";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { TodoAppStore } from "../../store/todo-app-store";
import { TodosFilter } from "./todos-filter";

const config = {
  title: "Components/Todos Filter",
  component: TodosFilter,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <TodosFilter />;

const actions = {
  setTasksFilter: action("Task filter action clicked"),
};

const AllTodos = Template.bind({});
AllTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          filter: "ALL",
        },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

const OpenTodos = Template.bind({});
OpenTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          filter: "OPEN",
        },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

const DoneTodos = Template.bind({});
DoneTodos.decorators = [
  (Story) => (
    <TodoAppStore.Provider
      value={{
        state: {
          filter: "DONE",
        },
        actions,
      }}
    >
      <Story />
    </TodoAppStore.Provider>
  ),
];

export { AllTodos, OpenTodos, DoneTodos };
export default config;
