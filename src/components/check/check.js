import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./check.scss";

const Check = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  classes,
  testId,
}) => {
  return (
    <label className={cn("check", classes)} data-testid={testId}>
      <input
        className="check__input"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        aria-label="checkbox"
      />
      <span className="check__indicator"></span>
    </label>
  );
};

Check.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  testId: PropTypes.string,
};

export { Check };
