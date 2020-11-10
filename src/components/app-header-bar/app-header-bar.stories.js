import React from "react";
import { FullWidthDecorator } from "../../../.storybook/decorators/full-width-decorator";
import { AppHeaderBar } from "./app-header-bar";
import "../../styles/index.scss";

const config = {
  title: "Components/App Header Bar",
  component: AppHeaderBar,
  decorators: [FullWidthDecorator],
};

const Template = (args) => <AppHeaderBar />;

const Default = Template.bind({});
Default.args = {};

export { Default };
export default config;
