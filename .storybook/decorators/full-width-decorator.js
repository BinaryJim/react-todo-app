import React from "react";
import "./full-width-decorator.css";

export const FullWidthDecorator = (Story) => {
  return (
    <div className="full-width-decorator">
      <Story />
    </div>
  );
};
