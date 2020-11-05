import React from "react";

export const FullWidthDecorator = (Story) => {
  return (
    <div
      style={{
        width: "calc(100vw - 32px)",
        maxWidth: "1200px",
        minHeight: "1px",
      }}
    >
      <Story />
    </div>
  );
};
