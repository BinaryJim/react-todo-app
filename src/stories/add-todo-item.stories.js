import React from "react";
import { FullWidthDecorator } from "../../.storybook/decorators/full-width-decorator";
import { AddTodoItem } from "../components";
import "../styles/index.scss";

const config = {
  title: "Components/Add Todo Item",
  component: AddTodoItem,
  decorators: [FullWidthDecorator],
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <AddTodoItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
export default config;
