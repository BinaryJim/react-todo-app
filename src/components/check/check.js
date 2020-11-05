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
  /**
   Adds an accessible aria-label to the check
  */
  label: PropTypes.string.isRequired,
  /**
   Sets the checked attribute of the check
  */
  checked: PropTypes.bool,
  /**
   Sets the disabled attribute of the check 
  */
  disabled: PropTypes.bool,
  /**
   Allows passing of a callback handler to be fired on the check onchange event
  */
  onChange: PropTypes.func.isRequired,
  /**
   Allows the passing of additional CSS class names to the component root node 
  */
  classes: PropTypes.string,
  /**
   Allows the passing of a unique data-testid to the component root node. Used for testing purposes
  */
  testId: PropTypes.string,
};

export { Check };
