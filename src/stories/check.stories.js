import React from "react";
import { Check } from "../components";
import "../styles/index.scss";

const config = {
  title: "Components/Check",
  component: Check,
  argTypes: { onChange: { action: "clicked" } },
};

const Template = (args) => <Check {...args} />;

const Default = Template.bind({});
Default.args = {
  label: "checkbox",
};

const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

const Unchecked = Template.bind({});
Unchecked.args = {
  ...Default.args,
  checked: false,
};

const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  ...Checked.args,
  disabled: true,
};

const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  ...Unchecked.args,
  disabled: true,
};

export default config;
export { Default, Checked, Unchecked, CheckedDisabled, UncheckedDisabled };
